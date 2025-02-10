<template>
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h2>Edit Payroll Record</h2>
        <form @submit.prevent="updatePayrollRecord">
          <label>Hours Worked:</label>
          <input v-model="payroll.hours_worked" type="number" />
          
          <label>Leave Deductions:</label>
          <input v-model="payroll.leave_deductions" type="number" />
  
          <label>Tax Deduction:</label>
          <input v-model="payroll.tax_deductions" type="number" />
  
          <label>Insurance Deduction:</label>
          <input v-model="payroll.insurance_deductions" type="number" />
  
          <label>Pension Deduction:</label>
          <input v-model="payroll.pension_deductions" type="number" />
  
          <label>Final Salary:</label>
          <input v-model="payroll.final_salary" type="number" />
  
          <button type="submit">Save</button>
          <button @click="closeModal">Cancel</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      payroll: Object,
      showModal: Boolean
    },
    methods: {
      closeModal() {
        this.$emit("close");
      },
      updatePayrollRecord() {
        // Add the updated data to the API
        this.$store.dispatch("updatePayroll", this.payroll);
        this.closeModal();
      }
    }
  }
  </script>
  