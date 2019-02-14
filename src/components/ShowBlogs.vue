<template>
    <!-- <div class="show-blogs" v-theme="'wide'"> -->
    <!-- <div class="show-blogs" v-theme="{name:'wide'}"> -->
    <!-- <div class="show-blogs" v-theme:column="['wide']">   -->
    <div class="show-blogs" v-theme:column="['wide']">  
        <h1>博客总览</h1>
        <input type="text" v-model="search">
        <!-- <div v-for="(blog,index) in blogs" :key="index" class="single-blog"> -->
        <div v-for="(blog,index) in filterBlogs" :key="index" class="single-blog">
            <router-link :to="'/blog/'+blog.id">
                <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
            </router-link>

            <article>
                {{blog.content | snippet}}
            </article>
        </div>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: "show-blogs",
    data(){
        return {
            blogs: [],
            search: ""
        }
    },
    computed:{
        filterBlogs(){
            return this.blogs.filter(blog => 
                 { return blog.title.match(this.search)}
            )
        }
    },
    // 自定义局部过滤器
    filters : {
        "to-uppercase" : function(value){
            return value.toUpperCase();
        }
    },

    // 自定义局部指令
    directives : {
        theme: {
            bind(el, binding, vNode){
                if(binding.value === "wide"){
                    el.style.maxWidth="1260px";
                }else if(binding.value.name === "wide"){
                    el.style.maxWidth="1260px";
                }else if(binding.value[0] === "wide"){
                    el.style.maxWidth="1260px";
                }
                if(binding.arg === "column"){
                    el.style.background = "#6677cc";
                    el.style.padding = "20px"
                }
                // console.log(el);
                // console.log(binding);
                // console.log(vNode);
            }
        }
    },
    created(){
        // this.$http.get("http://jsonplaceholder.typicode.com/posts")  //jsonplaceholder
        // this.$http.get("../../static/posts.json")                       //Local
        // this.$http.get("https://wd0398465287ktocwx.wilddogio.com/posts.json")     // 野狗云
        axios.get("https://wd0398465287ktocwx.wilddogio.com/posts.json")     // axios
            // .then(data => {
            //     console.log(data);
            //     return data.json();
            //     // this.blogs = data.body.slice(0,10);
            //     // console.log(this.blogs);
            // })
            .then(response=>{
                console.log(response)
                let data = response.data
                let blogArray = [];
                for(let key in data){
                    data[key].id = key;
                    blogArray.push(data[key]);
                }
                this.blogs = blogArray
                console.log(this.blogs)
                // return blogArray
            })
    }
}
</script>

<style scoped>
.show-blogs{
    margin: 0 auto;
    max-width: 800px;
}

.show-blogs a{
    color: #444;
    text-decoration: none;
}

h1{
    margin: 20px;
}

input[type="text"]{
    box-sizing: border-box;
    display: block;
    width: 100%;
    margin: 20px;
    padding: 8px;
}

.single-blog{
    box-sizing: border-box;

    margin: 20px;
    padding: 20px 0;

    background: #eee
}
</style>

