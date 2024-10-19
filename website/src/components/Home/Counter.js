import React, { useState } from 'react'
import CountUp from 'react-countup';
export default function Counter() {
    return (
        <>

            

            <div>
                <div class="bg-white py-6 sm:py-8 lg:py-12">
                    <div class=" max-w-screen-2xl px-4 md:px-8 mx-auto">
                        <div class=" grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                            <div class="h-6/7 flex flex-col border rounded-lg py-4 justify-center items-center space-y-3 shadow-md">
                                <h1 className="text-3xl font-bold text-[#13bfab]"><CountUp end={7} duration={3} />+</h1>
                                <span className="text-xl font-semibold px-3">Language Codex</span>
                                {/* <h3 class="text-lg md:text-xl font-semibold mb-2">Growth</h3>
                            <p class="text-gray-500 mb-4">Filler text is dummy text which has no meaning however looks very similar to real text.</p>
                            <a href="#" class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100 mt-auto">More</a> */}
                            </div>
                            <div class="h-6/7 flex flex-col border rounded-lg py-4  justify-center items-center space-y-3 shadow-md">
                                <h1 className="text-3xl font-bold text-[#13bfab]"><CountUp end={5000} duration={3} />+</h1>
                                <span className="text-xl font-semibold px-3">Happy Learners </span>
                            </div>
                            <div class="h-6/7 flex flex-col border rounded-lg py-4 justify-center items-center space-y-3 shadow-md">
                                <h1 className="text-3xl font-bold text-[#13bfab]"><CountUp end={150} duration={3} />+</h1>
                                <div className="flex justify-center items-center content-center">
                                    <span className="text-xl font-semibold px-3">Alpha Mentors </span>
                                </div>
                            </div>
                            <div class="h-6/7 flex flex-col border rounded-lg py-4  justify-center items-center space-y-3 shadow-md">
                                <h1 className="text-3xl font-bold text-[#13bfab]"><CountUp end={50000} duration={3} />+</h1>
                                <span className="text-xl font-semibold px-3">Hours of enlightenment</span>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
