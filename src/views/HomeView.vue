<template>
  <div>
    <Login v-if="!isLoggedIn" @login-success="handleLoginSuccess" />
    <div v-else>
      <!-- <NavBar /> -->
      <div class="home-view" :style="{ backgroundImage: `url(${backgroundImage})` }">
        <div class="content">
          <h1 class="title">{{ title }}</h1>
          <p class="subtitle">{{ subtitle }}</p>
          <button class="btn btn-primary" @click="goToEmployees">Employees Management Center</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Login from "@/components/Login.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar,
    Login,
  },
  data() {
    return {
      title: "Welcome to Employee Management",
      subtitle: "Manage your employees, attendance, and payroll easily.",
      backgroundImage: require("../assets/background5.jpg"),
      isLoggedIn: false, // Tracks login status
    };
  },
  methods: {
    goToEmployees() {
      this.$router.push("/employees");
    },
    handleLoginSuccess() {
      this.isLoggedIn = true; // Update login status
    },
  },
};
</script>

<style scoped>
/* Existing styles */
</style>

  
<style scoped>
.home-view {
    height: 100vh;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    
  }
  
.content {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 10px;
  }
  
.title {
    font-size: 70px;
    animation: slideIn 2s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3), 4px 4px 6px rgba(0, 0, 0, 0.2), 6px 6px 8px rgba(0, 0, 0, 0.1);
  } 
.subtitle {
    font-size: 1.2rem;
    animation: slideIn 3s ease-in-out;
    color: black;
  }
  
@keyframes slideIn {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }
</style>
  