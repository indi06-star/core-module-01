import { createStore } from 'vuex';

export default createStore({
  state: {
    employees: null,
    payroll: null,
    leaverequests: null,

  },
  mutations: {
    //employees
    setEmployees(state, payload) {
      state.employees = payload;
    },

    //payroll
    setpayroll(state, payload){
      state.payroll= payload;
    },
    //leaverequest
    setleaverequests(state, payload){
      state.leaverequests = payload;
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

    //LEAVEREQUEST TABLE 
    async getleaverequests({commit},payload){
      const response = await fetch("http://localhost:4000/leaverequests")
      const {leave_requests} = await response.json()
      commit("setleaverequests", leave_requests)
    },


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
