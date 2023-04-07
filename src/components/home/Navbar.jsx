import { Menu } from 'antd';
import React from 'react';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavbarBrand } from 'react-bootstrap';

function Nav_bar() {
    let user=JSON.parse(localStorage.getItem("userLogin"))
    console.log(user);

    const shoot=()=>{
       window.localStorage.removeItem("userLogin")
       window.location.href="/"
    }
   if(user===null){
    
    return (
        <>
       
        <Navbar bg="light" expand="lg">
      <Container fluid>
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Navbar.Brand  href="/">
            <img
              id="logo_bar"
              src="/img/logo-Rikkei-footer.7e90750a.png"
              width="150"
              
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
            <Nav.Link href="/">
                <p><i className="fa-solid fa-house"></i>Trang chủ</p>
            </Nav.Link>
            <Nav.Link href="/roadmap-list">     
                <p><i className="fa-solid fa-book"></i>Lộ trình</p>
            </Nav.Link>
            <Nav.Link href="/course-list">
                <p><i className="fa-solid fa-book-open"></i>Khóa học</p>
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        
        <Navbar.Brand>
        <div className='nb-logReg' >
                    <div className='from-login'><Link style={{color:'white'}} to={"/login"}>Đăng nhập</Link></div>
                    <div className='from-register'><Link style={{color:'white'}} to={"/register"}>Đăng ký</Link></div>
        </div>
        </Navbar.Brand>
        
      </Container>
    </Navbar>
        </>
    );
   }else{
    return (
        <>
       
        <Navbar bg="light" expand="lg">
      <Container fluid>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Navbar.Brand href="/">
            <img
              src="/img/logo-Rikkei-footer.7e90750a.png"
              width="150"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
        </Navbar.Brand>
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">
                <p><i className="fa-solid fa-house"></i>Trang chủ</p>
            </Nav.Link>
            <Nav.Link href="/roadmap-list'">     
                <p><i className="fa-solid fa-book"></i>Lộ trình</p>
            </Nav.Link>
            <Nav.Link href="/course-list">
                <p><i className="fa-solid fa-book-open"></i>Khóa học</p>
            </Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
        
        
        <NavDropdown title={user.username} id="navbarScrollingDropdown">
              <NavDropdown.Item href="/dashboard">Bảng điều khiển</NavDropdown.Item>
              <NavDropdown.Item href="" onClick={shoot}>Đăng xuất</NavDropdown.Item>
        </NavDropdown>
      </Container>
    </Navbar>
        </>
    );
   }
}

export default Nav_bar;

