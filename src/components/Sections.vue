<script setup>
import UserSVG from "./icons/UserSVG.vue";
import ServicesSVG from "./icons/ServicesSVG.vue";
import ServiceSpecsSVG from "./icons/ServiceSpecsSVG.vue";
import RelojSVG from "./icons/RelojSVG.vue";
import { ref, computed } from "vue";

const labelSectionClass = ref("label-section-default");

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

/*Computed Properties*/
const sectionUserClass = computed(() => {
  return selectSectionClass(0);
});

const sectionServicesClass = computed(() => {
  return selectSectionClass(1);
});

const sectionServiceSpecsClass = computed(() => {
  return selectSectionClass(2);
});

const sectionDateClass = computed(() => {
  return selectSectionClass(3);
});
</script>

<template>
  <div class="mx-4 p-4">
    <div class="flex items-center">
      <div class="flex items-center relative">
        <div class="section" :class="sectionUserClass">
          <UserSVG :icon-class="sectionUserClass" />
          <div class="label-section">Personal</div>
        </div>
      </div>
      <div class="line-section"></div>
      <div class="flex items-center text-gray-500 relative">
        <div class="section" :class="sectionServicesClass">
          <ServicesSVG :icon-class="sectionServicesClass" />
          <div class="label-section">Account</div>
        </div>
      </div>
      <div class="line-section" :class="lineSectionClass"></div>
      <div class="flex items-center text-gray-500 relative">
        <div class="section" :class="sectionServiceSpecsClass">
          <ServiceSpecsSVG :icon-class="sectionServiceSpecsClass" />
          <div class="label-section">Message</div>
        </div>
      </div>
      <div class="line-section" :class="lineSectionClass"></div>
      <div class="flex items-center text-gray-500 relative">
        <div class="section" :class="sectionDateClass">
          <RelojSVG :icon-class="sectionDateClass" />
          <div class="label-section">Confirm</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  @apply rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2;
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
  @apply flex-auto border-t-2 transition duration-500 ease-in-out;
}
/* .line-section-default {
  @apply border-gray-300;
}
.line-section-selected {
  @apply border-teal-600;
} */

.label-section {
  @apply absolute top-0 -ml-10 text-center mt-14 w-32 text-xs font-medium uppercase;
}

/* .label-section-default {
  @apply text-gray-500;
} */

/* .label-section-selected {
  @apply text-teal-600;
} */
</style>
