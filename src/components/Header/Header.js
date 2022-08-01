import React , {useState} from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../assests/logo.png';
// import { FaBars } from "react-icons/fa";
import {  FaBars } from 'react-icons/fa';


import { GrClose } from "react-icons/gr";
import { Button } from 'react-bootstrap';

 

const Header=()=>{

    const[show , setShow]=useState(true);
    return(
        <div className="header">
        <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <a className="navbar-brand text-light" href="#">
                <img src={image} alt=""/>
                <span>CRYPTOBLENDERS</span>
            </a>
          <button style={{background:"#39a583" , border:"2px solid #39a583"}} className="navbar-toggler mx-3 border border-light" onClick={()=>setShow(!show)}> 
          {show ?  <FaBars className="icon"/> :  <GrClose style={{color:"white"}}/> }
          </button>
          <div className={show ? "collapse navbar-collapse" : "collapse navbar-collapse active" }>
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#home">Home</a>
              <a className="nav-link" href="#about">About Us</a>
              <a className="nav-link" href="#whyus">why Us</a>
              <a className="nav-link" href="#services">services</a>
              <a className="nav-link" href="#team">our team</a>
              <a className="nav-link" href="#partner">our Partners</a>
            </div>
            <button className='button_ mx-3 py-2 px-2'>
                <a href="https://t.me/CryptoBlenders" target="_blank">Join CryptoBlenders</a>
            </button>
          </div>
        </div>
      </nav>
        </div>
    )
}

export default Header
