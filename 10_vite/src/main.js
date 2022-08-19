import { sum } from './js/math';
import _ from 'lodash-es';
import './css/style.css';
import './css/title.less';
import mul from './ts/mul';
import {createApp} from 'vue';
import App from './vue/App.vue'


console.log("helo vite");
console.log(sum(20, 30));
console.log(_.join(["abc","bbb","cccc"], "-"));
console.log(mul(30,30));

const titleEl = document.createElement('div');
titleEl.className= "title";
titleEl.innerHTML = "hello title vite";
document.body.appendChild(titleEl);

createApp(App).mount("#app");
