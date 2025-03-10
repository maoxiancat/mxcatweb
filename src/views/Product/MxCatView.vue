<template>
    <div>
        <div>
            <div>
                <h2>MxCat 的作品页面</h2>
            </div>
        </div>
        <div>
            <nav>
                <router-link to="/Product/MxCat/MxCatPro1" class="router">作品1</router-link>
                <lable id="Prolable"> | </lable>
                <router-link to="/Product/MxCat/MxCatPro2" class="router">作品2</router-link>
                <lable id="Prolable"> | </lable>
                <router-link to="/Product/MxCat/MxCatPro3" class="router">作品3</router-link>
                <lable id="Prolable"> | </lable>
                <router-link to="/Product/MxCat/MxCatPro4" class="router">作品4</router-link>
                <lable id="Prolable"> | </lable>
                <router-link to="/Product/MxCat/MxCatPro5" class="router">作品5</router-link>
                <lable id="Prolable"> | </lable>
                <router-link to="/Product/MxCat/MxCatPro6" class="router">作品6</router-link>
                <lable id="Prolable"> | </lable>
                <router-link to="/Product/MxCat/MxCatPro7" class="router">作品7</router-link>
            </nav>
        </div>
        <div>
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped>
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

    .big {
        font-size:30px;
        font-weight:bold
    }
</style>
