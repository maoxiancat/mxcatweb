<template>
    <div>
        <div id="Notediv1">
            <div>
                <div id="Notediv2">记事本</div>
            </div>
            <div>
                <div>
                    <input id="Noteinput1" v-model="newTitle" placeholder="请输入待办事项...">
                    <button id="Notebutton1" @click="addTitle">添加</button>
                    <div id="Notediv3"></div>
                </div>
                <div>
                    <table id="Notetable1">
                        <thead>
                            <div id="Notediv4">
                                <tr>
                                    <th id="noteth2">待办事项</th>
                                    <th id="noteth1">操作</th>
                                </tr>
                            </div>
                        </thead>
                        <tbody>
                            <tr v-for="(row, index) in titleList" :key="row.id" :class="{'success-row': row.status}">
                                <td style="text-align: center;">{{ row.title }}</td>
                                <td style="text-align: right;">
                                    <button v-show="!row.status" @click="changeStatus(index, row)" style="margin-right: 5px;">完成</button>
                                    <button v-show="row.status" @click="changeStatus(index, row)" style="margin-right: 5px;">未完成</button>
                                    <button @click="deleteTitle(index, row.id)" style="margin-right: 5px;">删除</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    #Notediv4 {
        width: 100%;
        height: 50px;
    }

    #noteth1{
        position: absolute;
        left:91.5%;
    }

    #noteth2{
        position: absolute;
        left:13%;
    }

    #test{
        position:absolute;
        left:77%;
    }

    #Notediv1 {
        position: absolute;
        left:23%;
        top:15%;
        width: 50%;
        height: 1500px;
        border:3px solid rgb(0, 0, 0);
        border-radius: 7px 7px 7px 7px;
    }

    #Notediv2 {
        position:relative;
        top:17px;
        font-size:30px;
        font-weight:bold;
    }

    .success-row {
        text-decoration: line-through;
    }

    #Noteinput1 {
        position:absolute;
        top:5%;
        left: 15%;
        width: 60%;
        padding: 10px;
    }

    #Notebutton1 {
        position:absolute;
        top:5%;
        left: 80%;
        padding: 10px 20px;
    }

    #Notediv3{
        position: absolute;
        top:9%;
        width: 100%;
        height: 0px;
        border:1px solid rgb(0, 0, 0);
    }

    #Notetable1{
        position: absolute;
        top:10.3%;
        width: 100%;
        border-collapse: collapse;
    }
</style>

<script>
    import axios from "axios"
    export default {
        name: "Note",
        data() {
            return {
                titleList: [],
                newTitle: ""
            };
        },
        async mounted() {
            try {
                const response = await axios.get("http://localhost:8080/api/note/gettable");
                this.titleList = response.data;
            } catch (error) {
                console.error("There was an error fetching the data!", error);
                alert('获取待办事项列表失败，请稍后重试');
            }
        },
        methods: {
            async changeStatus(index, row) {
                try {
                    await axios.put(`http://localhost:8080/api/note/changestatus/${row.id}`, {
                        status: !row.status
                    });
                    this.titleList[index].status = !row.status;
                    this.gettable();
                    console.log(1)
                } catch (error) {
                    console.error('请求出错:', error);
                    alert('操作失败，请稍后重试');
                }
            },

            async deleteTitle(index, id) {
                try {
                    await axios.delete(`http://localhost:8080/api/note/deleteTitle/${id}`);
                    this.titleList.splice(index, 1);
                } catch (error) {
                    console.error('请求出错:', error);
                    alert('删除操作失败，请稍后重试');
                }
            },

            async addTitle() {
                if (this.newTitle.trim()) {
                    try {
                        await axios.post("http://localhost:8080/api/note/addtitle", {
                            title: this.newTitle
                        });
                        this.gettable();
                        this.newTitle = "";
                    } catch (error) {
                        console.error('请求出错:', error);
                        alert('添加待办事项失败，请稍后重试');
                    }
                } else {
                    alert("title不能为空哦");
                }
            },

            async gettable() {
                try {
                    const response = await axios.get("http://localhost:8080/api/note/gettable");
                    this.titleList = response.data;
                } catch (error) {
                    console.error("There was an error fetching the data!", error);
                    alert('获取待办事项列表失败，请稍后重试');
                }
            }
        }
    };
</script>
