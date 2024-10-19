import React from 'react';
import './dict.css';
import axios from 'axios'
import Loader from './../../Loader'
import Search from '../../Header/Searchbar'

import { useState, useEffect, Fragment } from 'react';
import { BsArrowRight } from 'react-icons/bs';



export default function Dict() {
    const [data, setdata] = useState()
    useEffect(() => {
        if (data == null) {
            axios.get('https://us-central1-thelanguagenetwork-b8126.cloudfunctions.net/app/displayD')
                .then(res => {


                    console.log(res.data)

                    setdata(res.data)

                })
        }
    }, [])
    const handleclick = (e) => {
        var clink = window.location.href
        var nlink = clink.concat("/", e)
        console.log(nlink)
        window.location.replace(nlink);
    }

    if (data) {
        return (
            <>
                {/* <p className=' pt-5 text-center text-2xl lg:text-5xl font-medium ' >Learn some words in french</p>
                <div className=' text-center bg-white py-6 sm:py-8 lg:py-12'>

                    <div className=' grid sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-8 items-center px-4 '>
                        {data.map((items, index) => {
                            return (
                                <div className='h-6/7 flex flex-col border rounded-lg py-4  justify-center items-center space-y-3 shadow-md   '>
                                    <button className='text-3xl font-bold text-[#13bfab]' onClick={() => handleclick(items.link)}>
                                        {items.title}
                                    </button>
                                </div>
                            );
                        })}

                    </div>
                </div> */}


                {/* ----------------------------- */}

                <div className='1 flex flex-col justify-center items-center bg-[#9850F4] text-white  '>

                    <div className=' text-3xl md:text-5xl font-light md:font-bold mt-24   md:tracking-wider '><h1>English - French Dictionary</h1></div>

                    <div className='flex space-x-1 md:space-x-6   mt-16  '>
                        <button className='flex items-center bg-[#8037DD] rounded-xl  px-4 h-14  '>
                            <img className='w-8 md:w-10  mr-2  ' src="/images/English.png" alt="" />
                            <span className='mr-2 text-xl'> English</span>
                        </button>

                        <button className=' w-10  '>

                            <img src="/images/arrowtwoway.png" alt="" />
                        </button>

                        <button className='flex items-center bg-[#8037DD] rounded-xl  px-4 h-14'>
                            <img className='w-8 md:w-10  mr-2  ' src="/images/French1.png" alt="" />
                            <span className='mr-2 text-xl'> French</span>
                        </button>
                    </div>

                    <div className='mt-20  mb-10 w-[25rem] '>
                        <Search />
                    </div>


                </div>

                <div className='2 md:px-32'>
                    <h1 className='text-center mt-10'>Interested in learning French?</h1>

                    <div className='grid grid-cols-2  md:grid-cols-3 mt-5'>
                        {data.map((items, index) => {
                            return (
                                <div className=' '>
                                    <button className=' flex   items-center rounded-md shadow-md  px-7 space-x-7' onClick={() => handleclick(items.link)}>
                                        <img className='w-16  ' src="/images/image9.svg" alt="" />
                                        <p className='ml-3 font-bold'>  {items.title}</p>

                                    </button>
                                </div>
                            );
                        })}


                    </div>
                </div>

                <div className='3 px-2 md:px-0'>
                    <div className='bg-[#EAEAEA] rounded-lg
                     md:w-1/4  h-60  md:ml-32  mt-10 pt-10 pl-10 leading-7     ' >

                        <h5 className='text-[#838383]    '>WORD OF THE DAY </h5>
                        <h2 className='text-[#701ED8]'>Je Déjeune</h2>
                        <h6 className='text-[#838383]'>verb</h6>
                        <h5 className='text-black '> I am having lunch</h5>


                        <div className='text-[#701ED8] flex items-center mt-9 space-x-2 '>
                            <a className='text-[#701ED8]' href="/dictionary"> Read More</a>

                            <BsArrowRight />
                        </div>
                    </div>


                </div>






                <div className='4 flex flex-col text-left px-6 md:px-32  space-y-9  md:space-y-7 mt-10 md:mt-32 md:mb-24   '>
                    <h2 className='text-xl font-bold '>About English-French Dictionary</h2>

                    <p className='text-sm md:text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                    <p className='text-sm md:text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                    <p className='text-sm md:text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className='5 my-10 mb-10'>
                    <div className='flex  w-full bg-[#EFEFEF]  '>
                        <div className='left w-1/2 flex flex-col justify-center left-0 md:pl-20  md:ml-24  mb-11 md:mb-0  '>

                            <div className='font-bold text-xs   lg:text-5xl   tracking-wide leading-loose text-left text-black'>Learn more than just <br /> “How is it going ? in  <br />French”
                            </div>

                            <div className='left-0 mt-4 '>
                                <div className=' inset-0 '>
                                    <button type="button" class="text-white bg-[#37CBA4] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  md:text-base px-6 md:py-3.5 text-center  "> Book a Free Session NOW!</button>

                                    {/* <button className=" bg-[#37CBA4] text-white  border border-teal-500 hover:bg-teal-500 hover:text-white active:bg-teal-600 font-bold  px-10  py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 ">
                    Start Learning
                  </button> */}
                                </div>
                            </div>


                        </div>

                        <div className='right w-1/2  md:ml-52   '>
                            <img src="/images/phrasebook/phrasebook.png" alt="phrasebook" />
                        </div>

                    </div>
                </div>


            </>

        )
    }
    else {
        return (
            <Loader colour='w' />
        )
    }
}