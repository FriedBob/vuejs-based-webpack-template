// import Vue from 'vue'                   // vue에서 Vue라는 이름으로 패키지를 가지고옴    ----> 3.0에서는 default export가 되지 않는듯
import { createApp } from 'vue'      // Vue.createApp -> createApp 만으로 사용가능하게함
import App from './App.vue'             // src의 App.vue

createApp(App).mount('#app');       // main.js 에서에서 App.vue가 프로젝트의 시작이 될 수 있도록 유도함