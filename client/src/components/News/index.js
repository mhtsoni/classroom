import React,{useState,useEffect} from 'react'
import 'antd/dist/antd.css';
import {Row,Col,Card,Input} from 'antd';
import axios from 'axios'
function News() {
    const [news,setnews]=useState([]);
    useEffect(()=>{
        axios.get('https://geolocation-db.com/json/697de680-a737-11ea-9820-af05f4014d91').then((resp)=>{
            axios.get('api/news',{country_code:resp.data.country_code}).then((res)=>{
            setnews(res.data.articles);
            console.log(res.data)
            console.log(news)
            }).catch((err)=>{
                console.log(err.message)
            })
        })
    },[])
    
        
    return (
    <Row>
        {news && news.map((item)=>
            <Col xs={24} sm={12} lg={8} xl={6}>
                <Card style={{textAlign:'center'}} title={item.course_name}>
                    <img style={{maxWidth:'300px', maxHeight:'300px',display:'block', margin:'auto'}} src={item.urlToImage}/>
                    <p>{item.description}</p>
                    <p>{item.content}</p>
                </Card>
            </Col>
        )}
        {
            (news==='') && (<h1>Sorry We Couldnot Find any matching News</h1>)
        }
    </Row>
    )
}

export default News
