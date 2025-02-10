import { createStore } from 'vuex';

export default createStore({
  state: {
    employees: null,

    //leaverequests
    leaverequests: null,

    //payroll
    payroll: [],
    selectedPayroll: null, // Stores the selected payroll for editing
    

  },
  mutations: {
    //payroll
    setpayroll(state, payload){
      state.payroll= payload;
    },
    setSelectedPayroll(state, payload) {
      state.selectedPayroll = payload;
    },
    //leaverequest
    setleaverequests(state, payload){
      state.leaverequests = payload;
    },
    //employees
    setEmployees(state, payload) {
      state.employees = payload;
    },
    addEmployee(state, newEmployee) {
      state.employees.push(newEmployee);
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
  },
  actions: {
    //PAYROLL TABLE (Getting all the information)
     async getpayroll ({commit},payload){
      const response = await fetch("http://localhost:4000/payroll")
      const {payroll_records} = await response.json()
      commit("setpayroll", payroll_records)
    },
    // Fetch a single payroll record for editing
      async getSinglePayroll({ commit }, payroll_id) {
        const response = await fetch(`http://localhost:4000/payroll/${payroll_id}`);
        const { payroll_record } = await response.json();
        commit("setSelectedPayroll", payroll_record);
    },
    //update payroll record
    async updatePayroll({ commit }, payroll) {
      const response = await fetch(`http://localhost:4000/payroll/${payroll.payroll_id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          employee_id: payroll.employee_id,
          hours_worked: payroll.hours_worked,
          leave_deductions: payroll.leave_deductions,
          tax_deductions: payroll.tax_deductions,
          insurance_deductions: payroll.insurance_deductions,
          pension_deductions: payroll.pension_deductions,
          final_salary: payroll.final_salary,
        }),
      });
  
      const { payroll_records } = await response.json();
      commit("setpayroll", payroll_records);
    },
    //LEAVEREQUEST TABLE
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
          commit('setleaverequests', leave_requests); // Update leave requests state
        } else {
          console.error('Failed to update leave request status');
        }
      } catch (error) {
        console.error('Error updating leave request status:', error);
      }
    }, 
  //   async getleaverequests({commit},payload){
  //     const response = await fetch("http://localhost:4000/leaverequests")
  //     const {leave_requests} = await response.json()
  //     commit("setleaverequests", leave_requests)
  //   },
  //   async updateLeaveRequestStatus({ commit }, { leave_request_id, status }) {
  //     try {
  //         const response = await fetch(
  //             `http://localhost:4000/leaverequests/${leave_request_id}`,
  //             {
  //                 method: 'PATCH',
  //                 headers: {
  //                     'Content-Type': 'application/json',
  //                 },
  //                 body: JSON.stringify({
  //                   status,
  //               }),
  //           }
  //         );
  //         const { leave_requests } = await response.json();
  //         commit('setleaverequests', leave_requests); // Update leave requests state
  //     } catch (error) {
  //         console.error('Error updating leave request status:', error);
  //     }
  // },

    async getData({ commit }) {
      const response = await fetch('http://localhost:4000/employees');
      const { employees } = await response.json();
      commit('setEmployees', employees);
    },
    async addEmployee({ commit }, newEmployee) {
      try {
        const response = await fetch('http://localhost:4000/employees', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newEmployee),
        });
    
        if (!response.ok) {
          throw new Error('Failed to add employee');
        }
    
        const addedEmployee = await response.json(); 
        commit('addEmployee', addedEmployee); // Add the new employee to the list
      } catch (error) {
        console.error('Error adding employee:', error);
      }
    },
    async updateEmployee({ commit }, updatedEmployee) {
      try {
        const response = await fetch(
          `http://localhost:4000/employees/${updatedEmployee.employee_id}`,
          {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedEmployee),
          }
        );

        if (!response.ok) {
          throw new Error('Failed to update employee');
        }

        commit('updateEmployee', updatedEmployee);
      } catch (error) {
        console.error('Error updating employee:', error);
      }
    },
    async deleteEmployee({ commit }, employeeId) {
      try {
        const response = await fetch(
          `http://localhost:4000/employees/${employeeId}`,
          {
            method: 'DELETE',
          }
        );

        if (!response.ok) {
          throw new Error('Failed to delete employee');
        }

        commit('deleteEmployee', employeeId);
      } catch (error) {
        console.error('Error deleting employee:', error);
      }
    },
  },
});
