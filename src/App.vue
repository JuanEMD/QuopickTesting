<script setup>
  /* Components */
  import ServiceProps from './components/Steps/ServiceProps.vue'
  import Services from './components/Steps/Services.vue'
  import Questions from './components/Steps/Questions.vue'
  import DateRequest from './components/Steps/DateRequest.vue'
  import ClientInfo from './components/Steps/ClientInfo.vue'
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'
  
  /* Composition API Libs */
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'

  /* Libs variables */
  const { t } = useI18n()
  /* Data Binding */
  const currentStep = ref(0)
  const steps = ref([
    {
      component: ClientInfo
    },
    {
      component: Services
    },
    {
      component: ServiceProps
    },
    {
      component: Questions
    },
    {
      component: DateRequest
    }
  ])

  /* Methods */

  const nextStep = () => {
    ++currentStep.value
  }

  const prevStep = () => {
    --currentStep.value
  }
</script>

<template>
  <Header></Header>
  <div class="p-5">
      <component v-bind:is="steps[currentStep].component" />
      <div class="flex p-5 mt-4">
          <button @click="prevStep" class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
      hover:bg-gray-200  
      bg-gray-100 
      text-gray-700 
      border duration-200 ease-in-out 
      border-gray-600 transition">{{t('prev')}}</button>
          <div class="flex-auto flex flex-row-reverse">
              <button @click="nextStep" class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
      hover:bg-teal-600  
      bg-teal-600 
      text-teal-100 
      border duration-200 ease-in-out 
      border-teal-600 transition">{{t('next')}}</button>
              <!-- <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
      hover:bg-teal-200  
      bg-teal-100 
      text-teal-700 
      border duration-200 ease-in-out 
      border-teal-600 transition">Skip</button> -->
          </div>
      </div>
  </div>
  <Footer></Footer>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
