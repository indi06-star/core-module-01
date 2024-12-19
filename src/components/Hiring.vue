<template>
  <div class="d-grid gap-2 col-6 mx-auto">
    <button class="btn btn-primary" @click="showForm = !showForm">Add Employee</button>
    <br>
    <div v-if="showForm" class="mt-3">
      <form @submit.prevent="submitForm">
        <input v-model="name" placeholder="Name" class="form-control mb-2" required />
        <input v-model="position" placeholder="Position" class="form-control mb-2" required />
        <input v-model="department" placeholder="Department" class="form-control mb-2" required />
        <input v-model="image" placeholder="Image URL" class="form-control mb-2" />
        <button type="submit" class="btn btn-primary" :disabled="isLoading">
          <span v-if="isLoading">Adding...</span>
          <span v-else>Hire</span>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showForm: false,
      name: '',
      position: '',
      department: '',
      image: '',
      isLoading: false,
    };
  },
  methods: {
    submitForm() {
      const newEmployee = {
        id: Date.now(),
        name: this.name,
        position: this.position,
        department: this.department,
        image: this.image || 'https://via.placeholder.com/150',
      };
       // Simulate a delay (e.g., 2 seconds)
       setTimeout(() => {
        this.$emit('add-employee', newEmployee); // Emit event after delay
        this.resetForm();
        this.isLoading = false; // Stop loading
      }, 2000);
    },
    resetForm() {
      this.showForm = false;
      this.name = this.position = this.department = this.image = '';
    },
  },
  
}
  

</script>

