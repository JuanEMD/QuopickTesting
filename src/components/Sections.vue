<script setup>
import UserSVG from "./icons/UserSVG.vue";
import ServicesSVG from "./icons/ServicesSVG.vue";
import ServiceSpecsSVG from "./icons/ServiceSpecsSVG.vue";
import RelojSVG from "./icons/RelojSVG.vue";
import ReceiptSVG from "./icons/ReceiptSVG.vue";

/* props */
const props = defineProps({
  currentStep: Number,
});

/* Data Binding */

/* Methods */
const selectSectionClass = (value) => {
  return props.currentStep == value
    ? "section-selected"
    : props.currentStep > value
    ? "section-done"
    : "section-default";
};

const selectSectionLine = (value) => {
  return props.currentStep > value
    ? "line-section-selected"
    : "line-section-default";
};

/*Computed Properties*/
// const sectionUserClass = computed(() => selectSectionClass(0));
// const sectionServicesClass = computed(() => selectSectionClass(1));
// const sectionServiceSpecsClass = computed(() => selectSectionClass(2));
// const sectionDateClass = computed(() => selectSectionClass(3));
</script>

<template>
  <div class="mx-4 p-4">
    <div class="flex items-center">
      <div class="flex items-center relative section-wrapper">
        <div class="section" :class="selectSectionClass(0)">
          <UserSVG :icon-class="selectSectionClass(0)" />
          <div class="label-section">{{ $t("applicant") }}</div>
        </div>
      </div>
      <div class="line-section" :class="selectSectionLine(0)"></div>
      <div class="flex items-center relative relative section-wrapper">
        <div class="section" :class="selectSectionClass(1)">
          <ServicesSVG :icon-class="selectSectionClass(1)" />
          <div class="label-section">{{ $t("service") }}</div>
        </div>
      </div>
      <div class="line-section" :class="selectSectionLine(1)"></div>
      <div class="flex items-center relative">
        <div class="section" :class="selectSectionClass(2)">
          <ServiceSpecsSVG :icon-class="selectSectionClass(2)" />
          <div class="label-section">{{ $t("features") }}</div>
        </div>
      </div>
      <div class="line-section" :class="selectSectionLine(2)"></div>
      <div class="flex items-center relative">
        <div class="section" :class="selectSectionClass(3)">
          <ReceiptSVG :icon-class="selectSectionClass(3)" />
          <div class="label-section">Cotizacion</div>
        </div>
      </div>
      <div class="line-section" :class="selectSectionLine(3)"></div>
      <div class="flex items-center relative">
        <div class="section" :class="selectSectionClass(4)">
          <RelojSVG :icon-class="selectSectionClass(4)" />
          <div class="label-section">{{ $t("meeting") }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  @apply rounded-full h-12 w-12 py-3 border-2 transition duration-200 ease-out;
}
.section-default {
  @apply border-gray-300;
}
.section-default .label-section {
  @apply text-gray-500;
}
.section-selected {
  @apply bg-teal-600 border-teal-600 items-center flex;
}
.section-selected .label-section {
  @apply text-teal-600;
}
.section-done {
  @apply border-teal-600;
}
.section-done .label-section {
  @apply text-teal-600;
}
.line-section {
  @apply flex-auto border-t-2 transition duration-200 ease-in-out;
}
.line-section-default {
  @apply border-gray-300;
}
.line-section-selected {
  @apply border-teal-600;
}
.label-section {
  @apply absolute top-0 -ml-10 text-center mt-14 w-32 text-xs font-medium uppercase;
}
</style>
