import React,{useEffect,useState} from 'react';
import axios from 'axios';
import './App.css';
import Iframe from 'react-iframe'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Nav from './components/Nav';

import TouchEffect from './components/TouchEffect';

function App() {
  const [description,setdescription]=useState('No Description Available');
  const [course_name,setcourse_name]=useState('Get Started');
  const [isSliding,setisSliding]=useState(false);
  const [src,setsrc]=useState('http://www.youtube.com/embed/xDMP3i36naA');
  const changeVideo = ()=>{
    setisSliding(true);
    axios.get(`http://localhost:3030/`)
      .then(res => {
        console.log(res);
        setsrc(res.data[0].video);
        setdescription(res.data[0].description);
        setcourse_name(res.data[0].course_name);
        setisSliding(false);
      })
      .catch(err=>{console.log(err.message)})
  }

  return (
    <div className="App">
      <Nav description={description} course_name={course_name}/>
      <Iframe url={src}
      id="myId"
      className={`video ${isSliding ? "slide" : ""}`}
      display="initial"
      position="relative" allowfullscreen  />
      <div className="draggable">
          <Swiper className="swiper"
            spaceBetween={50}
            onTransitionStart={() => changeVideo()}
          >
            <SwiperSlide >
            </SwiperSlide>
            <SwiperSlide >
            </SwiperSlide>
          </Swiper>
      </div>
      <div className="draggable1">
          <Swiper className="swiper"
            spaceBetween={50}
            onTransitionStart={() => changeVideo()}
          >
            <SwiperSlide >
            </SwiperSlide>
            <SwiperSlide >
            </SwiperSlide>
          </Swiper>
      </div>
    </div>
  );
}

export default App;
