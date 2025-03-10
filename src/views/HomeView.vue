<template>
    <div id="div1">
        <p1 id="p11">欢迎来到 ^_^ MxCat</p1>
    </div>
</template>

<style scoped>
    nav {
        text-decoration: none;
        padding: 30px;
    }

    nav a {
        font-weight: bold;
        color: #2c3e50;
        text-decoration: none;
    }

    nav a.router-link-exact-active {
        color: #42b983;
    }

    .big {
        font-size:30px;
        font-weight:bold
    }

    #p11 {
        font-size:70px;
    }
</style>

<script>
    export default {
        name: 'HomeView'
    }
</script>