import VueFullPage from "vue-fullpage.js";
export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueFullPage);
});
