<template>
  <div id="app">
    <div>
      <!-- <router-link to="/">博客总览</router-link>
      <router-link to="/addblog">添加博客</router-link> -->
      <blog-header></blog-header>
    </div>
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <router-view></router-view>
    <!-- <router-view name="show-blogs"></router-view> -->
  </div>
</template>

<script>
import BlogHeader from "./components/BlogHeader"

export default {
  name: 'App',
  components: {
    BlogHeader
  }
}
</script>

<style>

</style>
