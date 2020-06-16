<template>
    <div>
        <compHeader />
            
        <compFooter />
    </div>
</template>
<script>
import compHeader from '../Header_Footer/Header.vue';
import compFooter from '../Header_Footer/Footer.vue';
export default {
    data() {
        return {
            
        }
    },
    components:{
        compHeader,
        compFooter
    }
}
</script>


<style scoped>
    @import '../../assets/Styles/main.css';
</style>