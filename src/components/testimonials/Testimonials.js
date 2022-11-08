import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


function Testimonials() {


    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className='container testimonials__container'>
                <SwiperSlide className='testimonial'
                    // install Swiper modules
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    pagination={{ clickable: true }}

                >
                    <div className='client__avatar'>
                        <img src={AVTR1} />
                    </div>
                    <h5>Karen Smith</h5>
                    <small>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis eveniet vitae quod sit
                        aperiam, obcaecati esse, suscipit voluptate provident, asperiores distinctio quae sint illum nihil
                        dolorum quos quam sunt voluptatem!
                    </small>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Testimonials