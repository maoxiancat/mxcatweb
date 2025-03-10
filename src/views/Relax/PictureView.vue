<template>
    <div>
        <div>
            <p3>学累了?那就来点随机图片吧</p3>
        </div>
        <div>
            <p4 id="Picp41">风景</p4>
            <p4 id="Picp42">动物</p4>
            <p4 id="Picp43">动漫</p4>
        </div>
        <div>
            <div id="Picdiv1" @click="PicChange1">来一张</div>
            <div id="Picdiv2" @click="PicChange2">来一张</div>
            <div id="Picdiv3" @click="PicChange3">来一张</div>
        </div>
        <div>
            <img id="Picimg1" class="disappear Picsize" @click="Pichange1" src="">
            <img id="Picimg2" class="disappear Picsize" @click="PicChange2" src="">
            <img id="Picimg3" class="disappear Picsize" @click="PicChange3" src="">
        </div>
    </div>
</template>

<style scoped>
    .Picsize{
        width: 300px;
    }

    #Picdiv1,#Picdiv2,#Picdiv3{
        color: white;
        font-size:17px;
        width: 60px;
        height: 25px;
        opacity: .5;
        background-color: rgb(0, 4, 255);
        border-radius: 10px 10px 10px 10px;
    }

    #Picdiv1{
        position: absolute;
        left:22.5%;
        top:35%;
    }

    #Picdiv2{
        position: absolute;
        left:47.5%;
        top:35%;
    }

    #Picdiv3{
        position: absolute;
        left:72.5%;
        top:35%;
    }

    #Picimg1{
        position: absolute;
        left:15%;
        top:40%;
    }

    #Picimg2{
        position: absolute;
        left:40%;
        top:40%;
    }

    #Picimg3{
        position: absolute;
        left:65%;
        top:40%;
    }

    p3 {
        font-size: 25px;
    }

    p4 {
        font-size: 20px;
    }

    #Picp41 {
        position: absolute;
        left:23%;
        top:30%;
    }

    #Picp42 {
        position: absolute;
        left:48%;
        top:30%;
    }

    #Picp43 {
        position: absolute;
        left:73%;
        top:30%;
    }
</style>

<script>
    export default{
        name: "Picture",
        methods:{
            PicChange1(){
                var Picimg1 = document.getElementById("Picimg1");
                Picimg1.classList.remove("disappear")
                var urlnum1 = Math.floor(Math.random() * 7) + 1;
                var imgurl1 = `./Pictures/landscape/${urlnum1}.jpg`;
                Picimg1.src = imgurl1;
            },
            PicChange2(){
                var Picimg2 = document.getElementById("Picimg2");
                Picimg2.classList.remove("disappear")
                var urlnum2 = Math.floor(Math.random() * 7) + 1;
                var imgurl2 = `./Pictures/animals/${urlnum2}.jpg`;
                Picimg2.src = imgurl2;
            },
            PicChange3(){
                var Picimg3 = document.getElementById("Picimg3");
                Picimg3.classList.remove("disappear")
                var urlnum3 = Math.floor(Math.random() * 7) + 1;
                var imgurl3 = `./Pictures/anime/${urlnum3}.jpg`;
                Picimg3.src = imgurl3;
            }
        }
    }
</script>
