import React , {useRef , useEffect} from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import image1 from "../../assests/cartoon-bg.png";
import image2 from "../../assests/cartoon.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact =()=>{

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []); 

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bufhlwx', 'template_xti7d8o', form.current, 'J6JMy2Y9HZUUnrNT1')
    .then((result) => {
        console.log(result.text);
        alert("the message was sent successfully")
    }, (error) => {
        console.log(error.text);
    });
};

    return(
        <div className="contact" id="contact">
            <div className='headerContact'>
                <h3>Write Us Something</h3>
            </div>
            <div className='getintouch'>
                <div className="section1" data-aos="fade-right">
                    <img src={image2} alt="" className="img2"/>
                    <img src={image1} alt="" className="img1"/>
                </div>
                <div className='section2' data-aos="fade-left">
                    <h4>Get In Touch</h4>
                <form ref={form} onSubmit={sendEmail}>
                    <div className="item1">
                        <input type="text" name="user_name" placeholder="Your Name" required/>
                        <input type="email" name="user_email" placeholder="Enter E-Mail" required/>
                    </div>
                    <div className="item2">
                        <input type="text" name="subject" placeholder="Subject" required/>
                    </div>
                    <div className="item3">
                        <textarea name="message" placeholder="message"/>
                    </div>
                    <input type="submit" value="Send" className="submit" required/>
                </form>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Contact;

