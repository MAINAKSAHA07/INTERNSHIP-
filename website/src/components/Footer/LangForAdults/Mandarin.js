import React from 'react';
import { FaRegWindowMinimize } from 'react-icons/fa';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import Levels from '../../Home/Levels';
import LearningPrices from '../../CoursePricing/LearningPrices';
import { Mandarin_1_1, Mandarin_1_2, Mandarin_1_4 } from '../../CoursePricing/CourseTableData/Mandarin'
import { EffectFade, Parallax } from "swiper/core";
import Popupm from '../../curriculum/Pop/Popupmain';


export default function AdultsMandarin() {

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
            <div className="bg-[url('/public/images/TLN-Adults-Mandarin-Banner.jpg')] bg-no-repeat bg-cover bg-center h-[70vh]" >
                <div className="bg-[rgba(0,0,0,0.4)] h-full ">
                    <div className='h-full flex flex-col justify-center align-left w-full px-10 lg:px-32'>
                        <h1 className='text-3xl lg:text-4xl leading-snug text-white font-bold'>Mandarin Classes for Adults</h1>
                        <h1 className='text-md my-10 text-white font-medium'>1-to-1 and Group Online Madarin classes for adults (18+ years old) with professional teachers.</h1>
                        <a href="https://api.whatsapp.com/send/?phone=%2B919137239887&text=Hi+The+Language+Network+Please+assist+me+with+my+inquiry.&app_absent=0"><button type="button" class="flex flex-row btn btn-outline-light hover:bg-[#13BFAB] rounded-3xl w-fit text-sm py-3 px-4 ">Get Started</button></a>
                    </div>
                </div>
            </div>
            <div className="pt-10 px-10 lg:px28 lg:flex flex-row items-center">
                <div className='lg:w-1/2 lg:px-20'>
                    <h2 className='font-semibold text-2xl lg:text-4xl'>Learn Mandarin Online with The Language Network</h2>
                    <p className='text-sm text-[#54595f] my-3'>Learn Mandarin Online with The Language Network’s Mandarin language course. TLN offers language courses for all age groups. We have Mandarin language courses for beginners, as well as advance level language learners. </p>
                    <p className='text-sm text-[#54595f] my-3'>Learn Mandarin with The Language Network and master the Mandarin language. Our Mandarin language courses are hand-tailored to meet every student’s learning needs. Now learn Mandarin from within the comforts of your own home.</p>
                </div>
                <div className='lg:w-1/2'>
                    <img src="/images/TLN_Mandarin-elements.png" alt="img" />
                </div>
            </div>
            
            <div className='pt-20 w-full lg:mt-20 text-center text-3xl lg:text-4xl font-medium px-2 lg:px-20'>TLN and International Exams</div>
            <p className='text-center w-full px-10 lg:px-60 pt-4 text-sm text-[#54595f]'> After our students learn Mandarin from us, we expect them to appear for international exams. HSK is one such exam related to Mandarin. We teach our students all the tricks and tips they need to crack HSK. All aspects of HSK are covered in our Mandarin language course. This includes comprehension, reading, grammar, vocabulary, etc.</p>
            <div className='px-3 group w-full flex flex-col items-center my-10'>
                <img src="/images/international-exam-5.jpg" alt="img" className='w-28' />
                <div className='px-10 shadow-xl text-center lg:w-2/3 p-4'>
                    <h3 className='text-lg font-bold pb-3 group-hover:text-amber-400 ease-in duration-300'>HSK</h3>
                    <p className='text-sm text-[#54595f]'>HSK (Hanyu Shuiping Kaoshi) is the international proficiency exam for the Chinese language, standardized for foreign students of the language. This exam is conducted by Hanban, a non-governmental organization to test the proficiency of non-native speakers. There are six HSK levels: HSK1, HSK2, HSK3, HSK4, HSK5, HSK6. HSK was developed by the Beijing Language and Cultural University. Certificates are issued by the State Committee for the proficiency test. This certificate is recognized and accepted by many countries worldwide. Taking into consideration the recent trends in the Chinese language, the examination pattern was revised in 2012.</p>
                </div>
            </div>
            <div className="my-24 lg:flex sm:px-4 lg:px-20 lg:pt-10 flex-row h-auto w-full bg-[#f4f8fb]">
                <div className='flex flex-col w-full lg:w-1/3 space-y-6 px-4 lg:px-20 justify-center lg:justify-start'>
                    <h1 className='font-bold text-3xl lg:text-4xl pt-10 lg:pt-4'>Mandarin Language Levels for Adults</h1>
                    <p className='text-sm text-[#54595f]'>
                    All languages we offer are aligned with the CEFR levels, so once you know your level, we can suggest the best classes to get your progress going immediately. </p>
                    <p className='text-sm text-[#54595f]'>
                        All languages we offer are aligned with the CEFR levels, so once you know your level, we can suggest the best classes to get your progress going immediately.
                    </p>
                </div>
                <div className='flex align-center w-full h-auto py-10 lg:py-0 lg:w-2/3 '>
                    <Levels />
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
                                        <img src="/images/Asset-21@300x.png" />
                                    </div>
                                    <h2 class="text-lg text-gray-900 font-semibold title-font">Interview Preparation </h2>
                                    <p class="leading-relaxed text-gray-600 text-sm">We prepare our students for their interviews and other preparations required for grabbing job opportunities. We guide them with tasks like creating CVs.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 testi-slides px-1 lg:px-0  pt-3 lg:pt-0">
                        <div className="flex justify-center mx-5">
                            <div class="xl:w-full md:w-full sm:w-full p-1 lg:p-1 lg:p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                                <div class=" p-6 rounded-lg h-auto lg:h-56">
                                    <div class=" w-1/6 h-1/6 inline-flex items-center justify-center text-yellow-400 text-yellow-300 ">
                                        <img src="/images/Asset-21@300x.png" />
                                    </div>
                                    <h2 class="text-lg text-gray-900 font-semibold title-font">Customised Study Plans </h2>
                                    <p class="leading-relaxed text-gray-600 text-sm">Our syllabus and study plans are carefully created after referring to all the international exams and study boards to guarantee good results. </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 testi-slides px-1 lg:px-0  pt-3 lg:pt-0">
                        <div className="flex justify-center mx-5">
                            <div class="xl:w-full md:w-full sm:w-full p-1 lg:p-1 lg:p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                                <div class=" p-6 rounded-lg h-auto lg:h-56">
                                    <div class=" w-1/6 h-1/6 inline-flex items-center justify-center text-yellow-400 text-yellow-300 ">
                                        <img src="/images/Asset-21@300x.png" />
                                    </div>
                                    <h2 class="text-lg text-gray-900 font-semibold title-font">Compact Batches</h2>
                                    <p class="leading-relaxed text-gray-600 text-sm">Our online language classes offer compact batches. We believe that all our students should get the attention they deserve. </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 testi-slides px-1 lg:px-0  pt-3 lg:pt-0">
                        <div className="flex justify-center mx-5">
                            <div class="xl:w-full md:w-full sm:w-full p-1 lg:p-1 lg:p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                                <div class=" p-6 rounded-lg h-auto lg:h-56">
                                    <div class=" w-1/6 h-1/6 inline-flex items-center justify-center text-yellow-400 text-yellow-300 ">
                                        <img src="/images/Asset-21@300x.png" />
                                    </div>
                                    <h2 class="text-lg text-gray-900 font-semibold title-font">Fun Learning Activities </h2>
                                    <p class="leading-relaxed text-gray-600 text-sm">Our expert language tutors provide immersive and a fun learning experience in our live language classes. We introduce a lot of fun learning activities to our students.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 testi-slides px-1 lg:px-0  pt-3 lg:pt-0">
                        <div className="flex justify-center mx-5">
                            <div class="xl:w-full md:w-full sm:w-full p-1 lg:p-1 lg:p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                                <div class=" p-6 rounded-lg h-auto lg:h-56">
                                    <div class=" w-1/6 h-1/6 inline-flex items-center justify-center text-yellow-400 text-yellow-300 ">
                                        <img src="/images/Asset-21@300x.png" />
                                    </div>
                                    <h2 class="text-lg text-gray-900 font-semibold title-font">Cultural Diversity </h2>
                                    <p class="leading-relaxed text-gray-600 text-sm">TLN believes in cultural diversity. We also believe that culture plays a vital role in language learning. We also teach our students about the social know-how so that they can realise their travel dreams. </p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="mb-10 testi-slides px-1 lg:px-0  pt-3 lg:pt-0">
                        <div className="flex justify-center mx-5">
                            <div class="xl:w-full md:w-full sm:w-full p-1 lg:p-1 lg:p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                                <div class=" p-6 rounded-lg h-auto lg:h-56">
                                    <div class=" w-1/6 h-1/6 inline-flex items-center justify-center text-yellow-400 text-yellow-300 ">
                                        <img src="/images/Asset-21@300x.png" />
                                    </div>
                                    <h2 class="text-lg text-gray-900 font-semibold title-font">Flexible Learning Experience</h2>
                                    <p class="leading-relaxed text-gray-600 text-sm">We make sure that we provide our students with a flexible learning exp. Our trainers upgrade their strategies and teaching techniques on the basis on a students’ grasping skills.</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
            <div className='w-full lg:mt-20 text-center text-3xl lg:text-4xl font-medium mb-5'>Why Learn Mandarin?</div>
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
                            <h1 className='text-xl font-medium'>Cognitive Benefits</h1>
                            <p className='text-[#54595f] pt-2'>Learning Mandarin has a lot of cognitive benefits for kids. A Child's brain is like a sponge. It will hold more information and in a better way. Learning Mandarin at an early age will strengthen brain cells and neurons.</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-2'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium'>
                            Confident Communication</h1>
                            <p className='text-[#54595f] pt-2'>The earlier you learn Mandarin, the better you get at communication. Start your kid’s learning from a young age and make your child a master of confident communication. There is no greater feeling than seeing your child practice confidence in their day to day life.</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-2'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium'>Boost Academic Achievement</h1>
                            <p className='text-[#54595f] pt-2'>When you start learning Mandarin at an early age, you become so fluent that other subjects become easier too. Memorising theoretical subjects becomes a piece of cake. This boosts your overall academic achievement.</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-2'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium'>Garner Professional Opportunities</h1>
                            <p className='text-[#54595f] pt-2'>If you are a master of the Mandarin language, you will be able to garner multiple professional opportunities. It will be a good acquisition for your career. Learning a foreign language will open many doors. </p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-2'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium'>Travel the World</h1>
                            <p className='text-[#54595f] pt-2'>If you learn Mandarin with The Language Network, you will be able to traverse a lot of countries. You can take an international exam and apply for any Mandarin-speaking university in the world. Knowing Mandarin will take you place.</p>
                        </div>
                    </div>
                </div>
            </div>

            

            {/* <div className="my-20 lg:flex flex-row">
                <div className='space-y-2 px-10 lg:px-20'>
                    <h1 className="font-bold text-3xl lg:text-4xl">Mandarin Language Levels for Adults</h1>
                    <p className='text-sm text-[#54595f]'>All languages we offer are aligned with the CEFR levels, so once you know your level, we can suggest the best classes to get your progress going immediately.</p>
                    <p className='text-sm text-[#54595f]'>Online Mandarin for adults is divided into following levels:</p>
                    <ul className='list-disc font-bold text-gray-600 pl-3 leading-10'>
                        <li>Beginner Level: Level A1 | A1.1 | A1.2</li>
                        <li>Elementory Level: Level A2 | A2.1 | A2.2 </li>
                        <li>Intermediate Level: Level B1 |  Level B1.1 | Level B1.2 | Level B1.3 | Level B1.4</li>
                        <li>Upper-Intermediate Level: Level B2 |  Level B2.1 | Level B2.2 | Level B2.3 | Level B2.4</li>
                        <li>Advance Level: Level C1 | C1.1 | Level C1.2 | Level C1.3 | Level C2</li>
                    </ul>
                </div>
                <div className='flex align-center px-20 py-20 lg:px-10 lg:py-10'>
                    <img src='/images/French-levelsadults@300x-1536x931.png' alt='img' />
                </div>
            </div> */}
           
            
            {/* <div className='flex flex-col items-center '>
                <div className="Home-container-3 ">
                    <h1>
                        Students at The Language Network
                    </h1>
                    <p className='lg:px-36 pt-3'>
                        We have created courses, based on students’ age range, keeping in mind each age-groups’ attention and motivation level, so that we can provide the most suitable study curriculum and experience.
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
                                <h1 id='Home-card-text-h2'>Adolscents (10-13 years)</h1>
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
                                    <h1 id='Home-card-text-h2'>Adolscents (10-13 years)</h1>
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
            </div> */}
           <div className='mt-24'>
            <LearningPrices one_one={Mandarin_1_1} one_two={Mandarin_1_2} one_four={Mandarin_1_4} />
            </div>
            

            <p className='w-full  text-center font-bold text-4xl pb-3'>Frequently asked questions</p>

            <div className="flex flex-col items-center justify-center pb-20">
            <hr class="flex flex-col justify-center align-center text-center border-[#FFC000] border-2 w-1/5 self-center items-center"></hr>
            </div>



            <div className='w-full px-10 lg:px-28 mb-10 lg:mb-20'>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingOne">
                            <button class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left font-bold bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                                aria-expanded="false" aria-controls="flush-collapseOne">
                               How much time will it take to learn Mandarin?
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
                            aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">If you wish to learn the Mandarin language, you will need around 2200 hours of constant learning. You will need 2 to 3 years to master Mandarin. The more time you put in learning, the better you will learn.</div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingTwo">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                                aria-expanded="false" aria-controls="flush-collapseTwo">
                                What is the duration of our Mandarin language online course? 
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">The duration of our Mandarin language course ranges from 2 months to 2 years. This can change depending on the level you are taking. Mandarin language course is divided into 6 levels just like HSK. When you complete 6 levels, you will speak fluent Mandarin. </div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingThree">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                                aria-expanded="false" aria-controls="flush-collapseThree">
                                Do I get additional resources with the Mandarin language course? 
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingThree"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">Yes, we provide additional resources with the Mandarin language course. These resources include podcasts, games, movie screenings, online grammar activities, etc.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingFour">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                                aria-expanded="false" aria-controls="flush-collapseFour">
                                What are the career opportunities after I learn the Mandarin language? 
                            </button>
                        </h2>
                        <div id="flush-collapseFour" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFour"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">There are various career opportunities after you learn Mandarin with us. You can work as a translator, writer, comic creator, editor, etc.</div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingFive">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                                aria-expanded="false" aria-controls="flush-collapseFive">
                             How can I improve my Mandarin? 
                            </button>
                        </h2>
                        <div id="flush-collapseFive" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFive"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">If you wish to learn Mandarin and improve it significantly you will need to focus on 6 facets of language learning. This includes grammar, vocabulary, reading, listening, writing, and speaking. If you master these 6 factors, you will be a master of Mandarin. Mandarin vocabulary is hard to learn in general. </div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingSix">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix"
                                aria-expanded="false" aria-controls="flush-collapseSix">
                                How many students are accommodated in one batch?
                            </button>
                        </h2>
                        <div id="flush-collapseSix" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSix"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">We believe in small batches. Our general batch size is 4-6 students. We also have 1:1 batches and 1:2 batches. Due to our small batches, we can focus on every student effectively.</div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingSeven">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven"
                                aria-expanded="false" aria-controls="flush-collapseSeven">
                                Do you provide a free demo class? 
                            </button>
                        </h2>
                        <div id="flush-collapseSeven" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSeven"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">Yes, we provide a free demo class. If you wish to sit for the demo class,  </div>
                        </div>
                    </div>
                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingEight">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight"
                                aria-expanded="false" aria-controls="flush-collapseEight">
                                How can I book a course with The Language Network? 
                            </button>
                        </h2>
                        <div id="flush-collapseEight" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingEight"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">If you wish to join our Korean language course,  you can register with us here. All the details that are necessary for you are provided on this link. You can directly contact our executives and get all the information that you need.   </div>
                        </div>
                    </div>

                    <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                        <h2 class="accordion-header mb-0" id="flush-headingNine">
                            <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine"
                                aria-expanded="false" aria-controls="flush-collapseNine">
                             What is included in the Mandarin language course curriculum? 
                            </button>
                        </h2>
                        <div id="flush-collapseNine" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingNine"
                            data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body py-4 px-5">Our basic level curriculum includes Grammar, Vocabulary, Phonetics, greetings, and introduction. Higher levels of our Mandarin language offer Communication, Advance grammar, Complex vocabulary, etc. We also cover Cultural knowledge, social know-how, and Complex grammar. </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
