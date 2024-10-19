import React from 'react';
import './AdultCourses';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

export default function PricingTable(props) {

    //Add Icons from :- https://fontawesome.com/v4/icons/
    const icons = ['fa-adjust', 'fa-briefcase', "fa-cubes ", 'fa-graduation-cap', "fa-desktop", "fa-file-text-o", "fa-pencil-square-o", "fa-graduation-cap"];

    return (


        <>

        </>


        // <div class="demo py-20 sm:px-2 lg:px-28 fadeIN">
        //     <div class="container">

        //         <div class="row hidden lg:flex flex-row flex-wrap text-left justify-center">
        //             {
        //                 props.TableData.map((data, i) => {
        //                     return (
        //                         <div class="col-md-3 col-sm-6 my-3 flex justify-start">
        //                             <div class=" px-5 border-2 border-slate-300 pricingTable lg:mr-1 mr-0 h-full space-y-3 hover:border-slate-800">
        //                                 <div className="pt-10">
        //                                     <h1 className="text-xl font-semibold pb-2">{data.title}</h1>
        //                                     <h3 class="text-2xl font-bold text-[#13bfab]">Level {data.lvlName}</h3>
        //                                 </div>

        //                                 <div class="">
        //                                     {/* <i class={`fa ${icons[i]}`}></i> */}
        //                                     <div class="text-3xl font-semibold flex flex-col"> ₹{data.DiscPrice} <span className='text-[1.4rem] line-through'>{data.OgPrice}</span>  </div>
        //                                 </div>
        //                                 <div className="">
        //                                     <div >
        //                                         <span className="text-sm text-lg font-semibold text text-slate-700 ">Curriculum Includes</span>
        //                                     </div>
        //                                     <br />
        //                                     <div className="mt-3 h-[2rem] flex  items-center mb-10">
        //                                         <span className="text-sm text-slate-500">
        //                                             {data.includes}
        //                                         </span>
        //                                     </div>

        //                                     <div>

        //                                     </div>

        //                                     <div className="pb-4"><a href={data.link} class="text-sm text-teal-500 hover:text-teal-400 inline-flex items-center">View detailed Curriculum</a></div>

        //                                 </div>
        //                                 {/* <div class="pricing-content">
        //                                     <ul>
        //                                         {
        //                                             data.content.map((cont, i) => {
        //                                                 return (


        //                                                     <li><b>{i + 1}.</b> {cont}</li>
        //                                                 )

        //                                             })
        //                                         }

        //                                     </ul>
        //                                 </div> */}
        //                                 <div class="pricingTable-signup">
        //                                     <a href={data.Link}>Buy Now</a>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     )
        //                 })}
        //         </div>
        //         <Swiper className='pagi1 flex lg:hidden justify-center' spaceBetween={5} loop={true} loopFillGroupWithBlank={true}
        //             breakpoints={{
        //                 640: {
        //                     slidesPerView: 1

        //                 },
        //                 768: {
        //                     slidesPerView: 4
        //                 }
        //             }}
        //             pagination={{
        //                 "clickable": true
        //             }} navigation={true} autoplay={{
        //                 "delay": 2500,
        //                 "disableOnInteraction": false
        //             }}
        //         >
        //             {
        //                 props.TableData.map((data, i) => {
        //                     return (
        //                         <SwiperSlide>
        //                             <div class="col-md-3 col-sm-6 my-3 flex justify-start px-10">
        //                                 <div class="px-5 border-2 border-slate-800 pricingTable lg:mr-1 mr-0 h-full space-y-3">
        //                                     <div className="pt-10">
        //                                         <h1 className="text-xl font-semibold pb-2">{data.title}</h1>
        //                                         <h3 class="text-2xl font-bold text-[#13bfab]">Level {data.lvlName}</h3>
        //                                     </div>

        //                                     <div class="">
        //                                         {/* <i class={`fa ${icons[i]}`}></i> */}
        //                                         <div class="text-3xl font-semibold flex flex-col"> ₹{data.DiscPrice} <span className='text-[1.4rem] line-through'>{data.OgPrice}</span>  </div>
        //                                     </div>
        //                                     <div className="">
        //                                         <div >
        //                                             <span className="text-sm text-lg font-semibold text text-slate-700 ">Curriculum Includes</span>
        //                                         </div>
        //                                         <br />
        //                                         <div className="h-[2rem] flex  items-center mb-10">
        //                                             <span className="text-sm text-slate-500">
        //                                                 {data.includes}
        //                                             </span>
        //                                         </div>

        //                                         <div>

        //                                         </div>

        //                                         <div className="pb-4"><a href={data.link} class="text-sm text-teal-500 hover:text-teal-400 inline-flex items-center">View detailed Curriculum</a></div>

        //                                     </div>
        //                                     {/* <div class="pricing-content">
        //                                     <ul>
        //                                         {
        //                                             data.content.map((cont, i) => {
        //                                                 return (


        //                                                     <li><b>{i + 1}.</b> {cont}</li>
        //                                                 )

        //                                             })
        //                                         }

        //                                     </ul>
        //                                 </div> */}
        //                                     <div class="pricingTable-signup">
        //                                         <a href={data.Link}>Buy Now</a>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </SwiperSlide>
        //                     )
        //                 })}

        //         </Swiper>
        //     </div>
        // </div>

    )
}
