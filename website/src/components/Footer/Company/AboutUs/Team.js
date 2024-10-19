import React from "react";
import Slider from "react-slick";
import { useState, useEffect, useRef } from "react";
import { BsChevronLeft } from 'react-icons/bs';
// import React from 'react'
// import "./team.css"
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation"
// import "swiper/css/pagination"
// import "swiper/css/scrollbar";
// import { EffectFade, Parallax } from "swiper/core";

// import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper/core";

// SwiperCore.use([Autoplay, Navigation, Pagination]);

function CardData1() {
    const rtn = [
        {
            pic: "/images/Siddhi.webp",
            desc: "I’ve been fascinated by the language and the culture since the day I discovered it. I love passing on my knowledge to my students who wish to learn French as a hobby or even for their career. I’m always so happy to see how this language grows on them overtime and it’s the best feeling ever.",
            name: "Siddhi",
            post: "French Head Trainer",
        },
        {
            pic: "/images/Manika.webp",
            desc: "Teaching Japanese at TLN is the best combination of time spent in enhancing teaching skills and quality of teaching. I really enjoy teaching at TLN. TLN is a platform where I love to teach and communicate with new students and seeing them having great interest in learning Japanese ",
            name: "Manika",
            post: "Japanese Head Trainer ",
        },
        {
            pic: "/images/Anchal.webp",
            desc: "I have been teaching German since 2 years now and it is my passion to teach German. It’s an amazing feeling interacting with so many new students and helping them reach heights and fulfilling the dream of speaking German fluently.",
            name: "Anchal",
            post: "German Head Trainer ",
        },
        {
            pic: "/images/Gautami.webp",
            desc: "Language is at core a way to communicate, and I realized pretty early in my life that I had an interest in communicating with people from different backgrounds. I really love teaching and watching my students learn and love Mandarin not just as a language but as a culture.",
            name: "Gautami",
            post: "Mandarin Head Trainer ",
        },
        {
            pic: "/images/Samihan.webp",
            desc: "I feel really blessed to have been able to share my knowledge with students from different strata & having made memories worth cherishing for a lifetime.",
            name: "Samihan",
            post: "Spanish Head Trainer ",
        },
        {
            pic: "/images/Simran.webp",
            desc: "A certified korean language specialist from korean culture center, Delhi, which is affiliated with the korean embassy. Professionally, working as a korean language trainer at TLN as well as a part-time translator, interpreter and marketing associate.",
            name: "Simran",
            post: "Korean Head Trainer",
        },
    ];
    return rtn;
}

function CardData2() {
    const rtn = [
        {
            pic: "/images/Manika.webp",
            desc: "Teaching Japanese at TLN is the best combination of time spent in enhancing teaching skills and quality of teaching. I really enjoy teaching at TLN. TLN is a platform where I love to teach and communicate with new students and seeing them having great interest in learning Japanese",
            name: "Manika",
            post: "Japanese Head Trainer ",
        },
        {
            pic: "/images/Anchal.webp",
            desc: "I have been teaching German since 2 years now and it is my passion to teach German. It’s an amazing feeling interacting with so many new students and helping them reach heights and fulfilling the dream of speaking German fluently.",
            name: "Anchal",
            post: "German Head Trainer ",
        },
        {
            pic: "/images/Gautami.webp",
            desc: "Language is at core a way to communicate, and I realized pretty early in my life that I had an interest in communicating with people from different backgrounds. I really love teaching and watching my students learn and love Mandarin not just as a language but as a culture.",
            name: "Gautami",
            post: "Mandarin Head Trainer ",
        },
        {
            pic: "/images/Samihan.webp",
            desc: "I feel really blessed to have been able to share my knowledge with students from different strata & having made memories worth cherishing for a lifetime.",
            name: "Samihan",
            post: "Spanish Head Trainer ",
        },
        {
            pic: "/images/Simran.webp",
            desc: "A certified korean language specialist from korean culture center, Delhi, which is affiliated with the korean embassy. Professionally, working as a korean language trainer at TLN as well as a part-time translator, interpreter and marketing associate.",
            name: "Simran",
            post: "Korean Head Trainer",
        },
        {
            pic: "/images/Siddhi.webp",
            desc: "I’ve been fascinated by the language and the culture since the day I discovered it. I love passing on my knowledge to my students who wish to learn French as a hobby or even for their career. I’m always so happy to see how this language grows on them overtime and it’s the best feeling ever.",
            name: "Siddhi",
            post: "French Head Trainer",
        },
    ];
    return rtn;
}

