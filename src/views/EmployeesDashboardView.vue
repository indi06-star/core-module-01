<template>
  <nav-bar/>
   <div class="container py-5">
    <div class="row">
      <EmployeeCard
        v-for="employee in employees"
        :key="employee.id"
        :employee="employee"
        @showDetails="showModal"
      />
    </div>
      
      <EmployeeDetailsModal
      v-if="selectedEmployee"
      :employee="selectedEmployee"
      @close="selectedEmployee = null"
    />
    <h1>Dashboard</h1>
  </div>

</template>

<script>
import EmployeeCard from "@/components/EmployeeCard.vue";
import EmployeeDetailsModal from "@/components/EmployeeDetailsModal.vue";
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    EmployeeCard,
    EmployeeDetailsModal,
    NavBar
  },
  data() {
    return {
      employees: [
        {
          id: 1,
          name: "John Doe",
          position: "Manager",
          department: "HR",
          image: "male.png",
          contact: "john.doe@example.com",
          history: "5 years of experience in HR management.",
          reviews: ["Exceeds expectations", "Great team leader", "Meets goals"],
          salary: 5000,
          leaveRequests: [
            { date: "2024-12-01", status: "Approved" },
            { date: "2024-12-05", status: "Pending" },
            { date: "2024-12-10", status: "Denied" },
          ],
        },
        {
          id: 2,
          name: "Jane Smith",
          position: "Software Engineer",
          department: "IT",
          image: "female.png",
          contact: "jane.smith@example.com",
          history: "3 years of experience in software development.",
          reviews: ["Outstanding problem-solving", "Excellent coding skills"],
          salary: 4500,
          leaveRequests: [
            { date: "2024-12-03", status: "Approved" },
            { date: "2024-12-08", status: "Pending" },
          ],
        },
        // Add more employees here...
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
