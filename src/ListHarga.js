import {Carousel, Button} from 'react-bootstrap';
import image1 from './images/1.png';
import image2 from './images/2.png';
import image3 from './images/3.png';
import image4 from './images/4.png';
import image5 from './images/5.png';
import image6 from './images/6.png';
import './ListHarga.css';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, EffectCoverflow } from 'swiper/modules';

function ListHarga() {
    return (
        <>    
        <div className='bg'>
            <div className='row d-flex justify-content-center'>
                <div className='col-8 col-lg-3 my-3'>
                <Button variant="secondary" size="lg" active className='rounded-2 w-100 fdl-button py-3'>
                    Price List FDL Dental Clinic
                </Button>
                </div>
           
            </div>
            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={false}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    navigation={true}
                    coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="mySwiper w-75"
                >
                    <SwiperSlide><img src={image1} className="img-listharga" alt="1"/></SwiperSlide>
                    <SwiperSlide><img src={image2} className="img-listharga" alt="2"/></SwiperSlide>
                    <SwiperSlide><img src={image3} className="img-listharga" alt="3"/></SwiperSlide>
                    <SwiperSlide><img src={image4} className="img-listharga" alt="4"/></SwiperSlide>
                    <SwiperSlide><img src={image5} className="img-listharga" alt="5"/></SwiperSlide>
                    <SwiperSlide><img src={image6} className="img-listharga" alt="6"/></SwiperSlide>
                </Swiper>
           </div>
              
                   
        </div>
       
        
        
        </>
      
    );
  }
  
  export default ListHarga;