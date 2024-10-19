import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';
import './homeRes.css'
import './Home.css';


import Display from "./Display";

import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import Testimonial from './testimonial.js';
import BodyCarousel from './BodyCarousel.js'
import MoCar from './MoCar';
import EducationPartners from './EducationPartners.js'
// import Globe3d from '../Earth/Globe';


// import images for International Exams

import img1 from '../IntExamswiper/exam-dele.svg';
import img2 from '../IntExamswiper/exam-delf-dalf.svg';
import img3 from '../IntExamswiper/exam-goethe.svg';
import img4 from '../IntExamswiper/exam-Hsk.svg';
import img5 from '../IntExamswiper/exam-ielts.svg';
import img6 from '../IntExamswiper/exam-JLPT.svg';
import img7 from '../IntExamswiper/exam-siele.svg';
import img8 from '../IntExamswiper/exam-TEF.svg';
import img9 from '../IntExamswiper/exam-TOPIK.svg';
import Curriculum from '../curriculum/Curriculum';
// import GlobeMobile from '../Earth/GlobeMobile';
import Team from '../Footer/Company/AboutUs/Team';
import Popup from '../curriculum/Pop/Popup'
import Levels from './Levels';
import Popupm from '../curriculum/Pop/Popupmain'
import Counter from './Counter'
// import Dussehra_offerpost from './Dussehra_offerpost';
import Countdown from '../countdown/Coundown';

SwiperCore.use([Autoplay, Pagination, Navigation]);





