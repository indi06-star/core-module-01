<template>
  <div v-if="isVisible" class="modal-fullscreen">
    <div class="modal-content">
      <!-- Close Button (X) -->
      <button @click="$emit('closeModal')" class="btn-close">X</button>

      <!-- Employee Details -->
      <div class="details">
        <h1><strong>{{ employee.name }} - Details</strong></h1>
        <p><strong>Position:</strong> {{ employee.position }}</p>
        <p><strong>Department:</strong> {{ employee.department }}</p>
        <p><strong>Contact:</strong> {{ employee.contact }}</p>
        <p><strong>History:</strong> {{ employee.history }}</p>
        <p><strong>Salary:</strong> R{{ employee.salary.toLocaleString() }}</p>
      </div>
      <div>
        <h5 align="center"><strong>Performance Reviews</strong></h5>
        <ul>
          <li v-for="(review, index) in employee.reviews" >
            {{ review }}
            </li>
         </ul>
            </div>
      <div>
        <h5 align="center"><strong>Leave Requests</strong></h5>
        <br>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>Status</th>
              <th>Reason</th>
              <th>Actions</th>
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
              <td>{{ request.reason }}</td>
              <td>
                <button
                  v-if="request.status === 'Pending'"
                  @click="handleLeaveRequestStatusUpdate({ id: request.id, status: 'Approved' })"
                  class="btn btn-success"
                >
                  Approve
                </button>
                <button
                  v-if="request.status === 'Pending'"
                  @click="handleLeaveRequestStatusUpdate({ id: request.id, status: 'Denied' })"
                  class="btn btn-danger"
                >
                  Deny
                </button>
              </td>
            </tr>
          </tbody>
        </table> 
      <!-- Buttons to Show Different Sections -->
      <div class="button-group">
        <button @click="showSection('attendance')" class="btn btn-info"><strong>Calender to Update Attendance</strong></button>
      </div>
      <!-- Conditionally Render Sections -->
      <div v-if="activeSection === 'attendance'">
        <AttendanceCalender
          :attendanceData="employee.attendance.map(record => record.date)" 
          :approvedTimeOff="[]" 
          @update-attendance="handleAttendanceUpdate"  
        />
      </div>
      <br>
        <!-- Attendance Table -->
        <div>
          <h5 align="center"><strong>Attendance Records</strong></h5>
          <br>
          <table class="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(record, index) in employee.attendance" :key="index">
                <td>{{ record.date }}</td>
                <td align="center">{{ record.status }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Close Button -->
      <button @click="$emit('closeModal')" class="btn btn-secondary">Close</button>

    </div>
  </div>
</template>

<script>
import AttendanceCalender from './AttendanceCalender.vue';
import LeaveRequest from './LeaveRequest.vue';

export default {
  components: {
    LeaveRequest,
    AttendanceCalender,
  },
  props: {
    employee: Object,
    isVisible: Boolean,
  },
  data() {
    return {
      activeSection: '',
      leaveRequests: [], // Holds the list of leave requests
      isMessageModalVisible: false, // Controls visibility of the message modal
      messageModal: '', // Stores the message to display
    };
  },
  methods: {
    showSection(section) {
      this.activeSection = section;
    },

    // Handle leave request submission
    handleLeaveRequestSubmission(newRequest) {
      this.leaveRequests.push(newRequest); // Add new leave request to the list
    },

    // Handle updating the status of a leave request (Approve/Deny)
    handleLeaveRequestStatusUpdate({ id, status }) {
      const request = this.employee.leaveRequests.find(req => req.id === id);
      if (request) {
        request.status = status; // Update the status of the leave request

        // Set the message and show the modal
        this.messageModal = `Leave request ${status === 'Approved' ? 'approved' : 'denied'} successfully.`;
        this.isMessageModalVisible = true;
      }
    },

  closeMessageModal() {
      this.isMessageModalVisible = false; // Hide the modal
    },

  handleAttendanceUpdate({ date, status }) {
      // Check if the date already exists in the attendance records
    const record = this.employee.attendance.find(record => record.date === date);
    if (record) {
      record.status = status; // Update the existing record
      } else {
        this.employee.attendance.push({ date, status }); // Add a new record if not present
      }
    },
  },
};
</script>

<style>
.modal-fullscreen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 900px;
  max-height: 90vh; /* Limit the maximum height */
  overflow-y: auto; /* Enable scrolling */
  display: flex;
  flex-direction: column;
}

.button-group {
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
}

.btn-info {
  margin-top: 20px;
}

.btn-secondary {
  margin-top: 10px;
}

.btn-close {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
}

.btn-close:hover {
  color: red; /* Change color on hover */
}

.btn-success {
  margin-right: 10px;
}

.btn-danger {
  margin-left: 10px;
}

.details {
  text-align: center;
}

.modal-content {
  background-color: rgb(221, 221, 239);
  border: 2px solid blue;
  font-family: 'Times New Roman', Times, serif;
}

.message-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.message-modal .modal-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}
ul{
  text-align: center;
}
h5,h1, p{
  color: black;
}
th{
  font-size: 20px;
}
</style>
