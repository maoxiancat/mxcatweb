<template>
    <div>
        <div>
            <div id="Showdiv1" @click="ShowChange1">隐藏</div>
            <div id="Showdiv2" class="disappear" @click="ShowChange2">显示</div>
        </div>
    </div>
</template>

<style scoped>
    #Showdiv1,#Showdiv2{
        color: white;
        font-size:20px;
        width: 70px;
        height: 30px;
        opacity: .3;
        background-color: rgb(0, 0, 0);
        position: fixed;
        left:96%;
        top:70%;
        border-radius: 10px 0px 0px 10px;
    }
</style>

<script>
    export default{
      name:"Show",
      methods:{
        ShowChange1(){
            var Showdiv1 = document.getElementById("Showdiv1");
            var Showdiv2 = document.getElementById("Showdiv2");
            var guideHead = document.getElementById("guideHead");
            Showdiv1.classList.add("disappear");
            Showdiv2.classList.remove("disappear");
            guideHead.classList.add("disappear");
            var Appdiv1 = document.getElementById("Appdiv1")
            Appdiv1.classList.remove("Approuter2")
            Appdiv1.classList.add("Approuter3")
        },
        ShowChange2(){
            var Showdiv1 = document.getElementById("Showdiv1");
            var Showdiv2 = document.getElementById("Showdiv2");
            var guideHead = document.getElementById("guideHead");
            Showdiv2.classList.add("disappear");
            Showdiv1.classList.remove("disappear");
            guideHead.classList.remove("disappear");
            var Appdiv1 = document.getElementById("Appdiv1")
            Appdiv1.classList.remove("Approuter3")
            Appdiv1.classList.add("Approuter2")
        }
      }
    }
</script>
