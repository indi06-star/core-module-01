<template>
    <div class="employee-stats">
      <h3>Current Employees</h3>
      <ul>
        <li v-for="(employee, index) in employees" :key="index">
          <p><strong>{{ employee.name }}</strong> - {{ employee.position }} ({{ employee.department }})</p>
          <p>Attendance: {{ employee.attendance }} days</p>
          <p>Leave Taken: {{ employee.leave }} days</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      employees: Array
    }
  };
  </script>
  
  <style scoped>
  .employee-stats {
    background-color: #f9f9f9;
    padding: 10px;
    border-radius: 8px;
  }
  </style>
  