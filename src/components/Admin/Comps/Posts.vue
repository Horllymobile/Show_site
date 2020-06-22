<template>
    <div class="mt-3">
        <div class="row " v-for="(item, index) in movies" :key="index">
            <div class="col-lg-12 m-3 p-2 bg-secondary">
                <div class="row">
                    <div class="col-lg-4">
                        <img class="" :src="item.picture[0]" width="100%" height="150"  alt="Card image cap">
                    </div>
                    <div class="col-lg-4">
                        <span class="card-title text-light">{{ item.title }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import posts from './../../post/post';
export default {
    data(){
        return {
            movies: posts
        }
    }
}
</script>