import { createStore } from 'vuex';

export default createStore({
  state: {
    attendance_records: [], 
  },

  mutations: {
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
    async getData({ commit }) {
      try {
        const response = await fetch('http://localhost:4000');
        if (!response.ok) throw new Error(`Error fetching data: ${response.statusText}`);
        const { attendance_records } = await response.json();
        commit('setAttendance_records', attendance_records);
        console.log(attendance_records)
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    },

    async deleteAttendance_record({ commit }, attendance_id) {
      try {
        const response = await fetch(`http://localhost:4000/${attendance_id}`, { method: 'DELETE' });
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
      console.log(updatedData);
      
      // try {
        const response = await fetch(`http://localhost:4000/${attendance_id}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedData),
        });

        if (!response.ok) throw new Error('Failed to update attendance record');
        
        const updatedRecord = await response.json();
        commit('updateAttendance_record', updatedRecord);
         location.reload()
      // } catch (error) {
      //   console.error('Error updating attendance record:', error);
      // }
    },

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
  }
});
