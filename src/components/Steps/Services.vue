<script setup>
import Multiselect from "@vueform/multiselect";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const value = ref(null);
const options = ref(["Web App"]);
</script>

<template>
  <div class="mt-8 p-4">
    <div
      class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3 mb-3"
    >
      {{ t("selectOneOrFewServices") }}
    </div>
    <div class="flex flex-col md:flex-row">
      <Multiselect
        class="md:w-2/3 self-center"
        v-model="value"
        :options="options"
      />
    </div>
  </div>
</template>
<style src="@vueform/multiselect/themes/default.css"></style>
