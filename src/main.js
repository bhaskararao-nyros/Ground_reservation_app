import Vue from 'vue'
import App from './App.vue'
import FullCalendar from "vue-full-calendar";

import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import "fullcalendar-scheduler";
import "fullcalendar/dist/fullcalendar.min.css";
import "fullcalendar-scheduler/dist/scheduler.min.css";



Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
