import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import languages from "./composables/languages"

const app = createApp(App);

app.use(languages);
app.mount("#app");
