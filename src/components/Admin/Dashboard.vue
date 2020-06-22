<template>
    <div class="">
        <div class="row">
            <div class="col-lg-2">
                <comp-menu></comp-menu>
            </div>
            <div class="col-lg-8">
                <comp-post/>
            </div>
            <div class="col-lg-2"></div>
        </div>
    </div>
</template>
<script>
import CompPost from './Comps/Posts';
import CompMenu from './Comps/SideMenu';
export default {
    components:{
        CompPost,
        CompMenu
    }
}
</script>