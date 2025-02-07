import {createStore} from "vuex"

export default createStore ({
  state:{
    employees : null

},
//commit
mutations:{
  setEmployees(state,payload){
    state.employees = payload

  }

},
//handles any async data
actions: {
  async getData({commit}, payload){
    let {employees} = await (await fetch("http://localhost:4000/employees")).json()
  commit("setEmployees", employees)
  
    

  }
},
modules:{

}
})
