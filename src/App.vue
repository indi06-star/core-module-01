<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/dashboard">
        
          <h4>  <img src="./assets/tech-solution-logo.jpg" alt="Company Logo" width="50" />Modern Tech-Solutions</h4>
          <span><h5>Dashboard</h5></span>
        </router-link>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" />
          <button class="btn btn-outline-primary" type="button">Search</button>
        </form>
        <button class="btn btn-danger ms-3" @click="showLogoutDialog = true">Logout</button>
      </div>
    </nav>
    <LogoutDialog v-if="showLogoutDialog" @confirm="logout" @cancel="showLogoutDialog = false" />
    <router-view />
  </div>
</template>

<script>
import LogoutDialog from "./components/LogoutDialog.vue";

export default {
  components :{
    LogoutDialog
  },
  data() {
    return {
      showLogoutDialog: false,
    };
  },
  methods: {
    logout() {
      this.showLogoutDialog = false;
      this.$router.push("/"); // Redirect to Home on logout
    },
  },
};
</script>

<style>
.navbar-brand span {
  font-weight: bold;
  margin-left: 10px;
}
</style>

