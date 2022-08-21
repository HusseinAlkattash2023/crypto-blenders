import React from 'react'
import Main from '../Main/Main'
import About from '../About/About';
import Team from '../Team/Team';
import Partner from '../Partner/Partner';
import Service from '../Service/Service';
import WhyUs from '../WhyUs/WhyUs';
import Contact from '../Contact/Contact';
function Home() {
    return (
        <div>
            <Main/> 
            <About/>
            <WhyUs/>
            <Service/>
            <Team/>
            <Partner/>
            <Contact/>
        </div>
        )
}

export default Home
