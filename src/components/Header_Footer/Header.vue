<template>
    <div class="bg-primary">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-3">
                    <router-link to="/" class="navbar-brand text-light">Movie Show</router-link>
                </div>
                <div class="col-lg-6"></div>
                <div class="col-lg-3 col-sm-3">
                    <ul class="list-unstyled list">
                        <li><router-link to="/about" class="text-light">About</router-link></li>
                        <li><router-link to="/about" class="text-light">Sign in</router-link></li>
                        <li><router-link to="/about" class="text-light btn btn-success">Sign up</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>