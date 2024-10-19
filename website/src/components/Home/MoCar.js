import React from "react"
import img1 from '../IntExamswiper/exam-dele.svg';
import img2 from '../IntExamswiper/exam-delf-dalf.svg';
import img3 from '../IntExamswiper/exam-goethe.svg';
import img4 from '../IntExamswiper/exam-Hsk.svg';
import img5 from '../IntExamswiper/exam-ielts.svg';
import img6 from '../IntExamswiper/exam-JLPT.svg';
import img7 from '../IntExamswiper/exam-siele.svg';
import img8 from '../IntExamswiper/exam-TEF.svg';
import img9 from '../IntExamswiper/exam-TOPIK.svg';
import './MoCar.css';

export default function MoCar(){
    
    return(
        <div class="slider flex items-center">
        <div class="slide-track flex items-center justify-center">
            <div class="slide flex items-center justify-center">
                <img className="w-4/6" src={img1} height="100" width="100" alt="" />
            </div>
            <div class="slide flex items-center justify-center">
                <img className="w-4/6" src={img2} height="100" width="250" alt="" />
            </div>
            <div class="slide flex items-center justify-center">
                <img className="w-4/6" src={img3} height="100" width="250" alt="" />
            </div>
            <div class="slide flex items-center justify-center">
                <img className="w-4/6" src={img4} height="100" width="250" alt="" />
            </div>
            <div class="slide flex items-center justify-center">
                <img className="w-5/6" src={img5} height="100" width="250" alt="" />
            </div>
            <div class="slide flex items-center justify-center">
                <img className="w-5/6" src={img6} height="100" width="250" alt="" />
            </div>
          
           
            
            <div class="slide flex items-center justify-center">
                <img className="w-4/6 " src={img1} height="100" width="100" alt="" />
            </div>
            <div class="slide flex items-center justify-center">
                <img className="w-4/6" src={img2} height="100" width="250" alt="" />
            </div>
            <div class="slide flex items-center justify-center">
                <img className="w-4/6" src={img3} height="100" width="250" alt="" />
            </div>
            <div class="slide flex items-center justify-center">
                <img className="w-4/6" src={img4} height="100" width="250" alt="" />
            </div>
            <div class="slide flex items-center justify-center">
                <img className="w-5/6" src={img5} height="100" width="250" alt="" />
            </div>
            <div class="slide flex items-center justify-center">
                <img className="w-5/6" src={img6} height="100" width="250" alt="" />
            </div>
        
            <div class="slide flex items-center justify-center">
                <img className="w-4/6" src={img1} height="100" width="100" alt="" />
            </div>
            <div class="slide flex items-center justify-center">
                <img className="w-4/6" src={img2} height="100" width="250" alt="" />
            </div>
            <div class="slide flex items-center justify-center">
                <img className="w-4/6" src={img3} height="100" width="250" alt="" />
            </div>
            <div class="slide flex items-center justify-center">
                <img className="w-5/6" src={img4} height="100" width="250" alt="" />
            </div>
            <div class="slide flex items-center justify-center">
                <img className="w-5/6" src={img5} height="100" width="250" alt="" />
            </div>
            <div class="slide flex items-center justify-center">
                <img className="w-5/6" src={img6} height="100" width="250" alt="" />
            </div>
            <div class="slide flex items-center justify-center">
                <img className="w-5/6" src={img7} height="100" width="250" alt="" />
            </div>
            <div class="slide flex items-center justify-center">
                <img className="w-5/6" src={img8} height="100" width="250" alt="" />

            </div>
            <div class="slide flex items-center justify-center">
                <img className="w-1/5" src={img9} height="100" width="250" alt="" />
            </div>
        </div>
    </div >
    )

}