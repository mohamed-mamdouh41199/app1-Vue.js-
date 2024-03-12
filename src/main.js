import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SCSS/main.scss";

createApp(App).use(store).use(router).mount("#app");
