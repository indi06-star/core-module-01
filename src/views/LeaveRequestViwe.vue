<template>
  <NavBar />
  <h1>Employees leave requests</h1>
  <div  class="search-container">
    <input v-model="searchQuery" placeholder="Search employees..." class="search-bar" />
  </div>
  <div v-if="isLoading">Loading leave requests...</div>

  <table v-else>
    <thead>
      <tr>
        <th>Leave Request ID</th>
        <th>Employee ID</th>
        <th>Employee Full Name</th>
        <th>Date</th>
        <th>Reason</th>
        <th>Status</th>
        <th>Action(Accept/Deny requests)</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="leaverequest in filteredleaverequests" :key="leaverequest.leave_request_id">
        <td>{{ leaverequest.leave_request_id }}</td>
        <td>{{ leaverequest.employee_id }}</td>
        <td>{{ leaverequest.full_name }}</td>
        <td>{{ leaverequest.date }}</td>
        <td>{{ leaverequest.reason }}</td>
        <td>{{ leaverequest.status }}</td>
        <td>
          <!-- Only show Accept and Deny buttons if status is 'Pending' -->
          <button 
            id="accept" 
            class="btn btn-success" 
            v-if="leaverequest.status === 'Pending'" 
            @click="updateStatus(leaverequest.leave_request_id, 'Accepted')"
          >
            Accept
          </button>
          <button 
            id="deny" 
            class="btn btn-danger" 
            v-if="leaverequest.status === 'Pending'" 
            @click="updateStatus(leaverequest.leave_request_id, 'Denied')"
          >
            Deny
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  data() {
    return {
      searchQuery: '',
      isLoading: true,  // Added loading state
    };
  },

  components: {
    NavBar,
  },

  computed: {
    // Filters leave requests data based on searchQuery
    filteredleaverequests() {
      // Ensure leaverequests is not null before filtering
      if (this.$store.state.leaverequests) {
        return this.$store.state.leaverequests.filter((leaverequest) =>
          leaverequest.full_name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      }
      return []; // Return an empty array if leaverequests is null or undefined
    },
  },

  mounted() {
    // Dispatch the action to load leave requests when the component is mounted
    this.$store.dispatch('getleaverequests').then(() => {
      this.isLoading = false;  // Set loading to false after data is fetched
    });
  },

  methods: {
    async updateStatus(leave_request_id, status) {
      // Dispatch the action to update the status of the leave request
      await this.$store.dispatch('updateLeaveRequestStatus', { leave_request_id, status });
    }
  }
}
</script>


<style scoped>
#accept, #deny{
  color:black
}
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

/* .search-bar {
  width: 50%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
} */
/* Centering the search bar container */
/* Centering the search bar container */
.search-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

/* Styling the search bar */
.search-bar {
  width: 50%;
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>






<!-- <template>
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
        </thead>
        <tbody>
          <tr v-for="leaverequest in $store.state.leaverequests" :key="leaverequests">
            <td>{{ leaverequest.leave_request_id }}</td>
            <td>{{ leaverequest.employee_id }}</td>
            <td>{{ leaverequest.full_name }}</td>
            <td>{{ leaverequest.date }}</td>
            <td>{{ leaverequest.reason }}</td>
            <td>{{ leaverequest.status }}</td>
            <td><button>Accept</button>
              <button>Deny</button></td>
          </tr>
        </tbody>
    </table>

    
</template>
<script>
import AttendanceCalender from '@/components/AttendanceCalender.vue';
import NavBar from '@/components/NavBar.vue';

export default{
    components: {
        NavBar,
        AttendanceCalender
    },
    mounted() {
        this.$store.dispatch("getleaverequests")
        
    },
}

</script> -->
<!-- <template>
  <NavBar />
  <h1>Leave requests</h1>

  <table>
      <thead>
          <tr>
              <th>Leave_request_id</th>
              <th>Employee_id</th>
              <th>Employee Full Name</th>
              <th>Date</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Action</th>
              <th>Updated Response</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="leaverequest in filteredLeaveRequests" :key="leaverequest.leave_request_id">
              <td>{{ leaverequest.leave_request_id }}</td>
              <td>{{ leaverequest.employee_id }}</td>
              <td>{{ leaverequest.full_name }}</td>
              <td>{{ leaverequest.date }}</td>
              <td>{{ leaverequest.reason }}</td>
              <td>{{ leaverequest.status }}</td>
              <td>
                  Show buttons only if the status is 'pending'
                  <button v-if="leaverequest.status === 'pending'" @click="acceptLeaveRequest(leaverequest)">Accept</button>
                  <button v-if="leaverequest.status === 'pending'" @click="denyLeaveRequest(leaverequest)">Deny</button>
              </td>
              <td>{{ leaverequest.updated_response }}</td>
          </tr>
      </tbody>
  </table>
</template>

<script> -->
<!-- import NavBar from '@/components/NavBar.vue';

export default {
  components: {
      NavBar,
  },
  data() {
      return {
          searchQuery: '', // This can be removed as it's no longer needed
      };
  },
  computed: {
      // Filtered leave requests based on status
      filteredLeaveRequests() {
          // Ensure 'leaveRequests' is not null or undefined
          return (this.leaveRequests || []).filter(request => request.status === 'pending');
      }
  },
  mounted() {
      this.$store.dispatch('getleaverequests');
  },
  methods: {
      // Action to accept a leave request
      async acceptLeaveRequest(leaverequest) {
          try {
              // Change status to 'accepted'
              await this.$store.dispatch('updateLeaveRequestStatus', {
                  leave_request_id: leaverequest.leave_request_id,
                  status: 'accepted',
              });
          } catch (error) {
              console.error('Error accepting leave request:', error);
          }
      },
      // Action to deny a leave request
      async denyLeaveRequest(leaverequest) {
          try {
              // Change status to 'denied'
              await this.$store.dispatch('updateLeaveRequestStatus', {
                  leave_request_id: leaverequest.leave_request_id,
                  status: 'denied',
              });
          } catch (error) {
              console.error('Error denying leave request:', error);
          }
      },
  },
};
</script> -->
