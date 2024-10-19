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
import { Spanish_1_1, Spanish_1_2, Spanish_1_4 } from '../../CoursePricing/CourseTableData_kids/Spanish.js'
export default function KidsSpanish() {

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
            <div className="h-auto pt-10 px-10 lg:px28 lg:flex flex-row items-center">
                <div className='lg:w-1/2 lg:px-10'>
                    <h2 className='font-semibold text-2xl lg:text-4xl'>Online Spanish for Kids</h2>
                    <p className='text-sm text-[#54595f] my-3'>Online Spanish classes for kids at The Language Network, is your path to fluency!</p>
                    <p className='text-sm text-[#54595f] my-3'>Our online Spanish lessons are adjusted to every child’s interests and language goals.</p>
                    <p className='text-sm text-[#54595f] my-3'>Our main goal is to teach foreign languages to kids in a student-centered learning approach with the assistance of experienced trainers!</p>
                    <p className='text-sm text-[#54595f] my-3'>Enroll in our online Spanish classes and boost your language skills with our qualified trainers and start seeing your results immediately! Book a free trial and build your path to fluency!</p>
                </div>
                <div className='lg:w-1/2 lg:ml-28'>
                    <img src="/images/TLN_Spanish-elements.png" alt="img" />
                </div>
            </div>
            {/* <div className="KidsSpanish h-[70vh]" >
                <div className="bg-[rgba(0,0,0,0.4)] h-full ">
                    <div className='h-full flex flex-col justify-center align-left w-full px-10 lg:px-32'>
                        <h1 className='text-3xl lg:text-4xl leading-snug text-white font-bold'>Spanish Classes for Kids</h1>
                        <h1 className='text-md my-10 text-white font-medium'>1-to-1 , 1-to-2 and Group Online Spanish classes for kids (6-9 years old) with professional teachers.</h1>
                        <a href="/getstarted"><button type="button" class="flex flex-row btn btn-outline-light hover:bg-[#16e9d0] rounded-3xl w-fit text-sm py-3 px-4 ">Get Started</button></a>
                    </div>
                </div>
            </div> */}

            {/* <div className="my-20 lg:flex flex-row">
                <div className='space-y-2 px-10 lg:px-20'>
                    <h1 className="font-bold text-3xl lg:text-4xl">Spanish Language Levels for Kids</h1>
                    <p className='text-sm text-[#54595f]'>All languages we offer are aligned with the CEFR levels, so once you know your level, we can suggest the best classes to get your progress going immediately.</p>
                    <p className='text-sm text-[#54595f]'>Online Spanish for kids is divided into following levels:</p>
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
                    <h1 className='font-bold text-3xl lg:text-4xl pt-10 lg:pt-4'>Spanish Language Levels for Kids</h1>
                    <p className='text-sm text-[#54595f]'>
                        All languages we offer are aligned with the CEFR levels, so once you know your level, we can suggest the best classes to get your progress going immediately.
                    </p>
                    <p className='text-sm text-[#54595f]'>
                        These levels are corresponding to the Common European Framework of Reference for Languages (CEFR). Level A1 is the most accessible one and A2 the most advanced. Later your child will be able to continue with the DELF Junior B1 and the DELF B2 Junior</p>
                </div>
                <div className='flex align-center w-full h-auto py-10 lg:py-0 lg:w-2/3 '>
                    <KidsLevels />
                </div>
            </div>

            <div className='w-full text-center font-semibold text-3xl lg:text-4xl'>Benefits of Learning Spanish with TLN?</div>
            <section class="text-gray-600 body-font">
                <div class="container px-2 lg:px-5 py-20 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class="xl:w-1/2 md:w-1/2 p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                            <div class="border border-gray-200 p-6 rounded-lg h-56">
                                <div class="w-8 h-8 inline-flex items-center justify-center text-yellow-400 text-indigo-500 mb-4">
                                    <FaLightbulb className='w-full h-full' />
                                </div>
                                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">Small Batches</h2>
                                <p class="leading-relaxed text-base">Enjoy small 1:2 or group batches so you can practice, improve and get instant feedback</p>
                            </div>
                        </div>
                        <div class="xl:w-1/2 md:w-1/2 p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                            <div class="border border-gray-200 p-6 rounded-lg h-56">
                                <div class="w-8 h-8 inline-flex items-center justify-center text-yellow-400 text-indigo-500 mb-4">
                                    <FaLightbulb className='w-full h-full' />
                                </div>
                                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">
                                    Flexible Timings</h2>
                                <p class="leading-relaxed text-base">Take online lessons at the time that suits you; learn in the morning or evening, weekday or weekend.</p>
                            </div>
                        </div>
                        <div class="xl:w-1/2 md:w-1/2 p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                            <div class="border border-gray-200 p-6 rounded-lg h-56">
                                <div class="w-8 h-8 inline-flex items-center justify-center text-yellow-400 text-indigo-500 mb-4">
                                    <FaLightbulb className='w-full h-full' />
                                </div>
                                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">Monitor your Child's Progress</h2>
                                <p class="leading-relaxed text-base">By creating an account, the parent can easily monitor his/her child’s scheduled French lessons, assignments, and progress, so to keep on track!</p>
                            </div>
                        </div>
                        <div class="xl:w-1/2 md:w-1/2 p-4 drop-shadow-md hover:drop-shadow-2xl ease-in duration-300">
                            <div class="border border-gray-200 p-6 rounded-lg h-56">
                                <div class="w-8 h-8 inline-flex items-center justify-center text-yellow-400 text-indigo-500 mb-4">
                                    <FaLightbulb className='w-full h-full' />
                                </div>
                                <h2 class="text-lg text-gray-900 font-semibold title-font mb-2">Learn from the best</h2>
                                <p class="leading-relaxed text-base">Qualified, expert teachers leading your class.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className='w-full text-center text-3xl lg:text-4xl font-medium '>Why learn a language with TLN?</div>
            <div className='w-full lg:px-32 py-18 hidden lg:flex flex-row flex-wrap  justify-evenly'>
                <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-26@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>1:1 Batches</h3>
                    <p className='text-sm text-gray-700'>Our German language course for kids occupies only one student. It is a 1:1 batch. We do not have group batches. We believe that every student deserves special attention. </p>
                </div>
                <div className='h-[19rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-23@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>Monitor your child’s progress</h3>
                    <p className='text-sm text-gray-700'>You can monitor your child’s progress with our Spanish language course for kids. Keep a track of their learning activities and play your part in their holistic learning. </p>
                </div>
                { /* <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[31rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-24@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>Cutting edge Curriculum</h3>
                    <p className='text-sm text-gray-700'>
                        Our curriculum is created by carefully integrating all aspects of language learning. Our Learn Spanish for Kids curriculum includes voice, fluency, conversational skills, grammar & vocabulary, active listening, writing, creative expression, etc.   </p>
                </div>*/}
                <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-22@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>Learn from experts</h3>
                    <p className='text-sm text-gray-700'>
                        After an extensive hiring process, we have carefully handpicked language experts, who are efficient in teaching kids and adolescents.</p>
                </div>
                <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-25@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>Career Guidance</h3>
                    <p className='text-sm text-gray-700'>
                        Our language trainers will guide your children to excel in their academic life. We will also conduct career counselling when it is needed.</p>
                </div>
                <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-37@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>International Exams</h3>
                    <p className='text-sm text-gray-700'>
                        TLN believes that all its students should appear for international exams like Cambridge. From an early age, we prepare them for these international exams.   </p>
                </div>
                <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/culture.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>Cultural Sensitivity</h3>
                    <p className='text-sm text-gray-700'>

                        Our German language course for kids and adolescents also includes cultural learning. We believe that Cultural learning is important when it comes to language learning. It helps the students learn more efficiently.</p>
                </div>
                <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                    <img src="/images/Asset-29@300x.png" alt="alt" className='p-8' />
                    <h3 className='font-bold text-lg my-2'>Get Certified Results</h3>
                    <p className='text-sm text-gray-700'>

                        We provided certificates as our students excel in language learning. It ensures that the students will aim higher and be more motivated. Certificates are good for boosting student morale. Learn German with TLN and give wings to your children’s dreams.   </p>
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
                    <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/Asset-26@300x.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>1:1 Batches</h3>
                        <p className='text-sm text-gray-700'>Our German language course for kids occupies only one student. It is a 1:1 batch. We do not have group batches. We believe that every student deserves special attention. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[19rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/Asset-23@300x.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>Monitor your child’s progress</h3>
                        <p className='text-sm text-gray-700'>You can monitor your child’s progress with our German language course for kids. Keep a track of their learning activities and play your part in their holistic learning. </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[31rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/Asset-24@300x.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>Cutting edge Curriculum</h3>
                        <p className='text-sm text-gray-700'>
                            Our curriculum is created by carefully integrating all aspects of language learning. Our Learn German for Kids curriculum includes voice, fluency, conversational skills, grammar & vocabulary, active listening, writing, creative expression, etc.   </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/Asset-22@300x.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>Learn from experts</h3>
                        <p className='text-sm text-gray-700'>
                            After an extensive hiring process, we have carefully handpicked language experts, who are efficient in teaching kids and adolescents. Leave your children with our German language experts and expect nothing but better results.  </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/Asset-25@300x.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>Career Guidance</h3>
                        <p className='text-sm text-gray-700'>
                            Our language trainers will guide your children to excel in their academic life. We will also conduct career counselling when it is needed. Push your kids to a new height with our German language courses.  </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/Asset-21@300x.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>International Exams</h3>
                        <p className='text-sm text-gray-700'>
                            TLN believes that all its students should appear for international exams like Cambridge. From an early age, we prepare them for these international exams.   </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/culture.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>Cultural Sensitivity</h3>
                        <p className='text-sm text-gray-700'>

                            Our German language course for kids and adolescents also includes cultural learning. We believe that Cultural learning is important when it comes to language learning. It helps the students learn more efficiently. Thus, we focus on the culture associated with the language.   </p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='h-[18rem] lg:mx-10 my-8 overflow-hidden transition-all duration-500 hover:h-[27rem] w-60 flex flex-col items-center text-center'>
                        <img src="/images/Asset-29@300x.png" alt="alt" className='p-8' />
                        <h3 className='font-bold text-lg my-2'>Get Certified Results</h3>
                        <p className='text-sm text-gray-700'>

                            We provided certificates as our students excel in language learning. It ensures that the students will aim higher and be more motivated. Certificates are good for boosting student morale. Learn German with TLN and give wings to your children’s dreams.   </p>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='w-full lg:mt-20 text-center text-3xl lg:text-4xl font-medium mb-5'>How is learning Spanish beneficial for kids?</div>
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
                            <h1 className='text-xl font-medium'>Get a Head Start</h1>
                            <p className='text-[#54595f] pt-2'>Start learning Spanish from an early age and keep your child ahead of their peers. Give your child a head start and keep them motivated. Learning Spanish for Kids will benefit your child exponentially.</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-2'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium'>
                                Cognitive Benefits</h1>
                            <p className='text-[#54595f] pt-2'>The earlier you learn Spanish, the better you get at communication. Start your kid’s learning from a young age and make your child a master of confident communication. There is no greater feeling than seeing your child practice confidence in their day to day life.</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-2'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium'>Confident Communication</h1>
                            <p className='text-[#54595f] pt-2'>The earlier you learn Spanish, the better you get at communication. Start your kid’s learning from a young age and make your child a master of confident communication. There is no greater feeling than seeing your child practice confidence in their day to day life.</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-2'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium'>Early Learning Benefits</h1>
                            <p className='text-[#54595f] pt-2'>When your child starts learning early, they learn much more than others. Early age learning benefits your child in multiple ways. It helps them build a strong personality.</p>
                        </div>
                    </div>
                    <div className='flex flex-row group h-auto px-10 lg:px-16 py-2'>
                        <div className='h-full pt-2 ease-in duration-300 text-teal-300 group-hover:text-amber-400'>
                            <FaRegWindowMinimize className='rotate-90 text-6xl' />
                        </div>
                        <div>
                            <h1 className='text-xl font-medium'>Boost Academic Achievements</h1>
                            <p className='text-[#54595f] pt-2'>When you start learning Spanish at an early age, you become so fluent that other subjects become easier too. Memorising theoretical subjects becomes a piece of cake. This boosts your overall academic achievement.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pt-14 w-full lg:mt-14 text-center text-3xl lg:text-4xl font-medium px-2 lg:px-20'>TLN and International Exams</div>
            <p className='text-center w-full px-10 lg:px-60 pt-4 text-sm text-[#54595f]'> We want our students to excel in international exams like TOEFL and IELTS. We teach our students how to learn Spanish in a way that will help them ace these standardised tests. All aspects of the test, including pronunciation, vocabulary, listening part, is being taken care of at TLN. We ensure that once you learn something you won’t forget it.</p>
            <div className='px-3 group w-full flex flex-col items-center my-10'>
                <img src="/images/international-exam-6.jpg" alt="img" className='w-48' />
                <div className='px-10 shadow-xl text-center lg:w-2/3 p-4'>
                    <h3 className='text-lg font-bold pb-3 group-hover:text-amber-400 ease-in duration-300'>Dele</h3>
                    <p className='text-sm text-[#54595f]'>DELF (Diplôme d’études en langue française) is the certified diploma of French language awarded by the French Ministry of National Education and is recognized worldwide. It allows validating and certifying for French language abilities. The DELF Prim is perfectly fit for children between 6 and 9 years old. It tests the French Language proficiency of your child to valorize his/her ability in French.</p>
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
                <LearningPricesKids one_one={Spanish_1_1} one_two={Spanish_1_2} one_four={Spanish_1_4} />
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
                            <div class="accordion-body py-4 px-5">TLN offers one-on-one batches. We give special attention to all our students. We have hired expert teachers for all our batches. We teach all aspects of language learning while focusing on the spoken part. Our Spanish language course for kids covers grammar and vocabulary, speaking, reading, writing, and listening.</div>
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
                            <div class="accordion-body py-4 px-5">We only have one-on-one batches. We prepare our students for international exams. We have hand-tailored study plans to meet each student’s learning needs. Our Spanish language course for kids also covers the Spanish culture which tremendously helps language learning.</div>
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
                            <div class="accordion-body py-4 px-5">The duration of each Spanish language course for kids is 1 hour. It is perfect for their attention spans.
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
                            <div class="accordion-body py-4 px-5">We do not have group batches for kids and adolescents. We only have one-on-one batches for kids. We believe that kids need more specialised attention so our Spanish language course for kids only accommodates one student at a time.</div>
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
                            <div class="accordion-body py-4 px-5">Yes, we do provide study material to our students. We also have several activities in our Spanish language course for kids. </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
