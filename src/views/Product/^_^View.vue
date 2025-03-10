<template>
    <div>
        <div>
            <h2>^_^ 的作品页面</h2>
        </div>
        <div>
            <nav>
                <router-link to="/Product/^_^/^_^Pro1" class="router">作品a</router-link>
                <lable id="Prolable"> | </lable>
                <router-link to="/Product/^_^/^_^Pro2" class="router">作品b</router-link>
                <lable id="Prolable"> | </lable>
                <router-link to="/Product/^_^/^_^Pro3" class="router">作品c</router-link>
                <lable id="Prolable"> | </lable>
                <router-link to="/Product/^_^/^_^Pro4" class="router">作品d</router-link>
                <lable id="Prolable"> | </lable>
                <router-link to="/Product/^_^/^_^Pro5" class="router">作品e</router-link>
                <lable id="Prolable"> | </lable>
                <router-link to="/Product/^_^/^_^Pro6" class="router">作品f</router-link>
                <lable id="Prolable"> | </lable>
                <router-link to="/Product/^_^/^_^Pro7" class="router">作品g</router-link>
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
