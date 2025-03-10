<template>
    <div>
        <div>
            <div id="g3div4">题目</div>
            <div class="g3submit1" @click="getQuestion">抽取题目</div>
            <div  id="g3div5">{{question}}</div>
            <input id="g3input1" type="text" v-model="userAnswer" placeholder="请输入你的答案">
            <div class="g3submit2" @click="checkAnswer">提交</div>
            <div id="g3div2" class="disappear">恭喜你，回答正确</div>
            <div id="g3div3" class="disappear">回答错误</div>
        </div>
        <div id="g3div6">
            <div>猜不出来？正确答案在这</div>
            <div class="g3submit3" @click="getAnswer">获取答案</div>
            <div id="g3div1" class="disppear">{{answer}}</div>
        </div>
    </div>
</template>

<style scoped>
    #g3div2,#g3div3{
        position: absolute;
        left:48%;
        top:56%;
    }

    #g3div6 {
        position: absolute;
        left:44.5%;
        top:60%;
    }

    #g3input1 {
        font-size: 15px;
        width: 300px;
        height: 30px;
        position: absolute;
        left:40.5%;
        top:47%;
        border: 1.5px solid black;;
        border-radius: 7px 7px 7px 7px;
    }

    #g3div5 {
        width: 500px;
        height: 70px;
        position: absolute;
        left:34.3%;
        top:33%;
        border: 1.5px solid black;;
        border-radius: 7px 7px 7px 7px;
        font-size: 17px;
    }

    .g3submit1 {
        position: absolute;
        top: 43%;
        left:47.7%;
        color: #ffffff;
        width:77px;
        height:23px;
        border-radius: 8px;
        opacity: .5;
        background: #000000
    }

    .g3submit2 {
        position: absolute;
        top: 52%;
        left:48.5%;
        color: #ffffff;
        width:50px;
        height:25px;
        border-radius: 8px;
        opacity: .5;
        background: #000000
    }

    .g3submit3 {
        position: absolute;
        top: 100%;
        left:30%;
        color: #ffffff;
        width:70px;
        height:25px;
        border-radius: 8px;
        opacity: .5;
        background: #000000
    }

    #g3div4 {
        font-size: 20px;
    }
</style>

<script>
import axios from 'axios';
export default {
    name: "Game3",
    data() {
        return {
            question: "",
            answer: "",
            userAnswer: ""
        }
    },
    methods: {
        async getQuestion() {
            this.answer = ''
            var g3div1 = document.getElementById("g3div1");
            g3div1.classList.add("disappear");
            var g3div2 = document.getElementById("g3div2");
            g3div2.classList.add("disappear");
            var g3div3 = document.getElementById("g3div3");
            g3div3.classList.add("disappear");
            try {
                const response = await axios.get("http://localhost:8080/api/getquestion");
                this.question = response.data.topic;
                this.answer = response.data.answer;
            } catch (error) {
                console.error("There was an error fetching the data!", error);
            }
        },
        checkAnswer() {
            if(this.answer == this.userAnswer){
                var g3div3 = document.getElementById("g3div3");
                g3div3.classList.add("disappear");
                var g3div2 = document.getElementById("g3div2");
                g3div2.classList.remove("disappear");
            } else {
                var g3div2 = document.getElementById("g3div2");
                g3div2.classList.add("disappear");
                var g3div3 = document.getElementById("g3div3");
                g3div3.classList.remove("disappear");
            }
            this.userAnswer = '';
        },
        getAnswer() {
            var g3div1 = document.getElementById("g3div1");
            g3div1.classList.remove("disappear");
        }
    }
}
</script>