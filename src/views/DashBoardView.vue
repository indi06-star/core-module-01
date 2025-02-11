<template>
  <NavBar/>
  <div class="body">
    <div class="container my-5">
      <h1>Employees Information</h1>  
  <input
        type="text"
        v-model="searchQuery"
        placeholder="Search by Employee Name or Department"
        class="search-bar mb-4"
        id="search"
      />    
    <div class="row">
      <div class="col-md-4" v-for="employee in filteredEmployees" :key="employee.id"> 
        <!-- Render Employee Cards with styling preserved -->
        <div class="card">
          <img :src="employee.image" alt="Employee Image" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">{{ employee.name }}</h5>
            <p class="card-text">{{ employee.position }}</p>
            <button class="btn btn-primary" @click="openModal(employee)">Show More</button>
          </div>
        </div>
      </div>
    </div>
    <Hiring @add-employee="addEmployee"/> <Dismisal @remove-employee="removeEmployee"/>

    <!-- Render Employee Details -->
  <EmployeeDetails
      v-if="selectedEmployee"
      :employee="selectedEmployee"
    />
  </div>

  <!-- Full-Screen Modal for employee details -->
  <FullScreenModal
    :employee="selectedEmployee"
    :isVisible="isModalVisible"
    @closeModal="closeModal"
    @openPayroll="openPayroll"
    @openAttendanceCalendar="openAttendanceCalendar"
    @openLeaveRequest="openLeaveRequest"
  />
  </div>

</template>
<script>
import Dismisal from "@/components/Dismisal.vue";
import EmployeeCard from "@/components/EmployeeCard.vue";
import EmployeeDetails from "@/components/EmployeeDetails.vue";
import FullScreenModal from "@/components/FullScreenModal.vue";
import Hiring from "@/components/Hiring.vue";
import NavBar from "@/components/NavBar.vue";
import Payroll from "@/views/PayrollView.vue";

