<template>
    <div class="flex justify-center hover:text-black">
        <button v-on:click="toggle()"
            class="bg-white border-2 rounded-2xl py-1 px-10 text-black group-hover:bg-slate-800 group-hover:text-white group-hover:border-slate-800">{{
                    activo ? "Subscribe" : "Unsubscribe"
            }}</button>
    </div>
</template>

<script setup>
import { ref } from "vue"

let activo = ref(false);
function toggle() {
    this.activo = !this.activo;
}
</script>
