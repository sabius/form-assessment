import "./scss/style.scss"

import FormApp from './js/FormApp.vue';

if (document.querySelector("#form-app")) {
  new Vue({
    el: "#form-app",
    render: h => h(FormApp)
  });
}

console.log('wtf');
