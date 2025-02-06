<template>
    <div class="attendance-tracking">
      <h3>Attendance Tracking</h3>
      <ul>
        <li v-for="(record, index) in attendanceData" :key="index">
          <p><strong>{{ record.employeeName }}</strong> - 
            <span :class="{ 'text-success': record.attended, 'text-danger': !record.attended }">
              {{ record.attended ? 'Attended' : 'Missed' }}
            </span>
          </p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      attendanceData: Array
    }
  };
  </script>
  
  <style scoped>
  .attendance-tracking {
    background-color: #d4edda;
    padding: 10px;
    border-radius: 8px;
  }
  .text-success {
    color: green;
  }
  .text-danger {
    color: red;
  }
  </style>
  