<template>
    <div>
        <div id="Mucdiv" @click="Muchange">来一首</div>
        <div>
            <audio controls id="Mucaudio">
                <source id="Mucsource" src="" type="audio/mpeg">
            </audio>
        </div>
    </div>
</template>

<style scoped>
    #Mucdiv{
        color: white;
        font-size:17px;
        width: 60px;
        height: 25px;
        opacity: .5;
        background-color: rgb(0, 4, 255);
        border-radius: 10px 10px 10px 10px;
        position: absolute;
        left:48.3%;
        top:31%;
    }
</style>

<script>
    export default{
        name: "Music",
        methods:{
            Muchange(){
                var Mucsource = document.getElementById("Mucsource");
                var Mucaudio = document.getElementById("Mucaudio");
                var urlnum = Math.floor(Math.random() * 3) + 1;
                var mucurl = `./Musics/${urlnum}.mp3`;
                Mucsource.src = mucurl;
                Mucaudio.load();
            }
        }
    }
</script>
