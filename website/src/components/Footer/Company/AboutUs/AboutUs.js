import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

import AboutDisplay from "./AboutDisplay"
import { TextareaAutosize } from '@mui/material';
import Team from './Team';
import { Link } from 'react-scroll';

export default function AboutUs() {

 

  return (
    <div>
      <div className="lg:pt-10 lg:px-10 lg:px-24 lg:flex flex-row items-center justify-center">
        <div className="lg:w-1/2 flex flex-wrap pt-20 ">
          <div>
            <h1 className="font-bold text-3xl lg:text-4xl px-3 lg:px-10 text-[#13bfab]">Helping you learn from the comfort of your home</h1>
          </div>
          <div className="flex flex-wrap text-lg px-3">
            <p className="font-bold pt-6">Immerse yourself in the world of languages and</p>
            <p className="md:pl-2 lg:pl-0 md:pt-6 lg:pt-0">be a part of a global society.&nbsp;</p>
            <p href="" className="font-bold">Join<span className="font-light"> our online classes led by professional trainers.</span></p>
          </div>

      

        </div>
        <div className="px-8 lg:px-0 lg:w-1/2 rounded-lg">
          <video controls autoPlay muted className="w-11/12 rounded-md mt-10 mr-10">
            <source src="/videos/TLN_Online-Class_Self-Care-Education.mp4" className="rounded-lg"></source>
          </video>
        </div>
      </div>

      <div className="pt-20 lg:pl-20 lg:flex flex-row items-center justify-center" id="mve">
        <div className="lg:w-1/2 px-3 lg:px-0 lg:pl-10 ">
          <div className="text-4xl font-semibold text-[#13bfab]">To tell you a little bit about Us</div>
          <div className="items-baseline flex flex-wrap inline-block">
            <div className="pt-8 tracking-wider font-semibold inline-block">Whether it’s about mastering a timeless skill, cultivate new perspectives, or connect with fascinating people from around the world, </div>
            <div><strong className=""><em>The Language Network helps in curating a pleasant learning experience.</em></strong></div>
          </div>
        </div>
        <div className="px-10 lg:px-0 lg:w-1/2 lg:pr-40">
          <img src="/images/social_image.png" />
        </div>
      </div>

      <div className="pt-40">
        <div className="flex flex-col items-center justify-center lg:px-40 space-y-10">
          <h1 className='lg:flex wrap font-bold text-2xl md:text-3xl lg:text-4xl lg:ml-28'>Core Values that shape our
            <div class="scroller mt-0">
              <span className='lg:pl-4 text-[#13bfab] lg:px-3 items-center'>
                Behaviours<br />
                Culture
              </span>
            </div>
          </h1>
          <hr class="h-full flex flex-col justify-center align-center text-center w-ful border-[#FFC000] border-2 w-1/3 self-center mt-4 items-center justify-center"></hr>
          <AboutDisplay />
        </div>

        <div className="items-center justify-center px-3 lg:px-20 flex flex-col justify-center ">
          <h1 className="flex text-3xl lg:text-4xl font-semibold pt-20 items-center justify-center ">We work as a team</h1>
          <hr class="h-full flex flex-col justify-center align-center text-center w-ful border-[#FFC000] border-2 w-1/4 self-center mt-4 items-center justify-center"></hr>
          <span className="flex text-lg font-medium pt-10 lg:px-20 text-center">With a fantastic team of over 50+ trainers (and counting!) who make learning entertaining and effortless. Our trainers are qualified with an overall student rating of 5   out of 5.</span>
        </div>
      </div>

      {/* slides */}
      <Team />
      <div className="items-center justify-center px-3 lg:px-20 flex flex-col justify-center sm:my-0">
        <h1 className="flex text-3xl lg:text-4xl font-semibold pt-10 items-center justify-center  ">Our partners</h1>
        <hr class="h-full flex flex-col justify-center align-center text-center w-ful border-[#FFC000] border-2 w-1/4 self-center mt-4 items-center justify-center"></hr>
      </div>




      <div className="lg:px-24">

        <div className=''>
          <div class="flex justify-center items-center align-center lg:grid grid-cols-3 gap-x-8 ml-3  mt-10 lg:block sm:hidden md:block">
            <div className="px-10 "><img className="w-2/3 px-12" src="/images/Loyola_College_Chennai_-_Coat_of_arms.svg" alt='img' /></div>

            <div className="px-2 lg:"><img className="w-2/3 px-12" src="/images/Rcmg-Ghatkopar-300x300.svg" alt='img' /></div>

            <div className="px-8 lg:"><img className="w-2/3 px-12 ml-4" src="/images/rotary.svg" alt='img1' /></div>
          </div>

          <div className="flex flex-row px-5 lg:hidden sm:block md:hidden">
            <div className=""><img className="w-full px-2" src="/images/Loyola_College_Chennai_-_Coat_of_arms.svg" alt='img' /></div>

            <div className=""><img className="w-full px-2" src="/images/Rcmg-Ghatkopar-300x300.svg" alt='img' /></div>

            <div className=""><img className="w-full px-3" src="/images/rotary.svg" alt='img1' /></div>
          </div>
        </div>


      </div>
      <p className='w-full text-center font-bold text-4xl lg:pt-20 pt-10'>Frequently asked questions</p>
      <div className="flex flex-col justify-center items-center pb-20 ">
        <hr class="h-full flex flex-col justify-center align-center text-center w-ful border-[#FFC000] border-2 w-1/5 self-center mt-4 items-center justify-center"></hr>
      </div>


      <div className='w-full px-10 lg:px-52 mb-32'>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="flush-headingOne">
              <button class="accordion-button relative flex items-center w-full py-4 px-3 lg:px-5 text-base text-gray-800 text-left font-bold bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                aria-expanded="false" aria-controls="flush-collapseOne">
                What is The Language Network?
              </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse border-0 collapse show"
              aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-3 lg:px-5">The Language Network is a place to learn and immerse yourself in the world of languages. We are a dynamic institution promoting languages and celebrating cultures.</div>
            </div>
          </div>

          <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="flush-headingThree">
              <button class="accordion-button collapsed relative flex items-center w-full py-4 px-3 lg:px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                aria-expanded="false" aria-controls="flush-collapseThree">
                What language courses does The Language Network provide?
              </button>
            </h2>
            <div id="flush-collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-3 lg:px-5">The Language Network provides language courses in French, Spanish, German, English, Mandarin, Japanese, and Korean. We plan to start more courses soon- keep checking our website for more details!
              </div>
            </div>
          </div>

          <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="flush-headingFour">
              <button class="accordion-button collapsed relative flex items-center w-full py-4 px-3 lg:px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                aria-expanded="false" aria-controls="flush-collapseFour">
                Why should I enroll in TLN's language courses?
              </button>
            </h2>
            <div id="flush-collapseFour" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-3 lg:px-5">Learning foreign languages is an asset at any age. They help you grow in your career and education. The Language Network has the best trainers, curated syllabus, and timing suited to your needs.</div>
            </div>
          </div>

          <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="flush-headingFive">
              <button class="accordion-button collapsed relative flex items-center w-full py-4 px-3 lg:px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                aria-expanded="false" aria-controls="flush-collapseFive">
                What makes TLN different from other language training schools?
              </button>
            </h2>
            <div id="flush-collapseFive" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-3 lg:px-5">The Language Network does more than just teach languages to pass exams. We aim to explore the culture of the language, the history of the language, and teach you how the spoken language differs from the written. Apart from this, we also teach you from the comfort of your home.</div>
            </div>
          </div>

          <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="flush-headingSix">
              <button class="accordion-button collapsed relative flex items-center w-full py-4 px-3 lg:px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix"
                aria-expanded="false" aria-controls="flush-collapseSix">
                What is the duration of each class?
              </button>
            </h2>
            <div id="flush-collapseSix" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-3 lg:px-5">A typical class lasts for 2 hours, either on weekdays or on weekends depending on your choice of batch. The classes are designed to suit each age group of kids, adolescents, or adults.</div>
            </div>
          </div>

          <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
            <h2 class="accordion-header mb-0" id="flush-headingSeven">
              <button class="accordion-button collapsed relative flex items-center w-full py-4 px-3 lg:px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven"
                aria-expanded="false" aria-controls="flush-collapseSeven">
                Can the classes be downloaded?
              </button>
            </h2>
            <div id="flush-collapseSeven" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSeven"
              data-bs-parent="#accordionFlushExample">
              <div class="accordion-body py-4 px-3 lg:px-5">For the time being, all classes are conducted on Zoom. Post the classes, the recorded lectures are sent to the students so that they can go through them for revision, doubts, etc.</div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}
