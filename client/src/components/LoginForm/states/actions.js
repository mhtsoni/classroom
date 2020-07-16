import {PASS_CHANGE,EMP_CHANGE,SUBMIT,LOG_OUT} from './types'
export const submit = ()=>{
    return {
        type: SUBMIT
    }
}
export const passChange = (e)=>{
    return {
        type: PASS_CHANGE,
        payload : e
    }
}
export const empIdChange = (e)=>{
    return {
        type: EMP_CHANGE,
        payload : e
    }
}
export const logOut = ()=>{
    return {
        type: LOG_OUT
    }
}