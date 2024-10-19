import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function Levels() {

    const scrsize = window.matchMedia("(min-width: 768px)").matches;
    var swiperheight = 28;
    if (scrsize === true) {
        swiperheight = 28
    }
    else{
        swiperheight = 22
    }

    return (<Swiper className='levelSwiper' style={{height: `${swiperheight}rem`}} spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
        breakpoints={{
            640: {
                slidesPerView: 1

            },
            768: {
                slidesPerView: 3
            }
        }}
        pagination={{
            "delay": 2500,
            "disableOnInteraction": false
        }} navigation={true} autoplay={true}>


        <SwiperSlide style={{ alignItems: 'flex-start' }}>
            <div className="p-2 lg:h-[85%] w-full">
                <div className="h-full bg-white rounded-lg shadow-lg flex flex-col relative overflow-hidden">
                    <div className='px-3 pt-10 bg-[#13bfab30]'>

                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">ABSOLUTE BEGINNER</h2>
                        <h1 className="text-5xl text-gray-900 leading-none flex items-center  mb-4">
                            <span className='w-full text-center font-semibold'>A1</span>
                        </h1>
                    </div>
                    <div className='px-3 pt-10 rounded-lg'>
                        <p className="flex items-start text-left text-gray-600 mb-3 text-sm">
                            <span className="w-3 h-3 mr-2 mt-1 inline-flex items-center justify-center bg-[#13BFAB] text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Use familiar everyday expressions
                        </p>
                        <p className="flex items-start text-left text-gray-600 mb-3 text-sm">
                            <span className="w-3 h-3 mr-2 mt-1 inline-flex items-center justify-center bg-[#13BFAB] text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Introduce yourself and others
                        </p>
                        <p className="flex items-start text-left text-gray-600 mb-4 text-sm">
                            <span className="w-3 h-3 mr-2 mt-1 inline-flex items-center justify-center bg-[#13BFAB] text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Interact in a simple conversation
                        </p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ alignItems: 'flex-start' }}>
            <div className="p-2 lg:h-[85%] w-full sm:px-5 lg:px-0 ">
                <div className="h-full bg-white rounded-lg shadow-lg flex flex-col relative overflow-hidden">
                    <div className='px-3 pt-10 bg-[#13bfab5c]'>

                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">BEGINNER</h2>
                        <h1 className="text-5xl text-gray-900 leading-none flex items-center mb-4">
                            <span className='w-full text-center font-semibold'>A2</span>
                        </h1>
                    </div>
                    <div className='px-3 pt-10 rounded-lg'>

                        <p className="flex items-start text-left text-gray-600 mb-3 text-sm">
                            <span className="w-3 h-3 mr-2 mt-1 inline-flex items-center justify-center bg-[#13BFAB] text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Can understand familiar topics
                        </p>
                        <p className="flex items-start text-left text-gray-600 mb-3 text-sm">
                            <span className="w-3 h-3 mr-2 mt-1 inline-flex items-center justify-center bg-[#13BFAB] text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Can communicate routine tasks
                        </p>
                        <p className="flex items-start text-left text-gray-600 mb-4 text-sm text-sm">
                            <span className="w-3 h-3 mr-2 mt-1 inline-flex items-center justify-center bg-[#13BFAB] text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Can describe your background
                        </p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ alignItems: 'flex-start' }}>
            <div className="p-2 lg:h-[85%] w-full sm:px-5 lg:px-0 ">
                <div className="h-full bg-white rounded-lg shadow-lg flex flex-col relative overflow-hidden">
                    <div className='px-3 pt-10 bg-[#13bfab99]'>
                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">INTERMEDIATE</h2>

                        <h1 className="text-5xl text-gray-900 leading-none flex items-center mb-4">
                            <span className='w-full text-center font-semibold'>B1</span>
                        </h1>
                    </div>
                    <div className='px-3 pt-10 rounded-lg'>

                        <p className="flex items-start text-left text-gray-600 mb-3 text-sm">
                            <span className="w-3 h-3 mr-2 mt-1 inline-flex items-center justify-center bg-[#13BFAB] text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Discuss basics like work, school etc.
                        </p>
                        <p className="flex items-start text-left text-gray-600 mb-3 text-sm">
                            <span className="w-3 h-3 mr-2 mt-1 inline-flex items-center justify-center bg-[#13BFAB] text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Handle situations whilst travelling
                        </p>
                        <p className="flex items-start text-left text-gray-600 mb-4 text-sm">
                            <span className="w-3 h-3 mr-2 mt-1 inline-flex items-center justify-center bg-[#13BFAB] text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Understand text on familiar topics
                        </p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ alignItems: 'flex-start' }}>
            <div className="p-2 lg:h-[85%] w-full sm:px-5 lg:px-0 ">
                <div className="h-full bg-white rounded-lg shadow-lg flex flex-col relative overflow-hidden">
                    <div className='px-3 pt-10 bg-[#13bfabc7]'>

                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">INTERMEDIATE</h2>
                        <h1 className="text-5xl text-gray-900 leading-none flex items-center mb-4">
                            <span className='w-full text-center font-semibold'>B2</span>
                        </h1>
                    </div>
                    <div className='px-3 pt-10 rounded-lg'>

                        <p className="flex items-start text-left text-gray-600 mb-3 text-sm">
                            <span className="w-3 h-3 mr-2 mt-1 inline-flex items-center justify-center bg-[#13BFAB] text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Can understand complex texts
                        </p>
                        <p className="flex items-start text-left text-gray-600 mb-3 text-sm">
                            <span className="w-3 h-3 mr-2 mt-1 inline-flex items-center justify-center bg-[#13BFAB] text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Can talk with native speakers
                        </p>
                        <p className="flex items-start text-left text-gray-600 mb-4 text-sm">
                            <span className="w-3 h-3 mr-2 mt-1 inline-flex items-center justify-center bg-[#13BFAB] text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Can write and explain viewpoints
                        </p>
                    </div>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide style={{ alignItems: 'flex-start' }}>
            <div className="p-2 lg:h-[85%] w-full sm:px-5 lg:px-0 ">
                <div className="h-full bg-white rounded-lg shadow-lg flex flex-col relative overflow-hidden">
                    <div className='px-3 pt-10 bg-[#13bfab]'>

                        <h2 className="text-sm tracking-widest title-font mb-1 font-medium">ADVANCED</h2>
                        <h1 className="text-5xl text-gray-900 leading-none flex items-center mb-4">
                            <span className='w-full text-center font-semibold'>C1</span>
                        </h1>
                    </div>
                    <div className='px-3 pt-10 rounded-lg'>

                        <p className="flex items-start text-left text-gray-600 mb-3 text-sm">
                            <span className="w-3 h-3 mr-2 mt-1 inline-flex items-center justify-center bg-[#13BFAB] text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Can read and write complicated texts
                        </p>
                        <p className="flex items-start text-left text-gray-600 mb-3 text-sm">
                            <span className="w-3 h-3 mr-2 mt-1 inline-flex items-center justify-center bg-[#13BFAB] text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Can express yourself fluently
                        </p>
                        <p className="flex items-start text-left text-gray-600 mb-4 text-sm">
                            <span className="w-3 h-3 mr-2 mt-1 inline-flex items-center justify-center bg-[#13BFAB] text-white rounded-full flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                    <path d="M20 6L9 17l-5-5"></path>
                                </svg>
                            </span>Can use language creatively
                        </p>
                    </div>
                </div>
            </div>
        </SwiperSlide>

    </Swiper>
    )
}
