<template>
  <div ref="editor"></div>
</template>

<script setup lang="ts">
import Quill, { Delta, Op, Range } from "quill";

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

    const content = defaultFormat(quill.getContents());
    quill.setContents(content);

    const length = quill.getLength();
    const selectionIndex =
      delta.ops.find((op) => op.insert === "\n") || (oldDelta.ops[oldDelta.ops.length - 1].insert as string).includes("\n\n") || (oldDelta.ops.length === 1 && oldDelta.ops[0].insert === "\n")
        ? selection.index + 1
        : selection.index;
    quill.setSelection({ index: length === 1 ? 0 : selectionIndex, length: 0 });
    emit("output", content);

    formatSelection(selection, quill.getFormat());
  });
});

function formatSelection(selectionRange: Range, selection: Record<string, unknown>) {
  if (!quill) return;

  let selectionFormat = selection;
  let color = (selectionFormat.color as string) ?? "#ffffff";

  if (!selectionFormat.color) format();
  if (selectionFormat.color === "#278451" && quill.getText(selectionRange.index - 1, 1) === ")") {
    selectionFormat = quill.getFormat(selectionRange.index + 1);
    color = (selectionFormat.color as string) ?? (props.color !== "#278451" ? props.color : "#ffffff");
    quill.format("color", color);
    quill.format("underline", selectionFormat.underline);
  }
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

function defaultFormat(text: Delta) {
  for (let i = 0; i < text.ops.length; i++) {
    const op = text.ops[i];
    const insert = op.insert as string | undefined;

    const regex = /([^\(]*)(\(\d{1,4},\d{1,4}\))(.*)/; // Apply coordinate formatting to coordinates
    let match = insert?.match(regex);
    if (match && !op.attributes?.underline && op.attributes?.color !== "#278451") {
      const [fullMatch, before, coordinates, after] = match;
      if (before) text.ops.splice(i, 0, { insert: before, attributes: { ...op.attributes } });
      if (after) text.ops.splice(i + 2, 0, { insert: after, attributes: { ...op.attributes, color: "#ffffff" } });
      op.insert = coordinates;

      op.attributes = { underline: true, color: "#278451" };
      match = insert?.match(regex);
    }

    if (!op.attributes?.color && insert !== "\n") op.attributes = { ...op.attributes, color: "#ffffff" }; // Add fallback color
  }
  return text;
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
