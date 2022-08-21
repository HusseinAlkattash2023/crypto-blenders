import React , { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import './Team.css';
import { BsTelegram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import image1 from '../../assests/profile-1.jpeg';
import image2 from '../../assests/profile-2.jpeg';
import image3 from '../../assests/profile-3.jpeg';
import image4 from '../../assests/profile-4.jpeg';
import image5 from '../../assests/profile-5.jpg';
import image6 from '../../assests/profile-6.jpeg';
import image7 from '../../assests/profile-7.jpeg';
import image8 from '../../assests/profile-8.jpeg'
function Team() {
    return (
        <div className="team" id="team">
            <h2 className='text-light'>Our Team</h2>
            <div>
                <Card/>
            </div>
        </div>
    )
}

const Card = ()=>{

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return(
        <div className='row cards'> 
        <div className='card_ col-lg-3 col-md-8 col-sm-8 text-light'  data-aos="flip-right">
            <img src={image1} style={{width:"150px"}} alt=""/>
            <h3 className="m-2">Ali Naaman (Guevara)</h3>
            <p>CEO/Founder</p>
            <div className='social'>
                <a href="https://t.me/Mohammeddibeh" className="mx-2" target="_blank"><BsTelegram/></a>
                <a href="https://twitter.com/Gue7ara1" className="mx-2" target="_blank"><BsTwitter/></a>
                <a href="https://instagram.com/gue7ara"  className="mx-2" target="_blank"><BsInstagram/></a>
             </div>
        </div>

        <div className='card_ col-lg-3 col-md-8 col-sm-8 text-light'  data-aos="flip-right">
            <img src={image2} style={{width:"150px"}} alt=""/>
            <h3 className="m-2">Ali Maa'rouf</h3>
            <p>CO-Founder</p>
            <div className='social'>
                <a href="https://t.me/Ma3arouf" className="mx-2" target="_blank"><BsTelegram/></a>
                <a href="https://twitter.com/ali__maarouf" className="mx-2" target="_blank"><BsTwitter/></a>
                <a href="https://instagram.com/ali__ma3rouf"  className="mx-2" target="_blank"><BsInstagram/></a>
                </div>
        </div>
        <div className='card_ col-lg-3 col-md-8 col-sm-8 text-light'  data-aos="flip-right">
            <img src={image3} style={{width:"150px"}} alt=""/>
            <h3 className="m-2">Emad Muhammed</h3>
            <p>cfo</p>
        <div className='social'>
            <a href="https://t.me/Emad11mu" className="mx-2" target="_blank"><BsTelegram/></a>
            </div>
        </div>
        <div className='card_ col-lg-3 col-md-8 col-sm-8 text-light'  data-aos="flip-right">
            <img src={image4} style={{width:"150px"}} alt=""/>
            <h3 className="m-2">Fares Jabbour</h3>
            <p>Team member</p>
        <div className='social'>
            <a href="https://t.me/Faresjabbour" className="mx-2" target="_blank"><BsTelegram/></a>
            </div>
        </div>
        <div className='card_ col-lg-3 col-md-8 col-sm-8 text-light'  data-aos="flip-right">
            <img src={image5} style={{width:"150px"}} alt=""/>
            <h3 className="m-2">Dr.Hassan Taha</h3>
            <p>Crypto analyst</p>
            <div className='social'>
                <a href="https://t.me/Dr_1Hassan" className="mx-2" target="_blank"><BsTelegram/></a>
                </div>
            </div>  
            <div className='card_ col-lg-3 col-md-8 col-sm-8 text-light'  data-aos="flip-right">
                <img src={image6} style={{width:"150px"}} alt=""/>
                <h3 className="m-2">Yazan Shaaban</h3>
                <p>cmo</p>
            <div className='social'>
                <a href="https://t.me/Yazansh963" className="mx-2" target="_blank"><BsTelegram/></a>
                <a href="https://twitter.com/YazanShaaban2" className="mx-2" target="_blank"><BsTwitter/></a>
            </div>
            </div>
            <div className='card_ col-lg-3 col-md-8 col-sm-8 text-light'  data-aos="flip-right">
                <img src={image7} style={{width:"150px"}} alt=""/>
                <h3 className="m-2">Muhammed Dibeh</h3>
                <p>team member</p>
                <div className='social'>
                    <a href="https://t.me/Mohammeddibeh" className="mx-2" target="_blank"><BsTelegram/></a>
                    <a href="https://twitter.com/Mohammed6724558?t=1uX-EvtyQJnmj9WzDZK5Eg&s=09" className="mx-2" target="_blank"><BsTwitter/></a>
                    <a href="https://instagram.com/mohammed_dibeh_880"  className="mx-2" target="_blank"><BsInstagram/></a>
                </div>
            </div>
            <div className='card_ col-lg-3 col-md-8 col-sm-8 text-light'  data-aos="flip-right">
                <img src={image8} style={{width:"150px"}} alt=""/>
                <h3 className="m-2">Lara Tarraf</h3>
                <p>graphic designer</p>
                <div className='social'>
                    <a href="https://t.me/Larasop" className="mx-2" target="_blank"><BsTelegram/></a>
                </div>
            </div>
       </div>
    )
}

export default Team
