<template>
    <div class="col-md-4 mb-3">
      <div class="card">
        <img
          :src="employee.gender === 'female' ? './assets/female-icon.png' : './assets/male-icon.png'"
          class="card-img-top"
          alt="Employee Icon"
        />
        <div class="card-body">
          <h5 class="card-title">{{ employee.name }}</h5>
          <p class="card-text">{{ employee.position }} - {{ employee.department }}</p>
          <button class="btn btn-primary" @click="showDetails">Show More</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      employee: Object,
    },
    methods: {
      showDetails() {
        this.$emit("showDetails", this.employee);
      },
    },
  };
  </script>
  