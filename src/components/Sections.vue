<script setup>
import UserSVG from "./icons/UserSVG.vue";
import ServicesSVG from "./icons/ServicesSVG.vue";
import ServiceSpecsSVG from "./icons/ServiceSpecsSVG.vue";
import RelojSVG from "./icons/RelojSVG.vue";
import { ref } from "vue";

const sectionClass = ref("section-selected");
const lineSectionClass = ref("line-section-default");
const labelSectionClass = ref("label-section-default");

/* Data Binding */
const currentStep = ref(0);

/* Methods */
const nextStep = () => {
  ++currentStep.value;
  console.log(currentStep.value)
};

const prevStep = () => {
  --currentStep.value;
  console.log(currentStep.value)
};

// if(currentStep.value)
// const currentSection = {

// }

</script>

<template>
  <div class="mx-4 p-4">
    <div class="flex items-center">
      <div class="flex items-center relative">
        <div class="section" :class="sectionClass">
          <UserSVG :selected="true" />
        </div>
        <div class="label-section label-section-selected">Personal</div>
      </div>
      <div class="line-section" :class="lineSectionClass"></div>
      <div class="flex items-center text-gray-500 relative">
        <div class="section section-default">
          <ServicesSVG :selected="false" />
        </div>
        <div class="label-section" :class="labelSectionClass">Account</div>
      </div>
      <div class="line-section" :class="lineSectionClass"></div>
      <div class="flex items-center text-gray-500 relative">
        <div class="section section-default">
          <ServiceSpecsSVG :selected="false" />
        </div>
        <div class="label-section" :class="labelSectionClass">Message</div>
      </div>
      <div class="line-section" :class="lineSectionClass"></div>
      <div class="flex items-center text-gray-500 relative">
        <div class="section section-default">
          <RelojSVG :selected="false" />
        </div>
        <div class="label-section" :class="labelSectionClass">Confirm</div>
      </div>
    </div>
  </div>
  <button @click="prevStep">Atra</button>
  <br>
  <button @click="nextStep">alante</button>
</template>

<style scoped>
.section {
  @apply rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2;
}
.section-default {
  @apply border-gray-300;
}
.section-selected {
  @apply bg-teal-600 border-teal-600 items-center flex;
}
.section-done {
  @apply border-teal-600;
}

.line-section {
  @apply flex-auto border-t-2 transition duration-500 ease-in-out;
}
.line-section-default {
  @apply border-gray-300;
}
.line-section-selected {
  @apply border-teal-600;
}

.label-section {
  @apply absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase;
}

.label-section-default {
  @apply text-gray-500;
}

.label-section-selected {
  @apply text-teal-600;
}
</style>
