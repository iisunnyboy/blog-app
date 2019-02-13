import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import AddBlog from '../components/AddBlog.vue'
import ShowBlogs from "../components/ShowBlogs.vue"
import SingleBlog from "../components/SingleBlog.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'ShowBlogs',
      // components: {
      //   default: AddBlog,
      //   "show-blogs": ShowBlogs
      // }
      component: ShowBlogs
    },
    {
      path:"/addblog",
      name: "AddBlog",
      component: AddBlog
    },
    {
      path: "/blog/:id",
      name:"SingleBlog",
      component: SingleBlog
    }
  ]
})
