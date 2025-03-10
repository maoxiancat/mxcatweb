<template>
    <div>
        <div>
            <nav>
                <router-link to="/Relax/Game/Game1" class="router">猜数字</router-link>
                <lable id="Prolable"> | </lable>
                <router-link to="/Relax/Game/Game2" class="router">飞机大战</router-link>
                <lable id="Prolable"> | </lable>
                <router-link to="/Relax/Game/Game3" class="router">猜灯谜</router-link>
            </nav>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>