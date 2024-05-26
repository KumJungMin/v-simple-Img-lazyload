import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import lazyLoad from "./directives/lazyLoad";

createApp(App).directive("lazy-load", lazyLoad).mount("#app");
