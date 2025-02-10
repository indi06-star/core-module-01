<template>
  <NavBar/>
  <h1>Payroll</h1>
  <table>
    <thead>
      <th>Payroll ID</th>
      <th>Full name</th>
      <th>Hours worked</th>
      <th>Leave Deduction</th>
      <th>Final salary</th>
      <th>Calculate</th>
      <th>Action</th>
    </thead>
    <tbody>
      <tr v-for="payrolls in $store.state.payroll" :key="payroll">
        <td>{{ payrolls.payroll_id }}</td>
        <td>{{ payrolls.full_name }}</td>
        <td>{{ payrolls.hours_worked }}</td>
        <td>{{ payrolls.leave_deductions }}</td>
        <td>{{ payrolls.final_salary }}</td>
        <td><button>Edit payslip</button></td>
        <td><button>Download payslip</button></td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components:{
    NavBar

  },
  mounted(){
    this.$store.dispatch("getpayroll")
  }
}
</script>


<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-family: 'Times New Roman', Times, serif;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

h1 {
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  font-size: 50px;
  color: black;
}

.payslip-modal {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 50%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.search-bar {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
  border: 2px solid blue;
}

.form-control {
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
}
</style>
