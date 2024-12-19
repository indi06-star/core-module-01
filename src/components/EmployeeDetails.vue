<template>
  <div class="employee-details card mt-4">
    <div class="card-header">
      <h4>{{ employee.name }}</h4>
      <p class="text-muted">{{ employee.position }} - {{ employee.department }}</p>
    </div>
    <div class="card-body">
      <img
        :src="employee.image"
        alt="Image of {{ employee.name }}"
        class="employee-image"
      />
      <p><strong>Contact:</strong> {{ employee.contact }}</p>
      <p><strong>History:</strong> {{ employee.history }}</p>
      <p><strong>Salary:</strong> R{{ employee.salary.toLocaleString() }}</p>

      <div>
        <h5>Leave Requests</h5>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(request, index) in employee.leaveRequests" :key="index">
              <td>{{ request.date }}</td>
              <td>
                <span
                  :class="{
                    'text-success': request.status === 'Approved',
                    'text-warning': request.status === 'Pending',
                    'text-danger': request.status === 'Denied',
                  }"
                >
                  {{ request.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>

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
.employee-details {
  width: 100%;
  max-width: 600px;
  margin: auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.employee-details:hover {
  transform: scale(1.02);
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
}
.card-header {
  text-align: center;
  background-color: #F8F9FA;
  padding: 16px;
}
.card-header h4 {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
}
.card-header p {
  margin: 0;
  font-size: 14px;
}
.card-body {
  padding: 20px;
  text-align: center;
}
.employee-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 16px;
}
h5 {
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  text-align: left;
}
.table {
  margin-top: 10px;
  width: 100%;
  text-align: left;
}
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










