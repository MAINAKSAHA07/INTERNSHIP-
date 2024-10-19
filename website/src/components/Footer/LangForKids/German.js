import React from 'react';
import { FaRegWindowMinimize, FaLightbulb } from 'react-icons/fa';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import KidsLevels from './KidsLevels';
import LearningPricesKids from '../../CoursePricing/LearningPricesKids';
import { German_1_1, German_1_2, German_1_4 } from '../../CoursePricing/CourseTableData_kids/German.js'
import { EffectFade, Parallax } from "swiper/core";
import Popupm from '../../curriculum/Pop/Popupmain';

export default function KidsGerman() {

    AOS.init()

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
        document.getElementById('Home-card-text-h2').style.color = '#000';
        document.getElementById('Home-card-text-h3').style.color = '#000';
        document.getElementById('Home-card-1').style.boxShadow = 'none';
        document.getElementById('Home-card-2').style.boxShadow = 'none';
        document.getElementById('Home-card-3').style.boxShadow = 'none';

    }
    return (
        <div>
        <Popupm/>
            <div className="h-auto pt-10 lg:pt-0 lg:pt-0 px-10 lg:px28 lg:flex flex-row items-center">
                <div className='lg:w-1/2 lg:px-10'>
                    <h2 className='font-semibold text-2xl lg:text-4xl'>Online German for Kids and Adolescents</h2>
                    <p className='text-sm text-[#54595f] my-3'>Online German classes for adolescents at The Language Network, is your path to fluency!</p>
                    <p className='text-sm text-[#54595f] my-3'>Our online German lessons are adjusted to every child’s interests and language goals.</p>
                    <p className='text-sm text-[#54595f] my-3'>Our main goal is to teach foreign languages to kids in a student-centered learning approach with the assistance of experienced trainers!</p>
                    <p className='text-sm text-[#54595f] my-3'>Enroll in our online German classes and boost your language skills with our qualified trainers and start seeing your results immediately! Book a free trial and build your path to fluency!</p>
                </div>
                <div className='lg:w-1/2'>
                    <img src="/images/TLN_German-elements.png" alt="img" />
                </div>
            </div>
            <div className="KidsGerman h-[70vh]" >
                <div className="bg-[rgba(0,0,0,0.4)] h-full ">
                    <div className='h-full flex flex-col justify-center align-left w-full px-10 lg:px-32'>
                        <h1 className='text-3xl lg:text-4xl leading-snug text-white font-bold'>German Classes for Kids</h1>
                        <h1 className='text-md my-10 text-white font-medium'>1-to-1 and Group Online German Classes for Kids (6-17 years old) with professional teachers.</h1>
                        <a href="https://api.whatsapp.com/send/?phone=%2B919137239887&text=Hi+The+Language+Network+Please+assist+me+with+my+inquiry.&app_absent=0"> <button type="button" class="flex flex-row btn btn-outline-light hover:bg-[#16e9d0] rounded-3xl w-fit text-sm py-3 px-4 ">Get Started</button></a>
                    </div>
                </div>
            </div>

            {/* <div className="my-20 lg:flex flex-row">
                <div className='space-y-2 px-10 lg:px-20'>
                    <h1 className="font-bold text-3xl lg:text-4xl">German Language Levels for Kids</h1>
                    <p className='text-sm text-[#54595f]'>All languages we offer are aligned with the CEFR levels, so once you know your level, we can suggest the best classes to get your progress going immediately.</p>
                    <p className='text-sm text-[#54595f]'>Online German for kids is divided into following levels:</p>
                    <ul className='list-disc font-bold text-gray-600 pl-3 leading-10'>
                        <li>Level A1-  A1.1, A1.1</li>
                        <li>Level A2- A2.1, A2.2</li>
                    </ul>
                    <p className='text-sm text-[#54595f]'>These levels are corresponding to the Common European Framework of Reference for Languages (CEFR). Level A1 is the most accessible one and A2 the most advanced. Later your child will be able to continue with the DELF Junior B1 and the DELF B2 Junior.</p>
                </div>
                <div className='flex align-center px-20 py-20 lg:px-10 lg:py-10'>
                    <img src='/images/French-levels@300x-1536x931.png' alt='img' />
                </div>
            </div> */}

            <div className="my-24 lg:flex sm:px-4 lg:px-20 lg:pt-10 flex-row h-auto w-full bg-[#f4f8fb]">
                <div className='flex flex-col w-full lg:w-1/3 space-y-6 px-4 lg:px-20 justify-center lg:justify-start'>
                    <h1 className='font-bold text-3xl lg:text-4xl pt-10 lg:pt-4'>German Language Levels for Kids</h1>
                    <p className='text-sm text-[#54595f]'>
                        All languages we offer are aligned with the CEFR levels, so once you know your level, we can suggest the best classes to get your progress going immediately.
                    </p>
                    <p className='text-sm text-[#54595f]'>
                        These levels are corresponding to the Common European Framework of Reference for Languages (CEFR). Level A1 is the most accessible one and A2 the most advanced. Later your child will be able to continue with the DELF Junior B1 and the DELF B2 Junior.                    </p>
                </div>
                <div className='flex align-center w-full h-auto py-10 lg:py-0 lg:w-2/3 '>
                    <KidsLevels />
                </div>
            </div>

            <div className='w-full text-center text-3xl lg:text-4xl font-medium '>Why should you learn with The Language Network?</div>
            <div className="sm:px-3 lg:px-14 sm:mx-0 lg:mx-5">
                <Swiper className=""
                    navigation={true}
                    infinite
                    autoplay={{
                        disableOnInteraction: false,
                    }}
                    module={[EffectFade, Parallax]}
                    effect="fade"
                    loop={true}
                    pagination={{ clickable: true }}
                    spaceBetween={5}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                >
                    <SwiperSlide className="mb-10 testi-slides px-1 lg:px-0  pt-3 lg:pt-0">
                        <div className="flex justify-center mx-5">
                            <div class="xl:w-full md:w-full sm:w-full p-1 lg:p-1 lg:p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                                <div class=" p-6 rounded-lg h-auto lg:h-56">
                                    <div class=" w-1/6 h-1/6 inline-flex items-center justify-center text-yellow-400 text-yellow-300 ">
                                        <img src="/images/Asset-21@300x.png"/>
                                    </div>
                                    <h2 class="text-lg text-gray-900 font-semibold title-font">Cutting Edge Curriculum </h2>
                                    <p class="leading-relaxed text-gray-600 text-sm alignself:left">Now immerse your child in the world of knowledge with our English language course for kids. Practice English with our language experts and receive lots of positive benefits.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 testi-slides px-1 lg:px-0  pt-3 lg:pt-0">
                        <div className="flex justify-center mx-5">
                            <div class="xl:w-full md:w-full sm:w-full p-1 lg:p-1 lg:p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                                <div class=" p-6 rounded-lg h-auto lg:h-56">
                                    <div class=" w-1/6 h-1/6 inline-flex items-center justify-center text-yellow-400 text-yellow-300 ">
                                        <img src="/images/Asset-21@300x.png"/>
                                    </div>
                                    <h2 class="text-lg text-gray-900 font-semibold title-font">Cutting Edge Curriculum </h2>
                                    <p class="leading-relaxed text-gray-600 text-sm items-left">Now immerse your child in the world of knowledge with our English language course for kids. Practice English with our language experts and receive lots of positive benefits.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 testi-slides px-1 lg:px-0  pt-3 lg:pt-0">
                        <div className="flex justify-center mx-5">
                            <div class="xl:w-full md:w-full sm:w-full p-1 lg:p-1 lg:p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                                <div class=" p-6 rounded-lg h-auto lg:h-56">
                                    <div class=" w-1/6 h-1/6 inline-flex items-center justify-center text-yellow-400 text-yellow-300 ">
                                        <img src="/images/Asset-21@300x.png"/>
                                    </div>
                                    <h2 class="text-lg text-gray-900 font-semibold title-font">Cutting Edge Curriculum </h2>
                                    <p class="leading-relaxed text-gray-600 text-sm">Now immerse your child in the world of knowledge with our English language course for kids. Practice English with our language experts and receive lots of positive benefits.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 testi-slides px-1 lg:px-0  pt-3 lg:pt-0">
                        <div className="flex justify-center mx-5">
                            <div class="xl:w-full md:w-full sm:w-full p-1 lg:p-1 lg:p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                                <div class=" p-6 rounded-lg h-auto lg:h-56">
                                    <div class=" w-1/6 h-1/6 inline-flex items-center justify-center text-yellow-400 text-yellow-300 ">
                                        <img src="/images/Asset-21@300x.png"/>
                                    </div>
                                    <h2 class="text-lg text-gray-900 font-semibold title-font">Cutting Edge Curriculum </h2>
                                    <p class="leading-relaxed text-gray-600 text-sm">Now immerse your child in the world of knowledge with our English language course for kids. Practice English with our language experts and receive lots of positive benefits.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 testi-slides px-1 lg:px-0  pt-3 lg:pt-0">
                        <div className="flex justify-center mx-5">
                            <div class="xl:w-full md:w-full sm:w-full p-1 lg:p-1 lg:p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                                <div class=" p-6 rounded-lg h-auto lg:h-56">
                                    <div class=" w-1/6 h-1/6 inline-flex items-center justify-center text-yellow-400 text-yellow-300 ">
                                        <img src="/images/Asset-21@300x.png"/>
                                    </div>
                                    <h2 class="text-lg text-gray-900 font-semibold title-font">Cutting Edge Curriculum </h2>
                                    <p class="leading-relaxed text-gray-600 text-sm">Now immerse your child in the world of knowledge with our English language course for kids. Practice English with our language experts and receive lots of positive benefits.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 testi-slides px-1 lg:px-0  pt-3 lg:pt-0">
                        <div className="flex justify-center mx-5">
                            <div class="xl:w-full md:w-full sm:w-full p-1 lg:p-1 lg:p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                                <div class=" p-6 rounded-lg h-auto lg:h-56">
                                    <div class=" w-1/6 h-1/6 inline-flex items-center justify-center text-yellow-400 text-yellow-300 ">
                                        <img src="/images/Asset-21@300x.png"/>
                                    </div>
                                    <h2 class="text-lg text-black-900 font-semibold title-font">Cutting Edge Curriculum </h2>
                                    <p class="leading-relaxed text-gray-600 text-sm">Now immerse your child in the world of knowledge with our English language course for kids. Practice English with our language experts and receive lots of positive benefits.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>

            <div className='w-full lg:mt-20 text-center text-3xl lg:text-4xl font-medium mb-5'>Why Learn German?</div>
            <div className='flex flex-col lg:flex-row'>
                <div className='pl-10 w-1/2 lg:w-[30rem] self-center   '>
                    <img className='w-full' src="/images/Learn-effectively@300x.png" alt="img" />
                </div>
                <div className='w-full flex flex-col w-full lg:w-2/3'>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-2'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium'>Better Understanding of the Culture</h1>
                            <p className='text-[#54595f] pt-2'>When children are introduced to a new language, their empathy toward that language increases. They start accepting diversity within their friends’ circles and gain a new perspective of understanding new customs and traditions! </p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-2'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium'>
                            Boosts creativity</h1>
                            <p className='text-[#54595f] pt-2'>With children being extremely artistically triumph, their creative minds tingle with ideas and innovations! Learning a new language like German will help them think up new ideas co-relating to the German language. For eg., they could start inculcating new games during ‘Kaffee und Kuchen,’ a German tradition of evening Coffee and Cake!</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-2'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium'>Promotes multitasking</h1>
                            <p className='text-[#54595f] pt-2'>Energetic, vibrant, spirited- this describes children exactly as they are! With energy to spare, they have the ability to multitask and learn more than two things at the same time. Learning a second language boosts their skills at multitasking!</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-2'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium'>Strengthens all other aspects of life</h1>
                            <p className='text-[#54595f] pt-2'>Often wondered what qualities make up the perfect youth? What if, growing up, a child was embedded with all the pivotal qualities to add to their forte? This is possible through learning a new language. Research proves that it feeds their brain and boosts critical thinking, memory capacity, concentration, and mental flexibility! What more benefits can you ask for!? </p>
                        </div>
                    </div>
                </div>
            </div>       
            
            <div className='pt-20 w-full lg:mt-20 text-center text-3xl lg:text-4xl font-medium px-2 lg:px-20'>TLN and International Exams</div>
            <p className='text-center w-full px-10 lg:px-60 pt-4 text-sm text-[#54595f]'> We want our students to excel in international exams like TOEFL and IELTS. We teach our students how to learn German in a way that will help them ace these standardised tests. All aspects of the test, including pronunciation, vocabulary, listening part, is being taken care of at TLN. We ensure that once you learn something you won’t forget it.</p>
            <div className='px-3 group w-full flex flex-col items-center my-10'>
                <img src="/images/exam-goethe-300x159.jpg" alt="img" className='w-60' />
                <div className='px-10 shadow-xl text-center lg:w-2/3 p-4'>
                    <h3 className='text-lg font-bold pb-3 group-hover:text-amber-400 ease-in duration-300'>Goethe</h3>
                    <p className='text-sm text-[#54595f]'>Goethe is the language proficiency exam in German offered by the Goethe-Institute corresponding to the levels of the Common European Framework of Reference for Languages (CEFR) and range from level A1 for beginners to C2 for the most advanced language learners. These exams are conducted by Max Mueller Bhavan in India that is the situated in 6 cities Mumbai, New Delhi, Kolkata, Ahmedabad, Pune and Chennai. These proficiency certificates are valid for a lifetime. They are accepted for all official purposes such as Student Visa, Work Visa etc .</p>
                </div>
            </div>

            <div className='flex flex-col items-center pt-10'>
            <div className="Home-container-32 sm:px-4 lg:px-48 sm:pt-20 lg:pt-20 ">
                    <h1 className='font-semibold text-2xl lg:text-4xl'>
                        Students at The Language Network
                    </h1>
                    <p className="sm:px-10 lg:px-2 font-medium pb-2 pt-2">
                        <div className="px-4 ">
                        We have created courses, based on students’ age range, keeping in mind each age-groups’ attention and motivation level, so that we can provide the most suitable study curriculum and experience.
                        </div>
                    </p>
                </div>

                <div className='w-full flex flex-col items-center justify-center'>
                    <div className="w-5/6 hidden lg:flex flex-row space-y-10 lg:space-y-0 mt-12">
                        <div className="w-full lg:w-1/3 flex flex-col items-center lg:mx-4 ease-in duration-300 rounded-2xl" id='Home-card-1' onMouseOver={changeCol1} onMouseLeave={changeBack}>
                            <div className="Home-card-img">
                                <img src='/images/Adolscents@300x.png' alt='img' />
                            </div>
                            <div className='Home-card-text'>
                                <h1 id='Home-card-text-h1'>Kids (6-9 years)</h1>
                                <p>Children in this age range can learn any foreign language with the right professional assistance. Kids have a high sense of creativity and imagination. At, TLN we know how to use this imagination and methodically focuses on aspects of language that boost performance and imagination</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 flex flex-col items-center lg:mx-4 ease-in duration-300 rounded-2xl" id='Home-card-2' onMouseOver={changeCol2} onMouseLeave={changeBack}>
                            <div className="Home-card-img">
                                <img src='/images/Kids@300x-1.png' alt='img' />
                            </div>
                            <div className='Home-card-text'>
                                <h1 id='Home-card-text-h2'>Teens (10-13 years)</h1>
                                <p>Students in this age group are usually energetic, curious, and eager to explore the world! At TLN, we teach more than just the language. We take you through the culture; traditions, clothing, food, festivals, etc. This means that you are learning more than the writing system or pronunciation.</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 flex flex-col items-center lg:mx-4 ease-in duration-300 rounded-2xl" id='Home-card-3' onMouseOver={changeCol3} onMouseLeave={changeBack}>
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
            </div>
            <div className='mt-24'>
                <LearningPricesKids one_one={German_1_1} one_two={German_1_2} one_four={German_1_4} />
            </div>
            {/* <p className='w-full lg:px-80 pt-20 text-center font-medium lg:text-4xl text-2xl px-3'>Join us in a language trip now, by following these simple steps</p>
            <section class="text-gray-600 body-font">
                <div class="container px-5 py-20 mx-auto">
                    <div class="hidden lg:flex items-center lg:w-9/12 mx-auto sm:flex-row flex-col">
                        <div data-aos="fade-right" data-aos-mirror='true' data-aos-delay='200' class="h-80 w-80 sm:mr-24 inline-flex items-center justify-center flex-shrink-0">
                            <img src="/images/account.png" alt="img" className='' />
                        </div>
                        <div class="flex-grow sm:text-left mt-6 sm:mt-0">
                            <h1 className='text-xl tracking-widest font-medium text-black'>STEP 1</h1>
                            <h2 class="poppins partial-underline text-[#f2b919] text-2xl font-medium mb-8">Register with us</h2>
                            <p class="leading-relaxed text-black ">Fill out our form. Provide your personal details, Choose your preferred language, and register with us. Our executives will assist you with the online classes, study material, and lot more!</p>
                        </div>
                    </div>
                    <div class="flex lg:hidden items-center lg:w-9/12 mx-auto sm:flex-row flex-col">
                        <div class="flex-grow sm:text-left mt-6 sm:mt-0">
                            <h1 className='text-xl tracking-widest font-medium text-black'>STEP 1</h1>
                            <h2 class="poppins partial-underline text-[#f2b919] text-2xl font-medium mb-8">Register with us</h2>
                            <p class="leading-relaxed text-black ">Fill out our form. Provide your personal details, Choose your preferred language, and register with us. Our executives will assist you with the online classes, study material, and lot more!</p>
                        </div>
                        <div data-aos="fade-right" data-aos-mirror='true' data-aos-delay='200' class="h-80 w-80 sm:mr-24 inline-flex items-center justify-center flex-shrink-0">
                            <img src="/images/account.png" alt="img" className='' />
                        </div>
                    </div>
                    <div class="flex items-center lg:w-9/12 mx-auto sm:flex-row flex-col">
                        <div class="flex-grow sm:text-right sm:mr-24 mt-6 sm:mt-0">
                            <h1 className='text-xl tracking-widest font-medium text-black'>STEP 2</h1>
                            <h2 class="poppins text-[#f2b919] text-2xl font-medium mb-8">Access your virtual classroom</h2>
                            <p class="leading-relaxed text-black ">Learn when you want to learn! You will be provided with a Class link, where you can log in and start learning!</p>
                        </div>
                        <div data-aos="fade-left" data-aos-mirror='true' data-aos-delay='200' class="h-80 w-80 sm:mr-24 inline-flex items-center justify-center flex-shrink-0">
                            <img src="/images/classroom.png" alt="img" />
                        </div>
                    </div>
                    <div class="hidden lg:flex items-center lg:w-9/12 mx-auto sm:flex-row flex-col">
                        <div data-aos="fade-right" data-aos-mirror='true' data-aos-delay='200' class="h-80 w-80 sm:mr-24 inline-flex items-center justify-center flex-shrink-0">
                            <img src="/images/get-started.png" alt="img" />
                        </div>
                        <div class="flex-grow sm:text-left mt-6 sm:mt-0">
                            <h1 className='text-xl tracking-widest font-medium text-black'>STEP 3</h1>
                            <h2 class="poppins partial-underline text-[#f2b919] text-2xl font-medium mb-8">Get started</h2>
                            <p class="leading-relaxed text-black ">Practice what you learn with other students. We offer small batches so you can get personalized attention from our language experts.</p>
                        </div>
                    </div>
                    <div class="flex lg:hidden items-center lg:w-9/12 mx-auto sm:flex-row flex-col">
                        <div class="flex-grow sm:text-left mt-6 sm:mt-0">
                            <h1 className='text-xl tracking-widest font-medium text-black'>STEP 3</h1>
                            <h2 class="poppins partial-underline text-[#f2b919] text-2xl font-medium mb-8">Get started</h2>
                            <p class="leading-relaxed text-black ">Practice what you learn with other students. We offer small batches so you can get personalized attention from our language experts.</p>
                        </div>
                        <div data-aos="fade-right" data-aos-mirror='true' data-aos-delay='200' class="h-80 w-80 sm:mr-24 inline-flex items-center justify-center flex-shrink-0">
                            <img src="/images/get-started.png" alt="img" />
                        </div>
                    </div>

                    <div className='w-full flex  justify-center'>
                        <a href="/getstarted">
                            <button class="bg-[#13BFAB] hover:bg-teal-400 text-white font-bold py-3 px-4 rounded" >
                                Get Started
                            </button>
                        </a>
                    </div>
                </div>
            </section> */}

            <p className='w-full  text-center font-bold text-4xl pb-3'>Frequently asked questions</p>

            <div className="flex flex-col items-center justify-center pb-20">
                <hr class="flex flex-col justify-center align-center text-center border-[#FFC000] border-2 w-1/5 self-center items-center"></hr>
            </div>

            <div className='w-full px-10 lg:px-28 mb-16'>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingOne">
                            <button class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left font-bold bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                                Why should I enrol my kid in TLN?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">TLN offers one-on-one batches. We give special attention to all our students. We have hired expert teachers for all our batches. We teach all aspects of language learning while focusing on the spoken part. Our German language course for kids covers grammar and vocabulary, speaking, reading, writing, and listening.</div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingTwo">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                aria-expanded="false" aria-controls="flush-collapseTwo">
                                What makes TLN different from other language learning institutes?
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">We only have one-on-one batches. We prepare our students for international exams. We have hand-tailored study plans to meet each student’s learning needs. Our German language course for kids also covers the German culture which tremendously helps language learning.</div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingThree">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                aria-expanded="false" aria-controls="flush-collapseThree">
                                What is the duration of each class?
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">The duration of each German language course for kids is 1 hour. It is perfect for their attention spans.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingFive">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                aria-expanded="false" aria-controls="flush-collapseFive">
                                Can the classes be downloaded?
                            </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFive"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">Yes, the online classes can be downloaded. We also provide the downloaded classes to our students for a wholesome learning.</div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingSix">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix"
                                aria-expanded="false" aria-controls="flush-collapseSix">
                                How many students do we accommodate in one batch?
                            </button>
                        </h2>
                        <div id="flush-collapseSix" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSix"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">We do not have group batches for kids and adolescents. We only have one-on-one batches for kids. We believe that kids need more specialised attention so our German language course for kids only accommodates one student at a time.</div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingSeven">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven"
                                aria-expanded="false" aria-controls="flush-collapseSeven">
                                What if I have doubts?
                            </button>
                        </h2>
                        <div id="flush-collapseSeven" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSeven"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">If you have any doubts, feel free to contact our language experts. They will surely help you with your doubts and issues. </div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingEight">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight"
                                aria-expanded="false" aria-controls="flush-collapseEight">
                                Do you provide study material for enrolled students?
                            </button>
                        </h2>
                        <div id="flush-collapseEight" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingEight"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">Yes, we do provide study material to our students. We also have several activities in our German language course for kids. </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
