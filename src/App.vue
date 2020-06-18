<template>
  <div>

    <comp-header/>

    <transition enter-class="trans">
      <router-view class="main"></router-view>
    </transition>

    <comp-footer />
      
  </div>
</template>
<script>
import compHeader from './components/Header_Footer/Header';
import compFooter from './components/Header_Footer/Footer';
export default {
  data(){
    return {

    }
  },
  components:{
    compHeader,
    compFooter
  },
 created(){
   this.$store.dispatch('admin/refreshToken');
 }
}
</script>
<style lang="css" scope>
  .trans{
    transform: translate();
    transition-delay: 10ms;
  }
</style>