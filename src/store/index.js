import { createStore } from 'vuex';

export default createStore({
  state: {
    employees: [],
    leaverequests: null,
    payroll: [],
    selectedPayroll: null,
    attendance_records: [],
  },
  mutations: {
    // Employees
    setEmployees(state, employees) {
      state.employees = employees;
    },
    addEmployee(state, employee) {
      state.employees.unshift(employee); // Add the new employee at the start of the list
    },
   
    updateEmployee(state, updatedEmployee) {
      const index = state.employees.findIndex(
        (employee) => employee.employee_id === updatedEmployee.employee_id
      );
      if (index !== -1) {
        state.employees.splice(index, 1, updatedEmployee);
      }
    },
    deleteEmployee(state, employeeId) {
      state.employees = state.employees.filter(
        (employee) => employee.employee_id !== employeeId
      );
    },
    // Payroll
    setpayroll(state, payload) {
      state.payroll = payload;
    },
    setSelectedPayroll(state, payload) {
      state.selectedPayroll = payload;
    },
    // Leave Requests
    setleaverequests(state, payload) {
      state.leaverequests = payload;
    },
    //attendance records
    setAttendance_records(state, payload) {
      state.attendance_records = payload;
    },
    deleteAttendance_record(state, attendance_id) {
      state.attendance_records = state.attendance_records.filter(record => record.attendance_id !== attendance_id);
    },
    updateAttendance_record(state, updatedRecord) {
      const index = state.attendance_records.findIndex(record => record.attendance_id === updatedRecord.attendance_id);
      if (index !== -1) {
        state.attendance_records[index] = { ...state.attendance_records[index], ...updatedRecord };
      }
    }
  },
  actions: {
    // Fetch Employees
    async getEmployees({ commit }) {
      try {
        const response = await fetch('http://localhost:4000/employees');
        const { employees } = await response.json();
        commit('setEmployees', employees);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    },
    // Add Employee
    async addEmployee({ commit }, employee) {
      try {
        const response = await fetch('http://localhost:4000/employees', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(employee),
        });

        if (response.ok) {
          const newEmployee = await response.json();
          commit('addEmployee', newEmployee);
          location.reload();
        } else {
          throw new Error('Failed to add employee');
        }
      } catch (error) {
        console.error('Error adding employee:', error);
      }
    },
    // Update Employee
    async updateEmployee({ commit }, updatedEmployee) {
      try {
        const response = await fetch(`http://localhost:4000/employees/${updatedEmployee.employee_id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedEmployee),
        });

        if (response.ok) {
          commit('updateEmployee', updatedEmployee);
          location.reload(); // Reload after update
        } else {
          throw new Error('Failed to update employee');
        }
      } catch (error) {
        console.error('Error updating employee:', error);
      }
    },
    // Delete Employee
    async deleteEmployee({ commit }, employeeId) {
      try {
        const response = await fetch(`http://localhost:4000/employees/${employeeId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          commit('deleteEmployee', employeeId); // Update store to remove the employee
        } else {
          throw new Error('Failed to delete employee');
        }
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    },

  // Payroll Actions (similar to employees)
    async getpayroll({ commit }) {
      const response = await fetch('http://localhost:4000/payroll');
      const { payroll_records } = await response.json();
      commit('setpayroll', payroll_records);
    },
    async updatePayroll({ commit }, payroll) {
      const response = await fetch(`http://localhost:4000/payroll/${payroll.payroll_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payroll),
      });
      const { payroll_records } = await response.json();
      commit('setpayroll', payroll_records);
    },
    // Leave Requests
    async getleaverequests({ commit }) {
      try {
        const response = await fetch('http://localhost:4000/leaverequests');
        const { leave_requests } = await response.json();
        commit('setleaverequests', leave_requests);
      } catch (error) {
        console.error('Error fetching leave requests:', error);
      }
    },
    async updateLeaveRequestStatus({ commit }, { leave_request_id, status }) {
      try {
        const response = await fetch(
          `http://localhost:4000/leaverequests/${leave_request_id}`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ status }),
          }
        );
        if (response.ok) {
          const { leave_requests } = await response.json();
          commit('setleaverequests', leave_requests);
        } else {
          console.error('Failed to update leave request status');
        }
      } catch (error) {
        console.error('Error updating leave request status:', error);
      }
    },
    //attendance records
    async getData({ commit }) {
      try {
        const response = await fetch('http://localhost:4000/attendance'); // Change this to the correct route
        if (!response.ok) throw new Error(`Error fetching data: ${response.statusText}`);
        const { attendance_records } = await response.json();
        commit('setAttendance_records', attendance_records);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    },
    async deleteAttendance_record({ commit }, attendance_id) {
      try {
        const response = await fetch(`http://localhost:4000/attendance/${attendance_id}`, { method: 'DELETE' });
        if (response.ok) {
          commit('deleteAttendance_record', attendance_id);
        } else {
          throw new Error(`Failed to delete attendance record: ${attendance_id}`);
        }
      } catch (error) {
        console.error('Error deleting attendance record:', error);
      }
    },
    async updateAttendanceRecord({ commit }, { attendance_id, updatedData }) {
      try {
        const response = await fetch(`http://localhost:4000/attendance/${attendance_id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedData),
        });
        if (!response.ok) throw new Error('Failed to update attendance record');
    
        const updatedRecord = await response.json();
        commit('updateAttendance_record', updatedRecord);
      } catch (error) {
        console.error('Error updating attendance record:', error);
      }
    }   
  ,
    async postNewemployeee({ dispatch }, employeee) {
      try {
        const response = await fetch('http://localhost:4000', {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(employeee),
        });
        if (!response.ok) throw new Error('Failed to add new employee');
        await dispatch('getData');
      } catch (error) {
        console.error('Error adding new employee:', error);
      }
    }
  },
});
