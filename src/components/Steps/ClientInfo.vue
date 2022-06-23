<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, maxLength, numeric, helpers } from "@vuelidate/validators";

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
      InputClasses: "",
    };
  },

  validations() {
    return {
      firstName: {
        required: helpers.withMessage("Campo obligatorio", required),
      },
      lastName: {
        required: helpers.withMessage("Campo obligatorio", required),
      },

      email: {
        required: helpers.withMessage("Campo obligatorio", required),
        email: helpers.withMessage("Email Inválido", email),
      },

      phone: {
        numeric: helpers.withMessage("Error de numero telefonico", numeric),
        minLengthValue: helpers.withMessage("Minimo es 10 numeros", minLength(10)),
        maxLengthValue: helpers.withMessage("Maximo es 12 numeros", maxLength(12)),
      },
    };
  },
  computed: {
    validNameInput() {
      this.formInputClasses = " input-form";

      if (!this.v$.firstName.$dirty) {
        return this.formInputClasses;
      } else if (this.v$.firstName.$error) {
        return (this.InputClasses = "input-form" + " invalid-input-class");
      } else if (!this.v$.firstName.$invalid) {
        return (this.InputClasses = "input-form" + " valid-input-class");
      }
    },

    validLastNameInput() {
      this.formInputClasses = " input-form";

      if (!this.v$.lastName.$dirty) {
        return this.formInputClasses;
      } else if (this.v$.lastName.$error) {
        return (this.InputClasses = "input-form" + " invalid-input-class");
      } else if (!this.v$.lastName.$invalid) {
        return (this.InputClasses = "input-form" + " valid-input-class");
      }
    },
    validEmailInput() {
      this.formInputClasses = " input-form";

      if (!this.v$.email.$dirty) {
        return this.formInputClasses;
      } else if (this.v$.email.$error) {
        return (this.InputClasses = "input-form" + " invalid-input-class");
      } else if (!this.v$.email.$invalid) {
        return (this.InputClasses = "input-form" + " valid-input-class");
      }
    },
    validPhoneInput() {
      this.formInputClasses = " input-form";
      if (this.phone.length === 10) {
        return (this.InputClasses = "input-form" + " valid-input-class");
      }
      else if (this.phone.length === 0) {
        return this.formInputClasses;
      }
      else if (this.phone.length === 12) {
        return (this.InputClasses = " valid-input-class");
      }
      else if (this.phone.length > 10 && this.phone.length < 12) {
        return (this.InputClasses = " valid-input-class");
      }
      else if (this.phone.length < 10 && this.phone.length > 0) {
        return (this.InputClasses = "input-form" + " invalid-input-class");
      }
    },
  },

  methods: {
    async submit() {
      const result = await this.v$.$validate();
      result ? alert("Valido") : alert("Invalido");
    },
  },
};
</script>

<template>
  <div class="mt-8 p-4">
    <form action="" @submit.prevent>
      <div class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3">
        Full Name
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="w-full flex-1 mx-2 svelte-1l8159u">
          <div>
            <input :class="validNameInput" @blur="v$.firstName.$touch" v-model="firstName" placeholder="First Name"
              required class="input-form" />
            <p class="error-message" v-for="error of v$.firstName.$errors" :key="error.$uid">
              {{ error.$message }}
            </p>
          </div>
        </div>
        <div class="w-full flex-1 mx-2 svelte-1l8159u">
          <div class="">
            <input :class="validLastNameInput" @blur="v$.lastName.$touch" v-model="lastName" placeholder="Last Name"
              required class="input-form" />
            <p class="error-message" v-for="error of v$.lastName.$errors" :key="error.$uid">
              {{ error.$message }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            Your Email
          </div>
          <div class="">
            <input :class="validEmailInput" @blur="v$.email.$touch" v-model="email" placeholder="jhon@doe.com" required
              class="input-form" />
            <p class="error-message" v-for="error of v$.email.$errors" :key="error.$uid">
              {{ error.$message }}
            </p>
          </div>
        </div>
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
            Your Phone (Optional)
          </div>
          <div class="">
            <input :class="validPhoneInput" type="number" @blur="v$.phone.$touch" v-model="phone"
              placeholder="Just a hint.." class="input-form" />
            <p class="error-message" v-for="error of v$.phone.$errors" :key="error.$uid">
              {{ error.$message }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex p-5 mt-4 justify-between w-full">
        <button @click=""
          class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-gray-200 bg-gray-100 text-gray-700 border duration-200 ease-in-out border-gray-600 transition">
          Retroceder
        </button>
        <div class="flex-auto flex flex-row-reverse">
          <button @click="submit"
            class="text-base ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-600 bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition">
            Continuar
          </button>
        </div>
      </div>
    </form>
  </div>
</template>
<style>
.input-form {
  @apply border-2 border-gray-200 rounded p-1 px-2 my-2 appearance-none outline-none w-full text-gray-800;
}

.invalid-input-class {
  @apply border-2 border-rose-500;
}

.valid-input-class {
  @apply border-2 border-green-600;
}

.input-form-readonly {
  @apply bg-white;
}

.error-message {
  @apply text-red-600 text-sm flex;
}
</style>
