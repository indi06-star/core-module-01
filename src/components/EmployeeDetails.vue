<template>
    <div class="card mt-4">
      <div class="card-header">
        <h5>{{ employee.name }} - {{ employee.position }}</h5>
      </div>
      <div class="card-body">
        <p><strong>Department:</strong> {{ employee.department }}</p>
        <p><strong>Contact:</strong> {{ employee.contact }}</p>
        <p><strong>Employment History:</strong> {{ employee.history }}</p>
  
        <div class="d-flex justify-content-between mt-3">
          <!-- View Performance -->
          <button class="btn btn-primary" @click="viewPerformance">
            View Performance
          </button>
  
          <!-- View Payroll -->
          <button class="btn btn-success" @click="viewPayroll">
            View Payroll
          </button>
  
          <!-- Leave Requests -->
          <button class="btn btn-info" @click="viewLeaveRequests">
            View Leave Requests
          </button>
        </div>
  
        <!-- Performance Section -->
        <div v-if="showPerformance" class="mt-4">
          <h6>Performance Reviews:</h6>
          <ul>
            <li v-for="(review, index) in employee.reviews" :key="index">{{ review }}</li>
          </ul>
          <!-- Add a Chart Here -->
          <div>
            <canvas id="performanceChart"></canvas>
          </div>
        </div>
  
        <!-- Payroll Section -->
        <div v-if="showPayroll" class="mt-4">
          <h6>Payroll:</h6>
          <p><strong>Base Salary:</strong> ${{ employee.salary }}</p>
          <p><strong>Bonuses:</strong> ${{ calculateBonus() }}</p>
          <p><strong>Total:</strong> ${{ calculateTotalSalary() }}</p>
          <button class="btn btn-outline-secondary" @click="downloadPayslip">Download Payslip</button>
        </div>
  
        <!-- Leave Requests Section -->
        <div v-if="showLeaveRequests" class="mt-4">
          <h6>Leave Requests:</h6>
          <ul>
            <li v-for="(leave, index) in employee.leaveRequests" :key="index">
              {{ leave.date }} - 
              <span :class="getLeaveStatusClass(leave.status)">
                {{ leave.status }}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["employee"],
    data() {
      return {
        showPerformance: false,
        showPayroll: false,
        showLeaveRequests: false,
      };
    },
    methods: {
      viewPerformance() {
        this.showPerformance = true;
        this.showPayroll = false;
        this.showLeaveRequests = false;
      },
      viewPayroll() {
        this.showPayroll = true;
        this.showPerformance = false;
        this.showLeaveRequests = false;
      },
      viewLeaveRequests() {
        this.showLeaveRequests = true;
        this.showPerformance = false;
        this.showPayroll = false;
      },
      calculateBonus() {
        return this.employee.salary * 0.1; // Example bonus calculation
      },
      calculateTotalSalary() {
        return this.employee.salary + this.calculateBonus();
      },
      getLeaveStatusClass(status) {
        switch (status) {
          case "Approved":
            return "text-success";
          case "Pending":
            return "text-warning";
          case "Denied":
            return "text-danger";
          default:
            return "";
        }
      },
      downloadPayslip() {
        // Example logic for downloading a payslip
        alert("Payslip downloaded for " + this.employee.name);
      },
    },
  };
  </script>
  
  <style>
  .text-success {
    color: green;
  }
  .text-warning {
    color: orange;
  }
  .text-danger {
    color: red;
  }
  </style>
  