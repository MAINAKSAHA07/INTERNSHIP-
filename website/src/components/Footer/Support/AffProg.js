import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { AiFillStar } from 'react-icons/ai';
import { FaAward } from 'react-icons/fa';
import { GiReceiveMoney, GiWallet } from 'react-icons/gi';
import { GrCertificate } from 'react-icons/gr';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
import Popup from '../../curriculum/Pop/Popup';


import { FiShare2, FiUserPlus } from 'react-icons/fi';

export default function AffProg() {
  return (
    <div>
      <div className='w-full px-4 lg:px-26 h-auto flex flex-row lg:flex-col justify-center items-center content-center flex-wrap' >
        <div className="lg:flex flex-row">
          <div className='lg:p-16 lg:w-1/2 text-left items-center justify-center space-y-10'>
            {/* text */}
            <h2 className='mt-10 text-black font-semibold text-5xl lg:pt-20'>Refer, Inspire and Earn</h2>
            <div><span className="text-xl font-light">Earn commission of 20% of the total course fees for every learner you bring to TLN!</span></div>
            <div><button type="button" class="btn btn-info text-white" style={{ backgroundColor: '#13bfab', borderRadius: '30px', paddingTop: '16px', paddingRight: '30px', paddingBottom: '16px', paddingLeft: '30px', fontSize: '0.82352941176471rem' }}>Become an Affiliate</button></div>
          </div>
          <div className="lg:w-1/2 p-10">
            {/* image */}
            <img src="/images/affiliate-marketing.png" alt='img' />
          </div>
        </div>
        <div className=" w-full flex flex-row justify-center bottom-[-500px] lg:bottom-[-200px]">
          <div className='overlay-box'>
            <h1 className='lg:text-2xl text-lg'><CountUp start={0} end={5000} separator=","
              suffix="+" duration={1}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start}>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp></h1>
            <h2 className='lg:text-2xl text-base'>Students</h2>
          </div>
          <div className='overlay-box'>
            <div className='stars lg:text-3xl text-base'><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
            <h2 className='lg:text-2xl text-base'>5 Star Rating</h2>
          </div>
          <div className='overlay-box'>
            <h1 className='lg:text-2xl text-lg'><CountUp start={0} end={200} separator=","
              suffix="+" duration={1}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start}>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp></h1>
            <h2 className='lg:text-2xl text-base'>Expert Trainers</h2>
          </div>
        </div>
      </div>

      <div>
        <div className="">
          <h1 className='text-center font-semibold text-4xl pt-24 lg:pt-32 pb-2'>How it works</h1>
          <h1 className='text-center font-medium text-2xl'>Start earning in 3 simple steps</h1>
          <div>

            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto flex flex-wrap">
                <div class="flex flex-wrap -m-4">

                  <div class="p-4 lg:w-1/3 md:w-full">
                    <div class="flex sm:flex-row flex-col hover:text-[#13BFAB] group text-black transition-color duration-500">
                      <div class="w-20 h-20 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#fffff] text-[#13BFAB] group-hover:bg-[#13BFAB] transition-color duration-500 group-hover:text-white flex-shrink-0 shadow-2xl">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                          <svg class="h-30 w-14" viewBox="0 0 16 18">
                            <FiUserPlus />
                          </svg>
                        </svg>
                      </div>
                      <div class="flex-grow">
                        <h2 class="text-lg font-semibold mb-2">Join The Language Network</h2>
                        <p class="leading-relaxed text-base text-gray-600">Register TLN’s affiliate program for free in less than 10 seconds. Joining is fast and easy</p>
                      </div>
                    </div>
                  </div>

                  <div class="p-4 lg:w-1/3 md:w-full">
                    <div class="flex sm:flex-row flex-col hover:text-purple-700 group text-black transition-color duration-500">
                      <div class="w-20 h-20 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-purple-700 bg-[#fffff] group-hover:bg-purple-700 transition-color duration-500 group-hover:text-white flex-shrink-0 shadow-2xl">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                          <svg class="h-30 w-14" viewBox="0 0 18 17">
                            <FiShare2 />
                          </svg>
                        </svg>
                      </div>
                      <div class="flex-grow">
                        <h2 class="text-lg title-font font-semibold mb-2">Refer and Inspire</h2>
                        <p class="leading-relaxed text-base text-gray-600">Share your TLN Affiliate link with friends via Whatsapp, Instagram, Facebook or any other social Media platform.</p>
                      </div>
                    </div>
                  </div>

                  <div class="p-4 lg:w-1/3 md:w-full">
                    <div class="flex sm:flex-row flex-col hover:text-green-500 group text-black transition-color duration-500">
                      <div class="w-20 h-20 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full text-green-500 bg-[#fffff] group-hover:bg-green-500 transition-color duration-500 group-hover:text-white flex-shrink-0 shadow-2xl">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10" viewBox="0 0 24 24">
                          <svg class="h-30 w-14" viewBox="0 0 16 18">
                            <GiWallet />
                          </svg>
                        </svg>
                      </div>
                      <div class="flex-grow">
                        <h2 class="text-lg title-font font-semibold mb-2">Earn</h2>
                        <p class="leading-relaxed text-base text-gray-600 ">TLN will pay you a 20% commission (of the total course fees) for every new user that joins TLN.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

          </div>

        </div>
      </div>

      <div className="bg-slate-100">
        <div className="md:flex lg:flex flex-row pt-10 pb-10">
          <div className="sm:pb-0 lg:pb-24 md:flex items-center text-left px-10 lg:pt-20 lg:pl-32 lg:w-1/3 space-y-5 h-auto">
            <div className="">
              <h1 className="text-3xl font-semibold">Why You Should Join?</h1>
              <h1 className="text-sm font-small pb-10">When you promote TLN, you’re not just promoting languages. You’re inspiring your audience to learn a foreign language.</h1>
            </div>
          </div>

          <section class="text-gray-600 body-font lg:w-2/3 ">
            <div class="">

              <div class="flex flex-wrap sm:-m-4 -mb-10 -mt-4 md:space-y-0 space-y-6">

                <div class="group p-4 lg:w-5/12 flex flex-col text-center items-center rounded-lg bg-white lg:w-5/12 mx-10 lg:mx-10 hover:text-[#13BFAB] text-black transition-color duration-500">
                  <div class="w-20 h-20 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#fffff] text-[#13BFAB] group-hover:bg-[#13BFAB] transition-color duration-500 group-hover:text-white flex-shrink-0 shadow-2xl">
                    <svg class="h-30 w-14" viewBox="0 0 16 18">
                      <GiReceiveMoney />
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-lg title-font font-medium mb-3">Generous Commission Payout</h2>
                    <p class="leading-relaxed text-base text-gray-600">For every new user who completes a purchase from your affiliate link, you’ll earn a 20% commission (of the total course fees).</p>
                  </div>
                </div>

                <div class="group p-4 lg:w-5/12 flex flex-col text-center items-center rounded-lg  bg-white lg:w-5/12 mx-10 lg:mx-10 hover:text-purple-700 text-black transition-color duration-500">
                  <div class="w-20 h-20 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-[#fffff] text-purple-700 group-hover:bg-purple-700 transition-color duration-500 group-hover:text-white flex-shrink-0 shadow-2xl">
                    <svg class="w-10" viewBox="0 0 16 16">
                      <FaAward />
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <h2 class="text-lg title-font font-medium mb-3">Excellence Certificate</h2>
                    <p class="leading-relaxed text-base text-gray-600">TLN rewards the registered affiliates by providing excellence certificate after 50 referrals.</p>
                  </div>
                </div>

              </div>

              <div className="w-full flex items-center justify-center mt-10 lg:mt-0"><button type="button" class="btn btn-info text-white mt-10 items-center justify-center" style={{ backgroundColor: '#13BFAB', borderRadius: '30px', paddingTop: '16px', paddingRight: '30px', paddingBottom: '16px', paddingLeft: '30px', fontSize: '0.82352941176471rem' }}>Become an Affiliate</button></div>

            </div>
          </section>

        </div>
        <h1 className="text-center text-[11px] pb-10 px-30">*Note: One must have a valid PayPal account in order to receive the earned commission. The amount earned will be credited to your PayPal account after the purchase has been successfully made from your affiliate link.</h1>
      </div>
      <div className="Home-container-2 w-full lg:px-20 mt-16">
        <h2>Which language would you like to learn?</h2>
        <div className='Home-container-2-imgs hidden lg:flex flex-row mt-10 '>
          <a href='/english-course-adults' className='my-2 text-black hover:text-black font-medium lg:flex flex-col'><img className='Home-container-21-img' alt='img' src='/images/English.png' /><span className=''>English</span></a>
          <a href='/french-course-adults' className='my-2 text-black hover:text-black font-medium lg:flex flex-col'><img className='Home-container-21-img' alt='img' src='/images/French.png' /><span className=''>French</span></a>
          <a href='/spanish-course-adults' className='my-2 text-black hover:text-black font-medium lg:flex flex-col'><img className='Home-container-21-img' alt='img' src='/images/Spanish.png' /><span className=''>Spanish</span></a>
          <a href='/german-course-adults' className='my-2 text-black hover:text-black font-medium lg:flex flex-col'><img className='Home-container-21-img' alt='img' src='/images/German.png' /><span className=''>German</span></a>
          <a href='/mandarin-course-adults' className='my-2 text-black hover:text-black font-medium lg:flex flex-col'><img className='Home-container-21-img' alt='img' src='/images/Mandarin.png' /><span className=''>Mandarin</span></a>
          <a href='/japanese-course-adults' className='my-2 text-black hover:text-black font-medium lg:flex flex-col'><img className='Home-container-21-img' alt='img' src='/images/Japanese.png' /><span className=''>Japanese</span></a>
          <a href='/korean-course-adults' className='my-2 text-black hover:text-black font-medium lg:flex flex-col'><img className='Home-container-21-img' alt='img' src='/images/Korean.png' /><span className=''>Korean</span></a>
        </div>
        <Swiper className='pagi1 block lg:hidden mb-12 lg:mb-0' spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
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
                        <Popup sub="English" a1="/english-course-adults" a2="/english-course-kids" im="/images/English.png" src1="/images/adults-english@300x.png" src2='/images/Astronaut-English.png' />                    </SwiperSlide><SwiperSlide>
                        <Popup sub="French" a1="/french-course-adults" a2="/french-course-kids" im="/images/French.png" src1="/images/adults-french@300x.png" src2='/images/Astronaut-French-1.png' />                    </SwiperSlide><SwiperSlide>
                        <Popup sub="Spanish" a1="/spanish-course-adults" a2="/spanish-course-kids" im="/images/Spanish.png" src1="/images/adults-spanish@300x.png" src2='/images/Astronaut-Spanish-1.png' />                    </SwiperSlide><SwiperSlide>
                        <Popup sub="German" a1="/german-course-adults" a2="/german-course-kids" im="/images/German.png" src1="/images/adults-german@300x.png" src2='/images/Astronaut-Germany-1.png' />                    </SwiperSlide><SwiperSlide>
                        <Popup sub="Mandarin" a1="/mandarin-course-adults" a2="/mandarin-course-kids" im="/images/Mandarin.png" src1="/images/adults-mandarin@300x.png" src2='/images/Astronaut-Mandarin-1.png' />                    </SwiperSlide><SwiperSlide>
                        <Popup sub="Japanese" a1="/japanese-course-adults" a2="/japanese-course-kids" im="/images/Japanese.png" src1="/images/adults-japanese@300x.png" src2='/images/Astronaut-Japanese-1.png' />                    </SwiperSlide>
                    <SwiperSlide>
                        <Popup sub="Korean" a1="/korean-course-adults" a2="/korean-course-kids" im="/images/Korean.png" src1="/images/adults-korean@300x.png" src2='/images/Astronaut-Korean-1.png' />                    </SwiperSlide>
                </Swiper>
      </div>
      <div>
        <p className='w-full pb-10 text-center font-medium text-4xl mt-10'>FAQ</p>


        <div className='w-full px-10 lg:px-28 pt-20'>
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item rounded-none bg-white">
              <h2 class="accordion-header mb-0" id="flush-headingOne">
                <button class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left font-bold bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                  aria-expanded="false" aria-controls="flush-collapseOne">
                  How do I apply to become an Affiliate?
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse show"
                aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">Visit our page, click on the “Become Affiliate” button and follow the steps as explained there.</div>
              </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingTwo">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"
                  aria-expanded="false" aria-controls="flush-collapseTwo">
                  Why should I join Language Network Affiliate Marketing?
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">There is much to gain from our affiliate program! You get a commission from every person who joins our program on your recommendation, you learn how to generate leads and how to persuade people in lieu of getting sales.</div>
              </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingThree">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                  aria-expanded="false" aria-controls="flush-collapseThree">
                  Do I need any qualifications to become a Language Network Affiliate Marketer?
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">No, you do not need any particular qualifications to become an affiliate with us.
                </div>
              </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingFour">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour"
                  aria-expanded="false" aria-controls="flush-collapseFour">
                  What does a day as an Affiliate looks like?
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">A day in the life after joining our affiliate program would mean sending out links which include the specific discount code for a particular launch. Every new launch at the company would mean new link generations, sharing our posters and the link on your social media. You can talk about why that language launch would help potential leads.</div>
              </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingFive">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive"
                  aria-expanded="false" aria-controls="flush-collapseFive">
                  How do you select a Language Affiliate/ Partner?
                </button>
              </h2>
              <div id="flush-collapseFive" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">We have no particular requirements for our affiliate program. Prior experience in an affiliate program other than ours is a bonus, but it’s perfectly fine if you are a novice!</div>
              </div>
            </div>
            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingSix">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix"
                  aria-expanded="false" aria-controls="flush-collapseSix">
                  What other requirements are necessary for a Language Network Affiliate Marketer?
                </button>
              </h2>
              <div id="flush-collapseSix" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSix"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">Apart from a laptop and a stable internet connection, you need a PayPal account to become an Affiliate with us.</div>
              </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingSeven">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven"
                  aria-expanded="false" aria-controls="flush-collapseSeven">
                  Can I become an Affiliate while working at another job?
                </button>
              </h2>
              <div id="flush-collapseSeven" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSeven"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">Yes! You can become an Affiliate with us even while working another job. As long as you are still able to meet our requirements, there should be no issue if you work another job.</div>
              </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingEight">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEight"
                  aria-expanded="false" aria-controls="flush-collapseEight">
                  Can I get the work timings according to my convenience?
                </button>
              </h2>
              <div id="flush-collapseEight" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingEight"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">Absolutely! You can work according to your time and convenience- as long as you are still getting people to join our program, you may work when you can.</div>
              </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingNine">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNine"
                  aria-expanded="false" aria-controls="flush-collapseNine">
                  How will I know if my application is selected?
                </button>
              </h2>
              <div id="flush-collapseNine" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingNine"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">
                  Anyone can join our programme! You will get an email from our side about the status of your application, and we will guide you through the rest. If you get accepted, you will be added to the relevant WhatsApp group as well.</div>
              </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingTen">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTen"
                  aria-expanded="false" aria-controls="flush-collapseTen">
                  Once I become a Language Associate, how will I be contacted?
                </button>
              </h2>
              <div id="flush-collapseTen" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTen"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">Once you become a part of our program, you will be sent an email with confirmation, and will be added into the relevant Whatsapp groups. All this is, of course, after you fill the form here. </div>
              </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingEle">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEle"
                  aria-expanded="false" aria-controls="flush-collapseEle">
                  Do the people who join through my recommendation also get some benefits?
                </button>
              </h2>
              <div id="flush-collapseEle" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingEle"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">Yes, even the people who join our program using your link get a discount on the program that they have applied for. They will get a discount of 20% on the program of their choice. </div>
              </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingTwe">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwe"
                  aria-expanded="false" aria-controls="flush-collapseTwe">
                  Will it be very difficult to become an Affiliate?
                </button>
              </h2>
              <div id="flush-collapseTwe" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwe"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">Not at all! You just need to send in an application, await our email, and after our orientation you are in!</div>
              </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingThr">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThr"
                  aria-expanded="false" aria-controls="flush-collapseThr">
                  Is there an orientation for Language Affiliate/ Partner?
                </button>
              </h2>
              <div id="flush-collapseThr" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingThr"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">Yes, we will conduct an orientation session to ensure that you are completely sure about how the program takes place.</div>
              </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingFou">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFou"
                  aria-expanded="false" aria-controls="flush-collapseFou">
                  How much do I earn for my referrals as an Affiliate?
                </button>
              </h2>
              <div id="flush-collapseFou" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFou"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">For every referral that becomes an actual sale, you get a referral fee equal to 20% of the course sold.</div>
              </div>
            </div>


            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingFiv">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFiv"
                  aria-expanded="false" aria-controls="flush-collapseFiv">
                  How will I be paid for getting customers?
                </button>
              </h2>
              <div id="flush-collapseFiv" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingFiv"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">For every customer that you bring in, you will get a commission of 20% of the total course fee they enroll in. You will be paid every 20 days and sales made after the same will be pushed forward to the payout. </div>
              </div>
            </div>


            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingSit">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSit"
                  aria-expanded="false" aria-controls="flush-collapseSit">
                  How will I receive details about my performance?
                </button>
              </h2>
              <div id="flush-collapseSit" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSit"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">Once you become a part of our program, you will be given your login credentials. This will lead to your Easy Affiliate dashboard. This dashboard has all the details from lead status, to payment status, to daily performance.</div>
              </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingSev">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSev"
                  aria-expanded="false" aria-controls="flush-collapseSev">
                  Will I be trained after the selection?
                </button>
              </h2>
              <div id="flush-collapseSev" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingSev"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">Yes, we will have a training session for you that will teach you how to generate links, check your payment, and how to go about the program in detail.</div>
              </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingEig">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseEig"
                  aria-expanded="false" aria-controls="flush-collapseEig">
                  Do I have to explain the program in detail to make the sale?
                </button>
              </h2>
              <div id="flush-collapseEig" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingEig"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">No, you don’t have to explain the program in detail to make sales.
                  All you have to do is tell your clients why you love the program, and ensure they click on your link. Following this, our sales team will get in touch with them and do the rest.</div>
              </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingNin">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseNin"
                  aria-expanded="false" aria-controls="flush-collapseNin">
                  How will I receive my earnings ?
                </button>
              </h2>
              <div id="flush-collapseNin" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingNin"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">You will receive your earnings every 20 days. The earnings for all the following sales will be carried over to the next payment. A PayPal account needs to be set up for smooth transfer of your earnings.</div>
              </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-headingTe">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTe"
                  aria-expanded="false" aria-controls="flush-collapseTe">
                  How much money can I earn ?
                </button>
              </h2>
              <div id="flush-collapseTe" class="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTe"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">There is no limit on the amount of money you can earn. You will earn as little and as much as you are able to- it’s all on you</div>
              </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-heading20">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse20"
                  aria-expanded="false" aria-controls="flush-collapse20">
                  Where can I share my link ?
                </button>
              </h2>
              <div id="flush-collapse20" class="accordion-collapse border-0 collapse" aria-labelledby="flush-heading20"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">You can share your link with all people in your networks. This includes social media and other media that may help increase outreach.</div>
              </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-heading21">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse21"
                  aria-expanded="false" aria-controls="flush-collapse21">
                  How many people can use my code?
                </button>
              </h2>
              <div id="flush-collapse21" class="accordion-collapse border-0 collapse" aria-labelledby="flush-heading21"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">Any number of people who can use your code. It all depends on your ability to bring in more people who are genuinely interested.</div>
              </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-heading22">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse22"
                  aria-expanded="false" aria-controls="flush-collapse22">
                  How do I set my preferred payment option?
                </button>
              </h2>
              <div id="flush-collapse22" class="accordion-collapse border-0 collapse" aria-labelledby="flush-heading22"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">We are currently offering payment on Paypal and you need to have an account to become an Affiliate with us.</div>
              </div>
            </div>

            <div class="accordion-item border-l-0 border-r-0 rounded-none bg-white  ">
              <h2 class="accordion-header mb-0" id="flush-heading23">
                <button class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 font-bold text-left bg-white border-0 rounded-none transition focus:outline-none" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapse23"
                  aria-expanded="false" aria-controls="flush-collapse23">
                  What happens if I don’t update my account details before a payment cycle?
                </button>
              </h2>
              <div id="flush-collapse23" class="accordion-collapse border-0 collapse" aria-labelledby="flush-heading23"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body py-4 px-5">If you fail to update your account details before a payment cycle, your earnings will carry forward to the next payment cycle. This will keep happening till you add your account details.Kindly do not delay this process and ensure your details are added in the beginning itself.</div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-2xl font-semibold mt-20 mb-4">Still got questions?</h1>
        <h1 className="text-center">
          If you have any questions about our affiliate program, you can reach us at
        </h1>
        <h1 className="text-center mt-2"> <a className="text-black underline" href="mailto:marketing@thelanguagenetwork.co">marketing@thelanguagenetwork.co</a></h1>

      </div>
    </div>
  )
}
