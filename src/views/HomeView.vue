<template>
  <div class="back">
    <NavBar/>
    <div class="home-view" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <div class="content">
        <h1 class="title">{{ title }}</h1>
        <p class="subtitle">{{ subtitle }}</p>
        <button class="btn btn-primary" @click="goToDashboard">Employees Dashboard</button>
      </div>
    </div>
  </div>
 
  </template>
  
  <script>
import NavBar from '@/components/NavBar.vue';

  export default {
    components:{
        NavBar
    },
    data() {
      return {
        title: "Welcome to Employee Management",
        subtitle: "Manage your employees, attendance, and payroll easily.",
        backgroundImage: require("../assets/background5.jpg"), // Replace with your background image URL
      };
    },
    methods: {
      goToDashboard() {
        this.$router.push("/dashboard");
      },
    },
  };
  </script>
  
<style scoped>
.home-view {
    height: 85vh;
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
  