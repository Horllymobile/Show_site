import Vue from 'vue';
import Vuex from 'vuex';

import admin from './Module/admin';



Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        admin
    }
})