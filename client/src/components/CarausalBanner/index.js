import React from 'react'
import 'antd/dist/antd.css';
import { Carousel } from 'antd';
import './index.css';
function CarausalBanner() {
    return (
              <Carousel autoplay={true} className='carausal-banner'>
                <div>
                <h3>Professional Teachers</h3>
                </div>
                <div>
                <h3>In-Depth Topic Coverage</h3>
                </div>
                <div>
                <h3>Daily Assignments</h3>
                </div>
                <div>
                <h3>Live Doubts</h3>
                </div>
            </Carousel>
    )
}

export default CarausalBanner
