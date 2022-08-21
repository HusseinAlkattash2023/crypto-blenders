import image from '../../assests/about.png';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './About.css'
const About = ()=>{
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return(
        <div className="about" id="about">
            <div className="about_">
            <div className='section1' data-aos="fade-right">
            <img src={image} style={{width : "400px" }}  alt=""/>
            </div>
            <div className="text-light section2"  data-aos="fade-left">
                <h2>About Us</h2>
                <p className='paragraph'>We are a group of experts in cryptocurrency in the Middle East.</p>
                <p>We believe Blockchain and CryptoCurrency are the real future so here we are.
                We are a team of 8 people, we all work hard and mastery, and the name of the Crypto Blenders team remains more famous and trusted. We have reached this stage because of the cooperation of the team by working as one because cooperation is the basis of success in teamwork and we trust that
                We attend large and small projects and focus on small projects before the big ones that have a place in the cryptocurrency world and we always support them through the AMA meeting with the business team.
                We have achieved many partnerships with huge and powerful projects and strive to be the best always, now and in the future.</p>
            </div>
            </div>
        </div>
    )
}


export default About;