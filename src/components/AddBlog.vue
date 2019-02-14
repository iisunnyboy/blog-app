<template>
    <div class="add-blog">
        <h2>添加博客</h2>
        <form v-if="!submmited">
            <label for="title" >博客标题</label>
            <input type="text" id="title" v-model="blog.title"> 
            <label>博客内容</label>
            <textarea v-model="blog.content"></textarea>
            <div id="checkboxes">
                <label for="Vue">Vue.js</label>
                <input type="checkbox" value="Vue.js" v-model="blog.categories" id="Vue">
                <label for="Node">Node.js</label>
                <input type="checkbox" value="Node.js" v-model="blog.categories" id="Node">
                <label for="React">React.js</label>
                <input type="checkbox" value="React.js" v-model="blog.categories" id="React">
                <label for="Angular4">Angular4.js</label>
                <input type="checkbox" value="Angular4" v-model="blog.categories" id="Angular4">

            </div>
            <label for="authors">作者</label>
            <select id="authors" v-model="blog.author">
                <option v-for="author in authors" :key="author">{{author}}</option>
            </select>
            <button @click.prevent="post">添加博客</button>
        </form>

        <hr>
        <div v-if="submmited">
            <h3>发布成功</h3> 
        </div>
        <div id="preview" v-if="submmited">
            <h3>博客总览</h3>
            <p>博客标题: {{blog.title}}</p>
            <p>博客内容: </p>
            <p>{{blog.content}}</p>
            <p>博客分类: </p>
            <ul>
                <li v-for="category in blog.categories" :key="category">{{category}} </li>
            </ul>
            <p>作者: {{blog.author}}</p>
        </div>
    </div>
</template>

<script>

import axios from "axios"

export default {
    name : "add-blog",
    data : function(){
        return {
            blog : {
                title : "",
                content : "",
                categories : [],
                author : ""
            },
            authors : ["Herry","Bucky","Hemiah"],
            submmited : false
        }
    },
    methods : {
        post(){
            // this.$http.post("http://jsonplaceholder.typicode.com/posts",{    //jsonplaceholder
            // this.$http.post("https://wd0398465287ktocwx.wilddogio.com/posts.json",this.blog)    //野狗云
            axios.post("https://wd0398465287ktocwx.wilddogio.com/posts.json",this.blog)    //aixos
                .then( data => {
                    // console.log(data)
                    this.submmited = true
                })
        }
    }
}
</script>

<style scoped>
.add-blog *{
    box-sizing: border-box;
}
.add-blog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
}

label{
    display: block;
    margin: 20px 0 10px;
}

input[type="text"], textarea, select{
    display: block;
    width: 100%;
    padding: 8px;
}

#checkboxes label {
    display: inline;
    margin-top: 0;
}

#checkboxes input{
    display: inline;
    margin-top: 10px;
}

button{
    display: block;
    margin: 20px 0;
    border: 0;
    border-radius: 4px;
    padding: 12px;
    
    background: crimson;
    color: #fff;

    font-size: 18px;
    cursor: pointer;
    
}

#preview{
    margin: 30px 0;
    border: 1px dotted #ccc;
    padding: 20px,20px;
}
h3{
    margin-top: 10px;
}
</style>


