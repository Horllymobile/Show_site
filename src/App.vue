<template>
  <div>

    <comp-header/>

    <router-view class="main"></router-view>

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
  }
}
</script>