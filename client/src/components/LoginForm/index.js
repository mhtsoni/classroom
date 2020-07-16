import React,{useState} from 'react'
import {connect} from 'react-redux'
import 'antd/dist/antd.css';
import {Input,Alert } from 'antd';
import {LoginWrapper} from './index.style'
import {submit,passChange,empIdChange} from './states/actions'
import axios from 'axios'
function LoginForm(props) {
    const [error,setError] = useState(null)
        const Submit = async (e)=>{
            e.preventDefault();
            axios.post('api/users',{"employee_id": props.employee_id, "password" : props.password})
                .then(res => {
                    if(res.data.name){
                        localStorage.setItem('LoggedIn',true)
                        localStorage.setItem('UserName',res.data.name)
                        localStorage.setItem('employee_id',res.data.employee_id)
                        props.handleSubmit()
                        setError(null)
                    }
                    else if(res.data){
                        setError(res.data)
                    }
                })
                .catch(err=>{
                    console.log(err.message)
                })
        }
        return (
            <LoginWrapper title="LogIn" style={{ width: 300 }}>
                {error && 
                <Alert message={error} type="error" />}
                <form>
                    <Input className='inp' type="text" onChange={(e)=>props.handleEmpIdChange(e)} placeholder='Employee Id'/>
                    <Input className='inp' type="text" onChange={(e)=>props.handlePassChange(e)} placeholder='Password'/>
                    <Input type='submit' value="Log In" onClick={(e)=>Submit(e)}/>
                </form>
            </LoginWrapper>
        )
}
const mapStateToProps = (state) =>{
    return {
        employee_id : state.employee_id,
        password : state.password,
        login : state.login,
        userName : state.userName
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        handleEmpIdChange : (e)=>dispatch(empIdChange(e)),
        handlePassChange : (e)=>dispatch(passChange(e)),
        handleSubmit : ()=>dispatch(submit())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