export default function Home() {

    // state = {
    //     didViewCountUp: false
    // };


    // onVisibilityChange = isVisible => {
    //     if (isVisible) {
    //         this.setState({ didViewCountUp: true });
    //     }
    // }

    function changeCol1() {
        document.getElementById('Home-card-text-h1').style.color = '#460090';
        document.getElementById('Home-card-1').style.boxShadow = '0px 0px 38px -10px #460090';
    }

    function changeCol2() {
        document.getElementById('Home-card-text-h2').style.color = '#f2b919';
        document.getElementById('Home-card-2').style.boxShadow = '0px 0px 38px -10px #f2b919';
    }

    function changeCol3() {
        document.getElementById('Home-card-text-h3').style.color = '#13bfab';
        document.getElementById('Home-card-3').style.boxShadow = '0px 0px 38px -10px #13bfab';

    }

    function changeBack() {
        document.getElementById('Home-card-text-h1').style.color = '#000';
        // document.getElementById('Home-card-text-h2').style.color = '#000';
        document.getElementById('Home-card-text-h3').style.color = '#000';
        document.getElementById('Home-card-1').style.boxShadow = 'none';
        // document.getElementById('Home-card-2').style.boxShadow = 'none';
        document.getElementById('Home-card-3').style.boxShadow = 'none';
        document.getElementById('Home-card-text-h2').style.color = '#000';
        document.getElementById('Home-card-2').style.boxShadow = 'none';



    }


    return (
        <>
            <Popupm />
            <div className=''>
                {/* <div class="floating">
                    <img src="https://wordpress.creativegigs.net/rogan/wp-content/uploads/2020/08/6.svg" />
                </div>
                <img src="https://wordpress.creativegigs.net/rogan/wp-content/uploads/2020/05/5.svg" class="circle" /> */}

                <div className='pt-4 Home-container-1 dark:bg-black bg-cover lg:bg-contain w-full pl-4 lg:py-14 lg:px-26 relative h-[auto] flex flex-col lg:flex-row justify-end items-center flex-wrap' >
                    <div className=' w-full lg:w-5/12 flex flex-col space-y-6 pt-2 lg:pt-0 items-start justify-center'>
                        <h1 className='flex items-center text-sm lg:text-base font-medium uppercase text-[#13bfab] lg:pt-2'><FaCircle style={{ color: '#f2b919', fontSize: '14px', marginRight: '10px' }} />LIVE ONLINE CLASSES</h1>
                        <h2 className='text-black font-semibold lg:font-medium text-2xl lg:text-5xl'>Learn more than just a language!</h2>

                        <ul>
                            <li className='flex flex-row py-3'><img src='/images/icons8-tick-box-20.png' alt='img' className='pr-2 h-[21px]' />Live 1:1, Duo and Group Online Classes</li>
                            <li className='flex flex-row py-3'><img src='/images/icons8-tick-box-20.png' alt='img' className='pr-2 h-[21px]' />Flexible timings</li>
                            <li className='flex flex-row py-3'><img src='/images/icons8-tick-box-20.png' alt='img' className='pr-2 h-[21px]' />Take learning beyond the classroom</li>
                        </ul>
                        <a href='https://tripetto.app/run/QMJH3CAU7W'><button type="button" class="btn btn-info text-white hidden lg:block" style={{ backgroundColor: '#13bfab', borderRadius: '10px', paddingTop: '16px', paddingRight: '30px', paddingBottom: '16px', paddingLeft: '30px', fontSize: '0.82352941176471rem' }}>Get Started</button></a>
                        <div className='w-1/4 hidden lg:block'>
                            <a href="https://www.google.com/search?q=the+language+network&rlz=1C1ONGR_enIN963IN963&oq=the+&aqs=chrome.1.69i57j69i59l3j69i65j69i61j69i60j69i65.1919j0j7&sourceid=chrome&ie=UTF-8#lrd=0x3be7cfc23fb20ae5:0xac69a09818daea44,1,,,"><img src="/images/gr.svg" className='w-80' /></a>
                        </div>
                    </div>

                    <div className='w-full lg:w-6/12 flex items-center justify-end lg:pl-20'>

                        {/* <video width="90%" height="90%" className='rounded-xl'
                        controls
                        muted
                        autoPlay={"autoplay"}
                        preLoad="auto"
                        loop >
                        <source src="/videos/TLN_HOMEPAGE.gif" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> */}
                        <img src='/videos/TLN_HOMEPAGE.gif' className='' />
                    </div>


                </div>
                
               {/* <div >
                <a href="/getstarted"> <img  src="/images/Christmas_Offer.jpg"  /></a>
                </div>*/}
                
                {/* <div>
                    <Dussehra_offerpost />
                </div> */}

                <div className=' flex justify-center items-center'>
                    <Counter />
                </div>




                <div className="sm:block lg:hidden flex flex-col justify-center text-center px-10 pt-10">
                    <div className="">
                        <a href='https://tripetto.app/run/QMJH3CAU7W'><button type="button" class="btn btn-info text-white w-full" style={{ backgroundColor: '#13bfab', borderRadius: '10px', paddingTop: '16px', paddingRight: '30px', paddingBottom: '16px', paddingLeft: '30px', fontSize: '0.82352941176471rem' }}>Get Started</button></a>
                        <div className='px-20 py-10'>
                            <a href="https://www.google.com/search?q=the+language+network&rlz=1C1ONGR_enIN963IN963&oq=the+&aqs=chrome.1.69i57j69i59l3j69i65j69i61j69i60j69i65.1919j0j7&sourceid=chrome&ie=UTF-8#lrd=0x3be7cfc23fb20ae5:0xac69a09818daea44,1,,,"><img src="/images/gr.svg" className='w-80' /></a>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center  md:block lg:block items-center">


                    <div className="Home-container-2 flex lg:pb-[60px] pb-2 w-full lg:w-full mt-16">
                        <h1>START YOUR JOURNEY WITH US!</h1>
                        <h2 className="px-10 ">Foreign Language Courses We Offer</h2>
                        <div className=' justify-center hidden  lg:flex lg:pt-10 w-full lg:w-full sm:space-y-4 lg:space-y-0'>

                            <Popup sub="English" a1="/english-course-adults" a2="/english-course-kids" im="/images/eng.svg" src1="/images/adults-english@300x.png" src2='/images/Astronaut-English.png' />
                            <Popup sub="French" a1="/french-course-adults" a2="/french-course-kids" im="/images/French.png" src1="/images/adults-french@300x.png" src2='/images/Astronaut-French-1.png' />
                            <Popup sub="Spanish" a1="/spanish-course-adults" a2="/spanish-course-kids" im="/images/Spanish.png" src1="/images/adults-spanish@300x.png" src2='/images/Astronaut-Spanish-1.png' />
                            <Popup sub="German" a1="/german-course-adults" a2="/german-course-kids" im="/images/German.png" src1="/images/adults-german@300x.png" src2='/images/Astronaut-Germany-1.png' />
                            <Popup sub="Mandarin" a1="/mandarin-course-adults" a2="/mandarin-course-kids" im="/images/Mandarin.png" src1="/images/adults-mandarin@300x.png" src2='/images/Astronaut-Mandarin-1.png' />
                            <Popup sub="Japanese" a1="/japanese-course-adults" a2="/japanese-course-kids" im="/images/Japanese.png" src1="/images/adults-japanese@300x.png" src2='/images/Astronaut-Japanese-1.png' />
                            <Popup sub="Korean" a1="/korean-course-adults" a2="/korean-course-kids" im="/images/Korean.png" src1="/images/adults-korean@300x.png" src2='/images/Astronaut-Korean-1.png' />
                        </div>



                        <Swiper className='pagi1 block lg:hidden mb-2 lg:mb-0' spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1

                                },
                            }}
                            pagination={false} navigation={true} autoplay={{
                                "delay": 2500,
                                "disableOnInteraction": false
                            }}
                        >
                            <SwiperSlide>
                                <Popup sub="English" a1="/english-course-adults" a2="/english-course-kids" im="/images/English.png" src1="/images/adults-english@300x.png" src2='/images/Astronaut-English.png' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Popup sub="French" a1="/french-course-adults" a2="/french-course-kids" im="/images/French.png" src1="/images/adults-french@300x.png" src2='/images/Astronaut-French-1.png' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Popup sub="Spanish" a1="/spanish-course-adults" a2="/spanish-course-kids" im="/images/Spanish.png" src1="/images/adults-spanish@300x.png" src2='/images/Astronaut-Spanish-1.png' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Popup sub="German" a1="/german-course-adults" a2="/german-course-kids" im="/images/German.png" src1="/images/adults-german@300x.png" src2='/images/Astronaut-Germany-1.png' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Popup sub="Mandarin" a1="/mandarin-course-adults" a2="/mandarin-course-kids" im="/images/Mandarin.png" src1="/images/adults-mandarin@300x.png" src2='/images/Astronaut-Mandarin-1.png' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Popup sub="Japanese" a1="/japanese-course-adults" a2="/japanese-course-kids" im="/images/Japanese.png" src1="/images/adults-japanese@300x.png" src2='/images/Astronaut-Japanese-1.png' />
                            </SwiperSlide>

                            <SwiperSlide>
                                <Popup sub="Korean" a1="/korean-course-adults" a2="/korean-course-kids" im="/images/Korean.png" src1="/images/adults-korean@300x.png" src2='/images/Astronaut-Korean-1.png' /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>


                <div className="Home-container-81 my-14 text-center flex justify-center">
                    <h1>FROM LEARNING A NEW LANGUAGE TO LIVING IT!</h1>
                    <span className="text-2xl font-semibold lg:text-4xl">Why you should learn with The Language Network?</span>
                </div>
                <div className='w-full px-10 lg:px-20 pb-0'>
                    <Display />
                </div>

                <div className="mb-28 mt-14 lg:flex sm:px-4 lg:px-20 lg:pt-10 flex-row h-auto w-full bg-[#f4f8fb]">
                    <div className='flex flex-col w-full lg:w-1/3 space-y-6 px-4 lg:px-20 justify-center lg:justify-start'>
                        <h1 className='font-bold text-3xl lg:text-4xl pt-10 lg:pt-4'>Our courses are aligned with the CEFR levels</h1>
                        <p className='text-sm text-[#54595f]'>
                            <span className='bold'>
                                CEFR (Common European Framework of Reference for Languages)
                            </span>
                            is an internationally recognized standard that describes your learning progress in more detail. The framework helps you to explain your level from Beginner (A1) to Advanced (C2).
                        </p>
                        <p className='text-sm text-[#54595f]'>
                            All languages we offer are aligned with the CEFR levels, so once you know your level, we can suggest the best classes to get your progress going immediately.
                        </p>
                    </div>
                    <div className='flex align-center w-full h-auto py-10 lg:py-0 lg:w-2/3 px-3 lg:px-0 '>
                        <Levels />
                    </div>
                </div>

                <div className='lg:w-full w-full text-center pt-2 lg:pt-2'>
                    <h1 className='text-[#13bfab] text-xl font-medium tracking-widest'>WE PREPARE YOU FOR</h1>
                    <h2 className='text-black text-4xl font-medium sm:mb-0 lg:mb-10'>International Exams</h2>
                </div>

                <div className=" lg:px-4 hidden md:block lg:block mt-20 ">
                    <BodyCarousel />

                </div>
                <div className='lg:hidden mt-2 mb-10'>
                    <MoCar />

                </div>


                <div className='flex justify-center w-full text-center'>
                    <div className="Home-container- w-full lg:px-72 lg:mt-20 px-10 flex flex-col justify-center items-center">
                        <span className="font-semibold text-3xl lg:text-4xl">
                            <div className="flex justify-center text-center">
                                <div>Students at The Language Network
                                </div>
                            </div>

                        </span>
                        <p className='font-medium py-3 text-center'>
                            We have created courses, based on students’ age range, keeping in mind each age-groups’ attention and motivation level, so that we can provide the most suitable study curriculum and experience.
                        </p>
                    </div>
                </div>
                <div className='w-full flex flex-col items-center justify-center mb-10'>
                    <div className="w-5/6 hidden lg:flex flex-row space-y-10 lg:space-y-0 mt-12">
                        <div className="w-full lg:w-1/3 flex flex-col items-center lg:mx-4 ease-in duration-300" id='Home-card-1' onMouseOver={changeCol1} onMouseLeave={changeBack}>
                            <div className="Home-card-img">
                                <img src='/images/Adolscents@300x.png' alt='img' />
                            </div>
                            <div className='Home-card-text'>
                                <h1 id='Home-card-text-h1'>Kids (6-9 years)</h1>
                                <p>Children in this age range can learn any foreign language with the right professional assistance. Kids have a high sense of creativity and imagination. At, TLN we know how to use this imagination and methodically focuses on aspects of language that boost performance and imagination</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 flex flex-col items-center lg:mx-4 ease-in duration-300" id='Home-card-2' onMouseOver={changeCol2} onMouseLeave={changeBack}>
                            <div className="Home-card-img">
                                <img src='/images/Kids@300x-1.png' alt='img' />
                            </div>
                            <div className='Home-card-text'>
                                <h1 id='Home-card-text-h2'>Teens (10-13 years)</h1>
                                <p>Students in this age group are usually energetic, curious, and eager to explore the world! At TLN, we teach more than just the language. We take you through the culture; traditions, clothing, food, festivals, etc. This means that you are learning more than the writing system or pronunciation.</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 flex flex-col items-center lg:mx-4 ease-in duration-300" id='Home-card-3' onMouseOver={changeCol3} onMouseLeave={changeBack}>
                            <div className="Home-card-img">
                                <img src='/images/adults@300x.png' alt='img' />
                            </div>
                            <div className='Home-card-text'>
                                <h1 id='Home-card-text-h3'>Adults (14+ years)</h1>
                                <p>Getting a certificate is an essential part of verifying your language skills. TLN prepares you for all types of language exams with the professional assistance of highly-qualified teachers. We also offer online classes per your convenience.</p>
                            </div>
                        </div>
                    </div>
                    <Swiper className='pagi1 w-5/6 flex lg:hidden flex-row mt-12' spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
                        breakpoints={{
                            640: {
                                slidesPerView: 1

                            },
                        }}
                        pagination={false} navigation={true} autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                        }}
                    >
                        <SwiperSlide>
                            <div className="w-full w-5/6 flex flex-col items-center lg:mx-4 ease-in duration-300" id='Home-card-1' onMouseOver={changeCol1} onMouseLeave={changeBack}>
                                <div className="Home-card-img">
                                    <img src='/images/Adolscents@300x.png' alt='img' />
                                </div>
                                <div className='Home-card-text'>
                                    <h1 id='Home-card-text-h1'>Kids (6-9 years)</h1>
                                    <p>Children in this age range can learn any foreign language with the right professional assistance. Kids have a high sense of creativity and imagination. At, TLN we know how to use this imagination and methodically focuses on aspects of language that boost performance and imagination</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full w-5/6 flex flex-col items-center lg:mx-4 ease-in duration-300" id='Home-card-2' onMouseOver={changeCol2} onMouseLeave={changeBack}>
                                <div className="Home-card-img">
                                    <img src='/images/Kids@300x-1.png' alt='img' />
                                </div>
                                <div className='Home-card-text'>
                                    <h1 id='Home-card-text-h2'>Teens (10-13 years)</h1>
                                    <p>Students in this age group are usually energetic, curious, and eager to explore the world! At TLN, we teach more than just the language. We take you through the culture; traditions, clothing, food, festivals, etc. This means that you are learning more than the writing system or pronunciation.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="w-full w-5/6 flex flex-col items-center lg:mx-4 ease-in duration-300" id='Home-card-3' onMouseOver={changeCol3} onMouseLeave={changeBack}>
                                <div className="Home-card-img">
                                    <img src='/images/adults@300x.png' alt='img' />
                                </div>
                                <div className='Home-card-text'>
                                    <h1 id='Home-card-text-h3'>Adults (14+ years)</h1>
                                    <p>Getting a certificate is an essential part of verifying your language skills. TLN prepares you for all types of language exams with the professional assistance of highly-qualified teachers. We also offer online classes per your convenience.</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>


                <div className="my-2 px-10 lg:px-0 lg:pl-32 lg:flex flex-row lg:h-[65vh] w-full bg-[#f4f8fb]">
                    <div className='flex flex-col space-y-6 justify-center lg:w-1/2'>
                        <h1 className='font-bold text-3xl lg:text-4xl pt-10 lg:pt-0'>TRANSFORM YOUR CAREER</h1>
                        <p className='text-lg '>Earn your certificate from The Language Network after completion of your language course. Not only it will boost your career, but also improve your CV.</p>
                        <a href="https://tripetto.app/run/QMJH3CAU7W">
                            <button class="bg-[#13BFAB] w-56 hover:bg-teal-400 text-white font-bold py-3 px-4 rounded" >
                                JOIN A COURSE
                            </button>
                        </a>
                    </div>
                    <div className='flex align-center justify-center py-10 lg:py-14 '>
                        <img src='/images/certificate-mockup.png' alt='img' className='certificate-img lg:pl-14 ' />
                    </div>
                    <img src='/images/dots-circle.png' alt='img' className='dots-circle-1 lg:block hidden' />
                    <img src='/images/dots-circle.png' alt='img' className='dots-circle-2 lg:block hidden' />
                </div>


                <div className='w-full'>

                    <Curriculum />
                </div>

                <div className='mb-10'>
                    <div className="items-center justify-center px-3 lg:px-20 flex flex-col justify-center ">
                        <h1 className="flex text-3xl lg:text-4xl font-semibold pt-20 items-center justify-center ">We work as a team</h1>
                        <hr class="h-full flex flex-col justify-center align-center text-center w-ful border-yellow-500 border-2 w-1/4 self-center mt-4 items-center justify-center"></hr>
                        <span className="flex text-lg font-medium pt-4 lg:pt-10 lg:px-32 text-center">With a fantastic team of over 50+ trainers (and counting!) who make learning entertaining and effortless. Our trainers are qualified with an overall student rating of 5   out of 5.</span>
                    </div>
                </div>
                <Team />

                <div className="Home-container-112 mt-20 lg:mb-20">
                    <h1>Happy Testimonials</h1>
                    <hr></hr>
                    <div className="flex justify-center px-10 "> <Testimonial /></div>

                </div>
                <div className="mb-20 pt-20">
                    <h3 className='w-full text-center font-semibold text-3xl lg:text-4xl'>Our Education Partners</h3>
                    <EducationPartners />

                </div>


            </div>

        </>
    )
}
