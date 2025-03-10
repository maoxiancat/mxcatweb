<template>
    <div>
        <div>
            <nav>
                <router-link to="/Product/MxCat" class="router">MxCat</router-link>
                <lable id="Prolable"> | </lable>
                <router-link to="/Product/^_^" class="router">^_^</router-link>
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

    #Prolable{
        font-size:20px;
    }
</style>
