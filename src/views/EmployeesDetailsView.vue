<template>
  <NavBar />
  <div class="header-container">
    <h1>Employees Information</h1>
    <input v-model="searchQuery" placeholder="Search employees..." class="search-bar" />
    <button @click="showAddEmployeeModal" class="add-btn">Add Employee</button>
  </div>

  <table class="employee-table">
    <thead>
      <tr>
        <th>Employee ID</th>
        <th>Full Name</th>
        <th>Contact</th>
        <th>Position</th>
        <th>Review</th>
        <th>History</th>
        <th>Department ID</th>
        <th>Department Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="employee in filteredEmployees" :key="employee.employee_id">
        <td>{{ employee.employee_id }}</td>
        <td>{{ employee.full_name }}</td>
        <td>{{ employee.contact }}</td>
        <td>{{ employee.position }}</td>
        <td>{{ employee.review }}</td>
        <td>{{ employee.history }}</td>
        <td>{{ employee.department_id }}</td>
        <td>{{ employee.department_name }}</td>
        <td class="action-buttons">
          <button @click="editEmployee(employee)">Edit</button>
          <button @click="confirmDelete(employee)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>

  <!-- Add Employee Modal -->
  <div v-if="isAddModalVisible" class="modal">
    <div class="modal-content">
      <h3>Add New Employee</h3>
      <input v-model="insertEmployee.full_name" placeholder="Full Name" />
      <input v-model="insertEmployee.contact" placeholder="Contact" />
      <input v-model="insertEmployee.position" placeholder="Position" />
      <input v-model="insertEmployee.department_id" placeholder="Department ID" />
      <input v-model="insertEmployee.department_name" placeholder="Department Name" />
      <button @click="handleAddEmployee">Save</button>
      <button @click="closeAddModal">Cancel</button>
    </div>
  </div>

  <!-- Edit Employee Modal -->
  <div v-if="isEditModalVisible" class="modal">
    <div class="modal-content">
      <h3>Edit Employee</h3>
      <input v-model="editedEmployee.full_name" placeholder="Full Name" />
      <input v-model="editedEmployee.contact" placeholder="Contact" />
      <input v-model="editedEmployee.position" placeholder="Position" />
      <input v-model="editedEmployee.department_name" placeholder="Department Name" />
      <button @click="handleUpdateEmployee">Save</button>
      <button @click="closeEditModal">Cancel</button>
    </div>
  </div>

  <!-- Delete Confirmation Modal -->
  <div v-if="isDeleteModalVisible" class="modal">
    <div class="modal-content">
      <h3>Are you sure you want to delete this employee?</h3>
      <button @click="handleDeleteEmployee">Yes, Delete</button>
      <button @click="closeDeleteModal">Cancel</button>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import { mapState, mapActions } from 'vuex';

export default {
  components: { NavBar },
  data() {
    return {
      searchQuery: '',
      isAddModalVisible: false,
      isEditModalVisible: false,
      isDeleteModalVisible: false,
      insertEmployee: {
        full_name: '',
        contact: '',
        position: '',
        department_id: '',
        department_name: '',
        review: 'new hire',
        history: 'new hire',
      },
      editedEmployee: null,
      employeeToDelete: null,
    };
  },
  computed: {
    ...mapState(['employees']),
    filteredEmployees() {
      return this.employees.filter((employee) =>
        Object.values(employee).some((value) =>
          String(value).toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      );
    },
  },
  methods: {
    ...mapActions(['getEmployees', 'addEmployee', 'updateEmployee', 'deleteEmployee']),
    showAddEmployeeModal() {
      this.isAddModalVisible = true;
    },
    closeAddModal() {
      this.isAddModalVisible = false;
      this.insertEmployee = {
        full_name: '',
        contact: '',
        position: '',
        department_id: '',
        department_name: '',
        review: 'new hire',
        history: 'new hire',
      };
    },
    editEmployee(employee) {
      this.editedEmployee = { ...employee };
      this.isEditModalVisible = true;
    },
    closeEditModal() {
      this.isEditModalVisible = false;
      this.editedEmployee = null;
    },
    confirmDelete(employee) {
      this.employeeToDelete = employee;
      this.isDeleteModalVisible = true;
    },
    closeDeleteModal() {
      this.isDeleteModalVisible = false;
      this.employeeToDelete = null;
    },
    handleAddEmployee() {
      this.addEmployee(this.insertEmployee);
      this.closeAddModal();
    },
    handleUpdateEmployee() {
      this.updateEmployee(this.editedEmployee);
      this.closeEditModal();
    },
    handleDeleteEmployee() {
      this.deleteEmployee(this.employeeToDelete.employee_id);
      this.closeDeleteModal();
    },
  },
  mounted() {
    this.getEmployees();
  },
};
</script>
<style scoped>
/* Modal Styling */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.modal button {
  margin: 10px;
}

/* Styling for the table */
.employee-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-family: Arial, sans-serif;
  border: 1px solid #B0C4DE; /* Light steel blue */
}

.employee-table th,
.employee-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #B0C4DE; /* Light steel blue border */
}

.employee-table th {
  background-color: #4C6D9A; /* Professional bluish header */
  color: white;
}

.employee-table tr:hover {
  background-color: #f1f1f1; /* Light gray background for hover */
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
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  color: white;
}

.add-btn {
  display: block;
  margin: 0 auto 20px;
  padding: 10px 20px;
  background-color: #007bff; /* Blue background for add button */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-btn:hover {
  background-color: #0056b3; /* Darker blue for hover effect */
}

.edit-btn {
  background-color: #4CAF50; /* Green for edit */
}

.delete-btn {
  background-color: #f44336; /* Red for delete */
}

.edit-btn:hover {
  background-color: #45a049; /* Darker green for edit button hover */
}

.delete-btn:hover {
  background-color: #e53935; /* Darker red for delete button hover */
}

/* Header Container */
.header-container {
  text-align: center;
  margin-bottom: 20px;
}

.search-bar {
  width: 50%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-bar:focus {
  border-color: #4C6D9A; /* Dark blue border for search input focus */
  outline: none;
}

/* Add Employee Button */
.add-btn:hover {
  background-color: #0056b3; /* Darker blue for add button hover */
}

.employee-table th, .employee-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.employee-table th {
  background-color: #4C6D9A; /* Bluish header */
  color: white;
}
</style>
  