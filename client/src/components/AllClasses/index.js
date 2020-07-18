import React,{useState,useEffect} from 'react'
import 'antd/dist/antd.css';
import {Row,Col,Card,Input} from 'antd';
import axios from 'axios'
import Iframe from 'react-iframe';
const { Search } = Input;
function AllClasses() {
    const [all_courses,setCourses]=useState([]);
    var courses=[];
    useEffect(
        
        ()=>((async ()=>{
        axios.post('api/courses',{}).then((res)=>{
            setCourses(res.data);
            }).catch((err)=>{
                console.log(err.message)
            })
        })()
        
    ),[]);

    (async ()=>{
        await axios.post('api/courses',{}).then((res)=>{
            courses=res.data;
            }).catch((err)=>{
                console.log(err.message)
            })
    })();

    const filterFunction = (userInput) =>{
        console.log(userInput);
        var filteredCourses = courses.filter((x)=>{ 
            return x.course_name.toLowerCase().includes(userInput.toLowerCase())
        })
        if(userInput!=='')
            setCourses(filteredCourses);
        else
            setCourses(courses);
     }
    return (
        <Row>
            <Search placeholder="input search text" onChange={e => filterFunction(e.target.value)} enterButton />
            {all_courses && all_courses.map((item)=>(
                <Col xs={24} sm={12} lg={8} xl={6}>
                    <Card title={item.course_name}>
                        <Iframe url="http://www.youtube.com/embed/xDMP3i36naA"
                            width="100%"
                            height="200px"
                            id="myId"
                            className="header-frame"
                            display="initial"
                            position="relative"
                        />
                        <p>{item.description}</p>
                    </Card>
                </Col>
            ))}
            {
                (all_courses==='') && (<h1>Sorry We Couldnot Find any matching courses</h1>)
            }
        </Row>
    )
}

export default AllClasses
