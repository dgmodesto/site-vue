// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";

import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { ServerTable, ClientTable, Event } from "vue-tables-2";
import App from "./App";
import router from "./router";

Vue.use(BootstrapVue);
Vue.config.productionTip = false;
Vue.use(ClientTable, {
  compileTemplates: true,
  filterByColumn: true,
  texts: {
    filter: "Search:"
  },
  datepickerOptions: {
    showDropdowns: true
  },
  perPage: 25
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
