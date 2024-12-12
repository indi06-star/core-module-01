<template>
    <div class="col-md-4 mb-3">
      <div class="card">
        <img :src="employee.image" class="card-img-top" alt="Employee Image" />
        <div class="card-body">
          <h5 class="card-title">{{ employee.name }}</h5>
          <p class="card-text">{{ employee.position }}</p>
          <p class="card-text"><small class="text-muted">{{ employee.department }}</small></p>
          <button @click="$emit('view-details', employee)" class="btn btn-primary">Show More</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      employee: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  .card-img-top {
    height: 150px;
    object-fit: cover;
  }
  </style>
  