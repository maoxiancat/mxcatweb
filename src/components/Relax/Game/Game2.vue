<template>
    <div>
        <div id="g2div1">
            <div id="g2div2">
                <div>
                    <div>生命值: {{ lives }}</div>
                    <div id="g2div3" :style="{ top: `${heroposition.top}%`, left: `${heroposition.left}%` }"></div>
                    <div id="g2div4" :style="{ top: `${bulletposition.top}%`, left: `${bulletposition.left}%` }"></div>
                    <div id="g2div5" :style="{ top: `${bulletposition.top}%`, left: `${bulletposition.left}%` }"></div>
                    <div v-for="(enemy, index) in enemyposition" :key="index" id="g2div5" class="enemy" :style="{ top: `${enemy.top}%`, left: `${enemy.left}%` }"></div>
                </div>
            </div>
            <button @click="start()" class="g2button1">开始游戏</button>
        </div>
    </div>
</template>

<style scoped>
    .enemy {
        position: absolute;
        border:solid 1.5px rgb(255, 0, 0);
        width:35px;
        height:20px;
    }

    #g2div4 {
        position: absolute;
        background-color: black;
        width:7px;
        height:7px;
    }

    #g2div3 {
        position: absolute;
        border:solid 1.5px rgb(0, 0, 0);
        width:50px;
        height:30px;
    }

    #g2div2 {
        width:500px;
        height:650px;
        top:300px;
        bottom:0;
        border:solid 1.5px rgb(0, 0, 0);
    }

    .g2button1 {
        position: absolute;
        top:-30px;
        left:43%;
    }

    #g2div1 {
        width:500px;
        height:770px;
        position:absolute;
        margin:0 auto;
        left:0;
        right:0;
        top:300px;
    }
</style>

<script>
export default {
    name: "Game2",
    data() {
        return {
            heroposition: {
                top: 80.5,
                left: 44,
            },
            bulletposition: {
                top: 79.7,
                left: 48.4,
            },
            enemyposition: [
                { top: 0, left: 48.4 },
            ],
            step1:3,
            step2:1,
            intervalId1: null,
            intervalId2: null,
            lives: 3,
            enemySpawnInterval: 3000,
            timeSinceLastSpawn: 0,
        };
    },
    mounted() {
        window.addEventListener('keydown', this.controlhero);
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.controlhero);
        this.stopBullet();
        this.stopEnemy();
    },
    methods: {
        controlhero(event) {
            switch (event.key) {
                case 'w':
                    if(this.heroposition.top > 0.5){
                        this.heroposition.top -= this.step1;
                    }
                    break;
                case 's':
                    if(this.heroposition.top < 80.5){
                        this.heroposition.top += this.step1;
                    }
                    break;
                case 'a':
                    if(this.heroposition.left > 0){
                        this.heroposition.left -= this.step1;
                    }
                    break;
                case 'd':
                    if(this.heroposition.left < 90){
                        this.heroposition.left += this.step1;
                    }
                    break;
            }
        },
        controlbullet() {
            this.bulletposition.top -= this.step2;
            if (this.bulletposition.top < 0) {
                this.bulletposition.top = this.heroposition.top - 0.8;
                this.bulletposition.left = this.heroposition.left + 4.4;
            }
            this.enemyposition.forEach((enemy, index) => {
                if (this.bulletposition.top <= enemy.top &&
                    this.bulletposition.left >= enemy.left &&
                    this.bulletposition.left <= enemy.left + 6) {
                    enemy.top = 0;
                    enemy.left = Math.floor(Math.random() * 90);
                    this.bulletposition.top = this.heroposition.top - 0.8;
                    this.bulletposition.left = this.heroposition.left + 4.4;
                }
            });
        },
        controlenemy() {
            this.enemyposition.forEach(enemy => {
                enemy.top += this.step2;
                if (enemy.top > 80.5) {
                    enemy.left = Math.floor(Math.random() * 90);
                    enemy.top = 0;
                    this.lives--;
                    if (this.lives <= 0) {
                        alert("游戏结束！");
                        this.stopBullet();
                        this.stopEnemy();
                    }
                }
            });
            this.timeSinceLastSpawn += 10;
            if (this.timeSinceLastSpawn >= this.enemySpawnInterval) {
                if (this.enemyposition.length < 5) {
                    this.addEnemy();
                }
                this.timeSinceLastSpawn = 0;
                this.enemySpawnInterval = Math.max(500, this.enemySpawnInterval - 50);
            }
        },
        addEnemy(){
            const newEnemy = {
                top: 0,
                left: Math.floor(Math.random() * 90), 
            };
            this.enemyposition.push(newEnemy);
        },
        start() {
            this.stopBullet();
            this.stopEnemy();
            this.startBullet();
            this.startEnemy();
            this.heroposition.left = 44
            this.heroposition.top = 80.5
            this.bulletposition.top = 79.7
            this.bulletposition.left = 48.4
            this.enemyposition.forEach(enemy => {
                enemy.top = 0;
                enemy.left = 48.4;
            });
        },
        startBullet() {
            this.intervalId1 = setInterval(this.controlbullet, 10);
        },
        stopBullet() {
            if (this.intervalId1) {
                clearInterval(this.intervalId1);
                this.intervalId1 = null;
            }
        },
        startEnemy() {
            this.intervalId2 = setInterval(this.controlenemy, 100);
        },
        stopEnemy() {
            if (this.intervalId2) {
                clearInterval(this.intervalId2);
                this.intervalId2 = null;
            }
        },
    },
}
</script>