<template>
  <div class="tablePayroll">
    <NavBar />
    <br />
    <h1><strong>Payroll Data</strong></h1>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search by Employee Name"
      class="search-bar mb-4"
    />
    <div>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Hours Worked</th>
            <th>Leave Deductions</th>
            <th>Final Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="data in filteredEmployees" :key="data.employeeId">
            <td>{{ data.employeeId }}</td>
            <td>{{ data.employeeName }}</td>
            <td>{{ data.hoursWorked }}</td>
            <td>{{ data.leaveDeductions }}</td>
            <td>R{{ data.finalSalary }}.00</td>
            <td>
              <button @click="generatePayslip(data)" class="btn btn-primary">
                Payslip
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Modal for displaying payslip -->
    <div v-if="showPayslipModal" class="payslip-modal">
      <h3>Payslip for Employee ID: {{ selectedPayslip.employeeId }}</h3>
      <p>Employee Name: {{ selectedPayslip.employeeName }}</p>
      <p>Hours Worked: {{ selectedPayslip.hoursWorked }}</p>
      <p>Leave Deductions: R{{ selectedPayslip.leaveDeductions }}</p>
      <p>Final Salary: R{{ selectedPayslip.finalSalary }}.00</p>
      <button @click="downloadPayslip" class="btn btn-success">Download Payslip</button>
      <button @click="closePayslipModal" class="btn btn-danger">Close</button>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import { jsPDF } from 'jspdf';

export default {
  components: {
    NavBar
  },
  data() {
    return {
      payrollData: [
        { employeeId: 1, employeeName: "Sibongile Nkosi", hoursWorked: 160, leaveDeductions: 8, finalSalary: 69500 },
        { employeeId: 2, employeeName: "Lungile Moyo", hoursWorked: 150, leaveDeductions: 10, finalSalary: 79000 },
        { employeeId: 3, employeeName: "Thabo Molefe", hoursWorked: 170, leaveDeductions: 4, finalSalary: 54800 },
        { employeeId: 4, employeeName: "Keshav Naidoo", hoursWorked: 165, leaveDeductions: 6, finalSalary: 59700 },
        { employeeId: 5, employeeName: "Zanele Khumalo", hoursWorked: 158, leaveDeductions: 5, finalSalary: 57850 },
        { employeeId: 6, employeeName: "Sipho Zulu", hoursWorked: 168, leaveDeductions: 2, finalSalary: 64800 },
        { employeeId: 7, employeeName: "Naledi Moeketsi", hoursWorked: 175, leaveDeductions: 3, finalSalary: 71800 },
        { employeeId: 8, employeeName: "Farai Gumbo", hoursWorked: 160, leaveDeductions: 0, finalSalary: 56000 },
        { employeeId: 9, employeeName: "Karabo Dlamini", hoursWorked: 155, leaveDeductions: 5, finalSalary: 61500 },
        { employeeId: 10, employeeName: "Fatima Patel", hoursWorked: 162, leaveDeductions: 4, finalSalary: 57750 }
      ],
      searchQuery: "",
      showPayslipModal: false,
      selectedPayslip: null,
    };
  },
  computed: {
    filteredEmployees() {
      const query = this.searchQuery.toLowerCase();
      return this.payrollData.filter(employee => {
        return (
          employee.employeeName.toLowerCase().includes(query) ||
          employee.employeeId.toString().includes(query)
        );
      });
    }
  },
  methods: {
    generatePayslip(data) {
      this.selectedPayslip = data;
      this.showPayslipModal = true;
    },
    closePayslipModal() {
      this.showPayslipModal = false;
    },
    downloadPayslip() {
      const { employeeId, employeeName, hoursWorked, leaveDeductions, finalSalary } = this.selectedPayslip;

      // Calculate tax (Example: 10% tax on final salary)
      const tax = finalSalary * 0.1;
      const netSalary = finalSalary - tax;

      // Create PDF document
      const doc = new jsPDF();
      doc.setFont('times');
      
      doc.text(`Payslip for Employee ID: ${employeeId}`, 20, 20);
      doc.text(`Employee Name: ${employeeName}`, 20, 30);
      doc.text(`Hours Worked: ${hoursWorked}`, 20, 40);
      doc.text(`Leave Deductions: R${leaveDeductions}`, 20, 50);
      doc.text(`Gross Salary: R${finalSalary}`, 20, 60);
      doc.text(`Tax Deducted (10%): R${tax.toFixed(2)}`, 20, 70);
      doc.text(`Net Salary (after tax): R${netSalary.toFixed(2)}`, 20, 80);

      // Save the generated PDF
      doc.save(`Employee_${employeeId}_Payslip.pdf`);
    },
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-family: 'Times New Roman', Times, serif;
}

th, td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}

h1 {
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  font-size: 50px;
  color: black;
}

.payslip-modal {
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 0);
  width: 50%;
  background: white;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.search-bar {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: center;
  border: 2px solid blue;
}

.form-control {
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
}
</style>
