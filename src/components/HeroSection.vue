<template>
    <div class="hero">
      <div class="hero-body">
        <div class="container text-center">
          <img src="@/assets/tech-solution-logo.jpg" alt="Company Logo" class="logo" />
          <h1 class="title">Welcome to the HR Dashboard</h1>
          <p class="subtitle">
            Streamline employee management, performance reviews, and payrolls.
          </p>
          <button @click="navigateToDashboard" class="btn btn-primary btn-lg mt-4">
            Go to Employees Dashboard
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
    methods: {
      navigateToDashboard() {
        this.$router.push('/employees-dashboard'); // Redirect to the Dashboard page
      },
    },
  };
  </script>
  
  <style scoped>
  /* Hero Section Styles */
  .hero {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: linear-gradient(to right, #4caf50, #81c784);
    color: white;
    height: 100vh;
    padding: 20px;
  }
  
  /* Logo */
  .logo {
    width: 150px;
    height: auto;
    margin-bottom: 20px;
  }
  
  /* Title */
  .title {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 15px;
  }
  
  /* Subtitle */
  .subtitle {
    font-size: 1.5rem;
    color: #f1f8e9;
    margin-bottom: 30px;
  }
  
  /* Button */
  .btn {
    padding: 10px 20px;
    font-size: 1.2rem;
  }
  </style>
  