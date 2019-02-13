<template>
    <nav>
        <ul>
            <li>
                <router-link to="/" exact>博客总览</router-link>
                <router-link to="/addblog" exact>添加博客</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "BlogHeader"
}
</script>

<style scoped >
nav{
    background: crimson;
    max-width: 1300px;
    margin: 0 auto 40px auto;
    padding: 30px 0;
}

ul{
    list-style-type:none;
    text-align: center;
    margin: 0px;
}

li{
    display:inline-block;
    margin: 0px;
}

a{
    color:#fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 5px;
}
.router-link-active{
    background: rgba(255, 255, 255, 0.8);
    color: #444;
}
</style>


