<template>
  <div class="home">
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container text-center">
          <h1 class="title">Welcome to the HR Dashboard</h1>
          <p class="subtitle">Easily manage employee information and performance reviews</p>
          <router-link to="/dashboard" class="btn btn-success">
            Go to Employees Dashboard
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>

.hero-body {
  padding: 20px;
}
.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
}
.subtitle {
  font-size: 1.5rem;
  color: #ddd;
}
.btn {
  margin-top: 20px;
  padding: 10px 20px;
}
</style>

