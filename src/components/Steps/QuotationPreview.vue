<template>
  <div class="mt-8 p-4 flex justify-center">
    <div v-html="QuotationTemplate" class="flex justify-center w-full"></div>
  </div>
</template>

<script setup>
import { watch, computed, ref } from "vue";
import renderQuotationTemplate from "../../composables/Templates/renderQuotationTemplate.js";
import getServicesObject from "../../composables/getServicesObject.js"

let selectedService = JSON.parse(localStorage.getItem("selectedService"));

var services = [
  { servicename: "serviceAttrName1", serviceprice: 10 },
  { servicename: "serviceAttrName2", serviceprice: 20 },
  { servicename: "serviceAttrName3", serviceprice: 30 },
];

localStorage.setItem('serviceAttrs' ,JSON.stringify(services))
const serviceAttrs = JSON.parse(localStorage.getItem('serviceAttrs'));

const formatedServices = await getServicesObject(serviceAttrs);
const QuotationTemplate = await renderQuotationTemplate(
  selectedService,
  formatedServices,
);

</script>