// export default () => {
//     const cardData = CardData();
//     return (
//         <Swiper
//             navigation={true}
//             infinite
//             autoplay={{
//                 disableOnInteraction: false,
//             }}
//             module={[EffectFade, Parallax]}
//             effect="fade"
//             loop={true}
//             // pagination={{ clickable: false }}
//             spaceBetween={2}
//             breakpoints={{
//                 640: {
//                     slidesPerView: 1,
//                     spaceBetween: 20,
//                 },
//                 768: {
//                     slidesPerView: 1,
//                     spaceBetween: 40,
//                 },
//                 1024: {
//                     slidesPerView: 3,
//                     spaceBetween: 20,
//                 },
//             }}

//             className="px-3"
//         >
//             <section>

//                 {cardData.map((card, i) => {
//                     return (
//                         <SwiperSlide className="testi-slides w-full">
//                             <div className="relative h-80">
//                                 <div className="flex card">
//                                     <div className="image">
//                                         <img src={card.pic} />
//                                     </div>
//                                     <div className="details">
//                                         <div className="center">
//                                             <h1>{card.name}</h1>
//                                             <span className="px-3">{card.post}</span>
//                                             <p className="text-sm">{card.desc}</p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </SwiperSlide>
//                     );
//                 })}
//             </section>
//         </Swiper>
//     );
// };


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div className={className} onClick={onClick}><BsChevronLeft /></div>
        // <div
        //     className={className}
        //     // style={{ ...style, display: "block", background: "#13BFAB", opacity: '0.5', borderRadius: "10px", top: "110%", right: '275px' }}
        //     onClick={onClick}
        // />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        // <BsArrowRightShort  onClick={onClick} style={{display: "block", background: "#13BFAB", opacity: '0.5', borderRadius: "10px", top: "110%", right: '275px' }} />
        <div
            className={className}
            // style={{ ...style, display: "block", background: "#13BFAB", opacity: '0.5', borderRadius: "10px", top: "110%", left: '275px' }}
            onClick={onClick}
        />
    );
}

export default function Team() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const slider1 = useRef(null);
    const slider2 = useRef(null);
    const scrsize = window.matchMedia("(min-width: 768px)").matches;

    // setScrsize(window.matchMedia("(min-width: 768px)").matches);

    useEffect(() => {
        setNav1(slider1.current);
        setNav2(slider2.current);
    }, []);

    const cardData1 = CardData1();
    const cardData2 = CardData2();

    console.log(scrsize)

    return (
        <div className="w-full lg:px-10 mb-10">
            <div className="w-full flex flex-row items-center">
                <Slider asNavFor={nav2} autoplay={true} ref={slider1} dots={false} arrows={true} className='w-full lg:w-[50%] lg:mr-3'>
                    {cardData1.map((card, i) => {
                        return (
                            <div class="p-5 lg:w-full px-3 lg:px-0">
                                <div className="h-[29rem] lg:h-[24rem] flex sm:flex-row flex-col items-center sm:justify-start justify-center text-left sm:text-left shadow-xl rounded-xl pt-6 pb-6">
                                    <img alt="team" class="px-2 flex-shrink-0 lg:rounded-2xl w-52 lg:h-full object-cover object-center sm:mb-0" src={card.pic} />
                                    <div className="flex-grow px-2 px-3">
                                        <h2 class="title-font font-medium text-3xl my-3 lg:my-0 lg:mb-3  text-[#f2b919]">{card.name}</h2>
                                        <h3 class="text-gray-500 mb-3 text-base">{card.post}</h3>
                                        <p class="mb-4 text-sm">"{card.desc}"</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>

                <Slider
                    asNavFor={nav1}
                    ref={slider2}
                    slidesToShow={3}
                    swipeToSlide={true}
                    focusOnSelect={true}
                    arrows={scrsize  === true ? true:false}
                    
                    prevArrow={<SamplePrevArrow />}
                    nextArrow={<SampleNextArrow />} 
                    className='w-[50%] hidden lg:flex lg:flex-row'
                >
                    {cardData2.map((card, j) => {
                        return (
                            <div class="p-3 lg:w-full">
                                <div class=" h-[21rem] flex flex-col items-center sm:justify-start justify-center text-left sm:text-left shadow-lg rounded-xl my-10">
                                    <img alt="team" class="flex-shrink-0 rounded-t-lg w-full h-2/3 object-cover object-top sm:mb-0" src={card.pic} />
                                    <div class="flex-grow px-2">
                                        <h2 class="title-font font-medium text-2xl text-[#f2b919] my-3">{card.name}</h2>
                                        <h3 class="text-gray-500 mb-3">{card.post}</h3>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    );
};