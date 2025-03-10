<template>
    <div>
        <div id="guideHead">
            <nav id="guideHead1">
                <ul id="guide">
                    <li class="guide"><router-link to="/" @click="ChangeView1">首页</router-link></li>
                    <li class="guide"><router-link to="/Product" @click="BackChange">作品</router-link></li>
                    <li class="guide"><router-link to="/Show" @click="BackChange">展示</router-link></li>
                    <li class="guide1"><input id="Appinput1" type="text" v-model="Search" placeholder="找不到？不妨搜索看看" @keyup.enter="search"></li>
                    <li class="guide"><router-link to="/Relax" @click="BackChange">放松</router-link></li>
                    <li class="guide"><router-link to="/Note" @click="BackChange">记事本</router-link></li>
                    <li class="guide" id="change1"><router-link to="/Login" @click="ChangeView1">登录</router-link></li>
                    <li class="disappear" id="change4"><img class="Appimg1" src="../public/img/MxCat_avatar.jpg" alt="图片未加载" width=30px></li>
                    <li class="disappear" id="change5"><img class="Appimg1" src="../public/img/^_^_avatar.jpg" alt="图片未加载" width=23px></li>
                    <li class="guide disappear" id="change2">MxCat</li>
                    <li class="guide disappear" id="change3">^_^</li>
                </ul>
            </nav>
        </div>
        <div id="Appdiv1" class="Approuter1">
            <router-view />
        </div>
    </div>
</template>

<style>
    .disappear {
        display: none;
    }

    .Appimg1 {
        border-radius: 50%;
        width: 35px;
    }

    #change4{
        position:absolute;
        left:1490px;
    }

    #change5{
        position:absolute;
        left:1490px;
    }

    #Appinput1{
        width: 550px;
        height: 30px;
    }

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
    
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    nav {
        padding: 30px;
    }

    nav a {
        font-weight: bold;
        color: #2c3e50;
    }

    nav a.router-link-exact-active {
        color: #42b983;
    }

    #goto {
        font-size:30px;
        font-weight:bold
    }

    #guide {
        list-style-type: none;
        display: flex;
        margin-right: 30px;
        padding: 0;
        position: fixed;
        width: 3000px;
        top: 0;
    }

    .guide {
        margin-right: 129px;
        font-weight:bold;
        font-size:25px;
    }

    .guide1 {
        margin-left: -45px;
        margin-right: 95px;
        font-weight:bold;
    }

    #guideHead {
        width: 3000px;
        position: fixed;
        top: 0;
    }

    .Approuter1 {
        margin-top: 300px;
    }

    .Approuter2 {
        margin-top: 100px;
    }

    .Approuter3 {
        margin-top: 30px;
    }
</style>

