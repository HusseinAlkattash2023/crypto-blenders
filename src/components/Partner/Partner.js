import './Partner.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import image1 from  '../../assests/partner-1-removebg-preview.png';
import image2 from '../../assests/partner-2-removebg-preview.png';
import image3 from '../../assests/partner-3.jpg';
import image4 from '../../assests/partner-4.jpg';
import image5 from '../../assests/partner-5.jpg';
import image6 from '../../assests/partner-6.jpg';
import image7 from '../../assests/partner-7.jpg';
import image8 from '../../assests/partner-8.jpg';
import image9 from '../../assests/partner-9.jpg';
import image10 from '../../assests/partner-10.jpg';
import "swiper/css";
import "swiper/css/pagination";

 

const Partner=()=>{
    return (
        <div id="partner" className="partner">
        <div className='headerPartner'>
            <h2>Partners</h2>
        </div>
        <div>
        <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Card image={image1}/></SwiperSlide>
        <SwiperSlide><Card image={image2}/></SwiperSlide>
        <SwiperSlide><Card image={image3}/></SwiperSlide>
        <SwiperSlide><Card image={image4}/></SwiperSlide>
        <SwiperSlide><Card image={image5}/></SwiperSlide>
        <SwiperSlide><Card image={image6}/></SwiperSlide>
        <SwiperSlide><Card image={image7}/></SwiperSlide>
        <SwiperSlide><Card image={image8}/></SwiperSlide>
        <SwiperSlide><Card image={image9}/></SwiperSlide>
        <SwiperSlide><Card image={image10}/></SwiperSlide>
        </Swiper>
        </div>
        </div> 
    )
}


const Card = ({image , name})=>{
    return (
        <div className='card__ mx-2'>
            <img src={image} alt="" style={{width:"200px"}}/>
        </div>
    )
}

export default Partner;
 








 