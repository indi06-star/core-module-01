<template>
  <NavBar />
  <br />
  <h2 align="center">Update Attendances</h2>

  <!-- Search Bar -->
  <div class="search-container">
    <input type="text" v-model="searchQuery" placeholder="Search by Employee Name or ID..." class="search-input" />
  </div>

  <div class="table-container">
    <table class="attendance-table">
      <thead>
        <tr>
          <th>Attendance_ID</th>
          <th>Employee_ID</th>
          <th>Employee_Name</th>
          <th>Month_Year</th>
          <th>2024-11-26</th>
          <th>2024-11-27</th>
          <th>2024-11-28</th>
          <th>2024-11-29</th>
          <th>2024-11-30</th>
          <th>2024-11-31</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="attendance_record in filteredRecords" :key="attendance_record.attendance_id">
          <td>{{ attendance_record.attendance_id }}</td>
          <td>{{ attendance_record.employee_id }}</td>
          <td>{{ attendance_record.employee_name }}</td>
          <td>{{ attendance_record.month_year }}</td>
          <td>{{ attendance_record.day_26 }}</td>
          <td>{{ attendance_record.day_27 }}</td>
          <td>{{ attendance_record.day_28 }}</td>
          <td>{{ attendance_record.day_29 }}</td>
          <td>
            <select v-model="attendance_record.day_30" class="attendance-select" :style="getStyle(attendance_record.day_30)">
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
          </td>
          <td>
            <select v-model="attendance_record.day_31" class="attendance-select" :style="getStyle(attendance_record.day_31)">
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
            </select>
          </td>
          <td>
            <button @click="updateAttendance(attendance_record)" class="btn-action update-btn">Update</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: { NavBar },
  data() {
    return {
      searchQuery: '', 
    };
  },
  computed: {
    filteredRecords() {
      return this.$store.state.attendance_records?.filter(record => {
        const query = this.searchQuery.toLowerCase();
        return (
          record.employee_name.toLowerCase().includes(query) ||
          record.employee_id.toString().includes(query)
        );
      });
    }
  },
  mounted() {
    this.$store.dispatch('getData');
  },
  methods: {
    async updateAttendance(attendance_record) {
      const updatedData = {};

      if (attendance_record.day_30) {
        updatedData.day_30 = attendance_record.day_30;
      }
      if (attendance_record.day_31) {
        updatedData.day_31 = attendance_record.day_31;
      }

      if (Object.keys(updatedData).length === 0) {
        alert("No changes made.");
        return;
      }

      try {
        await this.$store.dispatch('updateAttendanceRecord', {
          attendance_id: attendance_record.attendance_id,
          updatedData
        });
      } catch (error) {
        console.error('Error updating attendance:', error);
        alert('Failed to update attendance. Please try again.');
      }
    },
    getStyle(value) {
      return value === 'Present' ? { backgroundColor: 'green', color: 'white' } :
             value === 'Absent' ? { backgroundColor: 'red', color: 'white' } : {};
    }
  },
};
</script>

<style scoped>
/* Search Bar Styling */
.search-container {
  width: 80%;
  margin: 0 auto 20px;
  text-align: center;
}

.search-input {
  width: 50%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

/* Table container */
.table-container {
  margin: 20px auto;
  width: 90%;
  padding: 20px;
  overflow-x: auto; /* Allows scrolling for small screens */
}

/* Styling for the table */
.attendance-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.attendance-table th, .attendance-table td {
  padding: 12px;
  text-align: center;
  border: 1px solid #ddd;
}

/* Updated Column Header Styling */
.attendance-table th {
  background-color: #1E3A5F; /* Darkish blue */
  color: white;
  font-weight: bold;
}

/* Alternate Row Coloring */
.attendance-table tr:nth-child(even) td {
  background-color: #f1f1f1; /* Light grey */
}

.attendance-table tr:nth-child(odd) td {
  background-color: #ffffff; /* White */
}

/* Style for select dropdown */
.attendance-select {
  padding: 5px;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

/* Default Action button styling */
.btn-action {
  background-color: #f44336; /* Red for Delete button */
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.btn-action:hover {
  background-color: #e53935; /* Slightly darker red on hover */
}

/* Update button styling - Blue */
.update-btn {
  background-color: #3a6ea5; /* Blue shade for update */
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.update-btn:hover {
  background-color: #2a4b6c; /* Darker blue on hover */
}

/* Custom option hover color */
.attendance-select option[value="Present"]:hover {
  background-color: #006400; /* Dark green for Present */
}

.attendance-select option[value="Absent"]:hover {
  background-color: #8B0000; /* Dark red for Absent */
}
</style>

