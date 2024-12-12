<template>
  <div class="modal fade show d-block" tabindex="-1" style="background: rgba(0, 0, 0, 0.5)">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ employee.name }}'s Details</h5>
          <button type="button" class="btn-close" @click="$emit('close')"></button>
        </div>
        <div class="modal-body">
          <p><strong>Position:</strong> {{ employee.position }}</p>
          <p><strong>Department:</strong> {{ employee.department }}</p>
          <div>
            <h6>Performance</h6>
            <ul>
              <li v-for="(score, index) in employee.performanceData" :key="index">
                Month {{ index + 1 }}: {{ score }}%
              </li>
            </ul>
          </div>
          <div>
            <h6>Salary</h6>
            <p>Base: {{ employee.baseSalary }}</p>
            <p>Bonuses: {{ employee.bonuses }}</p>
            <button class="btn btn-primary" @click="downloadPayslip">Download Payslip</button>
          </div>
          <div>
            <h6>Leave Requests</h6>
            <ul>
              <li
                v-for="leave in employee.leaveRequests"
                :key="leave.id"
                :style="{ color: leave.statusColor }"
              >
                {{ leave.date }} - {{ leave.status }}
              </li>
            </ul>
          </div>
          <div>
            <h6>Attendance</h6>
            <ul>
              <li v-for="attendance in employee.attendance" :key="attendance.date">
                {{ attendance.date }} - <span :style="{ color: attendance.color }">{{ attendance.status }}</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="$emit('close')">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    employee: Object,
  },
  methods: {
    downloadPayslip() {
      const payslip = `Payslip for ${this.employee.name}\nBase Salary: ${this.employee.baseSalary}\nBonuses: ${this.employee.bonuses}`;
      const blob = new Blob([payslip], { type: "text/plain" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${this.employee.name}-payslip.txt`;
      link.click();
    },
  },
};
</script>
