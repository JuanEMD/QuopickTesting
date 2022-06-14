<script>
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";
import UserSVG from "../icons/UserSVG.vue";
import ServicesSVG from "../icons/ServicesSVG.vue";
import ServiceSpecsSVG from "../icons/ServiceSpecsSVG.vue";
import RelojSVG from "../icons/RelojSVG.vue";
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    };
  },
  validations() {
    return {
      firstName: { required },
      lastName: { required },
      email: { required, email },
      phone: {},
    };
  },
  components: { UserSVG, ServicesSVG, ServiceSpecsSVG, RelojSVG },
};
</script>

<template>
  <div class="mx-4 p-4">
    <div class="flex items-center">
      <div class="flex items-center relative">
        <div
          class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600 items-center flex"
        >
          <UserSVG :selected="true" />
        </div>
        <div
          class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600"
        >
          Personal
        </div>
      </div>
      <div
        class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"
      ></div>
      <div class="flex items-center text-gray-500 relative">
        <div
          class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300"
        >
          <ServicesSVG :selected="false" />
        </div>
        <div
          class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase border-gray-300"
        >
          Account
        </div>
      </div>
      <div
        class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"
      ></div>
      <div class="flex items-center text-gray-500 relative">
        <div
          class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300"
        >
          <ServiceSpecsSVG :selected="false" />
        </div>
        <div
          class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500"
        >
          Message
        </div>
      </div>
      <div
        class="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"
      ></div>
      <div class="flex items-center text-gray-500 relative">
        <div
          class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300"
        >
          <RelojSVG :selected="false" />
        </div>
        <div
          class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500"
        >
          Confirm
        </div>
      </div>
    </div>
  </div>

  
  <div class="mt-8 p-4">
    <div
      class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3"
    >
      Full Name
    </div>
    <div class="flex flex-col md:flex-row">
      <div class="w-full flex-1 mx-2 svelte-1l8159u">
        <div
          class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u"
        >
          <input
            v-model="firstName"
            placeholder="First Name"
            class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div class="w-full flex-1 mx-2 svelte-1l8159u">
        <div
          class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u"
        >
          <input
            v-model="lastName"
            placeholder="Last Name"
            class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row">
      <div class="w-full mx-2 flex-1 svelte-1l8159u">
        <div
          class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
        >
          Your Email
        </div>
        <div
          class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u"
        >
          <input
            v-model="email"
            placeholder="jhon@doe.com"
            class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
      <div class="w-full mx-2 flex-1 svelte-1l8159u">
        <div
          class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
        >
          Your Phone (Optional)
        </div>
        <div
          class="bg-white my-2 p-1 flex border border-gray-200 rounded svelte-1l8159u"
        >
          <input
            v-model="phone"
            placeholder="Just a hint.."
            class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
          />
        </div>
      </div>
    </div>
  </div>
</template>
