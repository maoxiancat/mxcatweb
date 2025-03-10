<template>
    <div>
        <div>
            <nav>
                <router-link to="/Relax/Game" class="router">游戏</router-link>
                <lable class="Rellable"> | </lable>
                <router-link to="/Relax/Music" class="router">音乐</router-link>
                <lable class="Rellable"> | </lable>
                <router-link to="/Relax/Picture" class="router">图片</router-link>
            </nav>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
    .router {
        font-size:20px;
    }

    .Rellable{
        font-size:20px;
    }
</style>
