<template>
    <div>
        <h1>密码登录</h1>
        <div>
            <div id="Logdiv1">
                <form class="Loginform1">
                    <div class="Logindiv1">
                        <lable class="size1">账号</lable>
                        <input class="size1 pos1" type="text" v-model="userName" placeholder="请输入账号">
                    </div>
                    <div class="line"></div>
                    <div class="Logindiv2">
                        <lable class="size1">密码</lable>
                        <input class="size1 pos1" type="password" v-model="password" placeholder="请输入密码">
                    </div>
                </form>
                <div>
                    <div class="denglu" @click="getLog">登录</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .denglu {
        position:absolute;
        left:48%;
        top:53%;
        color: #ffffff;
        width:50px;
        height:27px;
        border-radius: 8px;
        opacity: .5;
        background: #000000
    }

    .line {
        position:absolute;
        display:block;
        width:85%;
        height:0;
        border-bottom: 1px solid #000000;
        margin-top: 23px;
    }
    .pos1 {
        margin-left: 30px;
    }

    input {
        border: none;
        outline: none;
    }

    .size1 {
        font-size:20px
    }

    .Logindiv1{
        position:absolute;
        margin-top: -13px;
    }

    .Logindiv2{
        position:absolute;
        margin-top: 37px;
    }

    .Loginform1{
        width:300px;
        height:50px;
        padding: 30px;
        border: 1px solid #000000;
        border-radius: 8px;
        font-style:normal;
        font-weight:400;
        line-height:20px;
        font-size: 14px;
        color: #212121;
        margin: 0 auto;
        position:relative;
    }
</style>

<script>
    export default{
        name:"LoginView",
        methods:{
            getLog(){
                if(!this.userName && !this.password){
                    alert('账号和密码不能为空');
                return;
                }
                if(!this.userName){
                    alert('账号不能为空');
                return;
                }
                if(!this.password){
                    alert('密码不能为空');
                return;
                }
                if(this.userName === "MxCat" || this.userName === "^_^"){
                    if(this.password === "123456"){
                        var change1 = document.getElementById("change1")
                        change1.classList.add("disappear")
                        var change2 = document.getElementById("change2")
                        change2.classList.add("disappear")
                        var change3 = document.getElementById("change3")
                        change3.classList.add("disappear")
                        var change4 = document.getElementById("change4")
                        change4.classList.add("disappear")
                        var change5 = document.getElementById("change5")
                        change5.classList.add("disappear")
                        if(this.userName === "MxCat"){
                            change4.classList.remove("disappear")
                            change2.classList.remove("disappear")
                        } else {
                            change5.classList.remove("disappear")
                            change3.classList.remove("disappear")
                        }
                        window.location.href = 'http://127.0.0.1:8080/#/';
                        return;
                    } else {
                        alert('密码错误');
                    }
                return;
                } else {
                    alert('账号错误');
                return;
                }
            },
        }
    }
</script>