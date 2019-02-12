// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResouce from "vue-resource"

Vue.config.productionTip = false
Vue.use(VueResouce)

//全局自自定义指令
Vue.directive("rainbow",{
  bind(el, binding, vNode){
    el.style.color = "#" + Math.random().toString(16).slice(2,8);
    // console.log(el);
    // console.log(binding);
    // console.log(vNode);
  }
})

// Vue.directive("theme",{
//   bind(el, binding, vNode){
//     if(binding.value === "wide"){
//       el.style.maxWidth="1260px";
//     }else if(binding.value.name === "wide"){
//       el.style.maxWidth="1260px";
//     }else if(binding.value[0] === "wide"){
//       el.style.maxWidth="1260px";
//     }
//     if(binding.arg === "column"){
//       el.style.background = "#6677cc";
//       el.style.padding = "20px"
//     }
//     // console.log(el);
//     // console.log(binding);
//     // console.log(vNode);
//   }
// })

//全局自定义过滤器
// Vue.filter("to-uppercase",function(value){
//   return value.toUpperCase();
// })
Vue.filter("snippet",value => {
  return value.slice(0,100) + "..."
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
