import Vue from 'vue';

import VueRouter from 'vue-router';


import Home from './../components/Home/Home.vue';

import About from './../components/Public/About';

Vue.use(VueRouter);

let routes = [
    {path: "/", component: Home, name:"home" },
    {path: "/about", component: About, name:"about" }
]


export default new VueRouter({
    mode:"history",
    routes,
    scrollBehavior(){
        return {
            x:0,y:0
        }
    }
})