export default {
  components: {
    EmployeeCard,
    EmployeeDetails,
    FullScreenModal,
    Hiring,
    Dismisal,
    NavBar,
    Payroll,

  },
  data() {
    return {
      employees: [
        {
          id: 1,
          name: "Sibongile Nkosi",
          position: "Software Engineer",
          image: require("../assets/Sibongile.png"),
          department: "Development",
          contact: "sibongile.nkosi@moderntech.com",
          history: "Joined in 2015, promoted to Senior in 2018",
          salary: 70000,
          leaveRequests: [
            { date: "2024-12-01",reason:"Personal" ,status: "Pending" },
          ],
          attendance:[
          {
            date: "2024-11-25",
              status: "Present"
                },
                {
                    date: "2024-11-26",
                    status: "Absent"
                },
                {
                    date: "2024-11-27",
                    status: "Present"
                },
                {
                    date: "2024-11-28",
                    status: "Present"
                },
                {
                    date: "2024-11-29",
                    status: "Present"
                }
          ]
        },
        {
          id: 2,
          name: "Lungile Moyo",
          position: "HR Manager",
          department: "HR",
          image: require("../assets/Lungile.png"),
          contact: "lungile.moyo@moderntech.com",
          history: "Joined in 2013, promoted to Senior in 2018",
          salary: 80000,
          reviews: ["Exceeds Expectations","Great team leader", "Meets goals on time"],
          leaveRequests: [
            { date: "2024-11-15",reason: "Family Responsibility", status: "Denied" },
            { date: "2024-12-02",reason: "Vacation", status: "Approved" },
          ],
          attendance: [
          {
                    date: "2024-11-25",
                    status: "Present"
                },
                {
                    date: "2024-11-26",
                    status: "Present"
                },
                {
                    date: "2024-11-27",
                    status: "Absent"
                },
                {
                    date: "2024-11-28",
                    status: "Present"
                },
                {
                    date: "2024-11-29",
                    status: "Present"
                }
          ]
        },
        {
          id: 3,
          name: "Thabo Molefe",
          position: "Quality Analyst",
          department: "QA",
          image: require("../assets/Thabo.png"),
          contact: "thabo.molefe@moderntech.com",
          history: "Joined in 2018",
          salary: 55000,
          reviews: ["Exceeds Expectations","Great team leader", "Meets goals on time"],
          leaveRequests: [
            { date: "2024-12-08",reason: "Personal", status: "Pending" },
          ],
          attendance:[
          {
                    date: "2024-11-25",
                    status: "Present"
                },
                {
                    date: "2024-11-26",
                    status: "Present"
                },
                {
                    date: "2024-11-27",
                    status: "Present"
                },
                {
                    date: "2024-11-28",
                    status: "Absent"
                },
                {
                    date: "2024-11-29",
                    status: "Present"
                }
          ]
        },
        {
          id: 4,
          name: "Keshav Naidoo",
          position: "Sales Representative",
          department: "Sales",
          image: require("../assets/Keshav.png"),
          contact: "keshav.naidoo@moderntech.com",
          history: "Joined in 2020",
          salary: 60000,
          reviews: ["Exceeds Expectations","Great team leader", "Meets goals on time"],
          leaveRequests: [
            { date: "2024-11-20",reason:"Bereavement", status: "Approved" },
          ],
          attendance:[
          {
                    "date": "2024-11-25",
                    "status": "Absent"
                },
                {
                    "date": "2024-11-26",
                    "status": "Present"
                },
                {
                    "date": "2024-11-27",
                    "status": "Present"
                },
                {
                    "date": "2024-11-28",
                    "status": "Present"
                },
                {
                    "date": "2024-11-29",
                    "status": "Present"
                }
          ]
        },
        {
          id: 5,
          name: "Zanele Khumalo",
          position: "Marketing Specialist",
          department: "Marketing",
          image: require("../assets/Zanele.png"),
          contact: "zanele.khumalo@moderntech.com",
          history: "Joined in 2019",
          salary: 58000,
          reviews: ["Exceeds Expectations","Great team leader", "Meets goals on time"],
          leaveRequests: [
            { date: "2024-12-01",reason: "Childcare", status: "Pending" },
          ],
          attendance: [
          {
                    date: "2024-11-25",
                    status: "Present"
                },
                {
                    date: "2024-11-26",
                    status: "Present"
                },
                {
                    date: "2024-11-27",
                    status: "Absent"
                },
                {
                    date: "2024-11-28",
                  status: "Present"
                },
                {
                    date: "2024-11-29",
                    status: "Present"
                }

          ]
        },
        {
          id: 6,
          name: "Sipho Zulu",
          position: "UI/UX Designer",
          department: "Design",
          image: require("../assets/Sipho.png"),
          contact: "sipho.zulu@moderntech.com",
          history: "Joined in 2016",
          salary: 65000,
          reviews: ["Exceeds Expectations","Great team leader", "Meets goals on time"],
          leaveRequests: [
            { date: "2024-11-18",reason:"Sick leave", status: "Pending" },
          ],
          attendance:[
          {
                    date: "2024-11-25",
                    status: "Present"
                },
                {
                    date: "2024-11-26",
                    status: "Present"
                },
                {
                    date: "2024-11-27",
                    status: "Absent"
                },
                {
                    date: "2024-11-28",
                    status: "Present"
                },
                {
                    date: "2024-11-29",
                    status: "Present"
                }
          ]
        },
        {
          id: 7,
          name: "Naledi Moeketsi",
          position: "DevOps Engineer",
          department: "IT",
          image: require("../assets/Naledi.png"),
          contact: "naledi.moeketsi@moderntech.com",
          history: "Joined in 2017",
          salary: 72000,
          reviews: ["Exceeds Expectations","Great team leader", "Meets goals on time"],
          leaveRequests: [
            { date: "2024-11-22",reason:"Vacation", status: "Pending" },
          ],
          attendance: [
          {
                    date: "2024-11-25",
                    status: "Present"
                },
                {
                    date: "2024-11-26",
                    status: "Present"
                },
                {
                    date: "2024-11-27",
                    status: "Present"
                },
                {
                    date: "2024-11-28",
                    status: "Absent"
                },
                {
                    date: "2024-11-29",
                    status: "Present"
                }

          ]
        },
        {
          id: 8,
          name: "Farai Gumbo",
          position: "Content Strategist",
          department: "Marketing",
          image: require("../assets/Farai.png"),
          contact: "farai.gumbo@moderntech.com",
          history: "Joined in 2021",
          salary: 56000,
          reviews: ["Exceeds Expectations","Great team leader", "Meets goals on time"],
          leaveRequests: [
            { date: "2024-12-02",reason:"Medical Appointment", status: "Approved" },
          ],
          attendance:[
          {
                    date: "2024-11-25",
                    status: "Present"
                },
                {
                    date: "2024-11-26",
                    status: "Absent"
                },
                {
                    date: "2024-11-27",
                    status: "Present"
                },
                {
                    date: "2024-11-28",
                    status: "Present"
                },
                {
                    date: "2024-11-29",
                    status: "Present"
                }
          ]
        },
        {
          id: 9,
          name: "Karabo Dlamini",
          position: "Accountant",
          department: "Finance",
          image: require("../assets/Karabo.png"),
          contact: "karabo.dlamini@moderntech.com",
          history: "Joined in 2018",
          salary:  62000,
          reviews: ["Exceeds Expectations","Great team leader", "Meets goals on time"],
          leaveRequests: [
            { date: "2024-11-19",reason:"Childcare", status: "Approved" },
          ],
          attendance: [
          {
                    date: "2024-11-25",
                    status: "Present"
                },
                {
                    date: "2024-11-26",
                    status: "Present"
                },
                {
                    date: "2024-11-27",
                    status: "Present"
                },
                {
                    date: "2024-11-28",
                    status: "Absent"
                },
                {
                    "date": "2024-11-29",
                    status: "Present"
                }
          ]
        },
        {
          id: 10,
          name: "Fatima Patel",
          position: "Customer Support Lead",
          department: "Support",
          image: require("../assets/Fatima.png"),
          contact: "fatima.patel@moderntech.com",
          history: "Joined in 2016",
          salary: 58000,
          reviews: ["Exceeds Expectations","Great team leader", "Meets goals on time"],
          leaveRequests: [
            { date: "2024-12-08",reason:"Vacation", status: "Pending" },
          ],
          attendance:[
          {
                    date: "2024-11-25",
                    status: "Present"
                },
                {
                    date: "2024-11-26",
                    status: "Present"
                },
                {
                    date: "2024-11-27",
                    status: "Absent"
                },
                {
                    date: "2024-11-28",
                    status: "Present"
                },
                {
                    date: "2024-11-29",
                    status: "Present"
                }
          ]
        },
      ],
      searchQuery: "",
      selectedEmployee: null, // Holds the currently selected employee for details view
      isModalVisible: false,
    };
  },
  methods: {
    addEmployee(newEmployee) {
      this.employees.push(newEmployee); // Add new employee to the list
    },
  deleteEmployee() {
  console.log("Emitting delete event with ID:", this.id);
  this.$emit('delete-employee', parseInt(this.id));
  this.showForm = false;
  this.id = '';
},

    removeEmployee(employeeId) {
      // Remove the employee with the specified ID
      this.employees = this.employees.filter(employee => employee.id !== employeeId);
    },
    openModal(employee) {
      // Check if employee has valid data
      if (employee.name && employee.position && employee.department) {
        this.selectedEmployee = employee;
        this.isModalVisible = true;
        this.showError = false; // Hide error if employee data is valid
      } else {
        this.showError = true; // Show error if employee data is invalid
      }
    },
    openModal(employee) {
      this.selectedEmployee = employee;
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedEmployee = null;
    },
    openPayroll(employeeId) {
      console.log("Open Payroll for Employee ID:", employeeId);
    },
    openAttendanceCalendar(employeeId) {
      console.log("Open Attendance Calendar for Employee ID:", employeeId);
    },
    openLeaveRequest(employeeId) {
      console.log("Open Leave Request for Employee ID:", employeeId);
    },
  },
  computed:{
    filteredEmployees() {
      const query = this.searchQuery.toLowerCase();
      return this.employees.filter((employee) =>
        employee.name.toLowerCase().includes(query) ||
        employee.department.toLowerCase().includes(query)
      );
    },
  
  }}  
</script>
<style scoped>
h1 {
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  font-size: 50px; /* Adjust font size as needed */
  color: black;
}
.search-bar {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
  /* border: 2px solid rgb(52, 52, 103); */

}
.custom-navbar {
  max-width: 1000px; /* Adjust width as needed */
  margin: 0 auto; /* Center the navbar */
  text-align: center;
  font-family: 'Times New Roman', Times, serif
}
.body{
  color: rgb(69, 114, 164)
}
</style>










