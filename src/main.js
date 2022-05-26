import Vue from "vue";
import App from "./App.vue";

// Importing the global css file
import "./assets/global.css"

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
