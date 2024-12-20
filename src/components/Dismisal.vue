<template>
  <div class="d-grid gap-2 col-6 mx-auto">
    <!--Hiding and showing the dismissal button-->
    <button class="btn btn-danger" @click="showForm = !showForm">Dismiss Employee</button>
    <!--A form to input employee using employeeId-->
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
    deleteEmployee() {
      //using the emit()function to pass this event/indormation to the parent component (in our case the parent is the dashboardView page)
      this.$emit('delete-employee', parseInt(this.id));
      this.showForm = false;
      this.id = '';
    },
  },
};
</script>
