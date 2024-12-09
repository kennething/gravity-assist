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
  }
);
watch(
  () => props.color,
  (val) => {
    if (!quill) return;
    quill.format("color", val);
  }
);
watch(
  () => props.clearText,
  (val) => {
    if (!val || !quill) return;
    quill.deleteText(0, quill.getLength());
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
    emit("event", Boolean(selectionFormat.underline), (selectionFormat.color as string) ?? "#ffffff");
  });

  quill.on("text-change", async (delta, oldDelta, source) => {
    if (!quill) return;
    if (quill.getLength() === 1) format();

    for (const op of delta.ops) {
      if (op.insert !== "\n") continue;

      await nextTick();
      return format();
    }
    emit("output", quill.getContents());
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

  quill.format("underline", props.underline ? "underline" : "");
  quill.format("color", props.color);
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
