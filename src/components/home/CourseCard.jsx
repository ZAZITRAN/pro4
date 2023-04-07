import React, { useState, useEffect } from 'react'
/* import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'; */
import Paging from '../extra/Paging';
import axios from 'axios';
import { Col, Row, Card, Image, List, Space,Input,Button, Modal  } from "antd"

const { Meta } = Card


 
const CourseCard = () => {
    const user=JSON.parse(localStorage.getItem("userLogin"))
    let [loading, setLoading]=useState(true)
    let [data, setData] = useState([])
    console.log(data);
    const [open, setOpen] = useState(false);
    const myTimeout = setTimeout( useEffect(() => {

        axios.get("http://localhost:8000/data/courses")
        
            .then(res => {
                console.log(res);

                setData(res.data.mess)

            })
            .catch(error => console.log(error));

        setLoading(false)
    }, []), 1000)
   

     function handerClick(e){
        console.log(e.target.innerHTML);
        if (user===null) {
            setOpen(true)
        }else{
        const result=data.filter(item=>item.nameCourse===e.target.innerHTML)
        const id=result[0].courseId
        window.location.href=`http://localhost:3000/course-list/${id}`
      }
    }
    return (
        <>
            <>
                <div className='pageName'>
                    <h1>
                        Khóa học
                    </h1>
                    <p>
                        <a>
                            Trang chủ
                        </a>
                        /
                        <span>
                            Khóa học
                        </span>
                    </p>
                </div>
                <div className='titel-item'>
                    <div className='titel-route'>
                        <div>
                            <span>Rikkei Academy có sẵn <span style={{ textDecoration: 'underline' }}>{data.length} Khóa học</span> <span>cho bạn</span></span>
                        </div>
                        

                    </div>
             
                </div>

                <Input.Search
                    enterButton
                    
                    style={{maxWidth:500, display:"flex", margin:"auto"}}
                    onSearch={(value)=>{
                        let newData=[]
                        for (let i = 0; i < data.length; i++) {
                            if(data[i].nameCourse.toLowerCase().includes(value.toLowerCase())){
                                newData.push({nameCourse:data[i].nameCourse, courseId:data[i].nameCourse, imgCourse:data[i].imgCourse, level:data[i].level})
                            }
                        }console.log(newData);
                        setData(newData)
                        /* const result= data.filter(item=>item.nameCourse===data.nameCourse) */
                    }}
                    ></Input.Search>

                <div className="course_list" style={{ width: "100%", margin:"0 auto"}}>
                   
                <List style={{ width: "100%", margin:"20px auto"}}
                grid={{xs:1,sm:2, md:3, xl:4, xxl :5}}
                loading={loading}
                dataSource= {data}  
                renderItem={(item=>{
                    return(
                    <>
                    <Space style={{padding:"0 16px"}} direction="vertical"/>
                     <div className='course'   style={{height:"220px",width:"300px",margin:"15px",padding:"10px 0",backgroundColor:"rgb(230, 230, 230"}}>
                     
                        <meter min={0} max={30} value={item.level*10} low={19} high={29}/>
                             <span>{item.level===1 ? "Cơ bản" : item.level===2? "Trung bình" : "Nâng cao"}</span>
                        <img style={{height:"150px",width:"299px", margin:"0 auto", border:"1px solid gray"}}src={item.imgCourse} />
                           
                             <h6 onClick={handerClick}>{item.nameCourse}</h6>
                            
                            
                    </div>
                    </>)
                     
                })}   ></List>
                </div>

                <Modal
        closable={false}
        open={open}
        title="Thông báo"
       
        footer={[
          
      
          <Button
            key="link"
            href="http://localhost:3000/login"
            type="primary"
            loading={loading}
            danger
          >
            Đến trang đăng nhập
          </Button>,
        ]}
      >
        <p>Vui lòng đăng nhập rồi quay lại xem khóa học</p>
      </Modal>
           
                 
              

              

             


            </>
        </>
    )
}
export default CourseCard