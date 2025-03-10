<template>
    <div>
        <div>
            <div>这个游戏将会随机生成一个范围在1~100的数字，请猜出其准确的数值</div>
        </div>
        <div>
            <div id="beginGame1" @click="beginGame1">开始游戏</div>
            <input id="game1Input1" class="disappear" type="text" v-model="gnumber" placeholder="请输入一个数字">
            <div id="game1Button1" class="disappear g1submit" @click="submitNumber">提交</div>
            <div id="gamediv2">{{status}}</div>
        </div>
        <div id="gamediv1">
            <div>已尝试次数：{{testTime}}</div>
            <div>已知信息：{{min}} < number < {{max}}</div>
        </div>
        <div id="gamediv3">
            <div>排行榜(仅显示近30日数据)</div>
            <hr>
            <table id="Notetable1">
                <thead>
                    <tr>
                        <th>尝试次数</th>
                        <th id="g1th1">时间</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in rankList" :key="index">
                        <td>{{ item.testTime }}</td>
                        <td id="g1td1">{{ item.time }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style scoped>
    .g1submit {
        position:absolute;
        left:48.5%;
        top:60%;
        color: #ffffff;
        width:50px;
        height:25px;
        border-radius: 8px;
        opacity: .5;
        background: #000000
    }

    th{
        position: relative; 
        right: -15px;
        font-weight:normal;
    }

    #g1th1{
        position: relative; 
        right: -50px;
    }

    #g1td1{
        position: relative; 
        right: -75px;
    }

    #gamediv1 {
        position: absolute;
        left:15%;
    }

    #gamediv3 {
        width: 300px;
        height: 300px;
        position: absolute;
        left:75%;
        border: 1.5px solid black;;
        border-radius: 7px 7px 7px 7px;
    }

    hr {
        margin: 10px 0;
        border: 1px solid black;
    }
</style>
 
<script>
import axios from "axios";
 
export default {
    name: "Game1",
    data() {
        return {
            gnumber: '',
            status: '',
            min:0,
            max:101,
            testTime: 0,
            rankList: [],
        }
    },
    async mounted() {
        try {
            const response = await axios.get("http://localhost:8080/api/getg1rankList");
            this.rankList = response.data;
        } catch (error) {
            console.error("There was an error fetching the data!", error);
        }
    },
    methods: {
        async getRankList() {
            try {
                    const response = await axios.get("http://localhost:8080/api/getg1rankList");
                    this.rankList = response.data;
                } catch (error) {
                    console.error("There was an error fetching the data!", error);
                }
            },

        beginGame1(){
                var game1Input1 = document.getElementById("game1Input1");
                var game1Button1 = document.getElementById("game1Button1");
                game1Input1.classList.remove("disappear");
                game1Button1.classList.remove("disappear");
                this.status =  '',
                this.testTime = 0;
                this.min = 0;
                this.max = 101;
        },
        async submitNumber() {
            if (!this.gnumber || isNaN(this.gnumber)) {
                alert('请输入一个有效的数字');
                return;
            }

            try {
                const response = await axios.post("http://localhost:8080/api/game1", {
                    number: this.gnumber,
                });
                this.status = response.data.status;
                this.testTime = response.data.testTime;
                if(this.min < response.data.min){
                    this.min = response.data.min
                }
                if(this.max > response.data.max){
                    this.max = response.data.max;
                }
                this.testTime = response.data.testTime;
                this.gnumber = '';
                if (this.status === "恭喜你，猜对了") {
                    var game1Input1 = document.getElementById("game1Input1");
                    var game1Button1 = document.getElementById("game1Button1");
                    game1Input1.classList.add("disappear");
                    game1Button1.classList.add("disappear");
                    await this.addRankList();
                }
            } catch (error) {
                console.error('请求出错:', error);
                alert('操作失败，请稍后重试');
            }
        },
        async addRankList() {
            const localDateString = new Date().toLocaleDateString();
            await axios.post("http://localhost:8080/api/addrank",{
                testTime: this.testTime,
                time: localDateString,
            });
            await this.getRankList();
        }
    },
};
</script>
