import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import AddBlog from '../components/AddBlog.vue'
import ShowBlogs from "../components/ShowBlogs.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddBlog',
      components: {
        default: AddBlog,
        "show-blogs": ShowBlogs
      }
    }
  ]
})
