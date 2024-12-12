<template>
    <ul id="navbar" class="nav justify-content-center">
    <li class="nav-item">
      <router-link to="/" class="nav-link active" aria-current="page" href="index.html">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/dashboard" class="nav-link" href="products.html">DashBoard</router-link>
    </li>
    </ul>
    <main>
      <div class="hero">
    <h1>Welcome to Modern Tech</h1>
    <p>Your HR Solution</p>
  </div>
    </main>
 
</template>

<style>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: lightblue;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: scroll;
  background-size: cover;
  color: white;
}
#navbar {
  font-size: 25px;
  background-color: white; /* Earthy brown color */
  border-bottom: 2px solid #8B4513; /* Dark brown border */
  color: black;
    }

    #navbar .nav-link {
      color: #4B2E2E; /* Dark brown text color */
    }

    #navbar .nav-link:hover {
      color: #8B4513; /* Darker brown on hover */
    }

    /* Slide-in animations */
    @keyframes slideIn {
      from {
        opacity: 0;
        transform: translateX(-100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    /* Apply animation to h1 and p */
    .slide-in {
      animation: slideIn 1.5s ease-out;
    }

    /* Heading styling */
    h1 {
      font-size: 70px;
      color: white;
      text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5);
    }

    /* Paragraph styling */
p {
  font-size: 20px;
      color: white;
    }
</style>
