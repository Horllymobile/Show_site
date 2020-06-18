import axios from 'axios';
import router from '../../../Router/router';

const FbAuthUrl = "https://identitytoolkit.googleapis.com/v1";
const FbApiKey = 'AIzaSyBG4LeS4fhCaj4uFEAdQbzBsNdDNIesIo4';

export default  {
    namespaced:true,
    state:{
        token:null,
        refresh:null,
        authFailed:null,
        refreshLoa:null,
    },
    getters:{
        isAuth(state){
            if(state.token){
                return true;
            }
            return false;
        },
        refreshLoading(state){
            return state.refreshLoad;
        }
    },
    mutations:{
        authUser(state, authData){
            state.token = authData.idToken;
            state.refresh = authData.refreshToken;

            //console.log(authData.refreshToken)

            if(authData.type === 'signin'){
                router.push('/dashboard');
            }
        },
        authFail(state,type){
            if(type === 'reset'){
                state.authFailed = false;
            }else{
                state.authFailed = true;
            }
        },
        refreshLoading(state){
            state.refreshLoad = false;
        },
        logoutUser(state){
            state.token = null;
            state.refresh = null;

            localStorage.removeItem('token');
            localStorage.removeItem('refresh');

            router.push('/');
        } 
    },
    actions:{
        login: function({commit}, formdata){
            axios.post(`${FbAuthUrl}/accounts:signInWithPassword?key=${FbApiKey}`,{
                ...formdata,
                returnSecureToken:true
            })
            .then(authData =>{
                let data = authData.data
                commit('authUser', {
                    data,
                    type:'signin'
                });
                //console.log(data);
                localStorage.setItem('token', authData.data.idToken);
                localStorage.setItem('refresh', authData.data.refreshToken);
            })
            .catch(error => {
                console.log(error);
                commit('authFail');
            })
        },
        refreshToken({commit}){
            const refreshToken = localStorage.getItem('refresh');

            if(refreshToken){
                axios.post(`https://securetoken.googleapis.com/v1/token?key=${FbApiKey}`,{
                    grant_type:'refresh_token',
                    refresh_token:refreshToken
                })
                .then(response => {
                    commit('authUser',{
                        idToken:response.data.id_token,
                        refreshToken:response.data.refresh_token,
                        type:'refresh'
                    });
                    commit('refreshLoading');
                    localStorage.setItem('token',response.data.id_token);
                    localStorage.setItem('refresh', response.data.refresh_token);
                })
            }else{
                commit('refreshLoading');
            }
        }
    }
}