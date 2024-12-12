<template>
    <div class="modal d-block" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{ employee.name }}</h5>
            <button type="button" class="btn-close" @click="$emit('close')"></button>
          </div>
          <div class="modal-body">
            <p>Position: {{ employee.position }}</p>
            <p>Department: {{ employee.department }}</p>
            <p>Contact: {{ employee.contact }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ["employee"],
  };
  </script>
  
  <style>
  .modal {
    background-color: rgba(0, 0, 0, 0.5);
  }
  </style>
  