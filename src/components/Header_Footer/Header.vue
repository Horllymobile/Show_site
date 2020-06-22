<template>
  <nav class="navbar row navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <div class="col-md-3 col-lg-3 col-sm-3">
        <router-link class="navbar-brand" to="/" exact-active-class="active">Movie Show</router-link>
      </div>
      <div class="col-md-6 col-lg-6 col-sm-6"></div>
      <div class="col-md-3 col-lg-3 col-sm-3">
        <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto" v-if="!isAuth">
            <li class="nav-item">
              <router-link class="nav-link" to="#" exact-active-class="active">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/about" exact-active-class="active">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signin" exact-active-class="active">Sign in</router-link>
            </li>
          </ul>
          <div class="navbar-text">
            <ul class="navbar-nav mr-auto" v-if="isAuth">
              <li class="nav-item">
                <router-link class="nav-link" to="/dashboard" exact-active-class="active">Dashboard</router-link>
              </li>
              <li class="nav-item">
                <span class="nav-link" @click="logoutUser()">Logout</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    logoutUser() {
      this.$store.commit("admin/logoutUser");
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters["admin/isAuth"];
    }
  }
};
</script>

<style scoped>
.active {
  color: blue !important;
}
</style>