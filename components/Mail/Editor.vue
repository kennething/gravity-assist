<template>
  <form class="w-full rounded-2xl shadow md:w-[25rem] lg:w-[40rem] xl:w-[50rem]">
    <div class="w-full rounded-2xl border border-neutral-600 bg-neutral-900">
      <div class="flex items-center justify-between border-b border-neutral-600 px-3 py-2" @click="openColorMenu = false">
        <div class="flex flex-wrap items-center divide-neutral-600 sm:divide-x sm:rtl:divide-x-reverse">
          <div class="flex items-center space-x-1 sm:pe-4 rtl:space-x-reverse">
            <div class="du-tooltip" data-tip="Underline">
              <button
                :class="{ 'bg-neutral-600 text-white': underline }"
                type="button"
                class="cursor-pointer rounded p-1 text-neutral-400 transition hover:bg-neutral-600 hover:text-white"
                @click="underline = !underline"
              >
                <img class="size-6 select-none invert" src="/ui/underline.svg" aria-hidden="true" />
              </button>
            </div>
            <div class="du-tooltip" data-tip="Text Color">
              <button
                :class="{ 'bg-neutral-600 text-white': openColorMenu }"
                type="button"
                class="cursor-pointer rounded p-1 text-neutral-400 transition hover:bg-neutral-600 hover:text-white"
                @click.stop="openColorMenu = !openColorMenu"
              >
                <img class="size-6 select-none invert" src="/ui/colorGenerator.svg" aria-hidden="true" />
              </button>
              <div class="absolute bottom-0 h-[3px] w-8 rounded-full" :style="{ backgroundColor: currentColor }"></div>
              <Transition name="fade">
                <div v-show="openColorMenu" class="fo-tooltip-content visible -left-6 top-8 opacity-100" role="popover" @click.stop>
                  <div class="fo-tooltip-body flex w-48 flex-col items-center justify-center gap-3 rounded-lg bg-neutral-600 p-4 text-start shadow">
                    <div class="flex w-full flex-wrap items-center justify-center gap-1">
                      <button
                        v-for="color in formattingColors"
                        type="button"
                        class="size-7 rounded-full border border-neutral-700 shadow-sm transition hover:scale-110 hover:shadow"
                        :style="{ backgroundColor: color }"
                        @click.stop="selectColor(color)"
                      ></button>
                    </div>
                    <div class="flex items-center justify-center gap-2">
                      <p class="font-medium text-white">Custom</p>
                      <div class="relative size-7">
                        <button
                          type="button"
                          class="size-full rounded-full border border-neutral-700 shadow-sm transition-transform hover:scale-110 hover:shadow"
                          :style="{ backgroundColor: currentColor }"
                        ></button>
                        <input v-model="currentColor" class="absolute left-0 top-0 size-full rounded-full opacity-0" type="color" />
                      </div>
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </div>
          <div class="flex flex-wrap items-center space-x-6 ps-4 lg:space-x-10 rtl:space-x-reverse">
            <ClientOnly>
              <p class="text-white">
                <!-- eslint-disable-next-line vue/html-closing-bracket-newline -->
                <span class="hidden text-white lg:inline">Output length: </span><strong class="text-white">{{ outputText.length.toLocaleString() }}</strong
                ><span class="text-white">/{{ Number(1000).toLocaleString() }}</span>
              </p>
            </ClientOnly>
            <div class="inline-flex items-center justify-center gap-1 text-white">
              <p>
                <!-- eslint-disable-next-line vue/html-closing-bracket-newline -->
                <span class="hidden text-white lg:inline">Profanity detected: </span><strong class="text-white">{{ profaneWords.length }}</strong
                ><span class="inline text-white lg:hidden"> detections</span>
              </p>
              <div class="group relative">
                <img class="size-5 cursor-help select-none invert" src="/ui/question.svg" alt="Profanity filter information" />
                <div
                  class="profanity-tooltip fo-tooltip-content pointer-events-none visible top-5 group-hover:opacity-100 max-lg:-right-4 lg:left-1/2 lg:max-xl:-translate-x-1/2 xl:-left-4"
                  role="popover"
                  @click.stop
                >
                  <div class="fo-tooltip-body flex w-64 flex-col items-center justify-center gap-3 rounded-lg bg-neutral-600 p-4 text-start shadow">
                    <p class="text-white">Uses a basic profanity filter that does not reflect Infinite Lagrange's actual profanity filter.</p>
                    <p class="text-white">Gives a general idea if your mail will be blocked or not.</p>
                    <div class="flex flex-col items-center justify-center">
                      <p class="text-lg text-white">Infringing words:</p>
                      <ul class="mb-4 flex w-full flex-col items-center justify-center text-base font-normal text-neutral-300">
                        <li v-for="word in profaneWords" v-if="profaneWords.length > 0" class="text-neutral-200">{{ word }}</li>
                        <p v-else class="text-neutral-200">None!</p>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="editor-bg h-96 rounded-b-2xl">
        <MailQuill
          :underline="underline"
          :color="currentColor"
          :clear-text="clearText"
          :start-text="templateText"
          @event="(underlineEmit, colorEmit) => handleEmit(underlineEmit, colorEmit)"
          @click="openColorMenu = false"
          @output="(output) => handleOutput(output)"
        />
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { DataSet, RegExpMatcher, englishDataset, englishRecommendedTransformers, pattern } from "obscenity";
import type { Delta, Op } from "quill";

