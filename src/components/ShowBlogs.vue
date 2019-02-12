<template>
    <!-- <div class="show-blogs" v-theme="'wide'"> -->
    <!-- <div class="show-blogs" v-theme="{name:'wide'}"> -->
    <!-- <div class="show-blogs" v-theme:column="['wide']">   -->
    <div class="show-blogs" v-theme:column="['wide']">  
        <h1>博客总览</h1>
        <input type="text" v-model="search">
        <!-- <div v-for="(blog,index) in blogs" :key="index" class="single-blog"> -->
        <div v-for="(blog,index) in filterBlogs" :key="index" class="single-blog">
            <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
            <article>
                {{blog.body | snippet}}
            </article>
        </div>
    </div>
</template>

<script>
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
        // this.$http.get("http://jsonplaceholder.typicode.com/posts")
        this.$http.get("../../static/posts.json")
            .then(data => {
                console.log(data);
                this.blogs = data.body.slice(0,10);
                console.log(this.blogs);
            })
    }
}
</script>

<style scoped>
.show-blogs{
    margin: 0 auto;
    max-width: 800px;
}
h1{
    margin: 20px;
}

input[type="text"]{
    display: block;
    margin: 20px;
}

.single-blog{
    box-sizing: border-box;

    margin: 20px;
    padding: 20px 0;

    background: #eee
}
</style>

