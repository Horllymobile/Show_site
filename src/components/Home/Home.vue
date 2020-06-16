<template>
    <div class="container mt-2">
        <div class="row" v-for="(item, index) in posts" :key="index">

            <div class="col-lg-3">
                <img :src="item.picture" alt="" class="img-responsive movie-image" >
                <h3>{{ item.title }}</h3>
            </div>

        </div>
    </div>
</template>
<script>
import post from './../post/post.js';
export default {
    data() {
        return {

            posts:post
            
        }
    },
}
</script>


<style scoped>
    @import '../../assets/Styles/main.css';
</style>