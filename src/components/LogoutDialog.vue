<template>
    <div class="modal-backdrop">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Confirm Logout</h5>
            <button type="button" class="btn-close" @click="$emit('cancel')"></button>
          </div>
          <div class="modal-body">
            Are you sure you want to log out?
          </div>
          <div class="modal-footer">
            <button class="btn btn-danger" @click="$emit('confirm')">Yes</button>
            <button class="btn btn-secondary" @click="$emit('cancel')">No</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  