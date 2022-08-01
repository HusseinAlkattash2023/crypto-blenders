import React , {useState} from 'react';
import Email from 'emailjs-com';
import './Contact.css'
import image1 from "../../assests/cartoon-bg.png";
import image2 from "../../assests/cartoon.png";

const Contact =()=>{

    const[email , setEmail]=useState("");

  const SendEmail =()=>{
    Email.send({
        SecureToken : " 846d91ef-d325-4e11-86d8-acd01a5ce081",
        To : 'cryptoblenders2@gmail.com',
        From : email,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
  }
    return(
        <div className="contact">
            <div className='headerContact'>
                <h3>Write Us Something</h3>
            </div>
            <div className='getintouch'>
                <div className="section1">
                    <img src={image2} alt="" className="img2"/>
                    <img src={image1} alt="" className="img1"/>
                </div>
                <div className='section2'>
                    <h4>Get In Touch</h4>
                    <form onSubmit={() => SendEmail} autoComplete="on">
                        <div className="item1">
                            <input type="text" placeholder='Your Name'/>
                            <input 
                            type="email" 
                            placeholder='Enter E-Mail' 
                            value={email}
                            onChange={e => setEmail(e.target.value)} 
                            />
                        </div>
                        <div className="item2">
                            <input type="text" placeholder="Subject"/>
                        </div>
                        <div className="item3">
                            <textarea type="text" placeholder="Message"></textarea>
                        </div>
                        <div className="btn_">
                           <button type="submit">Submit</button>
                        </div>
                    </form>
                
                </div>
                
            </div>
        </div>
    )
}

export default Contact;



 