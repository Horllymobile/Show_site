<template>
    <div class="bg-dark">
        <div class="container">
            <div class="row nav">
                <div class="col-lg-3">
                    <router-link to="/" class="navbar-brand text-light">Movie Show</router-link>
                </div>
                <div class="col-lg-6"></div>
                <div class="col-lg-3">
                    <ul class="list-unstyled list nav-list">
                        <li><router-link to="/about" class="text-light">About</router-link></li>
                        <li><router-link to="/sign_in" class="text-light btn btn-success">Sign in</router-link></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>