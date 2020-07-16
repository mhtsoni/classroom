import React from 'react'
import 'antd/dist/antd.css';
import {Row,Col,Card} from 'antd';
import './index.css'
function Services() {
    return (
        <Row>
            <Col xs={24} sm={12} lg={8} xl={6}>
                <Card className='services-card'>
                    <h1 style={{color:'red'}}><u>Live Mentoring</u></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                         an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Card>
            </Col>
            <Col xs={24} sm={12} lg={8} xl={6}>
                <Card className='services-card'>
                    <h1 style={{color:'red'}}><u>Live Mentoring</u></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                         an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Card>
            </Col>
            <Col xs={24} sm={12} lg={8} xl={6}>
                <Card className='services-card'>
                    <h1 style={{color:'red'}}><u>Live Mentoring</u></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                         an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Card>
            </Col>
            <Col xs={24} sm={12} lg={8} xl={6}>
                <Card className='services-card'>
                    <h1 style={{color:'red'}}><u>Live Mentoring</u></h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when
                         an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </Card>
            </Col>
        </Row>
    )
}

export default Services
