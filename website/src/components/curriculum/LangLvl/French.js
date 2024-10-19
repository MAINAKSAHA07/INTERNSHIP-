import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function French() {
    return (
        <div className='flex flex-col lg:flex-row w-full lg:w-11/12 '>
            <div class="hidden lg:block p-4 lg:w-1/4 fadeIN">
                <div class="h-full bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-left relative">
                    <h2 class="tracking-widest text-2xl title-font font-bold text-black mb-1">Level A1</h2>
                    <h1 class="title-font text-xl font-medium mb-3" style={{ color: '#13bfab' }}>Introduction to French</h1>
                    <h2 class="tracking-widest text-lg title-font font-bold text-black mb-1">Curriculum Includes</h2>
                    <p class="leading-relaxed mb-3">Basic greetings and Introduction, Phonetics,Grammar and Vocabulary</p>
                    <a href='https://drive.google.com/file/d/1D_GfEiBpBSx2ihnrG9rQORB65cyIWVf6/view?usp=sharing' class="text-teal-500 hover:text-teal-400 inline-flex items-center">View detailed Curriculum</a>
                </div>
            </div>
            <div class="hidden lg:block p-4 lg:w-1/4 fadeIN">
                <div class="h-full bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-left relative">
                    <h2 class="tracking-widest text-2xl title-font font-bold text-black mb-1">Level A2</h2>
                    <h1 class="title-font text-xl font-medium mb-3" style={{ color: '#13bfab' }}>Elementary Knowledge</h1>
                    <h2 class="tracking-widest text-lg title-font font-bold text-black mb-1">Curriculum Includes</h2>
                    <p class="leading-relaxed mb-3">Simple communication, Grammar and Vocabulary</p>
                    <a href='https://drive.google.com/file/d/1wFzSFJuqnHPhtsEDZMeyk4BRJA8r2xSM/view?usp=sharing' class="text-teal-500 hover:text-teal-400 inline-flex items-center">View detailed Curriculum</a>
                </div>
            </div>
            <div class="hidden lg:block p-4 lg:w-1/4 fadeIN">
                <div class="h-full bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-left relative">
                    <h2 class="tracking-widest text-2xl title-font font-bold text-black mb-1">Level B1</h2>
                    <h1 class="title-font text-xl font-medium mb-3" style={{ color: '#13bfab' }}>Intermediate Knowledge</h1>
                    <h2 class="tracking-widest text-lg title-font font-bold text-black mb-1">Curriculum Includes</h2>
                    <p class="leading-relaxed mb-3">Cultural & Social know-hows, Complex Grammar and Professional Vocabulary</p>
                    <a href='https://drive.google.com/file/d/1A-NoqLEm6zjuQbc31roy5r2MkhtUhHND/view?usp=sharing' class="text-teal-500 hover:text-teal-400 inline-flex items-center">View detailed Curriculum</a>
                </div>
            </div>
            <div class="hidden lg:block p-4 lg:w-1/4 fadeIN">
                <div class="h-full bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-left relative">
                    <h2 class="tracking-widest text-2xl title-font font-bold text-black mb-1">Level B2</h2>
                    <h1 class="title-font text-xl font-medium mb-3" style={{ color: '#13bfab' }}>Professional Knowledge</h1>
                    <h2 class="tracking-widest text-lg title-font font-bold text-black mb-1">Curriculum Includes</h2>
                    <p class="leading-relaxed mb-3">Degree of fluency, Express Opinions, Complex Grammar Structures.</p>
                    <a href='https://drive.google.com/file/d/1caKz_eezD1XqR_juWZg-p6qiC8_u9uce/view?usp=sharing' class="text-teal-500 hover:text-teal-400 inline-flex items-center">View detailed Curriculum</a>
                </div>
            </div>
        <Swiper className='pagi1 lg:hidden' spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1

                    },
                    768: {
                        slidesPerView: 4
                    }
                }}
                pagination={{
                    "clickable": true
                }} navigation={true} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
            >
                <SwiperSlide>
                    <div class=" p-4 lg:w-1/4 fadeIN">
                <div class="h-full bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-left relative">
                    <h2 class="tracking-widest text-2xl title-font font-bold text-black mb-1">Level A1</h2>
                    <h1 class="title-font text-xl font-medium mb-3" style={{ color: '#13bfab' }}>Introduction to French</h1>
                    <h2 class="tracking-widest text-lg title-font font-bold text-black mb-1">Curriculum Includes</h2>
                    <p class="leading-relaxed mb-3">Basic greetings and Introduction, Phonetics,Grammar and Vocabulary</p>
                    <a href='https://drive.google.com/file/d/1D_GfEiBpBSx2ihnrG9rQORB65cyIWVf6/view?usp=sharing' class="text-teal-500 hover:text-teal-400 inline-flex items-center">View detailed Curriculum</a>
                </div>
            </div>
                </SwiperSlide><SwiperSlide>
                    <div class=" p-4 lg:w-1/4 fadeIN">
                <div class="h-full bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-left relative">
                    <h2 class="tracking-widest text-2xl title-font font-bold text-black mb-1">Level A2</h2>
                    <h1 class="title-font text-xl font-medium mb-3" style={{ color: '#13bfab' }}>Elementary Knowledge</h1>
                    <h2 class="tracking-widest text-lg title-font font-bold text-black mb-1">Curriculum Includes</h2>
                    <p class="leading-relaxed mb-3">Simple communication, Grammar and Vocabulary</p>
                    <a href='https://drive.google.com/file/d/1wFzSFJuqnHPhtsEDZMeyk4BRJA8r2xSM/view?usp=sharing' class="text-teal-500 hover:text-teal-400 inline-flex items-center">View detailed Curriculum</a>
                </div>
            </div>
                </SwiperSlide><SwiperSlide>
                     <div class=" p-4 lg:w-1/4 fadeIN">
                <div class="h-full bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-left relative">
                    <h2 class="tracking-widest text-2xl title-font font-bold text-black mb-1">Level B1</h2>
                    <h1 class="title-font text-xl font-medium mb-3" style={{ color: '#13bfab' }}>Intermediate Knowledge</h1>
                    <h2 class="tracking-widest text-lg title-font font-bold text-black mb-1">Curriculum Includes</h2>
                    <p class="leading-relaxed mb-3">Cultural & Social know-hows, Complex Grammar and Professional Vocabulary</p>
                    <a href='https://drive.google.com/file/d/1A-NoqLEm6zjuQbc31roy5r2MkhtUhHND/view?usp=sharing' class="text-teal-500 hover:text-teal-400 inline-flex items-center">View detailed Curriculum</a>
                </div>
            </div>
                </SwiperSlide><SwiperSlide>
                    <div class=" p-4 lg:w-1/4 fadeIN">
                <div class="h-full bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-left relative">
                    <h2 class="tracking-widest text-2xl title-font font-bold text-black mb-1">Level B2</h2>
                    <h1 class="title-font text-xl font-medium mb-3" style={{ color: '#13bfab' }}>Professional Knowledge</h1>
                    <h2 class="tracking-widest text-lg title-font font-bold text-black mb-1">Curriculum Includes</h2>
                    <p class="leading-relaxed mb-3">Degree of fluency, Express Opinions, Complex Grammar Structures.</p>
                    <a href='https://drive.google.com/file/d/1caKz_eezD1XqR_juWZg-p6qiC8_u9uce/view?usp=sharing' class="text-teal-500 hover:text-teal-400 inline-flex items-center">View detailed Curriculum</a>
                </div>
            </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
