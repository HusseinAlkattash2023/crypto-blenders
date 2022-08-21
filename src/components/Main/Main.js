import './Main.css'
import React, { useState , useEffect } from "react";
import {FaArrowCircleUp} from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import image from '../../assests/image1.png';
import { Button } from 'react-bootstrap';

const Main =()=>{

        const[visible , setVisible] = useState(false);
        const toggleVisible = ()=>{
            const scrolled = document.documentElement.scrollTop;

            if(scrolled > 300){
                setVisible(true);
            }else{
                setVisible(false);
            }
        }

        const scrollToTop =()=>{
            window.scrollTo({
                top:0,
                behavior: 'smooth'
            });
        };
        window.addEventListener("scroll" , toggleVisible);
    

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return(
        <div className="main" id="home">
        <div className="section1 text-light mx-5" style={{textAlign:"left"}} data-aos="fade-right">
            <h2> Crypto Blenders</h2> 
            <div className='section3'>
                <span><strong>We believe that the future in the world of Crypto.</strong></span>
                <p>Master the art of virality and boost your crypto project's community.
                Discuss about cryptocurrencies. Join our AMA sessions and other events.</p>
            </div>
            <Button className='button_'><a href="https://t.me/CryptoBlenders" target="_blank" className='text-light' style={{textDecoration:"none"}}>Join Our Community</a></Button>
        </div>
            <div className="section2" 
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500">
                <img src={image}  alt=""/>
            </div>
            <Button 
            onClick={scrollToTop} 
            style={{display : visible ? "inline" : "none"}} 
            className="bttn"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            >
                <FaArrowCircleUp/>
            </Button>
        </div>
    )
}

export default Main