import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"

import "swiper/css/pagination"

// import 'swiper/components/scrollbar/scrollbar.scss';

import SwiperCore, {
    Autoplay,
    Navigation,
    Pagination
} from 'swiper'

SwiperCore.use([Autoplay, Navigation, Pagination]);

function CardData() {
    const rtn = [{
        path: '/images/Website-core-value-icons-1.png',
        title: "EINHEIT [UNITY] ",
        description: "We work collaboratively towards a common purpose and goals of providing the best value of investment for the TLNier, Focused learning and priority support from our team. ",
    }, {
        path: '/images/Website-core-value-icons-2.png',
        title: "KAIZEN [IMPROVEMENT] ",
        description: "We embrace change and constantly innovate to help our students, colleagues and ourselves. We strive for constant improvement and adaptability each passing day. ",
    }, {
        path: '/images/Website-core-value-icons-3.png',
        title: "RENXING [HUMANITY] ",
        description: "We are authentic in our interactions and communicate openly, honestly and respectfully. We act with integrity and fairness. ",
    }, {
        path: '/images/Website-core-value-icons-4.png',
        title: "SUPERBIA [PRIDE] ",
        description: "We deliver the best possible learning experience to our students and take pride in our work with a pinch of arrogance, as they say in the capital ROME. ",
    }, {
        path: '/images/Website-core-value-icons-5.png',
        title: "FRANC [OPEN] ",
        description: "We care for our students, each other, cultures and communities all across the world - understanding that empathy makes us stronger. ",
    },

    ]
    return rtn;
}

export default () => {
    const cardData = CardData();
    return (
        <Swiper
        
            infinite
            autoplay={
                {
                    "delay": 2500,
                    "disableOnInteraction": false
                }
            }
            loop={true}
            pagination={{ clickable: true }}
            spaceBetween={5}
            breakpoints={{
                "640": {
                    "slidesPerView": 1,
                    "spaceBetween": 20
                },
                "768": {
                    "slidesPerView": 1, 
                    "spaceBetween": 40
                },
                "1024": {
                    "slidesPerView": 1,
                    "spaceBetween": 5
                }
            }}
             >
            <section> {
                cardData.map((card, i) => {
                    return (<SwiperSlide >
                        <div className="lg:w-5/6 md:w-1/2 w-1/2 card1 mb-20 " id="card" key={i} >
                            <div class=" w-auto card1-item flex items-center justify-evenly space-y-4" >
                                <div class=" w-full h-full flex items-center justify-center" >
                                    <img className="h-16" src={card.path} alt='img'/> 
                                </div>
                                <h2 className="text-2xl text-gray-900 font-semibold title-font ml-2 title text-center px-0" > {card.title} </h2>
                                <em className="text-base text-gray-900 font-normal title-font  ml-2 title text-center" > {card.description} </em>
                            </div>
                        </div>
                    </SwiperSlide>
                    )
                })
            }
            </section>
        </Swiper>
    );
};