<script>
    export default{
        name:"App",
        methods:{
        ChangeView1(){
            var Appdiv1 = document.getElementById("Appdiv1")
            Appdiv1.classList.remove("Approuter2")
            Appdiv1.classList.add("Approuter1")
        },
        BackChange(){
            var Appdiv1 = document.getElementById("Appdiv1")
            Appdiv1.classList.remove("Approuter1")
            Appdiv1.classList.add("Approuter2")
            var change1 = document.getElementById("change1")
            /*if(!change1.classList.contains("disappear")){
            alert('请先登录');
            var Appdiv1 = document.getElementById("Appdiv1")
            Appdiv1.classList.remove("Approuter2")
            Appdiv1.classList.add("Approuter1")
            window.location.href = 'http://127.0.0.1:8080/#/Login';
            }*/
        },
        search(){
            if(!change1.classList.contains("disappear")){
                alert('请先登录');
                var Appdiv1 = document.getElementById("Appdiv1")
                Appdiv1.classList.remove("Approuter2")
                Appdiv1.classList.add("Approuter1")
                window.location.href = 'http://127.0.0.1:8080/#/Login';
                return
            }
            if(this.Search==="首页"){
                window.location.href = 'http://127.0.0.1:8080/#/';
                return
            } else if(this.Search==="作品"){
                window.location.href = 'http://127.0.0.1:8080/#/Product';
                return
            } else if(this.Search==="展示"){
                window.location.href = 'http://127.0.0.1:8080/#/Show';
                return
            } else if(this.Search==="放松"){
                window.location.href = 'http://127.0.0.1:8080/#/Relax';
                return
            } else if(this.Search==="记事本"){
                window.location.href = 'http://127.0.0.1:8080/#/Note';
                return
            } else if(this.Search==="登录"){
                window.location.href = 'http://127.0.0.1:8080/#/Login';
                return
            }

            if(this.Search==="MxCat"){
                window.location.href = 'http://127.0.0.1:8080/#/Product/MxCat';
                return
            } else if(this.Search==="^_^"){
                window.location.href = 'http://127.0.0.1:8080/#/Product/^_^';
                return
            }

            if(this.Search==="作品1"){
                window.location.href = 'http://127.0.0.1:8080/#/Product/MxCat/MxCatPro1';
                return
            } else if(this.Search==="作品2"){
                window.location.href = 'http://127.0.0.1:8080/#/Product/MxCat/MxCatPro2';
                return
            } else if(this.Search==="作品3"){
                window.location.href = 'http://127.0.0.1:8080/#/Product/MxCat/MxCatPro3';
                return
            } else if(this.Search==="作品4"){
                window.location.href = 'http://127.0.0.1:8080/#/Product/MxCat/MxCatPro4';
                return
            } else if(this.Search==="作品5"){
                window.location.href = 'http://127.0.0.1:8080/#/Product/MxCat/MxCatPro5';
                return
            } else if(this.Search==="作品6"){
                window.location.href = 'http://127.0.0.1:8080/#/Product/MxCat/MxCatPro6';
                return
            } else if(this.Search==="作品7"){
                window.location.href = 'http://127.0.0.1:8080/#/Product/MxCat/MxCatPro7';
                return
            } else if(this.Search==="作品a"){
                window.location.href = 'http://127.0.0.1:8080/#/Product/^_^/^_^Pro1';
                return
            } else if(this.Search==="作品b"){
                window.location.href = 'http://127.0.0.1:8080/#/Product/^_^/^_^Pro2';
                return
            } else if(this.Search==="作品c"){
                window.location.href = 'http://127.0.0.1:8080/#/Product/^_^/^_^Pro3';
                return
            } else if(this.Search==="作品d"){
                window.location.href = 'http://127.0.0.1:8080/#/Product/^_^/^_^Pro4';
                return
            } else if(this.Search==="作品e"){
                window.location.href = 'http://127.0.0.1:8080/#/Product/^_^/^_^Pro5';
                return
            } else if(this.Search==="作品f"){
                window.location.href = 'http://127.0.0.1:8080/#/Product/^_^/^_^Pro6';
                return
            } else if(this.Search==="作品g"){
                window.location.href = 'http://127.0.0.1:8080/#/Product/^_^/^_^Pro7';
                return
            }

            if(this.Search==="游戏"){
                window.location.href = 'http://127.0.0.1:8080/#/Relax/Game';
                return
            } else if(this.Search==="音乐"){
                window.location.href = 'http://127.0.0.1:8080/#/Relax/Music';
                return
            } else if(this.Search==="图片"){
                window.location.href = 'http://127.0.0.1:8080/#/Relax/Picture';
                return
            }

            if(this.Search==="游戏1"){
                window.location.href = 'http://127.0.0.1:8080/#/Relax/Game/Game1';
                return
            } else if(this.Search==="游戏2"){
                window.location.href = 'http://127.0.0.1:8080/#/Relax/Game/Game2';
                return
            } else if(this.Search==="游戏3"){
                window.location.href = 'http://127.0.0.1:8080/#/Relax/Game/Game3';
                return
            }

            alert('无查询结果');
        }
        }
    }
</script>