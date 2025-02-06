<template>
    <div class="company-growth">
      <h3>Company Growth</h3>
      <p><strong>New Employees:</strong> {{ growthData.newEmployees }}</p>
      <p><strong>Promotions:</strong> {{ growthData.promotions }}</p>
      <p><strong>Company Revenue:</strong> R{{ growthData.companyRevenue.toLocaleString() }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      growthData: Object
    }
  };
  </script>
  
  <style scoped>
  .company-growth {
    background-color: #eef2f3;
    padding: 10px;
    border-radius: 8px;
  }
  </style>
  