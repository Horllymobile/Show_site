import Vue from 'vue';

import VueRouter from 'vue-router';


import Home from './../components/Home/Home.vue';

import About from './../components/Public/About';
import Signin from './../components/Public/Signin';
import Details from './../components/Public/Details';


import Dashboard from './../components/Admin/Dashboard.vue';

import store from './../components/store/store';

Vue.use(VueRouter);

const authGuard = {
    beforeRouteEnter (to, from, next) {

        const redirect =() => {
            if(store.state.admin.toke){
                if(to.path === '/signin'){
                    next("/dashboard");
                }else{
                    next();
                }
            }else{
                if(to.path === '/signin'){
                    next();
                }
            }
        }
        if(store.state.admin.refreshLoading){
            store.watch((state, getters) => getters['admin/refreshLoading'], () => {
                redirect();
            })
        }else{
            redirect();
        }
    }
}

let routes = [
    // Public
    {path: "/", component: Home, name:"home" },
    {path: "/about", component: About, name:"about" },
    {path: "/signin", component: Signin, name:"sginin", ...authGuard},
    {path: "/details:position", component: Details, name:"details" },

    // Private
    {path:'/dashboard', component:Dashboard, name:'dashboard',...authGuard}
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