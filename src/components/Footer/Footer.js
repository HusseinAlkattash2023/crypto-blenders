import './Footer.css'
import { BsTelegram } from "react-icons/bs"; 
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

import { Button } from 'react-bootstrap';
const Footer = ()=>{
    return(
        <div className="footer">
            <div className="social my-3">
                <Button className="mx-2"><a href="https://t.me/CryptoBlenders"><BsTelegram className="icon1"/></a></Button>
                <Button className="mx-2"><a href="https://instagram.com/crypto_blenders" target="_blank"><BsInstagram className="icon1"/></a></Button>
                <Button className="mx-2"><a href='https://twitter.com/CryptoBlenders' target="_blank"><BsTwitter className="icon1"/></a></Button>
            </div>
            <div className="copyright">
                <span>Copyright © 2022 CRYPTBLENDERS - Powered by HUSSEIN ALKATTASH</span>
            </div>
        </div>
    )
}


export default Footer;