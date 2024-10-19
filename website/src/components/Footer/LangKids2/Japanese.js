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
import { Japanese_1_1, Japanese_1_2, Japanese_1_4 } from '../../CoursePricing/CourseTableData_kids/Japanese.js'

export default function KidsJapanese() {

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
            <div className="h-auto pt-10 md:pt-10 lg:pt-0 px-10 lg:px28 lg:flex flex-row items-center">
                <div className='lg:w-1/2 lg:px-10'>
                    <h2 className='font-semibold text-2xl lg:text-4xl'>Levels of Language Learning for Kids and Adolescents</h2>
                    <p className='text-sm text-[#54595f] my-3'>At The Language Network, we consider learning as the most important activity. Our Japanese language course for kids covers all the 10 grades. Language learning can start from an early age. So, enrol your child in our Japanese language course for kids and give your child a head start. </p>
                    <p className='text-sm text-[#54595f] my-3'  >Learning Japanese as a second language will keep your child ahead of his peers. It will also benefit your child in his career. The best feeling for parents is to see their child get confident in all walks of life.</p>
                </div>
                <div className='lg:w-1/2'>
                    <img src="/images/TLN_Japanese-elements.png" alt="img" />
                </div>
            </div>
            {/* <div className="KidsJapanese h-[70vh]" >
                <div className="bg-[rgba(0,0,0,0.4)] h-full ">
                    <div className='h-full flex flex-col justify-center align-left w-full px-10 lg:px-32'>

                        <h1 className='text-3xl lg:text-4xl leading-snug text-white font-bold'>Japanese Classes for Kids</h1>
                        <h1 className='text-md my-10 text-white font-medium'>1-to-1 , 1-to-2 and Group Online Japanese classes for adults (14+ years old) with professional teachers.</h1>
                        <a href="/getstarted"><button type="button" class="flex flex-row btn btn-outline-light hover:bg-[#16e9d0] rounded-3xl w-fit text-sm py-3 px-4 ">Get Started</button></a>


                    </div>
                </div>
            </div> */}

            {/* <div className="my-20 lg:flex flex-row items-center">
                <div className='space-y-2 px-10 lg:px-20'>
                    <h1 className="font-bold text-3xl lg:text-4xl">Japanese Language Levels for Kids</h1>
                    <p className='text-sm text-[#54595f]'>All languages we offer are aligned with the CEFR levels, so once you know your level, we can suggest the best classes to get your progress going immediately.</p>
                    <p className='text-sm text-[#54595f]'>Online Japanese for kids is divided into following levels:</p>
                    <ul className='list-disc font-bold text-gray-600 pl-3 leading-10'>
                        <li>Level A1-  A1.1, A1.1</li>
                        <li>Level A2- A2.1, A2.2.</li>
                    </ul>
                    <p className='text-sm text-[#54595f]'>These levels are corresponding to the Common European Framework of Reference for Languages (CEFR). Level A1 is the most accessible one and C2 the most advanced.</p>
                </div>
                <div className='flex align-center px-20 py-20 lg:px-10 lg:py-10'>
                    <img src='/images/French-levels@300x-1536x931.png' alt='img' />
                </div>
            </div> */}

            <div className="my-24 lg:flex sm:px-4 lg:px-20 lg:pt-10 flex-row h-auto w-full bg-[#f4f8fb]">
                <div className='flex flex-col w-full lg:w-1/3 space-y-6 px-4 lg:px-20 justify-center lg:justify-start'>
                    <h1 className='font-bold text-3xl lg:text-4xl pt-10 lg:pt-4'>Japanese Language Levels for Kids</h1>
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

            <div className='w-full text-center font-semibold text-3xl lg:text-4xl'>Benefits of Learning Japanese with TLN?</div>
            <section class="text-gray-600 body-font">
                <div class="container px-2 lg:px-5 py-20 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/2 md:w-1/2 p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                            <div class="border border-gray-200 p-6 rounded-lg">
                                <div class="w-8 h-8 inline-flex items-center justify-center text-yellow-400 text-indigo-500 mb-4">
                                    <FaLightbulb className='w-full h-full' />
                                </div>
                                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">Language Immersion</h2>
                                <p class="leading-relaxed text-base">Now immerse your child in the world of knowledge with our Japanese language course for kids. Practice Japanese with our language experts and receive lots of positive benefits.</p>
                            </div>
                        </div>
                        <div class="xl:w-1/2 md:w-1/2 p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                            <div class="border border-gray-200 p-6 rounded-lg">
                                <div class="w-8 h-8 inline-flex items-center justify-center text-yellow-400 text-indigo-500 mb-4">
                                    <FaLightbulb className='w-full h-full' />
                                </div>
                                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">Experienced Teachers</h2>
                                <p class="leading-relaxed text-base">We have hired a team of experienced professionals to teach our students. Now learn only from the best and become a master of the Japanese language.</p>
                            </div>
                        </div>
                        <div class="xl:w-1/2 md:w-1/2 p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                            <div class="border border-gray-200 p-6 rounded-lg">
                                <div class="w-8 h-8 inline-flex items-center justify-center text-yellow-400 text-indigo-500 mb-4">
                                    <FaLightbulb className='w-full h-full' />
                                </div>
                                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">Simple to Complex Learning Curve</h2>
                                <p class="leading-relaxed text-base">Our Japanese language course for kids start from simple Japanese and then covers complex aspects of the language. We understand the learning needs of our students and teach them accordingly.</p>
                            </div>
                        </div>
                        <div class="xl:w-1/2 md:w-1/2 p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                            <div class="border border-gray-200 p-6 rounded-lg">
                                <div class="w-8 h-8 inline-flex items-center justify-center text-yellow-400 text-indigo-500 mb-4">
                                    <FaLightbulb className='w-full h-full' />
                                </div>
                                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">Classes from Home</h2>
                                <p class="leading-relaxed text-base">The Language Network is an online language school. You do not need to waste your time and money to learn Japanese now. Join TLN and learn from within the comforts of your own home.</p>
                            </div>
                        </div>
                        <div class="xl:w-1/2 md:w-1/2 p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                            <div class="border border-gray-200 p-6 rounded-lg">
                                <div class="w-8 h-8 inline-flex items-center justify-center text-yellow-400 text-indigo-500 mb-4">
                                    <FaLightbulb className='w-full h-full' />
                                </div>
                                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">Age-appropriate program</h2>
                                <p class="leading-relaxed text-base">Our Japanese courses for kids are hand-tailored to meet the learning needs of children. Our courses are age-appropriate and focus on all aspects of language learning in an easy and understandable way.</p>
                            </div>
                        </div>
                        <div class="xl:w-1/2 md:w-1/2 p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                            <div class="border border-gray-200 p-6 rounded-lg">
                                <div class="w-8 h-8 inline-flex items-center justify-center text-yellow-400 text-indigo-500 mb-4">
                                    <FaLightbulb className='w-full h-full' />
                                </div>
                                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">European Standard of Education</h2>
                                <p class="leading-relaxed text-base">We have created our courses by carefully considering the European standards of education. We also teach our students how to crack international language exams.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='w-full text-center text-3xl lg:text-4xl font-semibold '>Why learn a language with TLN?</div>
            <div className='w-full lg:px-32 py-18 hidden lg:flex flex-row flex-wrap  justify-evenly'>
                <div className='h-72 lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/1_1-batch.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>1:1 Batches</h3>
                    <p className='text-sm text-gray-700'>Our Japanese language course for kids occupies only one student. It is a 1:1 batch. We do not have group batches. We believe that every student deserves special attention. </p>
                </div>
                <div className='h-[19rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-29@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>Monitor your child’s progress</h3>
                    <p className='text-sm text-gray-700'>You can monitor your child’s progress with our Japanese language course for kids. Keep a track of their learning activities and play your part in their holistic learning. </p>
                </div>
                <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[31rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-25@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>Cutting edge Curriculum</h3>
                    <p className='text-sm text-gray-700'>
                        Our curriculum is created by carefully integrating all aspects of language learning. Our Learn Japanese for Kids curriculum includes voice, fluency, conversational skills, grammar & vocabulary, active listening, writing, creative expression, etc.   </p>
                </div>
                <div className='h-[19rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[29rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/expert.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>Learn Japanese Language from experts</h3>
                    <p className='text-sm text-gray-700'>
                        Learn the Japanese language from our language experts and ace at spoken Japanese. Our trainers are experts when it comes to teaching children. Leave your child with our expert and expect only the best  </p>
                </div>

                <div className='h-72 lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[29rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-31@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>International Exams</h3>
                    <p className='text-sm text-gray-700'>
                        Our Japanese language course for Kids does not only teach the Japanese language. We also prepare our students for international exams associated with the language. We believe that our students should aim for the best.   </p>
                </div>
                <div className='h-72 lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/culture.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>Cultural Knowledge</h3>
                    <p className='text-sm text-gray-700'>

                        In order to learn a language, it is important to learn the culture associated with it. We teach cultural and social know-how to our students in order to teach a language better.   </p>
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
                    <div className='h-72 lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/1_1-batch.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>1:1 Batches</h3>
                        <p className='text-sm text-gray-700'>Our Japanese language course for kids occupies only one student. It is a 1:1 batch. We do not have group batches. We believe that every student deserves special attention. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[19rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/Asset-29@300x.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>Monitor your child’s progress</h3>
                        <p className='text-sm text-gray-700'>You can monitor your child’s progress with our Japanese language course for kids. Keep a track of their learning activities and play your part in their holistic learning. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[31rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/Asset-25@300x.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>Cutting edge Curriculum</h3>
                        <p className='text-sm text-gray-700'>
                            Our curriculum is created by carefully integrating all aspects of language learning. Our Learn Japanese for Kids curriculum includes voice, fluency, conversational skills, grammar & vocabulary, active listening, writing, creative expression, etc.   </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[19rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[29rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/expert.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>Learn Japanese Language from experts</h3>
                        <p className='text-sm text-gray-700'>
                            Learn the Japanese language from our language experts and ace at spoken Japanese. Our trainers are experts when it comes to teaching children. Leave your child with our expert and expect only the best  </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-72 lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[29rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/Asset-31@300x.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>International Exams</h3>
                        <p className='text-sm text-gray-700'>
                            Our Japanese language course for Kids does not only teach the Japanese language. We also prepare our students for international exams associated with the language. We believe that our students should aim for the best.   </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-72 lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/culture.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>Cultural Knowledge</h3>
                        <p className='text-sm text-gray-700'>

                            In order to learn a language, it is important to learn the culture associated with it. We teach cultural and social know-how to our students in order to teach a language better.   </p>
                    </div>

                </SwiperSlide>

            </Swiper>

            <div className='w-full lg:mt-20 text-center text-3xl lg:text-4xl font-medium mb-5 '>How is learning Japanese beneficial for kids?</div>
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
                            <h1 className='text-2xl font-medium'>Give Your Child a Head Start</h1>
                            <p className='text-[#54595f] pt-2'>Start teaching the Japanese language to your child and keep them ahead of their peers. In no time, your child will be a master of the Japanese language. When you teach Japanese to your children, you keep them motivated to do better in life.</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-2'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>
                                Cognitive Benefits</h1>
                            <p className='text-[#54595f] pt-2'>A child’s brain is like a sponge. It can absorb a lot of information in an effective way. Also, when you learn a second language, it boosts your mental performance and strengthens your brain cells & neurons.</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-2'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>Confident Communication</h1>
                            <p className='text-[#54595f] pt-2'>The earlier you learn Japanese, the fluent you get in communication. Teach the Japanese language online to your kids and make them a master of communication in the given language.</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-2'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>Career in Japan</h1>
                            <p className='text-[#54595f] pt-2'>After learning the Japanese language, you can work as a translator, writer, interpreter, etc. You can also move to Japan for work or education. Learning the Japanese language has a lot of benefits.</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-2'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-2xl font-medium'>Boost Academic Achievements</h1>
                            <p className='text-[#54595f] pt-2'>When you start learning Japanese at an early age, you become so fluent that other subjects become easier too. Memorising theoretical subjects becomes a piece of cake. This boosts your overall academic achievement.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-20 w-full lg:mt-20 text-center text-3xl lg:text-4xl font-medium px-2 lg:px-20'>TLN and International Exams</div>
            <p className='text-center w-full px-10 lg:px-60 pt-4 text-sm text-[#54595f]'> We want our students to excel in international exams like TOEFL and IELTS. We teach our students how to learn Japanese in a way that will help them ace these standardised tests. All aspects of the test, including pronunciation, vocabulary, listening part, is being taken care of at TLN. We ensure that once you learn something you won’t forget it.</p>
            <div className='px-3 group w-full flex flex-col items-center my-10'>
                <img src="/images/exam-JLPT-300x159.jpg" alt="img" className='w-60' />
                <div className='px-10 shadow-xl text-center lg:w-2/3 p-4'>
                    <h3 className='text-lg font-bold pb-3 group-hover:text-amber-400 ease-in duration-300'>JLPT</h3>
                    <p className='text-sm text-[#54595f]'>JLPT (Japanese Language Proficiency Test) is conducted by the Japan Foundation and Japan Educational Exchanges and Services to evaluate the proficiency of non-native speakers. It is an international Japanese exam carried out on a large scale worldwide. The Japan Foundation administers this test along with the local institutions of the respective countries other than Japan. To maintain the relevancy of this international certification, the Japan Foundation updates the exam pattern from time to time. Formerly, this examination had four levels:- N1, N2, N3, N4. A new level N5 was added in 2010 to make the distribution of syllabus more accurate and appropriate. The current level of N4 and N5 corresponds to the old level of 3 and 4 respectively. The current N3 level bridges the gap between the old 2 and 3 levels.</p>
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
            </div>
            <div className='mt-24'>
                <LearningPricesKids one_one={Japanese_1_1} one_two={Japanese_1_2} one_four={Japanese_1_4} />
            </div>
     

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
                            <div class="accordion-body py-4 px-5">TLN offers one-on-one batches. We give special attention to all our students. We have hired expert teachers for all our batches. We teach all aspects of language learning while focusing on the spoken part. Our Japanese language course for kids covers grammar and vocabulary, speaking, reading, writing, and listening.</div>
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
                            <div class="accordion-body py-4 px-5">We only have one-on-one batches. We prepare our students for international exams. We have hand-tailored study plans to meet each student’s learning needs. Our Japanese language course for kids also covers the Japanese culture which tremendously helps language learning.</div>
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
                            <div class="accordion-body py-4 px-5">The duration of each Japanese language course for kids is 1 hour. It is perfect for their attention spans.
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
                            <div class="accordion-body py-4 px-5">We do not have group batches for kids and adolescents. We only have one-on-one batches for kids. We believe that kids need more specialised attention so our Japanese language course for kids only accommodates one student at a time.</div>
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
                            <div class="accordion-body py-4 px-5">Yes, we do provide study material to our students. We also have several activities in our Japanese language course for kids. </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
