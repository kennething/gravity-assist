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
    format();
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
  quill.format("color", "#ffffff");
  document.querySelector(".ql-editor")?.setAttribute("spellcheck", "false");

  const autosave = localStorage.getItem("autosave");
  if (autosave) {
    const delta = JSON.parse(autosave) as Delta;
    quill.setContents(delta);
    quill.setSelection(quill.getLength());
    const selectionFormat = quill.getFormat();
    emit("event", Boolean(selectionFormat.underline), (selectionFormat.color as string) ?? "#ffffff");
    emit("output", delta);
  }

  quill.on("selection-change", (range, oldRange, source) => {
    if (!quill || source !== "user") return;

    const selection = quill.getSelection();
    if (!selection) return;

    formatSelection(selection, quill.getFormat());
  });

  quill.on("text-change", (delta, oldDelta, source) => {
    if (!quill || source !== "user") return;

    const selection = quill.getSelection();
    if (!selection) return;

    const [content, selectionOffset] = defaultFormat(quill.getContents());
    quill.setContents(content);
    console.log(selectionOffset, selection.index);
    selection.index -= selectionOffset;
    console.log(selectionOffset, selection.index);

    const length = quill.getLength();
    const selectionIndex =
      delta.ops.find((op) => op.insert === "\n") || (oldDelta.ops[oldDelta.ops.length - 1].insert as string).includes("\n\n") || (oldDelta.ops.length === 1 && oldDelta.ops[0].insert === "\n")
        ? selection.index + 1
        : selection.index;
    console.log(selection.index, selectionIndex);
    quill.setSelection({ index: length === 1 ? 0 : selectionIndex, length: 0 });
    emit("output", content);

    formatSelection(selection, quill.getFormat());
  });
});

function formatSelection(selectionRange: Range, selection: Record<string, unknown>) {
  if (!quill) return;

  let selectionFormat = selection;
  let color = (selectionFormat.color as string) ?? (props.color !== "#278451" ? props.color : "#ffffff");

  if (!selectionFormat.color) format();
  if (selectionFormat.color === "#278451" && quill.getText(selectionRange.index - 1, 1) === ")") {
    selectionFormat = quill.getFormat(selectionRange.index + 1);
    color = (selectionFormat.color as string) ?? (props.color !== "#278451" ? props.color : "#ffffff");
  }
  quill.format("color", color);
  quill.format("underline", selectionFormat.underline);

  console.log(selectionFormat.underline, color);
  emit("event", Boolean(selectionFormat.underline), color);
}

async function init() {
  await delay(1);
  if (!editor.value) return init();
  return new Quill(editor.value, {
    placeholder: "Start composing your mail here...",
    formats: ["underline", "color"]
  });
}

function format() {
  if (!quill) return;

  const range = quill.getSelection();
  if (!range || range.length > 0) return;

  quill.focus();
  quill.format("underline", props.underline ? "underline" : "");
  quill.format("color", props.color);
}

function defaultFormat(text: Delta): [Delta, number] {
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
      selectionOffset += code.length;
      if (before) text.ops.splice(i, 0, { insert: before, attributes: { ...op.attributes } });
      if (after) text.ops.splice(i + 2, 0, { insert: after, attributes: { ...op.attributes } });

      if (code === "#r") op.insert = "\n";
      else {
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

  console.log(text);
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
