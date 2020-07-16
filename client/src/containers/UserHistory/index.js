import 'antd/dist/antd.css';
import {Card} from 'antd';
import React,{useEffect,useState} from 'react'
import axios from 'axios'

function HistoryContainer() {
    const [history,setHistory]=useState([])
        useEffect(()=>{axios.post('api/workhistory',{"employee_id" :localStorage.getItem('employee_id')})
        .then(res => {
            setHistory(res.data)
        })
        .catch(err=>{
            console.log(err.message)
        })
    },[])
    return (
        <div>
            {history.map((item)=>(
                <div style={{display:'inline-block', marginLeft:'10px'}} >
                <Card key={Math.random()}
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                >
                    <h3 key={Math.random()} >{item.description}</h3>
                    <h3 key={Math.random()}>{item.start}</h3>
                    <h3 key={Math.random()}>{item.end}</h3>
                    <h3 key={Math.random()}>{item.date}</h3>
              </Card>
              </div>
        ))}
        </div>
        )
}

export default HistoryContainer