const props = defineProps<{
  clearText: boolean;
  template: Op[] | undefined;
}>();

const underline = ref(false);
const currentColor = ref("#ffffff");
watch(
  () => props.clearText,
  () => {
    underline.value = false;
    currentColor.value = "#ffffff";
  }
);

const templateText = ref<Op[]>();
watch(
  () => props.template,
  (text) => {
    templateText.value = text;
  }
);

const emit = defineEmits<{
  output: [string];
  outputOps: [Op[]];
}>();

const openColorMenu = ref(false);

const outputText = ref("");
watch(outputText, (val) => {
  emit("output", val);
});
const profaneWords = ref<string[]>([]);

// prettier-ignore
const dataset = new DataSet<{ originalWord: string }>().addAll(englishDataset)
  .addPhrase((phrase) => phrase.setMetadata({ originalWord: "taiwan" }).addPattern(pattern`taiwan`))
  .addPhrase((phrase) => phrase.setMetadata({ originalWord: "jin ping" }).addPattern(pattern`jin[ ]ping`))
  .addPhrase((phrase) => phrase.setMetadata({ originalWord: "pooh" }).addPattern(pattern`pooh`))
  .addPhrase((phrase) => phrase.setMetadata({ originalWord: "hong kong" }).addPattern(pattern`hk`).addPattern(pattern`hong[ ]kong`))
  .addPhrase((phrase) => phrase.setMetadata({ originalWord: "communist" }).addPattern(pattern`communist`).addPattern(pattern`commie`))
  .addPhrase((phrase) => phrase.setMetadata({ originalWord: "falun" }).addPattern(pattern`fal[?]n`))
  .addPhrase((phrase) => phrase.setMetadata({ originalWord: "tiananmen square" }).addPattern(pattern`tiananmen`))
  .addPhrase((phrase) => phrase.setMetadata({ originalWord: "dalai lama" }).addPattern(pattern`dalai[ ]lama`))
  .addPhrase((phrase) => phrase.setMetadata({ originalWord: "hongzhi" }).addPattern(pattern`hongzhi`))
  .addPhrase((phrase) => phrase.setMetadata({ originalWord: "ethnic cleansing" }).addPattern(pattern`ethnic[ ]cleansing`))
  .addPhrase((phrase) => phrase.setMetadata({ originalWord: "torture" }).addPattern(pattern`torture`));

let profanityMatcher: RegExpMatcher | null = null;
onMounted(() => {
  profanityMatcher = new RegExpMatcher({
    ...dataset.build(),
    ...englishRecommendedTransformers
  });
});

function selectColor(color: string) {
  currentColor.value = color;
  openColorMenu.value = false;
}

function handleEmit(underlineEmit: boolean, colorEmit: string | string[]) {
  underline.value = underlineEmit;
  if (typeof colorEmit === "string") currentColor.value = colorEmit;
}

function checkProfanity(text: string) {
  if (!profanityMatcher?.hasMatch(text)) return (profaneWords.value.length = 0);

  const matches = profanityMatcher.getAllMatches(text);
  const metadata = matches.map((match) => dataset.getPayloadWithPhraseMetadata(match));

  profaneWords.value = metadata.map((data) => data.phraseMetadata?.originalWord ?? "");
}

let isOnCooldown = false;
let queuedOutput: Delta | Op[] | null = null;
function handleOutput(output: Delta | Op[]) {
  if (isOnCooldown) return (queuedOutput = output);
  isOnCooldown = true;
  queuedOutput = null;
  setTimeout(() => {
    isOnCooldown = false;
    if (queuedOutput) handleOutput(queuedOutput);
  }, 500);

  localStorage.setItem("autosave", JSON.stringify(output));

  let outputString = "";
  let previousIsUnderline = false;
  let previousColor = "#ffffff";

  const ops = "ops" in output ? output.ops : output;
  emit("outputOps", ops);
  for (const op of ops) {
    // eslint-disable-next-line no-use-before-define
    outputString += insertFormatting(op);
  }

  while (outputString.endsWith("#r") || outputString.endsWith("#e") || outputString.endsWith("#W")) {
    outputString = outputString.slice(0, -2);
  }

  outputText.value = outputString;
  checkProfanity(outputString);

  function insertFormatting(op: Op) {
    const insert = op.insert as string;
    const isCoordinate = /\(\d{1,4},\d{1,4}\)/.test(insert);
    let string = insert.replaceAll("\n", "#r");

    const underline = op.attributes?.underline;
    if (!isCoordinate && underline) {
      if (!previousIsUnderline) string = `#E${string}`;
      previousIsUnderline = true;
    } else if (!isCoordinate && !underline) {
      if (previousIsUnderline) string = `#e${string}`;
      previousIsUnderline = false;
    }

    let color = op.attributes?.color as string | string[];
    if (color && !isCoordinate) {
      // Only apply color formatting if it's not a coordinate
      if (typeof color !== "string") color = color[0];
      if (color !== previousColor) string = `#c${color.slice(1)}${string}`;
      previousColor = color;

      // Replace hex code with IL shorthand code
      string = Object.entries(formattingColors).reduce((result, [key, value]) => {
        const regex = new RegExp(`#c${value.slice(1)}`, "g");
        return result.replace(regex, `#${key}`);
      }, string);
    }

    return string;
  }
}
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (hover: none) and (pointer: coarse) {
  .profanity-tooltip {
    @apply hidden;
  }
}
</style>
