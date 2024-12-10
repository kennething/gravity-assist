<template>
  <div ref="editor"></div>
</template>

<script setup lang="ts">
import Quill, { Delta } from "quill";

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
  output: [Delta];
}>();

const editor = ref<HTMLElement>();
let quill: Quill | null = null;

onMounted(async () => {
  quill = await init();
  quill.format("color", "#ffffff");

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

    const selectionFormat = quill.getFormat();
    if (!selectionFormat.color) format();
    emit("event", Boolean(selectionFormat.underline), (selectionFormat.color as string) ?? "#ffffff");
  });

  quill.on("text-change", (delta, oldDelta, source) => {
    if (!quill || source !== "user") return;

    const selection = quill.getSelection();
    if (!selection) return;

    const content = addFallbackColor(quill.getContents());
    quill.setContents(content);

    const length = quill.getLength();
    quill.setSelection({ index: length === 1 ? 0 : selection.index, length: 0 });
    emit("output", content);
  });
});

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

function addFallbackColor(text: Delta) {
  for (const op of text.ops) {
    if (!op.attributes?.color) op.attributes = { ...op.attributes, color: "#ffffff" };
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
