import React from 'react'
import "./BodyCarousel.css"
import img1 from '../IntExamswiper/exam-dele.svg';
import img2 from '../IntExamswiper/exam-delf-dalf.svg';
import img3 from '../IntExamswiper/exam-goethe.svg';
import img4 from '../IntExamswiper/exam-Hsk.svg';
import img5 from '../IntExamswiper/exam-ielts.svg';
import img6 from '../IntExamswiper/exam-JLPT.svg';
import img7 from '../IntExamswiper/exam-siele.svg';
import img8 from '../IntExamswiper/exam-TEF.svg';
import img9 from '../IntExamswiper/exam-TOPIK.svg';
export default function BodyCarousel() {
    return (
        <div class="slider">
            <div class="slide-track flex items-center">
                <div class="slide p-2">
                    <img className="w-full" src={img1} height="20" width="20" alt="" />
                </div>
                <div class="slide p-2">
                    <img src={img2} height="100" width="250" alt="" />
                </div>
                <div class="slide p-2">
                    <img src={img3} height="100" width="250" alt="" />
                </div>
                <div class="slide p-2">
                    <img src={img4} height="100" width="250" alt="" />
                </div>
                <div class="slide p-2">
                    <img src={img5} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <img src={img6} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <img src={img7} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <img src={img8} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <img src={img9} height="100" width="250" alt="" />
                </div>
                <div class="slide items-center p-2">
                    <img className="w-full" src={img1} height="20" width="20" alt="" />

                </div>
                <div class="slide p-2">
                    <img src={img2} height="100" width="250" alt="" />
                </div>
                <div class="slide p-2">
                    <img src={img3} height="100" width="250" alt="" />
                </div>
                <div class="slide p-2">
                    <img src={img4} height="100" width="250" alt="" />
                </div>
                <div class="slide p-2">
                    <img src={img5} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <img src={img6} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <img src={img7} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <img src={img8} height="100" width="250" alt="" />
                </div>
                <div class="slide">
                    <img src={img9} height="100" width="250" alt="" />
                </div>
            </div>
        </div >
    )
}
