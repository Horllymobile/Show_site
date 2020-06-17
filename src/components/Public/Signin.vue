<template>
    <div class="container mt-5">
        <h2 class="text-center">Sign in</h2>
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6 col-sm-12">
                <form action="" class="form">
                    <div class="form-group">
                        <label for="">Email</label>
                        <input type="email" placeholder="Email" class="form-control" v-model="formData.email">
                    </div>
                    <div class="form-group">
                        <label for="">Password</label>
                        <input type="password" placeholder="Password" class="form-control" v-model="formData.password">
                    </div>

                    <div class="form-group">
                        <input type="submit" value="Sign in" class="btn btn-dark btn-block" @click.prevent="formHandler()">
                    </div>
                </form>
            </div>
            <div class="col-lg-3"></div>
        </div>
    </div>
</template>
<script>
export default {
    data: function(){
        return{
            formData:{
                email:'testmail@gmail.com',
                password:'testing'
            }
        }
    },
    methods:{
        formHandler: function (){
            console.log(this.formData)
        }
    }
}
</script>
<style>

</style>