<template>
    <NavBar/>
    <h1>Leave requests</h1>
    <table>
        <thead>
          <th>Leave_request_id</th>
          <th>Employee_id</th>
          <th>Employee Full Name</th>
          <th>Date</th>
          <th>Reason</th>
          <th>Status</th>
          <th>Action</th>
          <th>Updated Response</th>
        </thead>
        <tbody>
          <tr v-for="leaverequest in $store.state.leaverequests" :key="leaverequests">
            <td>{{ leaverequest.leave_request_id }}</td>
            <td>{{ leaverequest.employee_id }}</td>
            <td>{{ leaverequest.full_name }}</td>
            <td>{{ leaverequest.date }}</td>
            <td>{{  leaverequest.reason }}</td>
            <td>{{  leaverequest.status }}</td>
            <td><button>Accept</button>
              <button>Deny</button></td>
          </tr>
        </tbody>
    </table>

    
</template>
<script>
import NavBar from '@/components/NavBar.vue';

export default{
    components: {
        NavBar
    },
    mounted() {
        this.$store.dispatch("getleaverequests")
        
    },
}

</script>
<style>
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
</style>
