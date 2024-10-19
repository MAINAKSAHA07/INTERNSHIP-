import React from 'react'

function Dussehra_offerpost() {
    return (
        <>
            <div>
                <div className='flex bg-gradient-to-r  from-[#ffcc00] to-[#FFFFFF] h-96  w-full  lg:px-10'>

                    <div className='flex flex-col  w-1/2 '>
                        <div className='font-medium text-xs   lg:text-3xl text-left  mx-3 lg:mx-auto mt-16  tracking-wide leading-loose'>
                            <h2 className=' text-white   font-semibold lg:font-bold text-2xl lg:text-5xl '  >
                                Dussehra Special <br /> Discount
                            </h2>
                            <div className=' text-white lg:text-2xl text-sm mt-4'>Save on courses and boost your <br /> language skills</div>


                        </div>

                        <div className='relative  px-2 sm:mt-6 p-10 lg:p-0 '>
                            <a href="/getstarted">
                                <button className=" bg-[#FFFFFF] hover:bg-[#d1c6c6] text-black font-bold lg:font-bold rounded bottom-0 
                                py-3  px-8  lg:py-4 lg:px-14  ">
                                    Get Started
                                </button>
                            </a>
                        </div>
                    </div>

                    <div className=' items-center relative h-60  lg:h-96 m-auto  w-60  lg:w-96   ' >
                        <div className='absolute inset-y-0 right-0 mt-8 p-3   '>
                            <img src="/images/Dusshera.png" alt="Dussehra_offerpost" />
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Dussehra_offerpost
