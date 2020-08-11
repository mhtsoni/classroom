import React from 'react'
import 'antd/dist/antd.css';
import {Button } from 'antd';

function LogOut() {
    const DeleteSession = ()=>{
        localStorage.setItem('LoggedIn',false)
    }
    return (
        <div>
            <Button onClick={()=>DeleteSession()}>Logout</Button>
        </div>
    )
}

export default LogOut
