<template>
    <div class="task-management">
      <h3>Task Management</h3>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          <p><strong>{{ task.taskName }}</strong>: {{ task.pending }} pending</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      tasks: Array
    }
  };
  </script>
  
  <style scoped>
  .task-management {
    background-color: #fff3cd;
    padding: 10px;
    border-radius: 8px;
  }
  </style>
  
