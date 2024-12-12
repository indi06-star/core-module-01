<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Modern Tech</a>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-light" type="submit">Search</button>
      </form>
      <button class="btn btn-danger ms-3" @click="logout">Logout</button>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      if (confirm("Are you sure you want to log out?")) {
        alert("Logged out");
      }
    },
  },
};
</script>

<style>
/* Add custom styles */
</style>

