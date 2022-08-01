import './WhyUs.css';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import image1 from '../../assests/main.png';
import image2 from '../../assests/img1.png';
import image3 from '../../assests/img2.png';
import image4 from '../../assests/img3.png';
import image12 from '../../assests/image11.png'; 

const  WhyUs =()=>{

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []); 
    return(
        <div className='howitwork' id="whyus">
            <div className='headerWork'>
                <h2 className="text-light">WHY ONLY CRYPTO BLENDERS ?</h2>
            </div>
            <div className='work'>
                <div className='image' data-aos="fade-right">
                    <img src={image1} className="image1" alt=""/>
                    <img src={image2} className="image2" alt=""/>
                    <img src={image3} className="image3" alt=""/>
                    <img src={image4} className="image4"  alt=""/>
                </div>
                <div className='section_2 text-light px-3' data-aos="fade-left">
                    <p>The reason why you have to choose Crypto Blenders as a service partner and also a quality service.</p>
                    <img src={image12}  alt=""/>
                </div>
            </div>
        </div>
    )
}

export default WhyUs;