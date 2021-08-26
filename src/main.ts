import { createApp } from "vue";
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import SearchIcon from "@/assets/images/search.vue";
import LoaderIcon from "@/assets/images/loader.vue";

createApp(App)
  .component("SearchIcon", SearchIcon)
  .component("LoaderIcon", LoaderIcon)
  .use(router)
  .use(store)
  .use(vuetify)
  .mount("#app");
