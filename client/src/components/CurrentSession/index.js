import React from 'react'
import 'antd/dist/antd.css';
import {Row} from 'antd';
import './index.css'
import Iframe from 'react-iframe'
import {currentSessiondata} from '../../data.js'
function CurrentSession() {
    return (
        <Row className='header-video'>
            <h1 className='current-session-header'>{currentSessiondata.title}</h1>
            <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                width="100%"
                height="450px"
                id="myId"
                className="header-frame"
                display="initial"
                position="relative"
            />
        </Row>
    )
}

export default CurrentSession
