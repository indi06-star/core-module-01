<template>
  <NavBar/>
   <div class="home">
     <section class="hero is-dark">
       <div class="hero-body">
         <div class="container text-center">
           <h1 class="title animated-title">Welcome to the HR Dashboard</h1>
           <p class="subtitle animated-subtitle">
             "Streamlining HR processes with ease, empowering teams to thrive."
           </p>
           <router-link to="/dashboard" class="btn btn-success animated-btn">
             Go to Employees Dashboard
           </router-link>
         </div>
       </div>
     </section>
   </div>
 </template>
 
 <script>
import NavBar from './components/NavBar.vue';

 
 
 export default {
   components: {
    NavBar
  
   },
   name: 'HomeView',
 };
 </script>
 
 <style scoped>
 .hero {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   height: 100vh;
   text-align: center;
   background: url("./assets/background4.jpg");
   background-repeat: repeat;
   background-position: center;
   background-attachment: fixed; /* Adds the moving effect */
   /* background-size: cover; */
   color: white;
   animation: moveBg 20s linear infinite; /* Background animation */
   font-size: 100px;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   /* background-size: cover; */
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
   color:white;
   opacity: 0;
   transform: translateX(-50%);
   animation: slideInTitle 2s ease-out forwards; /* Slide in from left */
   color: black;
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
   transition: all 0.3s ease-in-out; /* Ease-in-out for smooth transition */
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
 