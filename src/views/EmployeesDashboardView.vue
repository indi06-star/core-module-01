<template>
  <div class="container my-5">
    <h1>Employees Dashboard</h1>
    <div class="row">
      <!-- Render Employee Cards -->
      <EmployeeCard
        v-for="employee in employees"
        :key="employee.id"
        :employee="employee"
        @view-details="viewDetails"
      />
    </div>

    <!-- Render Employee Details -->
    <EmployeeDetails
      v-if="selectedEmployee"
      :employee="selectedEmployee"
    />
  </div>
</template>

<script>
import EmployeeCard from "@/components/EmployeeCard.vue";
import EmployeeDetails from "@/components/EmployeeDetails.vue";

export default {
  components: {
    EmployeeCard,
    EmployeeDetails,
  },
  data() {
    return {
      //Employees details 
      employees: [
        {
          id: 1,
          name: "Sibongile Nkosi",
          position: "Software Engineer",
          department: "Development",
          image: require("@/assets/Sibongile.png"),
          contact: "sibongile.nkosi@moderntech.com" ,
          history: "Joined in 2015, promoted to Senior in 2018",
          reviews: ["Exceeds expectations", "Great team leader", "Meets goals"], //Put a screenshoot of a picture of sibongiles Performance here
          salary: 5000,
          leaveRequests: [
            { date: "2024-12-01", status: "Approved" },
            { date: "2024-12-05", status: "Pending" },
            { date: "2024-12-10", status: "Denied" },
          ],
        },
        {
          id: 2,
          name: "Lungile Moyo",
          position: "HR Manager",
          department: "HR",
          image: require("@assets/Lungile.png"),
          contact: "lungile.moyo@moderntech.com",
          history: "Joined in 2013, promoted to Manager in 2017",
          reviews: ["Outstanding problem-solving", "Excellent coding skills"],
          salary: 4500,
          leaveRequests: [
            { date: "2024-12-03", status: "Approved" },
            { date: "2024-12-08", status: "Pending" },
          ],
        },
        {
          id: 2,
          name: "Lungile Moyo",
          position: "HR Manager",
          department: "HR",
          image: require("@assets/Lungile.png"),
          contact: "lungile.moyo@moderntech.com",
          history: "Joined in 2013, promoted to Manager in 2017",
          reviews: ["Outstanding problem-solving", "Excellent coding skills"],
          salary: 4500,
          leaveRequests: [
            { date: "2024-12-03", status: "Approved" },
            { date: "2024-12-08", status: "Pending" },
          ],
        },
        {
          id: 3,
          name: "Thabo Molefe",
          position: "Quality Analyst",
          department: "QA",
          image: require("@assets/Thabo.png"),
          contact: "thabo.molefe@moderntech.com",
          history: "Joined in 2018",
          reviews: ["Outstanding problem-solving", "Excellent coding skills"],
          salary: 4500,
          leaveRequests: [
            { date: "2024-12-03", status: "Approved" },
            { date: "2024-12-08", status: "Pending" },
          ],
        },   {
          id: 4,
          name: "Keshav Naidoo",
          position: "Sales Representative",
          department: "Sales",
          image: require("@assets/Keshav.png"),
          contact: "keshav.naidoo@moderntech.com",
          history: "Joined in 2020",
          reviews: ["Outstanding problem-solving", "Excellent coding skills"],
          salary: 4500,
          leaveRequests: [
            { date: "2024-12-03", status: "Approved" },
            { date: "2024-12-08", status: "Pending" },
          ],
        },   {
          id: 5,
          name: "Zanele Khumalo",
          position: "Marketing Specialist",
          department: "Marketing",
          image: require("@assets/Zanele.png"),
          contact: "zanele.khumalo@moderntech.com",
          history: "Joined in 2019",
          reviews: ["Outstanding problem-solving", "Excellent coding skills"],
          salary: 4500,
          leaveRequests: [
            { date: "2024-12-03", status: "Approved" },
            { date: "2024-12-08", status: "Pending" },
          ],
        },   {
          id: 6,
          name: "Sipho Zulu",
          position: "UI/UX Designer",
          department: "",
          image: require("@assets/Lungile.png"),
          contact: "lungile.moyo@moderntech.com",
          history: "Joined in 2013, promoted to Manager in 2017",
          reviews: ["Outstanding problem-solving", "Excellent coding skills"],
          salary: 4500,
          leaveRequests: [
            { date: "2024-12-03", status: "Approved" },
            { date: "2024-12-08", status: "Pending" },
          ],
        },   {
          id: 2,
          name: "Lungile Moyo",
          position: "HR Manager",
          department: "HR",
          image: require("@assets/Lungile.png"),
          contact: "lungile.moyo@moderntech.com",
          history: "Joined in 2013, promoted to Manager in 2017",
          reviews: ["Outstanding problem-solving", "Excellent coding skills"],
          salary: 4500,
          leaveRequests: [
            { date: "2024-12-03", status: "Approved" },
            { date: "2024-12-08", status: "Pending" },
          ],
        },   {
          id: 2,
          name: "Lungile Moyo",
          position: "HR Manager",
          department: "HR",
          image: require("@assets/Lungile.png"),
          contact: "lungile.moyo@moderntech.com",
          history: "Joined in 2013, promoted to Manager in 2017",
          reviews: ["Outstanding problem-solving", "Excellent coding skills"],
          salary: 4500,
          leaveRequests: [
            { date: "2024-12-03", status: "Approved" },
            { date: "2024-12-08", status: "Pending" },
          ],
        },   {
          id: 2,
          name: "Lungile Moyo",
          position: "HR Manager",
          department: "HR",
          image: require("@assets/Lungile.png"),
          contact: "lungile.moyo@moderntech.com",
          history: "Joined in 2013, promoted to Manager in 2017",
          reviews: ["Outstanding problem-solving", "Excellent coding skills"],
          salary: 4500,
          leaveRequests: [
            { date: "2024-12-03", status: "Approved" },
            { date: "2024-12-08", status: "Pending" },
          ],
        },
      
      ],
      selectedEmployee: null, // Holds the currently selected employee for details view
    };
  },
  methods: {
    viewDetails(employee) {
      this.selectedEmployee = employee;
    },
  },
};
</script>

<style>
.container {
  padding: 20px;
}
</style>

