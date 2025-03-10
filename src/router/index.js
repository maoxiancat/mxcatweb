import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomeView
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import('../views/LoginView.vue')
    },
    {
        path: '/Product',
        name: 'Product',
        component: () => import('../views/ProductView.vue'),
        children:[
        {
            path:"MxCat",
            component:() => import("../views/Product/MxCatView.vue"),
            children:[
            {
                path:"MxCatPro1",
                component:() => import("../components/Product/MxCat/MxCatPro1.vue"),
            },
            {
                path:"MxCatPro2",
                component:() => import("../components/Product/MxCat/MxCatPro2.vue"),
            },
            {
                path:"MxCatPro3",
                component:() => import("../components/Product/MxCat/MxCatPro3.vue"),
            },
            {
                path:"MxCatPro4",
                component:() => import("../components/Product/MxCat/MxCatPro4.vue"),
            },
            {
                path:"MxCatPro5",
                component:() => import("../components/Product/MxCat/MxCatPro5.vue"),
            },
            {
                path:"MxCatPro6",
                component:() => import("../components/Product/MxCat/MxCatPro6.vue"),
            },
            {
                path:"MxCatPro7",
                component:() => import("../components/Product/MxCat/MxCatPro7.vue"),
            }
            ]
        },
        {
            path:"^_^",
            component:() => import("../views/Product/^_^View.vue"),
            children:[
            {
                path:"^_^Pro1",
                component:() => import("../components/Product/^_^/^_^Pro1.vue"),
            },
            {
                path:"^_^Pro2",
                component:() => import("../components/Product/^_^/^_^Pro2.vue"),
            },
            {
                path:"^_^Pro3",
                component:() => import("../components/Product/^_^/^_^Pro3.vue"),
            },
            {
                path:"^_^Pro4",
                component:() => import("../components/Product/^_^/^_^Pro4.vue"),
            },
            {
                path:"^_^Pro5",
                component:() => import("../components/Product/^_^/^_^Pro5.vue"),
            },
            {
                path:"^_^Pro6",
                component:() => import("../components/Product/^_^/^_^Pro6.vue"),
            },
            {
                path:"^_^Pro7",
                component:() => import("../components/Product/^_^/^_^Pro7.vue"),
            }
            ]
        }
        ]
    },
    {
        path: '/Show',
        name: 'Show',
        component: () => import('../views/ShowView.vue')
    },
    {
        path: '/Relax',
        name: 'Relax',
        component: () => import('../views/RelaxView.vue'),
        children:[
        {
            path:"Game",
            component:() => import("../views/Relax/GameView.vue"),
            children:[
            {
                path:"Game1",
                component:() => import("../components/Relax/Game/Game1.vue"),
            },
            {
                path:"Game2",
                component:() => import("../components/Relax/Game/Game2.vue")
            },
            {
                path:"Game3",
                component:() => import("../components/Relax/Game/Game3.vue")
            }
            ]
        },
        {
            path:"Music",
            component:() => import("../views/Relax/MusicView.vue")
        },
        {
            path:"Picture",
            component:() => import("../views/Relax/PictureView.vue")
        }
        ]
    },
    {
        path: '/Note',
        name: 'Note',
        component: () => import('../views/NoteView.vue'),
    }
    ]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
