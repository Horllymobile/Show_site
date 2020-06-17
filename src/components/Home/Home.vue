<template>
    <div class="container mt-2 mb-2">
        <div class="row">
            <div class="col-lg-3 col-sm-12 movie-container mt-2" v-for="(item, index) in posts" :key="index" >
                <div class="card rounded">
                    <div class="card-head">
                        <img :src="item.picture[0]" alt="" width="100%" height="200px">
                    </div>
                    <div class="card-body">
                        <div class="card-title">
                            {{ item.title }}
                        </div>
                    </div>
                    <div class="card-footer">
                       <router-link class="text-secondary" :to="{name:'details', params:{position:index}}">More Details...</router-link>
                        <span style="float:right;" class="badge badge-dark text-light p-2">Rating<span class="badge font-weight-rating text-light">{{ item.rating }}</span> </span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import post from './../post/post.js';
export default {
    data() {
        return {

            posts:post,
            
        }
    },
}
</script>


<style scoped>
    @import '../../assets/Styles/main.css';
</style>