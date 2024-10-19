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
        path: '/images/SliderImgs/trainer.png',
        title: "Expert Trainers",
        description: "Experienced & result-oriented",
    }, {
        path: '/images/SliderImgs/interactive-1.png',
        title: "Interactive Sessions",
        description: "To deepen your connection with other cultures & traditions",
    }, {
        path: '/images/SliderImgs/study-material-1.png',
        title: "Free Study Material",
        description: "Official course material and workbooks",
    }, {
        path: '/images/SliderImgs/review-1.png',
        title: "Review Sessions",
        description: "Never miss a session! Track your progress & get personalised feedback",
    }, {
        path: '/images/SliderImgs/e-learning-1.png',
        title: "E-Learning",
        description: "Learn at the comfort of your home with flexible timings",
    }, {
        path: '/images/SliderImgs/1_2-batch-1.png',
        title: "Small Batches",
        description: "For personalised attention & effective learning",
    }, {
        path: '/images/SliderImgs/certified-1.png',
        title: "Certified Courses",
        description: "Earn accredited certificate to boost your skills",
    }, {
        path: '/images/SliderImgs/counselling-1.png',
        title: "Free Counselling",
        description: "Get counselled by our experts for better guidance to lead your path",
    },

    ]
    return rtn;
}

export default function Display() {
    const cardData = CardData();
    return (
        <Swiper
            className=' pagi5'
            infinite
            autoplay={
                {
                    "delay": 3000,
                    "disableOnInteraction": true
                }
            }
            loop={true}
            pagination={{ clickable: true }}
            spaceBetween={5}
            breakpoints={{
                "640": {
                    "slidesPerView": 2,
                    "spaceBetween": 20
                },
                "768": {
                    "slidesPerView": 4,
                    "spaceBetween": 40
                },
                "1024": {
                    "slidesPerView": 3,
                    "spaceBetween": 5
                }
            }}
        >
            <section> {
                cardData.map((card, i) => {
                    return (<SwiperSlide className='mb-10'>
                        <div className="mx-8 md:h-96 lg:h-auto w-full lg:w-5/6 h-auto md:w-1/2 card1 pt-4" id="card" key={i} >
                            <div class="h-80 md:h-[23rem] lg:h-[18rem] h-auto w-auto rounded-lg card-item1 flex items-center align-top " >
                                <div class="w-14 h-14 flex items-center justify-center rounded-full mt-8 mb-4" >
                                    <img src={card.path} alt='img' className='w-full h-full' />
                                </div>
                                <h2 className="text-normal text-gray-900 font-normal title-font ml-2 title text-center" > {card.title} </h2>
                                <p className="text-normal text-gray-900 font-normal title-font  ml-2 title text-center" > {card.description} </p>
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



