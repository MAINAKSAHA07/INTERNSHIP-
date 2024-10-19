import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { FaRegHandshake } from 'react-icons/fa'
import { ImBook } from 'react-icons/im'
import { GiTakeMyMoney } from 'react-icons/gi'
import {Link} from 'react-scroll'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


export default function IntroCourse() {
    return (
        <div>
            <div className="IntroCourse h-[80vh]" >
                <div className="bg-[rgba(0,0,0,0.3)] h-full ">
                {/* h-full flex flex-col justify-center align-left w-[40rem] */}
                    <div className='h-full flex flex-col justify-center align-left lg:mx-20'>
                        <h1 style={{lineHeight:'4.5rem'}} className='mx-6 lg:w-1/2 md:mx-10 lg:mx-12 lg:pr-10 leading-8 text-4xl md:text-6xl lg:text-6xl text-white font-bold drop-shadow-2xl'>Speak a language confidently in only 30 days</h1>
                        <h1 className='mx-6 md:mx-10 lg:mx-12 md:text-md lg:text-lg my-4 text-white font-medium'>Join our Introductory Courses</h1>
                        <Link  to="LearnLang" spy={true} smooth={false}><button type="button" class="mx-6 md:mx-10 lg:mx-12 flex flex-row btn btn-outline-light hover:bg-[#13BFAB] rounded-3xl w-fit text-sm py-3 px-4 ">Choose Your Language <AiOutlineArrowDown className='self-center ml-2' /></button></Link>
                    </div>
                </div>
            </div>
            <h3 className='px-2 mt-20 text-2xl w-full md:text-3xl lg:text-4xl font-bold text-center mt-24 mb-10'>The best way to learn a language</h3>
            <div className='hidden lg:flex flex-row w-full px-10 md:px-16 lg:px-20'>
                <div class="p-4 lg:w-1/3">
                    <div class="h-full flex flex-col items-center bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-center relative">
                        <h2 class="tracking-widest h-20 w-20 my-2"><FaRegHandshake className='w-2/3 h-2/3' /></h2>
                        <h2 class="tracking-widest text-lg title-font font-bold text-black my-2">Instant Feedback</h2>
                        <p class="leading-relaxed my-2">Track your progress and get personalised feedback</p>
                    </div>
                </div>
                <div class="p-4 lg:w-1/3">
                    <div class="h-full flex flex-col items-center bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-center relative">
                        <h2 class="tracking-widest h-20 w-20 my-2"><ImBook className='w-2/3 h-2/3' /></h2>
                        <h2 class="tracking-widest text-lg title-font font-bold text-black my-2">Accreditation</h2>
                        <p class="leading-relaxed my-2">Earn accredited certificate to boost your skills</p>
                    </div>
                </div>
                <div class="p-4 lg:w-1/3">
                    <div class="h-full flex flex-col items-center bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-center relative">
                        <h2 class="tracking-widest h-20 w-20 my-2"><GiTakeMyMoney className='w-2/3 h-2/3' /></h2>
                        <h2 class="tracking-widest text-lg title-font font-bold text-black my-2">Big rewards</h2>
                        <p class="leading-relaxed my-2">Earn 100% cashback</p>
                    </div>
                </div>
            </div>
            <Swiper className='pagi1 block lg:hidden w-full px-10 md:px-16' spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
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
                <div class="p-4 w-full lg:w-1/3">
                    <div class="h-full flex flex-col items-center bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-center relative">
                        <h2 class="tracking-widest h-20 w-20 my-2"><FaRegHandshake className='w-2/3 h-2/3' /></h2>
                        <h2 class="tracking-widest text-lg title-font font-bold text-black my-2">Instant Feedback</h2>
                        <p class="leading-relaxed my-2">Track your progress and get personalised feedback</p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="p-4 w-full lg:w-1/3">
                    <div class="h-full flex flex-col items-center bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-center relative">
                        <h2 class="tracking-widest h-20 w-20 my-2"><ImBook className='w-2/3 h-2/3' /></h2>
                        <h2 class="tracking-widest text-lg title-font font-bold text-black my-2">Accreditation</h2>
                        <p class="leading-relaxed my-2">Earn accredited certificate to boost your skills</p>
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div class="p-4 w-full lg:w-1/3">
                    <div class="h-full flex flex-col items-center bg-white drop-shadow-md hover:drop-shadow-xl ease-in duration-300 px-8 pt-16 pb-12 rounded-xl overflow-hidden text-center relative">
                        <h2 class="tracking-widest h-20 w-20 my-2"><GiTakeMyMoney className='w-2/3 h-2/3' /></h2>
                        <h2 class="tracking-widest text-lg title-font font-bold text-black my-2">Big rewards</h2>
                        <p class="leading-relaxed my-4">Earn 100% cashback</p>
                    </div>
                </div>
                </SwiperSlide>
            </Swiper>
            <div id='LearnLang' className='h-auto bg-[#f4f8fb] w-full lg:flex flex-row flex-wrap items-center mt-10'>
                <div className='py-10 lg:w-1/2 px-10 lg:px-24  '>
                    <h3 className='font-bold text-3xl lg:text-5xl my-4'>Languages you can learn</h3>
                    <h1 className='my-4'>Invest a mere month of your time to learn a language.</h1>
                    <button type="button" class="flex flex-row btn btn-outline-dark hover:bg-[#13bfab] rounded-full  w-fit text-md py-3 px-4 ">Download Brochure</button>
                </div>
                <div className='lg:w-1/2 hidden md:flex lg:flex flex-row flex-wrap justify-center algin-center pr-20'>
                    {/* lg:px-28 lg:py-10 sm:p-10 */}
                    <div className='p-6 md:w-1/2 flex flex-col items-center lg:my-0'>
                        <a href='/docs/French-Introductory-Course_Prospectus_compressed.pdf'>
                        <img src="/images/French.png" alt="img" className='w-24' />
                        <h2 className='font-medium text-2xl mt-3 text-black text-center'>French</h2>
                        </a>
                    </div>
                    <div className='p-6 md:w-1/2 flex flex-col items-center sm:my-4 lg:my-0'>
                        <a href="/docs/German-Introductory-Course_Prospectus_compressed.pdf">
                        <img src="/images/German.png" alt="img" className='w-24' />
                        <h2 className='font-medium text-2xl mt-3 text-black text-center'>German</h2>
                        </a>
                    </div>
                    <div className='p-6 md:w-1/2 flex flex-col items-center sm:my-4 lg:my-0'>
                        <a href="/docs/Spanish-Introductory-Course_Prospectus_compressed.pdf">
                        <img src="/images/Spanish.png" alt="img" className='w-24' />
                        <h2 className='font-medium text-2xl mt-3 text-black text-center'>Spanish</h2>
                        </a>
                    </div>
                    <div className='p-6 md:w-1/2 flex flex-col items-center sm:my-4 lg:my-0'>
                        <a href="/docs/Korean-Introductory-Course_Prospectus_compressed.pdf">
                        <img src="/images/Korean.png" alt="img" className='w-24' />
                        <h2 className='font-medium text-2xl mt-3 text-black text-center'>Korean</h2>
                        </a>
                    </div>
                </div>
                <Swiper className='pagi1 block lg:hidden w-full px-10 md:px-16 bg-inherit' spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1

                    },
                    768: {
                        slidesPerView: 4
                    }
                }}
                pagination={false} navigation={true} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
            >
                <SwiperSlide>
                <div className='p-6 md:w-1/2 flex flex-col items-center lg:my-0'>
                        <a href='/docs/French-Introductory-Course_Prospectus_compressed.pdf'>
                        <img src="/images/French.png" alt="img" className='w-24' />
                        <h2 className='font-medium text-2xl mt-3 text-black text-center'>French</h2>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='p-6 md:w-1/2 flex flex-col items-center sm:my-4 lg:my-0'>
                        <a href="/docs/German-Introductory-Course_Prospectus_compressed.pdf">
                        <img src="/images/German.png" alt="img" className='w-24' />
                        <h2 className='font-medium text-2xl mt-3 text-black text-center'>German</h2>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='p-6 md:w-1/2 flex flex-col items-center sm:my-4 lg:my-0'>
                        <a href="/docs/Spanish-Introductory-Course_Prospectus_compressed.pdf">
                        <img src="/images/Spanish.png" alt="img" className='w-24' />
                        <h2 className='font-medium text-2xl mt-3 text-black text-center'>Spanish</h2>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='p-6 md:w-1/2 flex flex-col items-center sm:my-4 lg:my-0'>
                        <a href="/docs/Korean-Introductory-Course_Prospectus_compressed.pdf">
                        <img src="/images/Korean.png" alt="img" className='w-24' />
                        <h2 className='font-medium text-2xl mt-3 text-black text-center'>Korean</h2>
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
                <div className='w-full text-center text-xs mb-4 px-5 '>*To receive the cashback you must follow The Language Network T&C’s.</div>
            </div>
            <div className="flex items-center justify-center font-bold text-2xl lg:text-4xl py-12 pb-20 px-4 text-center">Learn a language at par with professionals at affordable prices</div>
            <div className='w-full flex lg:flex-row flex-col justify-center pt-4 px-16 lg:px-0 mb-10 '>
                <div class="lg:w-1/4 h-1/3 rounded-lg shadow-2xl  mb-4 lg:mx-20 lg:mb-10 sm:mb-0">
                    <div class="px-3 py-4 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6 relative">
                        <div class="flex justify-center">
                            <span class="inline-flex px-4 py-1 text-dark dark:text-white rounded-full text-lg leading-5 font-semibold tracking-wide uppercase">
                                Weekday Batches
                            </span>
                        </div>
                        <div class="mt-4 flex justify-center text-5xl leading-none font-extrabold text-dark  dark:text-white">
                            ₹ 2990
                            <span class="ml-1 pt-2 text-2xl leading-8 font-medium text-dark dark:text-gray-400">
                                /-
                            </span>
                        </div>

                    </div>
                    <div class="px-4 pb-4 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
                        <ul>
                            <li class="mt-3 flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-dark dark:text-gray-200">

                                    1 month, 5 hours per week
                                </p>
                            </li>
                            <li class="mt-3 flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-dark dark:text-gray-200">
                                    Earn 100% cashback
                                </p>
                            </li>
                            <li class="mt-3 flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-dark dark:text-gray-200">
                                    Study materials
                                </p>
                            </li>
                            <li class="mt-3 flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-dark dark:text-gray-200">
                                    French / Spanish/ German/ Korean
                                </p>
                            </li>
                        </ul>
                        <div class="mt-6 rounded-md px-10">
                            <a href="https://pages.razorpay.com/pl_HXd1d0AMarLVso/view" class="flex items-center justify-center sm:px-2 lg:px-5  py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#13bfab] hover:bg-[#16e9d0] focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                ENROLL NOW
                            </a>
                        </div>
                    </div>

                </div>
                <div class="lg:w-1/4 w-full rounded-lg shadow-2xl overflow-hidden mb-4 lg:mx-20 lg:mb-0 ">
                    <div class="px-3 py-4 bg-white dark:bg-gray-800 sm:p-10 sm:pb-6 relative">
                        <div class="flex justify-center">
                            <span class="inline-flex px-4 py-1 text-dark dark:text-white rounded-full text-lg leading-5 font-semibold tracking-wide uppercase">
                                Weekday Batches
                            </span>
                        </div>
                        <div class="mt-4 flex justify-center text-5xl leading-none font-extrabold text-dark  dark:text-white">
                            ₹ 2990
                            <span class="ml-1 pt-2 text-2xl leading-8 font-medium text-dark dark:text-gray-400">
                                /-
                            </span>
                        </div>

                    </div>
                    <div class="px-4 pb-4 bg-white dark:bg-gray-800 sm:p-10 sm:pt-6">
                        <ul>
                            <li class="mt-3 flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-dark dark:text-gray-200">

                                    1 month, 5 hours per week
                                </p>
                            </li>
                            <li class="mt-3 flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-dark dark:text-gray-200">
                                    Earn 100% cashback
                                </p>
                            </li>
                            <li class="mt-3 flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-dark dark:text-gray-200">
                                    Study materials
                                </p>
                            </li>
                            <li class="mt-3 flex items-start">
                                <div class="flex-shrink-0">
                                    <svg class="h-6 w-6 text-green-500" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7">
                                        </path>
                                    </svg>
                                </div>
                                <p class="ml-3 text-base leading-6 text-dark dark:text-gray-200">
                                    French / Spanish/ German/ Korean
                                </p>
                            </li>
                        </ul>
                        <div class="mt-6 rounded-md  px-10">
                            <a href="https://pages.razorpay.com/pl_HXd1d0AMarLVso/view" class="flex items-center justify-center sm:px-2 lg:px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#13bfab] hover:bg-[#16e9d0] focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                ENROLL NOW
                            </a>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
