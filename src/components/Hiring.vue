<template>
  <div class="dismissal-container">
    <h1>Employee Dismissal & Hiring</h1>

    <!-- Button to toggle Hiring Form visibility -->
    <button @click="toggleHiringForm" v-if="!showHiringForm" class="toggle-button">Hire Employee</button>

    <!-- Hiring Form -->
    <div v-if="showHiringForm">
      <h2>Hire Employee</h2>
      <form @submit.prevent="submitHiring">
        <div class="form-group">
          <label for="employeeName">Employee Name</label>
          <input type="text" id="employeeName" v-model="hiringForm.employeeName" placeholder="Enter employee's name" required />
        </div>

        <div class="form-group">
          <label for="position">Position</label>
          <input type="text" id="position" v-model="hiringForm.position" placeholder="Enter position" required />
        </div>

        <div class="form-group">
          <label for="startDate">Start Date</label>
          <input type="date" id="startDate" v-model="hiringForm.startDate" required />
        </div>

        <button type="submit">Submit Hiring</button>
      </form>

      <!-- Confirmation Message -->
      <div v-if="hiringSubmitted" class="confirmation-message">
        <p>The employee has been hired successfully.</p>
      </div>

      <!-- Button to Hide Hiring Form -->
      <button @click="toggleHiringForm" class="toggle-button">Close Hiring Form</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          showHiringForm: false,  // Controls visibility of the hiring form
          hiringForm: {
              employeeName: '',
              position: '',
              startDate: '',
          },
          hiringSubmitted: false,
      };
  },
  methods: {
      toggleHiringForm() {
          this.showHiringForm = !this.showHiringForm; // Toggle form visibility
      },
      submitHiring() {
          // Logic for submitting the hiring form
          console.log('Hiring form submitted:', this.hiringForm);
          this.hiringSubmitted = true;

          // Reset the hiring form after submission
          this.hiringForm.employeeName = '';
          this.hiringForm.position = '';
          this.hiringForm.startDate = '';
      }
  },
}
</script>

<style scoped>
.dismissal-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
h1, h2 {
  text-align: center;
  margin-bottom: 2rem;
}
.form-group {
  margin-bottom: 1.5rem;
}
label {
  display: block;
  font-weight: bold;
}
input[type="text"],
input[type="date"] {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button[type="submit"],
button[type="button"] {
  display: block;
  width: 100%;
  padding: 0.5rem;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button[type="submit"]:hover,
button[type="button"]:hover {
  background-color: #45a049;
}
.confirmation-message {
  margin-top: 2rem;
  padding: 1rem;
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  color: #155724;
  text-align: center;
}
.toggle-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}
.toggle-button:hover {
  background-color: #0056b3;
}
</style>
