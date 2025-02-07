<template>
    <NavBar/>
    <h1>
        EMPLOYEES DETAILS
    </h1>
    <table class="employee-table">
        <tr>
        <th>Employees_ID</th>
        <th>Employees Full Name</th>
        <th>Email</th>
        <th>Position</th>
        <th>Review</th>
        <th>History</th>
        <th>Department_ID</th>
        <th>Department Name</th>
        <th>Action</th>
        </tr>
        <tr v-for="employee in $store.state.employees" :key="employees">
            <td>{{employee.employee_id  }}</td>
            <td>{{ employee.full_name }}</td>
            <td>{{ employee.contact }}</td>
            <td>{{ employee.position }}</td>
            <td>{{ employee.review }}</td>
            <td>{{ employee.history }}</td>
            <td>{{ employee.department_id }}</td>
            <td>{{ employee.department_name }}</td>
            <button>Edit</button>
            <button>Delete</button>
        </tr>
    </table>
</template>
<script>
import NavBar from '@/components/NavBar.vue';

export default{
    components:{
        NavBar

    },
    mounted(){
      this.$store.dispatch("getData")  
    }
}
</script>

<style scoped>
/* General table styling */
.employee-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-family: Arial, sans-serif;
  border: 1px solid #ddd;
}

.employee-table th,
.employee-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.employee-table th {
  background-color: #4CAF50;
  color: white;
}

.employee-table tr:hover {
  background-color: #f1f1f1;
}

/* Styling for the header */
h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

/* Action buttons styling */
.action-buttons {
  display: flex;
  gap: 10px;
}

.edit-btn,
.delete-btn {
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  color: white;
}

.edit-btn {
  background-color: #4CAF50; /* Green for edit */
}

.delete-btn {
  background-color: #f44336; /* Red for delete */
}

.edit-btn:hover {
  background-color: #45a049;
}

.delete-btn:hover {
  background-color: #e53935;
}
</style>