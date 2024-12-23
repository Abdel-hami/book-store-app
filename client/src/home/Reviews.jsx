import React, { useRef, useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";
import prflImg from "../assets/profile.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

const Reviews = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'> Our Customer</h2>

            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='text-center shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2 items-center w-full justify-center'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi sunt, nihil pariatur maxime aliquam ea ad molestiae repellendus ipsum esse expedita dolorum maiores amet dolorem dolores tenetur ducimus odit!</p>
                                <Avatar img={prflImg} rounded className='w-10 mb-4 mx-auto' />
                                <h5 className='text-lg fot font-medium'>Mark Ping</h5>
                                <p className='text-base'>Ceo, Elbouni company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='text-center shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2 items-center w-full justify-center'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi sunt, nihil pariatur maxime aliquam ea ad molestiae repellendus ipsum esse expedita dolorum maiores amet dolorem dolores tenetur ducimus odit!</p>
                                <Avatar img={prflImg} rounded className='w-10 mb-4 mx-auto' />
                                <h5 className='text-lg fot font-medium'>Mark Ping</h5>
                                <p className='text-base'>Ceo, Elbouni company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='text-center shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2 items-center w-full justify-center'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi sunt, nihil pariatur maxime aliquam ea ad molestiae repellendus ipsum esse expedita dolorum maiores amet dolorem dolores tenetur ducimus odit!</p>
                                <Avatar img={prflImg} rounded className='w-10 mb-4 mx-auto' />
                                <h5 className='text-lg fot font-medium'>Mark Ping</h5>
                                <p className='text-base'>Ceo, Elbouni company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='text-center shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2 items-center w-full justify-center'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi sunt, nihil pariatur maxime aliquam ea ad molestiae repellendus ipsum esse expedita dolorum maiores amet dolorem dolores tenetur ducimus odit!</p>
                                <Avatar img={prflImg} rounded className='w-10 mb-4 mx-auto' />
                                <h5 className='text-lg fot font-medium'>Mark Ping</h5>
                                <p className='text-base'>Ceo, Elbouni company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='text-center shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2 items-center w-full justify-center'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi sunt, nihil pariatur maxime aliquam ea ad molestiae repellendus ipsum esse expedita dolorum maiores amet dolorem dolores tenetur ducimus odit!</p>
                                <Avatar img={prflImg} rounded className='w-10 mb-4 mx-auto' />
                                <h5 className='text-lg fot font-medium'>Mark Ping</h5>
                                <p className='text-base'>Ceo, Elbouni company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='text-center shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border'>
                        <div className='space-y-6'>
                            <div className='text-amber-500 flex gap-2 items-center w-full justify-center'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                            <div className='mt-7'>
                                <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus animi sunt, nihil pariatur maxime aliquam ea ad molestiae repellendus ipsum esse expedita dolorum maiores amet dolorem dolores tenetur ducimus odit!</p>
                                <Avatar img={prflImg} rounded className='w-10 mb-4 mx-auto' />
                                <h5 className='text-lg fot font-medium'>Mark Ping</h5>
                                <p className='text-base'>Ceo, Elbouni company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Reviews