import React, { useState } from 'react'
import './css/doubts.css'
import 'antd/dist/antd.css';
import { Spin,Row,Col } from 'antd';
import { Jutsu } from 'react-jutsu'

const Cornfrence = () => {
  
  const [room, setRoom] = useState(localStorage.getItem('room'))
  const [name, setName] = useState(localStorage.getItem('host'))
  const [call, setCall] = useState(localStorage.getItem('oncall'))
  const [password, setPassword] = useState(localStorage.getItem('pass'))

  const handleClick = event => {
    event.preventDefault()
    if (room && name && password){
      setCall(true)
      localStorage.setItem('room',{room})
      localStorage.setItem('pass',{password})
      localStorage.setItem('oncall',true)
      localStorage.setItem('host',{name})
    }
  }
  const options = {
    configOverwrite: {
        disableDeepLinking: true,
    }
};
  return (
    <div>
      {call ? (<Jutsu
        containerStyles={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)'
         }}
        roomName={room}
        password={password}
        displayName={name}
        onMeetingEnd={() => {
          setCall(false)
          localStorage.removeItem('room');
          localStorage.removeItem('pass');
          localStorage.removeItem('oncall');
          localStorage.removeItem('host');
        }}
        loadingComponent={<Spin />} />)
        : (
          <form className='cornfrence-form'>
            <input id='room' type='text' placeholder='Room' value={room} onChange={(e) => setRoom(e.target.value)} /><br/>
            <input id='name' type='text' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} /><br/>
            <input id='password' type='text' placeholder='Password (optional)' value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
            <button onClick={handleClick} type='submit'>
              Start / Join
            </button>
          </form>
        )}
      <p className='cornfrencing-branding'>Made with Love <span role='img' aria-label='coffee'>☕</span> By <a href='https://applytech.in/'>ApplyTech</a></p>
    </div>
  )
}

export default Cornfrence