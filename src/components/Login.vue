<template>
    <body class="loginbody">
      <!--logo styling-->
        <div class="image-container">
        <img :src="logo" width="300" height="200" alt="logo" class="centered-image">
    </div>
    <div class="login-container">
      <h2><strong>ADMINISTRATOR LOGIN</strong></h2>
      <!-- Login form -->
      <div v-if="!isLoggedIn">
        <form @submit.prevent="submitLogin">
          <div class="form-group">
            <label for="employeeName">Employee Name:</label>
            <input
              type="text"
              id="employeeName"
              v-model="employeeName"
              class="form-control"
              placeholder="Enter admin name"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              v-model="password"
              class="form-control"
              placeholder="Enter admin password"
              required
            />
          </div>
          <button type="submit" class="btn btn-primary">Login</button>
          <button type="submit" @click.prevent="showForgotPasswordForm" class="btn btn-primary">Forgot Password?</button>
        </form>
      </div>
      <!-- Success message -->
      <div v-else>
        <p>Welcome, {{ employeeName }}!</p>
      </div>
  
      <!-- Error modal -->
      <div v-if="showErrorModal" class="error-modal">
        <div class="modal-content">
          <p>Invalid employee name or password.</p>
          <button @click="closeErrorModal" class="btn btn-secondary">Close</button>
        </div>
      </div>
      <!-- Forgot Password Form -->
      <div v-if="showForgotPassword">
        <br>
        <h3 align="center">Reset Password</h3>
        <div class="form-group">
          <label for="newPassword">Administrator id:</label>
          <input type="text" placeholder="Enter Admnistrator Id">
          <label for="newPassword">New Password:</label>
          <input
            type="password"
            id="newPassword"
            v-model="newPassword"
            class="form-control"
            placeholder="Enter new password"
            required
          />
        </div>
        <button @click="submitForgotPassword" class="btn btn-primary">Save Password</button>
      </div>
    </div>   
    </body>
</template>  
<script>
export default {
  data() {
    return {
      employeeName: "",
      password: "",
      isLoggedIn: false,
      showErrorModal: false,
      showForgotPassword: false,
      logo: require("../assets/logo.jpg"),
      employees: [
        { name: "Sibongile Nkosi", password: "1234" },
        { name: "Lungile Moyo", password: "1234" },
        { name: "Thabo Molefe", password: "1234" },
        { name: "Keshav Naidoo", password: "1234" },
        { name: "Zanele Khumalo", password: "1234" },
        { name: "Sipho Zulu", password: "1234" },
        { name: "Naledi Moeketsi", password: "1234" },
        { name: "Farai Gumbo", password: "1234" },
        { name: "Karabo Dlamini", password: "1234" },
        { name: "Fatima Patel", password: "1234" },
        ],
      };
    },
    methods: {
      submitLogin() {
        const employee = this.employees.find(
          (e) => e.name === this.employeeName && e.password === this.password
        );
        if (employee) {
          this.isLoggedIn = true;
          this.$emit("login-success"); // Notify the parent component
        } else {
          this.showErrorModal = true; // Show error modal
        }
      },
      closeErrorModal() {
        this.showErrorModal = false;
      },
      submitForgotPassword() {
      const employee = this.employees.find(
        (e) => e.name === this.employeeName
      );
      if (employee) {
        employee.password = this.newPassword; // Change the password
        alert("Password updated successfully!");
        this.showForgotPassword = false; // Hide the forgot password form
      } else {
        alert("Employee not found!");
      }
    },
    showForgotPasswordForm() {
      this.showForgotPassword = true; // Show the forgot password form
    },
    logout() {
      this.isLoggedIn = false;
      this.employeeName = "";
      this.password = "";
    },
    },
    

  };
</script>
  
<style scoped>
/* Image container styles */
.image-container {
  text-align: center; 
}
.form-group{
    text-align: center;
    font-family: 'Times New Roman', Times, serif;
}
.error-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
} 
.error-modal .modal-content {
    background: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
}
.login-container {
  max-width: 400px;
  margin:50px auto;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius:8px;
  background-color: #F9F9F9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
h2 {
  text-align: center;
  margin-bottom: 20px;
  color:#333;
  font-family: 'Times New Roman', Times, serif;
}
.form-group {
  margin-bottom: 20px;
}
.form-group label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
  color:#333;
}
.form-group input {
  width: 100%;
  padding: 8px;
  color: #333;
  margin-bottom: 5px;
}
label{
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color:#333;
}
input.form-control {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    margin-bottom: 10px;
}
button.btn{
    width: 100%;
    padding: 12px;
    font-size: 16px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
button.btn:hover{
    background-color: #0056B3;
}
button.btn:disabled{
    background-color: #CCCCCC;
    cursor: not-allowed;
}
p{
    text-align: center;
    color: #4CAF50;
    font-size: 16px;
}
@media (max-width: 600px) {
  .login-container {
    padding: 20px;
  }
}
</style>
  