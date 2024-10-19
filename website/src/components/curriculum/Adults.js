import React from 'react'
import { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

import French from './LangLvl/French';
import Spanish from './LangLvl/Spanish';
import German from './LangLvl/German';
import Mandarin from './LangLvl/Mandarin';
import Japanese from './LangLvl/Japanese';
import Korean from './LangLvl/Korean';
import AdultsTable from './AdultsTable'
import English from './LangLvl/English';
import AdultsCourses from '../CoursePricing/AdultCourses';
import LearningPrices from '../CoursePricing/LearningPrices';
import { English_1_1, English_1_2, English_1_4 } from '../CoursePricing/CourseTableData/English.js'
import { French_1_1, French_1_2, French_1_4 } from '../CoursePricing/CourseTableData/French'
import { Spanish_1_1, Spanish_1_2, Spanish_1_4 } from '../CoursePricing/CourseTableData/Spanish'
import { German_1_1, German_1_2, German_1_4 } from '../CoursePricing/CourseTableData/German'
import { Mandarin_1_1, Mandarin_1_2, Mandarin_1_4 } from '../CoursePricing/CourseTableData/Mandarin'
import { Japanese_1_1, Japanese_1_2, Japanese_1_4 } from '../CoursePricing/CourseTableData/Japanese'
import { Korean_1_1, Korean_1_2, Korean_1_4 } from '../CoursePricing/CourseTableData/Korean'

function Adults() {

    const [lang, setLang] = useState('French')

    const Languages = () => {
        switch (lang) {
            case 'English':
                return (<English />)
                break;
            case 'French':
                return (<French />)
                break;
            case 'Spanish':
                return (<Spanish />)
                break;
            case 'German':
                return (<German />)
                break;
            case 'Mandarin':
                return (<Mandarin />)
                break;
            case 'Japanese':
                return (<Japanese />)
                break;
            case 'Korean':
                return (<Korean />)
                break;

            default:
        }
    };

    const LanguageSec = () => {
        switch (lang) {
            case 'English':
                return (<div>
                    <LearningPrices one_one={English_1_1} one_two={English_1_2} one_four={English_1_4} />
                </div>
                )
                break;
            case 'French':
                return (<div>
                    <LearningPrices one_one={French_1_1} one_two={French_1_2} one_four={French_1_4} />
                </div>)
                break;
            case 'Spanish':
                return (<div>
                    <LearningPrices one_one={Spanish_1_1} one_two={Spanish_1_2} one_four={Spanish_1_4} />
                </div>
                )
                break;
            case 'German':
                return (<div>
                    <LearningPrices one_one={German_1_1} one_two={German_1_2} one_four={German_1_4} />
                </div>
                )
                break;
            case 'Mandarin':
                return (<div>
                    <LearningPrices one_one={Mandarin_1_1} one_two={Mandarin_1_2} one_four={Mandarin_1_4} />
                </div>
                )
                break;
            case 'Japanese':
                return (<div>
                    <LearningPrices one_one={Japanese_1_1} one_two={Japanese_1_2} one_four={Japanese_1_4} />
                </div>
                )
                break;
            case 'Korean':
                return (<div>
                    <LearningPrices one_one={Korean_1_1} one_two={Korean_1_2} one_four={Korean_1_4} />
                </div>
                )
                break;

            default:
                break;
        }
    }

    return (
        <div>
         
            <div className="fadeIN Home-container-2 w-full lg:px-20 mt-4 ">
                <h2>Curating a pleasant learning experience</h2>
                <h1 className='mb-6'>Choose a language</h1>
                <div className='Home-container-2-imgs hidden lg:flex'>
                    <a onClick={() => setLang('English')} className='lg:mt-12'><img id={lang === 'English' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-english@300x.svg' /></a>
                    <a onClick={() => setLang('French')} className='lg:mt-12'><img id={lang === 'French' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-french@300x.svg' /></a>
                    <a onClick={() => setLang('Spanish')} className='lg:mt-12'><img id={lang === 'Spanish' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-spanish@300x.svg' /></a>
                    <a onClick={() => setLang('German')} className='lg:mt-12'><img id={lang === 'German' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-german@300x.svg' /></a>
                    <a onClick={() => setLang('Mandarin')} className='lg:mt-12'><img id={lang === 'Mandarin' ? 'selected' : ''} className='Home-container-2-img h-[95%]  lg:w-auto' alt='img' src='/images/adults-mandarin@300x.svg' /></a>
                    <a onClick={() => setLang('Japanese')} className='lg:mt-12'><img id={lang === 'Japanese' ? 'selected' : ''} className='Home-container-2-img h-[95%]  lg:w-auto' alt='img' src='/images/adults-japanese@300x.svg' /></a>
                    <a onClick={() => setLang('Korean')} className='lg:mt-12'><img id={lang === 'Korean' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-korean@300x.svg' /></a>
                </div>
                <Swiper className='pagi1 block lg:hidden px-5' spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1

                        },
                    }}
                    pagination={{
                        "clickable": true
                    }} navigation={true} autoplay={false}
                >
                    <SwiperSlide>
                        <a onClick={() => setLang('English')} className='m-12'><img id={lang === 'English' ? 'selected' : ''} className='Home-container-2-img  h-auto lg:w-auto' alt='img' src='/images/adults-english@300x.svg' /></a>
                    </SwiperSlide><SwiperSlide>
                        <a onClick={() => setLang('French')} className='m-12'><img id={lang === 'French' ? 'selected' : ''} className='Home-container-2-img  h-auto lg:w-auto' alt='img' src='/images/adults-french@300x.svg' /></a>
                    </SwiperSlide><SwiperSlide>
                        <a onClick={() => setLang('Spanish')} className='m-12'><img id={lang === 'Spanish' ? 'selected' : ''} className='Home-container-2-img  h-auto lg:w-auto' alt='img' src='/images/adults-spanish@300x.svg' /></a>
                    </SwiperSlide><SwiperSlide>
                        <a onClick={() => setLang('German')} className='m-12'><img id={lang === 'German' ? 'selected' : ''} className='Home-container-2-img  h-auto lg:w-auto' alt='img' src='/images/adults-german@300x.svg' /></a>
                    </SwiperSlide><SwiperSlide>
                        <a onClick={() => setLang('Mandarin')} className='m-12'><img id={lang === 'Mandarin' ? 'selected' : ''} className='Home-container-2-img h-auto  lg:w-auto' alt='img' src='/images/adults-mandarin@300x.svg' /></a>
                    </SwiperSlide><SwiperSlide>
                        <a onClick={() => setLang('Japanese')} className='m-12'><img id={lang === 'Japanese' ? 'selected' : ''} className='Home-container-2-img h-auto  lg:w-auto' alt='img' src='/images/adults-japanese@300x.svg' /></a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a onClick={() => setLang('Korean')} className='m-12'><img id={lang === 'Korean' ? 'selected' : ''} className='Home-container-2-img  h-auto lg:w-auto' alt='img' src='/images/adults-korean@300x.svg' /></a>
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className='flex justify-center mb-20'>
                {/* <Languages /> */}
            </div>

            <LanguageSec />

            {/* <div className='w-full flex flex-row flex-wrap items-center justify-center  mb-3'>
            <a onClick={() => setLang('English')} id={lang === 'English' ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3 mb-3">
            English
            </a>
            <a onClick={() => setLang('french')} id={lang === 'french' ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3 mb-3">
            French
            </a>
            <a onClick={() => setLang('spanish')} id={lang === 'spanish' ? 'btnP' : ''} class="buttons bg-white  py-2.5 px-4 rounded-lg shadow mx-3 mb-3">
            Spanish
            </a>
            <a onClick={() => setLang('german')} id={lang === 'german' ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3 mb-3">
                    German
                    </a>
                    <a onClick={() => setLang('mandarin')} id={lang === 'mandarin' ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3 mb-3">
                    Mandarin
                    </a>
                    <a onClick={() => setLang('japanese')} id={lang === 'japanese' ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3 mb-3">
                    Japanese
                    </a>
                    <a onClick={() => setLang('korean')} id={lang === 'korean' ? 'btnP' : ''} class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3 mb-3">
                    Korean
                    </a>
                </div> */}
            {/* <div className="mb-10 lg:flex flex-row h-auto w-full bg-[#f4f8fb]">
                    <div className='flex flex-col space-y-6 px-10 lg:px-20 justify-center lg:w-3/4'>
                        <h1 className='text-3xl font-medium lg:text-4xl pt-10 lg:pt-0'>Foreign Language Education for Everyone!</h1>
                        <p className='text-lg '>Live online language classes for kids, adolscents and adults at The Language Network, pioneering online language schools, with the assistance of professional teachers.</p>
                        <p className='text-lg '>With our professional live online language classes, TLN is the complete solution to perfectly assist kids in their path to fluency.</p>
                        <div>
                            <a href="/getstarted">
                            <button class="bg-[#13BFAB] hover:bg-teal-400 text-white font-bold py-3 px-4 rounded w-auto" >
                            JOIN A COURSE
                        </button>
                            </a>
                            </div>
                    </div>
                    <div className='flex align-center px-10 py-10 lg:px-20 lg:py-20'>
                        <img src='/images/Adults_online-lecture.svg' alt='img' className='certificate-img' />
                    </div>
                </div> */}

            <AdultsTable />

        </div>
    )
}

export default Adults;