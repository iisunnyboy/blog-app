<template>
    <div id="single-blog">
        <h1>
            标题：{{blog.title}}
        </h1>
        <article>
            内容：{{blog.content}}
        </article>
        <p>分类：</p>
        <ul>
            <li v-for="(catetory, index) in blog.categories" :key="index">
                {{catetory}}
            </li>
        </ul>
        <p>作者：{{blog.author}}</p>
    </div>
</template>

<script>
export default {
    name: "SingleBlog",
    data(){
        return {
            id: this.$route.params.id,
            blog:{}
        }
    },
    created(){
        // this.$http.get("http://jsonplaceholder.typicode.com/posts/"+this.id)    //jsonplaceholder
        // this.$http.get("../../static/posts/"+this.id)
        this.$http.get("https://wd0398465287ktocwx.wilddogio.com/posts/"+this.id + ".json") //野狗云
            .then(data=>{
                // this.blog = data.body
                // console.log(data)
                return data.json()
            })
            .then(data=>{
                console.log(data)
                this.blog = data
            })
    }
}
</script>

<style scoped>
#single-blog{
    max-width: 1250px;
    margin: 0 auto;
    border: 1px dotted #aaa;
    padding: 20px;
    background: #eee;
}
</style>
