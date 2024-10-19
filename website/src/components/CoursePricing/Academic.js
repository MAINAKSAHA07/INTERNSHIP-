import React from 'react'
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

import LearningPricesKids from './LearningPricesKids';
// import { English_1_1, English_1_2, English_1_4 } from './CourseTableData_kids/English.js'
// import { French_1_1, French_1_2, French_1_4 } from './CourseTableData_kids/French'
// import { Spanish_1_1, Spanish_1_2, Spanish_1_4 } from './CourseTableData_kids/Spanish'
// import { German_1_1, German_1_2, German_1_4 } from './CourseTableData_kids/German'
// import { Mandarin_1_1, Mandarin_1_2, Mandarin_1_4 } from './CourseTableData_kids/Mandarin'
// import { Japanese_1_1, Japanese_1_2, Japanese_1_4 } from './CourseTableData_kids/Japanese'
// import { Korean_1_1, Korean_1_2, Korean_1_4 } from './CourseTableData_kids/Korean'
import KidsEnglish from '../Footer/LangKids2/English';
import KidsFrench from '../Footer/LangKids2/French';
import KidsSpanish from '../Footer/LangKids2/Spanish';
import KidsGerman from '../Footer/LangKids2/German';
import KidsMandarin from '../Footer/LangKids2/Mandarin';
import KidsJapanese from '../Footer/LangKids2/Japanese';
import KidsKorean from '../Footer/LangKids2/Korean';

export default function Academic() {
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
    const [Opt, setOpt] = useState(2)
    // const LearningPricesKids = () => {
    //     switch (Opt) {
    //         case 1:
    //             //put prices for 1:1
    //             return <Academic />;
    //             break;
    //         case 2:
    //             //put prices for 1:2
    //             return <Competitive />;
    //             break;  
    //         default:
    //             break;
    //     }
    // };
    const [language, setLanguage] = useState('English')
    const LanguageSec = () => {
        switch (language) {
            case 'English':
                return (<div className="pt-10">
                    {/* <LearningPricesKids one_one={English_1_1} one_two={English_1_2} one_four={English_1_4} /> */}
                    <KidsEnglish />
                </div>
                )
                break;
            case 'French':
                return (<div className="pt-10">
                    {/* <LearningPricesKids one_one={French_1_1} one_two={French_1_2} one_four={French_1_4} /> */}
                    <KidsFrench />
                </div>)
                break;
            case 'Spanish':
                return (<div className="pt-10">
                    {/* <LearningPricesKids one_one={Spanish_1_1} one_two={Spanish_1_2} one_four={Spanish_1_4} /> */}
                    <KidsSpanish />
                </div>
                )
                break;
            case 'German':
                return (<div className="pt-10">
                    {/* <LearningPricesKids one_one={German_1_1} one_two={German_1_2} one_four={German_1_4} /> */}
                    <KidsGerman />
                </div>
                )
                break;
            case 'Mandarin':
                return (<div className="pt-10">
                    {/* <LearningPricesKids one_one={Mandarin_1_1} one_two={Mandarin_1_2} one_four={Mandarin_1_4} /> */}
                    <KidsMandarin />
                </div>
                )
                break;
            case 'Japanese':
                return (<div className="pt-10">
                    {/* <LearningPricesKids one_one={Japanese_1_1} one_two={Japanese_1_2} one_four={Japanese_1_4} /> */}
                    <KidsJapanese />
                </div>
                )
                break;
            case 'Korean':
                return (<div className="pt-10">
                    {/* <LearningPricesKids one_one={Korean_1_1} one_two={Korean_1_2} one_four={Korean_1_4} /> */}
                    <KidsKorean />
                </div>
                )
                break;

            default:
                break;
        }
    }

    return <div>
        

        {/* <div>
            <div className='w-full flex justify-center fadeIN'>
                <a onClick={() => setOpt(1)} id={Opt === 1 ? 'btnP' : ''} class="flex flex-col text-center buttons bg-white py-2.5 px-4 rounded-lg shadow lg:mx-3">
                    <h1 className='lg:text-xl font-medium text-md'>Academic</h1>
                </a>
                <a onClick={() => setOpt(2)} id={Opt === 2 ? 'btnP' : ''} class="flex flex-col text-center buttons bg-white  py-2.5 px-4 rounded-lg shadow lg:mx-3">
                    <h1 className='lg:text-xl font-medium text-md'>Competitive</h1>
                </a>
            
            </div>
            <LearningPricesKids />
        </div> */}

        <div className="Home-container-2 px-5 fadeIN" style={{ width: '100%', marginTop: '2rem', paddingTop: 0 }}>
            <h2>A Fun, Proven method for Learning</h2>
            <h1 className='mb-12'>Choose a language</h1>
            <div className='Home-container-2-imgs hidden lg:flex'>
                <a onClick={() => setLanguage('English')} className='lg:mt-12'><img id={language === 'English' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-english@300x.png' /></a>
                <a onClick={() => setLanguage('French')} className='lg:mt-12'><img id={language === 'French' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-french@300x.png' /></a>
                <a onClick={() => setLanguage('Spanish')} className='lg:mt-12'><img id={language === 'Spanish' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-spanish@300x.png' /></a>
                <a onClick={() => setLanguage('German')} className='lg:mt-12'><img id={language === 'German' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-german@300x.png' /></a>
                <a onClick={() => setLanguage('Mandarin')} className='lg:mt-12'><img id={language === 'Mandarin' ? 'selected' : ''} className='Home-container-2-img h-[95%]  lg:w-auto' alt='img' src='/images/adults-mandarin@300x.png' /></a>
                {/* <a onClick={() => setLanguage('Japanese')} className='lg:mt-12'><img id={language === 'Japanese' ? 'selected' : ''} className='Home-container-2-img h-[95%]  lg:w-auto' alt='img' src='/images/adults-japanese@300x.png' /></a>
                <a onClick={() => setLanguage('Korean')} className='lg:mt-12'><img id={language === 'Korean' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-korean@300x.png' /></a> */}
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
                    <a onClick={() => setLanguage('English')} className='m-12'><img id={language === 'English' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-english@300x.png' /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a onClick={() => setLanguage('French')} className='m-12'><img id={language === 'French' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-french@300x.png' /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a onClick={() => setLanguage('Spanish')} className='m-12'><img id={language === 'Spanish' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-spanish@300x.png' /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a onClick={() => setLanguage('German')} className='m-12'><img id={language === 'German' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-german@300x.png' /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a onClick={() => setLanguage('Mandarin')} className='m-12'><img id={language === 'Mandarin' ? 'selected' : ''} className='Home-container-2-img h-[95%]  lg:w-auto' alt='img' src='/images/adults-mandarin@300x.png' /></a>
                </SwiperSlide>
                {/* <SwiperSlide>
                    <a onClick={() => setLanguage('Japanese')} className='m-12'><img id={language === 'Japanese' ? 'selected' : ''} className='Home-container-2-img h-[95%]  lg:w-auto' alt='img' src='/images/adults-japanese@300x.png' /></a>
                </SwiperSlide>
                <SwiperSlide>
                    <a onClick={() => setLanguage('Korean')} className='m-12'><img id={language === 'Korean' ? 'selected' : ''} className='Home-container-2-img  h-[95%] lg:w-auto' alt='img' src='/images/adults-korean@300x.png' /></a>
                </SwiperSlide> */}
            </Swiper>
        </div>

        <LanguageSec />

    </div>;
}
