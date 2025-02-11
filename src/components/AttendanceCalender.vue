<template>
<<<<<<< HEAD
  <!--Calender created using sets from https://dev.to/owais11-art/how-to-create-a-calendar-in-vue-4m0k -->
  <div class="calendar-container">
    <!-- Calendar Header -->
    <div class="calendar-header">
      <button @click="changeMonth(-1)" class="nav-button">&#8592;</button>
      <h3>{{ monthNames[currentMonth] }} {{ currentYear }}</h3>
      <button @click="changeMonth(1)" class="nav-button">&#8594;</button>
    </div>
    <!-- Calendar Table -->
    <table class="calendar-table">
      <thead>
        <tr>
          <th v-for="day in weekDays" :key="day">{{ day }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(week, weekIndex) in weeksInMonth" :key="weekIndex">
          <td
            v-for="day in week"
            :key="day?.date"
            :class="getDayClass(day)"
            @click="selectDay(day)"
          >
            <span v-if="day">{{ day.day }}</span>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- Buttons for Actions -->
    <div v-if="selectedDay" class="actions">
      <p>Selected Date: <strong>{{ selectedDay.date }}</strong></p>
      <button @click="markPresent" class="btn btn-success">Present</button>
      <button @click="markAbsent" class="btn btn-danger">Absent</button>
    </div>
    <!-- Display Selected Dates -->
    <div v-if="attendanceLog.length" class="attendance-log">
      <h4 >Status</h4>
      <ul >
        <li v-for="(log, index) in attendanceLog" :key="index">
          {{ log.date }} - <strong>{{ log.status }}</strong>
        </li>
      </ul>
=======
  <div>
    <button @click="showCalendar = !showCalendar" class="toggle-button">
      {{ showCalendar ? "Hide Calendar" : "Show Calendar" }}
    </button>

    <div v-if="showCalendar" class="calendar-container">
      <!-- Calendar Header -->
      <div class="calendar-header">
        <button @click="changeMonth(-1)" class="nav-button">&#8592;</button>
        <h3>{{ monthNames[currentMonth] }} {{ currentYear }}</h3>
        <button @click="changeMonth(1)" class="nav-button">&#8594;</button>
      </div>
      <!-- Calendar Table -->
      <table class="calendar-table">
        <thead>
          <tr>
            <th v-for="day in weekDays" :key="day">{{ day }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(week, weekIndex) in weeksInMonth" :key="weekIndex">
            <td
              v-for="day in week"
              :key="day?.date"
              :class="getDayClass(day)"
              @click="selectDay(day)"
            >
              <span v-if="day">{{ day.day }}</span>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Buttons for Actions -->
      <div v-if="selectedDay" class="actions">
        <p>Selected Date: <strong>{{ selectedDay.date }}</strong></p>
        <button @click="markPresent" class="btn btn-success">Present</button>
        <button @click="markAbsent" class="btn btn-danger">Absent</button>
      </div>

      <!-- Display Selected Dates -->
      <div v-if="attendanceLog.length" class="attendance-log">
        <h4>Status</h4>
        <ul>
          <li v-for="(log, index) in attendanceLog" :key="index">
            {{ log.date }} - <strong>{{ log.status }}</strong>
          </li>
        </ul>
      </div>
>>>>>>> d66185905964ad0c6a03076396b6214dfbaba211
    </div>
  </div>
</template>
<script>
export default {
  props: {
    attendanceData: {
      type: Array,
      default: () => [],
    },
    approvedTimeOff: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showCalendar: false,
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      weeksInMonth: [],
      monthNames: [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December",
      ],
      weekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      selectedDay: null,
      attendanceLog: [],
    };
  },
  created() {
    this.generateCalendar();
  },
  methods: {
    changeMonth(offset) {
      this.currentMonth += offset;
      if (this.currentMonth > 11) {
        this.currentMonth = 0;
        this.currentYear += 1;
      } else if (this.currentMonth < 0) {
        this.currentMonth = 11;
        this.currentYear -= 1;
      }
      this.generateCalendar();
    },
<<<<<<< HEAD
 // Generate the calendar structure
  generateCalendar() {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const lastDate = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    const days = [];
      // Add empty cells for alignment
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
      }
      // Add actual days with attendance data
  for (let i = 1; i <= lastDate; i++) {
    const date = `${this.currentYear}-${this.currentMonth + 1}-${i}`;
    const status = this.getStatusForDate(date);
    days.push({ day: i, date, status });
      }
  this.weeksInMonth = [];
    while (days.length) {
    this.weeksInMonth.push(days.splice(0, 7));
      }
    },
// Get the status of the day from attendanceData and approvedTimeOff
  getStatusForDate(date) {
    if (this.attendanceData.includes(date)) {
      return "Absent";
=======
    generateCalendar() {
      const firstDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
      const lastDate = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
      const days = [];

      for (let i = 0; i < firstDay; i++) {
        days.push(null);
      }
      for (let i = 1; i <= lastDate; i++) {
        const date = `${this.currentYear}-${this.currentMonth + 1}-${i}`;
        const status = this.getStatusForDate(date);
        days.push({ day: i, date, status });
      }
      this.weeksInMonth = [];
      while (days.length) {
        this.weeksInMonth.push(days.splice(0, 7));
      }
    },
    getStatusForDate(date) {
      if (this.attendanceData.includes(date)) {
        return "Absent";
>>>>>>> d66185905964ad0c6a03076396b6214dfbaba211
      } else if (this.approvedTimeOff.includes(date)) {
        return "Approved Time Off";
      }
      return "Present";
    },
<<<<<<< HEAD
    // Highlight selected day
  selectDay(day) {
    if (day) {
    this.selectedDay = day;
      }
    },
    // Mark the selected day as Present
  markPresent() {
    if (this.selectedDay) {
      this.selectedDay.status = "Present";
      this.updateLog(this.selectedDay.date, "Present");
      this.$emit("update-attendance", { date: this.selectedDay.date, status: "Present" });
      }
    },
    // Mark the selected day as Absent
  markAbsent() {
    if (this.selectedDay) {
      this.selectedDay.status = "Absent";
      this.updateLog(this.selectedDay.date, "Absent");
      this.$emit("update-attendance", { date: this.selectedDay.date, status: "Absent" });
      }
    },
// Update the attendance log
  updateLog(date, status) {
    const existing = this.attendanceLog.find(log => log.date === date);
    if (existing) {
      existing.status = status;
=======
    selectDay(day) {
      if (day) {
        this.selectedDay = day;
      }
    },
    markPresent() {
      if (this.selectedDay) {
        this.selectedDay.status = "Present";
        this.updateLog(this.selectedDay.date, "Present");
        this.$emit("update-attendance", { date: this.selectedDay.date, status: "Present" });
      }
    },
    markAbsent() {
      if (this.selectedDay) {
        this.selectedDay.status = "Absent";
        this.updateLog(this.selectedDay.date, "Absent");
        this.$emit("update-attendance", { date: this.selectedDay.date, status: "Absent" });
      }
    },
    updateLog(date, status) {
      const existing = this.attendanceLog.find(log => log.date === date);
      if (existing) {
        existing.status = status;
>>>>>>> d66185905964ad0c6a03076396b6214dfbaba211
      } else {
        this.attendanceLog.push({ date, status });
      }
    },
<<<<<<< HEAD
    // Close the calendar
  closeCalendar() {
    this.$emit("closeCalendar"); // Emit close event to parent
    },
    // Get CSS class for a day
  getDayClass(day) {
    if (!day) return "empty";
    if (day.status === "Absent") return "absent";
    if (day.status === "Present") return "present";
    if (day.status === "Approved Time Off") return "approved-time-off";
=======
    getDayClass(day) {
      if (!day) return "empty";
      if (day.status === "Absent") return "absent";
      if (day.status === "Present") return "present";
      if (day.status === "Approved Time Off") return "approved-time-off";
>>>>>>> d66185905964ad0c6a03076396b6214dfbaba211
      return "";
    },
  },
};
</script>





<style scoped>
.calendar-container {
  margin: 20px auto;
  max-width: 700px;
  text-align: center;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}
/* Calendar Header */
.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-button, .close-button {
  background-color: black;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
}
.close-button:hover {
  background-color: #C0392B;
}
/* Calendar Table */
.calendar-table {
  height: 50px;
  width: 100%;
  border-collapse: collapse;
}
.calendar-table th,
.calendar-table td {
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
  cursor: pointer;
}
.calendar-table th {
  background-color: rgb(86, 86, 98);
  color: #fff;
}
.calendar-table td.empty {
  background-color: #F5F5F5;
}
.calendar-table td.present {
  background-color: rgb(54, 75, 101);
  color: white;
}
.calendar-table td.absent {
  background-color: #E74C3C;
  color: white;
}
.calendar-table td.approved-time-off {
  background-color: #F39C12;
  color: white;
}
/* Buttons */
.btn {
  margin: 10px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.btn-success {
  background-color: #2ECC71;
  color: white;
}
.btn-danger {
  background-color: #E74C3C;
  color: white;
}
/* Attendance Log */
.attendance-log {
  margin-top: 20px;
  text-align: left;
}
.attendance-log ul {
  list-style: none;
  padding: 0;
}
.attendance-log li {
  padding: 5px 0;
  font-size: 1em;
}
<<<<<<< HEAD
</style>
=======
.toggle-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
  border-radius: 5px;
}

.toggle-button:hover {
  background-color: #0056b3;
}

</style>


>>>>>>> d66185905964ad0c6a03076396b6214dfbaba211
