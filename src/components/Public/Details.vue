<template>
    <div class="container mt-3 mb-3">
        <div class="row border">
            <div class="col-lg-6 col-sm-12">
                <div class="row border">
                    <div class="col-lg-12 current-img mt-3">
                        <img :src="details.picture[currentImageIndex]" class="img-responsive current-img" alt="">
                    </div>
                    <div class="row mt-3 mb-3" v-for="(item,index) in details.picture" :key="index">
                        <div class="col-lg-2 col-sm-1">
                            <div class="container">
                                <img :src="item" alt="" width="50"  height="50" @click="changeIndex(index)" class="img-responsive other-images">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 mb-3">
                <h1 class="text-secondary title text-center">{{ details.title }}</h1>
                <div class="lead text-secondary">
                    <span> Rating: {{ details.rating }}</span>
                    <span>
                        <a href="#" role="button" class="text-secondary" :style="{'float':'right','color':color}" @click.prevent="getLike">Like</a>
                        <a href="#" class="text-secondary mr-3 " style="float:right;" >Download Now</a>
                    </span>
                </div>
                <div class="description">
                    <p class="lead text-light text-center p-2"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam in amet incidunt dolorem maxime sit dicta cupiditate saepe voluptatum odio veniam, vero numquam. Cum omnis, quasi quo blanditiis atque odit assumenda modi sequi impedit delectus architecto nam a laborum corporis iste. Ab, sequi, cum odio numquam harum deserunt consequatur quisquam velit mollitia quis dolor dolorem minima non, doloribus porro a quod recusandae. Nihil libero, magni rem tempore molestiae tenetur fugiat labore quo doloribus odio repellat, autem laudantium doloremque unde earum quae omnis, eum maiores voluptatem incidunt! Doloribus, 
                    magnam rerum explicabo optio eum quibusdam eius ipsam deleniti odio id, aut obcaecati!</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import post from './../post/post.js';
export default {
    data: function(){
        return{
            details:post[this.$route.params.position],
            currentImageIndex:0,
            like:false,
            color:null,
        }
    },
    methods:{
        changeIndex(index){
            this.currentImageIndex = index;
        },
        getLike(){
            this.like = true;
            this.color = 'green !important'
            console.log(this.like, this.color);
        }
    }
}
</script>