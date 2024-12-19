<template>
    <div>
      <!-- Button to Show Leave Request Form -->
      <button @click="toggleLeaveRequestForm">Leave Requests</button>
  
      <!-- Leave Request Form for Employees -->
      <div v-if="showForm">
        <h3>Submit Leave Request</h3>
        <form @submit.prevent="submitLeaveRequest">
          <div>
            <label for="reason">Reason:</label>
            <input type="text" v-model="leaveRequest.reason" required />
          </div>
          <div>
            <label for="startDate">Start Date:</label>
            <input type="date" v-model="leaveRequest.startDate" required />
          </div>
          <div>
            <label for="endDate">End Date:</label>
            <input type="date" v-model="leaveRequest.endDate" required />
          </div>
          <button type="submit">Submit Request</button>
        </form>
      </div>
  
      <!-- Leave Requests List for HR -->
      <div v-if="!showForm && leaveRequests.length > 0">
        <h3>Pending Leave Requests</h3>
        <div v-for="request in leaveRequests" :key="request.id">
          <p>{{ request.name }} - {{ request.reason }} ({{ request.startDate }} to {{ request.endDate }})</p>
          <button @click="approveLeave(request.id)">Approve</button>
          <button @click="denyLeave(request.id)">Deny</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      leaveRequests: Array, // Receive the list of leave requests from the parent
    },
    data() {
      return {
        showForm: false, // To toggle between leave request form and list
        leaveRequest: {
          reason: '',
          startDate: '',
          endDate: '',
        },
      };
    },
    methods: {
      // Toggle the visibility of the leave request form
      toggleLeaveRequestForm() {
        this.showForm = !this.showForm;
      },
  
      // Submit a new leave request
      submitLeaveRequest() {
        const newRequest = {
          ...this.leaveRequest,
          id: Date.now(), // Generate a unique ID for the request
          status: 'Pending', // Initial status
          name: 'Employee', // Replace with the actual employee name if available
        };
        this.$emit('submit-request', newRequest); // Emit event to parent to add the request
  
        // Reset the form after submission
        this.leaveRequest = {
          reason: '',
          startDate: '',
          endDate: '',
        };
        this.showForm = false; // Close the form after submission
      },
  
      // Approve the leave request
      approveLeave(id) {
        this.$emit('update-status', { id, status: 'Approved' });
      },
  
      // Deny the leave request
      denyLeave(id) {
        this.$emit('update-status', { id, status: 'Denied' });
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add some styling for the leave request form */
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
  }
  form input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    padding: 8px 16px;
    border: none;
    background-color: #333;
    color: white;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: black;
  }
  </style>
  