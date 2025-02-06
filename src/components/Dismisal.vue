<template>
  <div class="d-grid gap-2 col-6 mx-auto">
    <!-- Hiding and showing the dismissal button -->
    <button class="btn btn-danger" @click="showForm = !showForm">Delete Employee</button>
    <!-- A form to input employee ID for dismissal -->
    <div v-if="showForm" class="mt-3">
      <form @submit.prevent="deleteEmployee">
        <input v-model="id" placeholder="Employee ID" class="form-control mb-2" required />
        <button type="submit" class="btn btn-danger">Dismiss</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showForm: false,
      id: '',
    };
  },
  methods: {
    // Emit event to delete an employee by ID
    deleteEmployee() {
      if (this.id) {
        // Emit the delete event to the parent, passing the employee ID as an integer
        this.$emit('delete-employee', parseInt(this.id));
        // Reset form after submission
        this.showForm = false;
        this.id = '';
      }
    },
  },
};
</script>
