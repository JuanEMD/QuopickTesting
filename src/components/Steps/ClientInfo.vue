<script>
import useVuelidate from "@vuelidate/core";
import {
  required,
  email,
  minLength,
  maxLength,
  helpers,
} from "@vuelidate/validators";

export default {
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      name: "",
      last_name: "",
      email: "",
      phone: "",
      InputClasses: "",
      // errorWatcher: false,
    };
  },

  emits: ["validateUserData"],

  validations() {
    return {
      name: {
        required: helpers.withMessage("Campo obligatorio", required),
      },
      last_name: {
        required: helpers.withMessage("Campo obligatorio", required),
      },

      email: {
        required: helpers.withMessage("Campo obligatorio", required),
        email: helpers.withMessage("Email Inválido", email),
      },

      phone: {
        minLengthValue: helpers.withMessage("Minimo 10 numeros", minLength(10)),
        maxLengthValue: helpers.withMessage("Maximo 12 numeros", maxLength(12)),
      },
    };
  },

  computed: {
    validNameInput() {
      this.formInputClasses = " input-form";

      if (!this.v$.name.$dirty) {
        return this.formInputClasses;
      } else if (this.v$.name.$error) {
        return (this.InputClasses = "input-form" + " invalid-input-class");
      } else if (!this.v$.name.$invalid) {
        return (this.InputClasses = "input-form" + " valid-input-class");
      }
    },

    validLastNameInput() {
      this.formInputClasses = " input-form";

      if (!this.v$.last_name.$dirty) {
        return this.formInputClasses;
      } else if (this.v$.last_name.$error) {
        return (this.InputClasses = "input-form" + " invalid-input-class");
      } else if (!this.v$.last_name.$invalid) {
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

      if (!this.v$.phone.$dirty) {
        return this.formInputClasses;
      } else if (this.v$.phone.$error) {
        return (this.InputClasses = "input-form" + " invalid-input-class");
      } else if (!this.v$.phone.$invalid) {
        return (this.InputClasses = "input-form");
      }
    },

    formStatus() {
      return this.v$.$errors;
    },
  },

  watch: {
    formStatus(newStatus, oldStatus) {
      this.saveFormData();
      if (this.v$.$invalid) {
        return this.$emit("sendUserData", false);
      }
      return this.$emit("sendUserData", true);
    },
  },

  methods: {
    checkLocalStorage() {
      if (localStorage.getItem("userData")) {
        let localStorageData = JSON.parse(localStorage.getItem("userData"));

        this.name = localStorageData.name;
        this.last_name = localStorageData.last_name;
        this.email = localStorageData.email;
        this.phone = localStorageData.phone;
      }
    },

    saveFormData() {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          name: this.name,
          last_name: this.last_name,
          email: this.email,
          phone: this.phone,
        })
      );
    },
  },
  created() {
    this.checkLocalStorage();
  },
};
</script>

<template>
  <div class="mt-8 p-4">
    <form action="" @submit.prevent>
      <div
        class="font-bold text-gray-600 text-xs leading-8 uppercase h-6 mx-2 mt-3"
      >
        Full Name
      </div>
      <div class="flex flex-col md:flex-row">
        <div class="w-full flex-1 mx-2 svelte-1l8159u">
          <div>
            <input
              :class="validNameInput"
              @blur="v$.name.$touch"
              v-model="name"
              placeholder="First Name"
              class="input-form"
            />
            <p
              class="error-message"
              v-for="error of v$.name.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>
        <div class="w-full flex-1 mx-2 svelte-1l8159u">
          <div class="">
            <input
              :class="validLastNameInput"
              @blur="v$.last_name.$touch"
              v-model="last_name"
              placeholder="Last Name"
              class="input-form"
            />
            <p
              class="error-message"
              v-for="error of v$.last_name.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
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
          <div class="">
            <input
              :class="validEmailInput"
              @blur="v$.email.$touch"
              v-model="email"
              placeholder="jhon@doe.com"
              class="input-form"
            />
            <p
              class="error-message"
              v-for="error of v$.email.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
          </div>
        </div>
        <div class="w-full mx-2 flex-1 svelte-1l8159u">
          <div
            class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"
          >
            Your Phone (Optional)
          </div>
          <div class="">
            <input
              v-model="phone"
              @blur="v$.phone.$touch"
              :class="validPhoneInput"
              placeholder="Just a hint.."
              class="input-form"
            />
            <p
              class="error-message"
              v-for="error of v$.phone.$errors"
              :key="error.$uid"
            >
              {{ error.$message }}
            </p>
            <!-- <p
            class="error-message"
            v-for="error of v$.phone.$errors"
            :key="error.$uid"
          >
            {{ error.$message }}
          </p> -->
          </div>
        </div>
      </div>
      <div class="flex p-5 mt-4 justify-between w-full">
        <div class="flex-auto flex flex-row-reverse">
          <!-- <button
            @click="submit"
            class="text-base ml-2 hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-teal-600 bg-teal-600 text-teal-100 border duration-200 ease-in-out border-teal-600 transition"
          >
            Continuar
          </button> -->
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
