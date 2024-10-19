import React from 'react'
import { Grid } from "@material-ui/core";
import PostCard from "./PostCard";
import axios from "axios";
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Loader from './../../../Loader'


export default function Blogger() {
    let navigate = useNavigate();
    const [c, setc] = useState('All')
    const [data, setdata] = useState();
    var lst = []
    useEffect(() => {
        if (data == null) {
            axios.get('https://us-central1-thelanguagenetwork-b8126.cloudfunctions.net/app/blogslistings')
                // axios.get('http://localhost:4005/blogslistings')

                .then(res => {
                    var data = res.data
                    data = data.reverse

                    console.log(res.data)
                    // const regex = /(<([^>]+)>)/ig;
                    // const result = i.content.replace(regex, '');
                    setdata(res.data.reverse())
                    // lst = 
                    // data.reverse()
                })
        }
    }, [c])





    const extractContent = (s) => {
        const span = document.createElement('span');
        span.innerHTML = s;
        var value = (span.textContent || span.innerText).split('.')[0]
        return value
    };
    const handleclick = (e) => {
        var clink = window.location.href
        var nlink = clink.concat("/", e)
        console.log(nlink)
        window.location.replace(nlink);
    }
    const changec = (e) => {
        console.log(e)
    }
    if (data) {
        return (
            <div className="py-16">
                {/* <div>
                    <p>Filter</p>
                    <select placeholder='' onChange={(e) => {
                        setc(e.target.value)
                    }}>
                        <option value="All" >ALL</option>
                        <option value="Language">Language</option>
                        <option value="Culture/Work Culture">Culture / Work Culture </option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="How to Blogs/Study Tips/Tricks "> How to Blogs/ Study Tips/ Tricks </option>
                        <option value="Education and Examination">Education and Examination</option>
                        <option value="Food">Food</option>
                        <option value="Festivals">Festivals</option>
                        <option value="Learning Resources">Learning Resources</option>
                        <option value="Literature"> Literature </option>
                        <option value="Editor's Choice">Editor's Choice</option>

                    </select>

                </div> */}

                <div className=' grid  grid-cols-2 md:grid-cols-5 gap-x-8  '>

                    <button className=" shadow-sm mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  "  onClick={(e) => setc(e.target.value)} value="All" >ALL</button>
                    <button className=" shadow-sm mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  " onClick={(e) => setc(e.target.value)} value="Language">Language</button>
                    <button className=" shadow-sm mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  " onClick={(e) => setc(e.target.value)} value="Culture / Work Culture">Culture / Work Culture </button>
                    <button className=" shadow-sm mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  " onClick={(e) => setc(e.target.value)} value="Entertainment">Entertainment</button>
                    <button className=" shadow-sm mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  " onClick={(e) => setc(e.target.value)} value="How to Blogs/Study Tips/Tricks "> How to Blogs/ Study Tips/ Tricks </button>
                    <button className=" shadow-sm mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  " onClick={(e) => setc(e.target.value)} value="Education and Examination">Education and Examination</button>
                    <button className=" shadow-sm mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  " onClick={(e) => setc(e.target.value)} value="Food">Food</button>
                    <button className=" shadow-sm mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  " onClick={(e) => setc(e.target.value)} value="Festivals">Festivals</button>
                    <button className=" shadow-sm mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  " onClick={(e) => setc(e.target.value)} value="Learning Resources">Learning Resources</button>
                    <button className=" shadow-sm mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  " onClick={(e) => setc(e.target.value)} value="Literature"> Literature </button>
                    <button className=" shadow-sm mt-4 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  " onClick={(e) => setc(e.target.value)} value="Editor's Choice">Editor's Choice</button>
                </div>


                <ol>
                    <div>
                        <div className="flex flex-wrap">
                            {data.map((items, index) => {
                                if (items.summary == c || c == 'All') {
                                    console.warn(c)
                                    return (
                                        <div class="p-4 md:w-1/3">
                                            <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={items.smimg} alt="blog" />
                                                <div class="p-6">
                                                    <h1 class="title-font text-lg font-semibold text-gray-900 mb-3">{items.title}</h1>
                                                    <p class="leading-relaxed mb-3 text-sm">{extractContent(items.summary)}</p>
                                                    <div class="flex items-center flex-wrap ">
                                                        <button onClick={() => handleclick(items.link)} class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 text-[#13BFAB]">Learn more
                                                            <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                                <path d="M5 12h14"></path>
                                                                <path d="M12 5l7 7-7 7"></path>
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );

                                }
                                else {
                                    return (null)
                                }
                            })}
                        </div>
                    </div>
                </ol>

            </div>
        )
    }
    return (
        <Loader colour='w' />
    )
};




