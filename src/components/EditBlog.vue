<template>
    <div class="add-blog">
        <h2>编辑博客</h2>
        <form v-if="!submmited">
            <label for="title" >博客标题</label>
            <input type="text" id="title" v-model="blog.title"> 
            <label>博客内容</label>
            <textarea v-model="blog.content"></textarea>
            <ul>
                <li v-for="(category,index) in allCategories" :key="index">
                    <label for="category">{{category}}</label>
                    <input type="checkbox" :value="category" :id="category" v-model="blog.categories">
                </li>
            </ul>
            <label for="authors">作者</label>
            <select id="authors" v-model="blog.author">
                <option v-for="author in authors" :key="author">{{author}}</option>
            </select>
            <button @click.prevent="post">保存博客</button>
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
export default {
    name : "add-blog",
    data : function(){
        return {
            id: this.$route.params.id,
            blog : {},
            authors : ["Herry","Bucky","Hemiah"],
            submmited : false,
            allCategories:[
                "Vue.js","Node.js","React.js","Angolar4"
            ]
        }
    },
    methods : {
        post(){
            // this.$http.post("http://jsonplaceholder.typicode.com/posts",{    //jsonplaceholder
            this.$http.put("https://wd0398465287ktocwx.wilddogio.com/posts/"+this.id+".json",this.blog)    //野狗云
                .then( data => {
                    console.log(data)
                    this.submmited = true
                })
        }
    },
    created(){
        this.$http.get("https://wd0398465287ktocwx.wilddogio.com/posts/"+this.id+".json")
            .then(response => {
                // console.log("A:",response.body)
                // return response.body
                return response.json()
                // this.blog = response.body
            })
            .then(response => {
                // console.log(response)
                this.blog = response
            })
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

li{
    display:inline;
}
li label{
    display:inline;
}
</style>


