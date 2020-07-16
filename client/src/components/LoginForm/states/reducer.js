import {PASS_CHANGE,EMP_CHANGE,SUBMIT,LOG_OUT} from './types'
const initState={
    employee_id : '1234',
    password : 'pass',
    login : localStorage.getItem('LoggedIn'),
    userName : localStorage.getItem('UserName')
}
const LoginReducer = (state = initState, action)=>{
    switch (action.type) {
        case SUBMIT:
              return {
                  ...state,
                  login : localStorage.getItem('LoggedIn'),
                  userName :localStorage.getItem('UserName')
              }
        case PASS_CHANGE:
            return {
                    ...state,
                    password: action.payload.target.value
              }
        case EMP_CHANGE:
          return {
                  ...state,
                  employee_id: action.payload.target.value
            }
        case LOG_OUT:
            console.log("Mohit")
            localStorage.removeItem('LoggedIn')
            localStorage.removeItem('UserName')
            return {
              ...state,
              login : false,
              userName : 'null'
            }
        default : 
              return state
    }
}
export default LoginReducer