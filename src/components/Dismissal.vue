<template>
    <div class="dismissal-container">
      <h1>Employee Dismissal</h1>
  
      <!-- Button to toggle Dismissal Form visibility -->
      <button @click="toggleDismissalForm" v-if="!showDismissalForm" class="toggle-button">Dismiss Employee</button>
  
      <!-- Dismissal Form -->
      <div v-if="showDismissalForm">
        <h2>Dismiss Employee</h2>
        <form @submit.prevent="submitDismissal">
          <div class="form-group">
            <label for="employeeName">Employee Name</label>
            <input
              type="text"
              id="employeeName"
              v-model="dismissalForm.employeeName"
              placeholder="Enter employee's name"
              required
            />
          </div>
  
          <div class="form-group">
            <label for="reason">Reason for Dismissal</label>
            <textarea
              id="reason"
              v-model="dismissalForm.reason"
              placeholder="Enter the reason for dismissal"
              required
            ></textarea>
          </div>
  
          <div class="form-group">
            <label for="dismissalDate">Dismissal Date</label>
            <input
              type="date"
              id="dismissalDate"
              v-model="dismissalForm.dismissalDate"
              required
            />
          </div>
  
          <button type="submit">Submit Dismissal</button>
        </form>
  
        <!-- Button to Close Dismissal Form -->
        <button @click="toggleDismissalForm" class="toggle-button">Close Dismissal Form</button>
      </div>
  
      <!-- Confirmation Modal -->
      <div v-if="dismissalSubmitted" class="modal">
        <div class="modal-content">
          <span class="close" @click="closeModal">&times;</span>
          <h2>Employee Dismissed</h2>
          <p>The dismissal details have been submitted successfully.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showDismissalForm: false, // Controls visibility of the dismissal form
        dismissalForm: {
          employeeName: '',
          reason: '',
          dismissalDate: '',
        },
        dismissalSubmitted: false, // Tracks whether the form has been submitted
      };
    },
    methods: {
      toggleDismissalForm() {
        this.showDismissalForm = !this.showDismissalForm; // Toggle form visibility
      },
      submitDismissal() {
        // Logic for submitting the dismissal form
        console.log('Dismissal form submitted:', this.dismissalForm);
        this.dismissalSubmitted = true;
  
        // Reset the dismissal form after submission
        this.dismissalForm.employeeName = '';
        this.dismissalForm.reason = '';
        this.dismissalForm.dismissalDate = '';
      },
      closeModal() {
        this.dismissalSubmitted = false; // Close the modal
        this.showDismissalForm = false; // Optionally, hide the form as well after submission
      },
    },
  };
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
  
  h1,
  h2 {
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
  input[type="date"],
  textarea {
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
    background-color: #4caf50;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover,
  button[type="button"]:hover {
    background-color: #45a049;
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
  
  /* Modal Styles */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
  
  .modal-content {
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
    width: 400px;
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 2rem;
    cursor: pointer;
  }
  
  .modal h2 {
    margin-bottom: 1rem;
  }
  </style>
  