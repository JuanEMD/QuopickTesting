import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import languages from "./composables/languages.js"

const app = createApp(App);

app.use(languages);
app.mount("#app");
