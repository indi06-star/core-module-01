<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// Importing the NavBar component

import AttendanceCalender from './components/AttendanceCalender.vue';
import LeaveRequest from './components/LeaveRequest.vue';
import Login from './components/Login.vue';
import NavBar from './components/NavBar.vue';
import Payroll from './views/PayrollView.vue';

export default {
  components: {
    NavBar, // Registering the NavBar component
    Payroll,
    AttendanceCalender,
    LeaveRequest,
    Login

  },
  data() {
      return {
        title: "Welcome to Employee Management",
        subtitle: "Manage your employees, attendance, and payroll easily.",
        backgroundImage: require("./assets/background4.jpg"), // Replace with your background image URL
      };
    },
    methods: {
      goToDashboard() {
        this.$router.push("/dashboard");
      },
    },
  };
</script>
<style scoped >
/* Hero section styles */
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
    font-size: 2.5rem;
    animation: slideIn 2s ease-in-out;
  }
  
.subtitle {
    font-size: 1.2rem;
    animation: slideIn 3s ease-in-out;
  }
  
@keyframes slideIn {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(0);
    }
  }

@keyframes moveBg {
  from {
    background-position: 0 0;
  }
  to {
    background-position: 100% 0;
  }
}
.hero-body {
  padding: 20px;
}
/* Title animation */
.title {
  font-size: 60px;
  font-weight: bold;
  color: black;
  opacity: 0;
  transform: translateX(-50%);
  animation: slideInTitle 2s ease-out forwards; /* Slide in from left */
}
@keyframes slideInTitle {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
/* Subtitle animation */
.subtitle {
  font-size: 1.5rem;
  color: #ddd;
  opacity: 0;
  transform: translateX(-50%);
  animation: slideInSubtitle 2.5s ease-out forwards; /* Slight delay after title */
  color: black;
}
@keyframes slideInSubtitle {
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
/* Button hover effect */
.btn {
  margin-top: 20px;
  box-shadow: 20px 20px 4px rgba(0, 0, 0, 0.4);
  padding: 10px 20px;
  background-color: green;
  color: white;
  font-size: 1.2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out; /* Smooth transition */
}
.btn:hover {
  background-color: #588b5a;
  transform: scale(1.1); /* Slight zoom effect */
}
/* Button fade-in animation */
.animated-btn {
  opacity: 0;
  animation: fadeInBtn 3s ease-out forwards; /* Delayed fade-in */
}
@keyframes fadeInBtn {
  to {
    opacity: 1;
  }
}
</style>
