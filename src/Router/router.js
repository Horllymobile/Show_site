import Vue from 'vue';

import VueRouter from 'vue-router';


import Home from './../components/Home/Home.vue';

import About from './../components/Public/About';
import Signin from './../components/Public/Signin';
import Details from './../components/Public/Details';


Vue.use(VueRouter);

let routes = [
    {path: "/", component: Home, name:"home" },
    {path: "/about", component: About, name:"about" },
    {path: "/sign_in", component: Signin, name:"sgin_in" },
    {path: "/details:position", component: Details, name:"details" }
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