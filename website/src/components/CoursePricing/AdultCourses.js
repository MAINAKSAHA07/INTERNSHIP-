import React from 'react';
import './Courses.css';
import { useState } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

import LearningPrices from './LearningPrices';
import AdultsEnglish from '../Footer/LangForAdults/English';
import AdultsFrench from '../Footer/LangForAdults/French';
import AdultsSpanish from '../Footer/LangForAdults/Spanish';
import AdultsGerman from '../Footer/LangForAdults/German';
import AdultsMandarin from '../Footer/LangForAdults/Mandarin';
import AdultsJapanese from '../Footer/LangForAdults/Japanese';
import AdultsKorean from '../Footer/LangForAdults/Korean';
import Popupm from '../curriculum/Pop/Popupmain';


export default function AdultsCourses() {

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

    const [language, setLanguage] = useState('English')
    const LanguageSec = () => {
        switch (language) {
            case 'English':
                return (<div>
                    {/* <LearningPrices one_one={English_1_1} one_two={English_1_2} one_four={English_1_4} /> */}
                    <AdultsEnglish />
                </div>
                )
                break;
            case 'French':
                return (<div>
                    {/* <LearningPrices one_one={French_1_1} one_two={French_1_2} one_four={French_1_4} /> */}
                    <AdultsFrench />
                </div>)
                break;
            case 'Spanish':
                return (<div>
                    {/* <LearningPrices one_one={Spanish_1_1} one_two={Spanish_1_2} one_four={Spanish_1_4} /> */}
                    <AdultsSpanish />
                </div>
                )
                break;
            case 'German':
                return (<div>
                    {/* <LearningPrices one_one={German_1_1} one_two={German_1_2} one_four={German_1_4} /> */}
                    <AdultsGerman />
                </div>
                )
                break;
            case 'Mandarin':
                return (<div>
                    {/* <LearningPrices one_one={Mandarin_1_1} one_two={Mandarin_1_2} one_four={Mandarin_1_4} /> */}
                    <AdultsMandarin />
                </div>
                )
                break;
            case 'Japanese':
                return (<div>
                    {/* <LearningPrices one_one={Japanese_1_1} one_two={Japanese_1_2} one_four={Japanese_1_4} /> */}
                    <AdultsJapanese />
                </div>
                )
                break;
            case 'Korean':
                return (<div>
                    {/* <LearningPrices one_one={Korean_1_1} one_two={Korean_1_2} one_four={Korean_1_4} /> */}
                    <AdultsKorean />
                </div>
                )
                break;

            default:
                break;
        }
    }

    return <div>

{/* <Popupm/> */}
        
        <div className="Home-container-2 px-5 fadeIN mb-24" style={{ width: '100%', marginTop: '2rem', paddingTop: 0 }}>
            <h2>A Fun, Proven method for Learning</h2>
            <h1 className='mb-12'>Choose a language</h1>
            <div className='Home-container-2-imgs hidden lg:flex'>
                <a onClick={() => setLanguage('English')} className='lg:mt-12'><img id={language === 'English' ? 'selected' : ''} className='Home-container-2-img h-[95%] lg:w-auto' alt='img' src='/images/adults-english@300x.svg' /></a>
                <a onClick={() => setLanguage('French')} className='lg:mt-12'><img id={language === 'French' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-french@300x.svg' /></a>
                <a onClick={() => setLanguage('Spanish')} className='lg:mt-12'><img id={language === 'Spanish' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-spanish@300x.svg' /></a>
                <a onClick={() => setLanguage('German')} className='lg:mt-12'><img id={language === 'German' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-german@300x.svg' /></a>
                <a onClick={() => setLanguage('Mandarin')} className='lg:mt-12'><img id={language === 'Mandarin' ? 'selected' : ''} className='Home-container-2-img h-[95%]  lg:w-auto' alt='img' src='/images/adults-mandarin@300x.svg' /></a>
                <a onClick={() => setLanguage('Japanese')} className='lg:mt-12'><img id={language === 'Japanese' ? 'selected' : ''} className='Home-container-2-img h-[95%]  lg:w-auto' alt='img' src='/images/adults-japanese@300x.svg' /></a>
                <a onClick={() => setLanguage('Korean')} className='lg:mt-12'><img id={language === 'Korean' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-korean@300x.svg' /></a>
            </div>
            <Swiper className='pagi1 block lg:hidden' spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
                breakpoints={{
                    640: {
                        slidesPerView: 1

                    },
                }}
                pagination={{
                    "clickable": true
                }} navigation={true} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }}
            >
                <SwiperSlide>
                    <a onClick={() => setLanguage('English')} className='m-12'><img id={language === 'English' ? 'selected' : ''} className='Home-container-2-img   lg:w-auto' alt='img' src='/images/adults-english@300x.svg' /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a onClick={() => setLanguage('French')} className='m-12'><img id={language === 'French' ? 'selected' : ''} className='Home-container-2-img   lg:w-auto' alt='img' src='/images/adults-french@300x.svg' /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a onClick={() => setLanguage('Spanish')} className='m-12'><img id={language === 'Spanish' ? 'selected' : ''} className='Home-container-2-img   lg:w-auto' alt='img' src='/images/adults-spanish@300x.svg' /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a onClick={() => setLanguage('German')} className='m-12'><img id={language === 'German' ? 'selected' : ''} className='Home-container-2-img   lg:w-auto' alt='img' src='/images/adults-german@300x.svg' /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a onClick={() => setLanguage('Mandarin')} className='m-12'><img id={language === 'Mandarin' ? 'selected' : ''} className='Home-container-2-img   lg:w-auto' alt='img' src='/images/adults-mandarin@300x.svg' /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a onClick={() => setLanguage('Japanese')} className='m-12'><img id={language === 'Japanese' ? 'selected' : ''} className='Home-container-2-img   lg:w-auto' alt='img' src='/images/adults-japanese@300x.svg' /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a onClick={() => setLanguage('Korean')} className='m-12'><img id={language === 'Korean' ? 'selected' : ''} className='Home-container-2-img  lg:w-auto' alt='img' src='/images/adults-korean@300x.svg' /></a>
                </SwiperSlide>
            </Swiper>
        </div>

        <LanguageSec />

    </div>;
}
