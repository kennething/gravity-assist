<template>
  <div ref="editor"></div>
</template>

<script setup lang="ts">
import Quill, { Delta, Op, Range } from "quill";
import { FormattingColors } from "~/utils/mailTemplates";

const props = defineProps<{
  underline: boolean;
  color: string;
  clearText: boolean;
  readonly?: boolean;
  startText?: Delta;
}>();
watch(
  () => props.underline,
  (val) => {
    if (!quill) return;
    quill.format("underline", val ? "underline" : "");
    emit("output", quill.getContents());
  }
);
watch(
  () => props.color,
  (val) => {
    if (!quill) return;
    quill.format("color", val);
    emit("output", quill.getContents());
  }
);
watch(
  () => props.clearText,
  (val) => {
    if (!val || !quill) return;
    quill.deleteText(0, quill.getLength());
    localStorage.removeItem("autosave");
    emit("output", quill.getContents());
  }
);

const emit = defineEmits<{
  event: [boolean, string | string[]];
  output: [Delta | Op[]];
}>();

const editor = ref<HTMLElement>();
let quill: Quill | null = null;

onMounted(async () => {
  quill = await init();
  document.querySelector(".ql-editor")?.setAttribute("spellcheck", "false");

  if (props.startText) quill.setContents(props.startText);
  else {
    const autosave = localStorage.getItem("autosave");
    if (autosave) {
      const delta = JSON.parse(autosave) as Delta;
      quill.setContents(delta);
      quill.setSelection(quill.getLength());
      const selectionFormat = quill.getFormat();
      emit("event", Boolean(selectionFormat.underline), (selectionFormat.color as string) ?? "#ffffff");
      emit("output", delta);
    }
  }

  quill.on("selection-change", (range, oldRange, source) => {
    if (!quill || source !== "user") return;

    const selection = quill.getSelection();
    if (!selection) return;

    const text = quill.getText(selection.index - 1, 1);
    const format = quill.getFormat();
    const underline = text === ")" ? false : Boolean(format.underline);
    const color = (format.color as string) === "#278451" ? "#ffffff" : (format.color as string);

    emit("event", underline, color);
  });

  quill.on("text-change", (delta, oldDelta, source) => {
    if (!quill || source !== "user") return;
    let selection = quill.getSelection();
    if (!selection) return;

    const [content, selectionOffset] = defaultFormat(delta, quill.getContents());
    quill.setContents(content);
    selection.index -= selectionOffset;

    const length = quill.getLength();
    const selectionIndex =
      delta.ops.find((op) => op.insert === "\n") || (oldDelta.ops[oldDelta.ops.length - 1].insert as string).includes("\n\n") || (oldDelta.ops.length === 1 && oldDelta.ops[0].insert === "\n")
        ? selection.index + 1
        : selection.index;
    quill.setSelection({ index: length === 1 ? 0 : selectionIndex, length: 0 });
    emit("output", content);

    selection = quill.getSelection();
    if (!selection) return;

    formatSelection(selection, quill.getFormat());
  });
});

async function formatSelection(selectionRange: Range, selection: Record<string, unknown>) {
  if (!quill) return;

  await nextTick();

  if (selection.color !== "#278451" || quill.getText(selectionRange.index - 1, 1) !== ")") return;

  selection = quill.getFormat(selectionRange.index + 1);
  const color = props.color !== "#278451" ? props.color : "#ffffff";
  quill.format("color", color);
  quill.format("underline", false);
  emit("event", false, color);
}

async function init() {
  await delay(1);
  if (!editor.value) return init();
  return new Quill(editor.value, {
    placeholder: "Start composing your mail here...",
    formats: ["underline", "color"],
    readOnly: props.readonly
  });
}

function defaultFormat(delta: Delta, text: Delta): [Delta, number] {
  let selectionOffset = 0;

  for (let i = 0; i < text.ops.length; i++) {
    const op = text.ops[i];
    const insert = op.insert as string | undefined;

    const coordinateRegex = /([^\(]*)(\(\d{1,4},\d{1,4}\))(.*)/; // Apply coordinate formatting to coordinates
    let coordinateMatch = insert?.match(coordinateRegex);
    if (coordinateMatch && !op.attributes?.underline && op.attributes?.color !== "#278451") {
      const [fullMatch, before, coordinates, after] = coordinateMatch;
      if (before) text.ops.splice(i, 0, { insert: before, attributes: { ...op.attributes } });
      if (after) text.ops.splice(i + 2, 0, { insert: after, attributes: { ...op.attributes, color: "#ffffff" } });
      op.insert = coordinates;

      op.attributes = { underline: true, color: "#278451" };
      coordinateMatch = insert?.match(coordinateRegex);
    }

    const formattingRegex = /(#[rEeRODYGBUPWK]|#c[0-9a-fA-F]{6})/; // Convert IL formatting markers to quill
    if (insert && formattingRegex.test(insert)) {
      const [before, code, after] = insert.split(formattingRegex);
      selectionOffset += delta.ops[delta.ops.length - 1].insert === "#" ? 1 : code.length;
      if (before) text.ops.splice(i, 0, { insert: before, attributes: { ...op.attributes } });
      if (after) text.ops.splice(i + 2, 0, { insert: after, attributes: { ...op.attributes } });

      if (code === "#r") {
        op.insert = "\n";
        selectionOffset = -1;
      } else {
        const colorToInsert = !["r", "e", "E"].includes(code[1])
          ? code.length === 2
            ? FormattingColors[code[1] as keyof typeof FormattingColors]
            : "#" + code.slice(2)
          : (op.attributes?.color ?? props.color);
        const underline = op.attributes?.underline ? code !== "#e" : code === "#E";
        emit("event", underline, colorToInsert as string);

        text.ops.splice(i + 1, 1);
      }
    }

    if (!op.attributes?.color && insert !== "\n") op.attributes = { ...op.attributes, color: "#ffffff" }; // Add fallback color
  }

  return [text, selectionOffset];
}
</script>

<style>
.ql-editor {
  @apply h-96 text-base;
}
.ql-blank::before {
  color: rgb(156 163 175) !important;
}
</style>
