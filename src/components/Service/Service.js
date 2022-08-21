import React , { useEffect }from 'react'
 
import './Service.css'
import { Button } from 'react-bootstrap';
import { BsPin } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { GiPresent  } from "react-icons/gi";
import { BsTwitter } from "react-icons/bs";
import { GiAirBalloon  } from "react-icons/gi";
import { FaRocket } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Service() {


    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (
        <div class="service" id="services">
            <div className='headerservice'>
                <h2>Services</h2>
            </div>
            <div className='service_ row'>
            <div className='card_1 col-lg-4 col-md-8' data-aos="flip-left">
            <BsFillCheckCircleFill className='icon_'/>
            <p>Hosting AMA Sessions</p>
            <Button><a href='https://t.me/Gue7ara'>Order now</a></Button>
        </div>
            <div className='card_1 col-lg-4 col-md-8' data-aos="flip-left">
                <GiPresent className='icon_'/>
                <p>Hoisting Giveaways</p>
                <Button><a href='https://t.me/Gue7ara'>Order now</a></Button>
            </div>
            <div className='card_1 col-lg-4 col-md-8' data-aos="flip-left">
                <BsTwitter className='icon_'/>
                <p>Twitter Promotion</p>
                <Button><a href='https://t.me/Gue7ara'>Order now</a></Button>
            </div>
            <div className='card_1 col-lg-4 col-md-8' data-aos="flip-left">
                <BsPin className='icon_'/>
                <p>Telegram Pin Post</p>
                <Button><a href='https://t.me/Gue7ara'>Order now</a></Button>
            </div>
            <div className='card_1 col-lg-4 col-md-8' data-aos="flip-left">
                <GiAirBalloon className='icon_'/>
                <p>Airdrop & Giveaway Promotion</p>
                <Button><a href='https://t.me/Gue7ara'>Order now</a></Button>
            </div>
            <div className='card_1 col-lg-4 col-md-8' data-aos="flip-left">
                <FaRocket className='icon_'/>
                <p>Project Marketing Development</p>
                <Button><a href='https://t.me/Gue7ara'>Order now</a></Button>
            </div>
            </div>
        </div>
        )
}

export default Service;