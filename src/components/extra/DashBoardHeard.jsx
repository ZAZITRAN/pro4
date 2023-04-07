import React, {useState} from 'react'

import { ReadOutlined, WalletOutlined, HistoryOutlined, ClockCircleOutlined, UnorderedListOutlined, SettingOutlined, LockOutlined, ScheduleOutlined, InsertRowBelowOutlined } from '@ant-design/icons';
import { Layout, Menu, Anchor } from 'antd';
import DashboardContent from '../tasks/DashboardContent';
import MyCourseList from '../tasks/MyCourseList'
import ExamHistory from '../tasks/ExamHistory';
import PointHistory from '../tasks/PointHistory'
import AssignmentList from '../tasks/AssignmentList'
import Account from '../tasks/Account'
import ChangePass from '../tasks/ChangePass';
import { Route, Routes, Router, Outlet,useNavigate } from 'react-router-dom';
import Nav_bar from '../home/Navbar';


const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Lộ trình của tôi', 'my-course-list', <ReadOutlined />),
    getItem('Khóa học gần đây', 'exam-history', <WalletOutlined />),

    getItem('Lịch sử điểm', 'point-history', <ClockCircleOutlined />),
    getItem('Danh sách bài tập', '5', <UnorderedListOutlined />),
    getItem('Cài đặt', '6', <SettingOutlined />),
    getItem('Đổi mật khẩu', 'changepass', <LockOutlined />),
    getItem('Điểm danh', '8', <ScheduleOutlined />),
    getItem('Thời khóa biểu', '9', <InsertRowBelowOutlined />),
];
/* console.log(items); */

export default function DashBoard() {
    console.log(typeof window.location.pathname);
    const Arr= window.location.pathname.split("/")
    console.log(Arr);
    let defaulKey=Arr[Arr.length-1]
    console.log(defaulKey);
    
    const navigate=useNavigate()
    let user=JSON.parse(localStorage.getItem("userLogin"))
        console.log(user);
        if(user===null){
            alert (" Bạn phải đăng nhập để mở bảng đièu khiển")
            window.location.href="http://localhost:3000/login"
        }else{

    return (
        
        <div>
            <Nav_bar/>
            <Layout>
                <Sider breakpoint="lg" collapsedWidth="0">
                    <div className="logo" />
                    
                    <Menu
                   
                  defaultSelectedKeys={[defaulKey]} 
                        mode="inline"
                        theme="dark"
                        onClick={({key})=>{
                           
                            navigate(key)
                        }}
                        items={items}
                    />
                </Sider>
                <Layout>
                    <Header style={{ padding: 0, height: '60px' }} />
                    <Content style={{ margin: '34px 38px 0px', padding: '59px', }}>
                        
                        <div style={{ minHeight: 360, background: '#f5f5f5', borderRadius: '30px' }}>
                           {/* <Routes>
                                <Route path='/' element={<DashboardContent/>}/>
                                <Route path='/my-course-list' element={<MyCourseList/>}/>
                                <Route path='/exam-history' element={<ExamHistory/>}/>
                                <Route path='/point-history' element={<PointHistory/>}/>
                                <Route path='/assignment-list' element={<AssignmentList/>}/>
                                <Route path='/account' element={<Account/>}/>
                                <Route path='/changepass' element={<ChangePass/>}/>
                            </Routes> */}
                                <Outlet/>
                        </div>
                    </Content>
                </Layout>
            </Layout>
            
     
        </div>
    )}
}
