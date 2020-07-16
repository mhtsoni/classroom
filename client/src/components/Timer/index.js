import {logOut} from '../LoginForm/states/actions'
import React,{useRef,useEffect} from 'react';
import './index.style.css';
import {connect} from 'react-redux'
import PunchIn from '../PunchIn';
import 'antd/dist/antd.css';
import {Button } from 'antd';


function Timer(props) {
  var stylingRef = useRef(null)
  var weekDayRef = useRef(null)
  var showTimeRef = useRef(null)
  var now       = new Date();
  var hourDeg   = now.getHours() / 12 * 360 + now.getMinutes() / 60 * 30;
  var minuteDeg = now.getMinutes() / 60 * 360 + now.getSeconds() / 60 * 6;
  var secondDeg = now.getSeconds() / 60 * 360;
  var stylesDeg = [
  "@keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
  "@keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
  "@keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}"
  ].join("");
  const ShowTime = ()=>{
    var weekday = new Array(7)
      weekday[0]="Sun"
      weekday[1]="Mon"
      weekday[2]="Tue"
      weekday[3]="Wed"
      weekday[4]="Thu"
      weekday[5]="Fri"
      weekday[6]="Sat"
    var now = new Date(),
      week = weekday[now.getDay()],
      day = (now.getDate() < 10 ? '0' : '') + now.getDate(),
      hour = now.getHours(),
      APhour = hour >12 ? hour-12 : hour,
      zeroHour = (APhour <10 ? '0' : '')+APhour,
      minute = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes(),
      format = hour >= 12 ? 'PM' : 'AM',
      showtime = zeroHour + ':' + minute + format;
      weekDayRef.current.innerHTML = week + ' ' + day;
      showTimeRef.current.innerHTML = showtime;
  }
  useEffect(()=>{
      stylingRef.current.innerHTML=stylesDeg;
    　setTimeout(ShowTime,1000);
  },[])
    return (
      <div className="nav">
        <style ref={stylingRef} id="clock-animations"></style>
        <div className="clock-wapper">
          <div className="dial">
            <div className="mark"></div>
            <div className="mark"></div>
            <div className="mark"></div>
            <div className="mark"></div>
            <div className="mark"></div>
            <div className="mark"></div>
            <div className="mark"></div>
            <div className="mark"></div>
            <div className="mark"></div>
            <div className="mark"></div>
            <div className="mark"></div>
            <div className="mark"></div>
          </div>
          <div className="hour"></div>
          <div className="minute"></div>
          <div className="second"></div>
          <div className="fixed-center"></div>
          <div className="logo">WORK TIME</div>
          <div ref={weekDayRef} id="week-day">Sun 11</div>
          <div ref={showTimeRef} id="show-time">00:00AM</div>
        </div>
        <div className="punchIn">
          <PunchIn/>
          <Button  style={{display:'inline'}} onClick={props.logout}>Logout</Button>
        </div>
      </div>
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
const mapDispatchToProps = (dispatch)=>{
    return {
        logout : ()=>dispatch(logOut())
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Timer)