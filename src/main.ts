import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import { createPinia } from "pinia";
const app = createApp(App);

app.use(createPinia());
createApp(App).mount("#app");
