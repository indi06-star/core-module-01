<template>
    <NavBar />
    <h1>EMPLOYEES DETAILS</h1>
    <button @click="showAddEmployeeModal">Add Employee</button>
  
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
        <tr v-for="employee in employees" :key="employee.employee_id">
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
        <input v-model="newEmployee.full_name" placeholder="Full Name" />
        <input v-model="newEmployee.contact" placeholder="Contact" />
        <input v-model="newEmployee.position" placeholder="Position" />
        <input v-model="newEmployee.department_id" placeholder="Department ID" />
        <input v-model="newEmployee.department_name" placeholder="Department Name" />
        <button @click="addEmployee">Save</button>
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
        <button @click="updateEmployee">Save</button>
        <button @click="closeEditModal">Cancel</button>
      </div>
    </div>
  
    <!-- Delete Confirmation Modal -->
    <div v-if="isDeleteModalVisible" class="modal">
      <div class="modal-content">
        <h3>Are you sure you want to delete this employee?</h3>
        <button @click="deleteEmployee">Yes, Delete</button>
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
        isAddModalVisible: false,
        isEditModalVisible: false,
        isDeleteModalVisible: false,
        newEmployee: {
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
    },
    mounted() {
      this.getData();
    },
    methods: {
      ...mapActions(['getData', 'addEmployee', 'updateEmployee', 'deleteEmployee']),
  
      showAddEmployeeModal() {
        this.isAddModalVisible = true;
      },
      closeAddModal() {
        this.isAddModalVisible = false;
        this.resetNewEmployee();
      },
      async addEmployee() {
        await this.$store.dispatch('addEmployee', this.newEmployee);
        this.closeAddModal();
      },
      resetNewEmployee() {
        this.newEmployee = {
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
      },
      async updateEmployee() {
        await this.$store.dispatch('updateEmployee', this.editedEmployee);
        this.closeEditModal();
      },
  
      confirmDelete(employee) {
        this.employeeToDelete = employee;
        this.isDeleteModalVisible = true;
      },
      closeDeleteModal() {
        this.isDeleteModalVisible = false;
      },
      async deleteEmployee() {
        await this.$store.dispatch('deleteEmployee', this.employeeToDelete.employee_id);
        this.closeDeleteModal();
      },
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
    border: 1px solid #ddd;
  }
  
  .employee-table th,
  .employee-table td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }
  
  .employee-table th {
    background-color: #4CAF50;
    color: white;
  }
  
  .employee-table tr:hover {
    background-color: #f1f1f1;
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
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    color: white;
  }
  
  .edit-btn {
    background-color: #4CAF50; /* Green for edit */
  }
  
  .delete-btn {
    background-color: #f44336; /* Red for delete */
  }
  
  .edit-btn:hover {
    background-color: #45a049;
  }
  
  .delete-btn:hover {
    background-color: #e53935;
  }
  </style>
  