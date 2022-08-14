import {sum} from './js/math';
import {createApp} from 'vue';
import app2 from './vue/app.vue';

const {priceFormat} = require('./js/format');
import "./js/element";
// import "../demo"

console.log(sum(20,30));
console.log(priceFormat());

// const app = createApp({
//   template: "#my-temp",
//   data(){
//       return {
//           title:'hahaha'
//       }
//   },
//   methods:{
//       btnClick(){

//       }
//   },
//   components: { 
//     app2,
//   }
// })
const app = createApp(app2);
app.mount("#my-app");

console.log("123abcddd");
