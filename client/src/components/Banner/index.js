import React from 'react'
import 'antd/dist/antd.css';
import {Row,Col} from 'antd';
import bannerImage from '../../assets/images/banner.svg'
import './index.css'
import {bannerData} from '../../data.js'
function Banner() {
    return (
        <Row className='site-banner'>
            <Col md={24} lg={12}>
                <Row>
                    <h1 className='banner-heading'>{bannerData.title}</h1>    
                    <p className='banner-para'>{bannerData.para}</p>
                </Row>
            </Col>
            <Col md={24} lg={12}> 
                <object width='100%' height='400px' type="image/svg+xml" data={bannerImage}>svg-animation</object>
            </Col>
        </Row>
    )
}

export default Banner
