import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import SearchIcon from "@/assets/images/search.vue";

createApp(App)
  .component("SearchIcon", SearchIcon)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount("#app");
