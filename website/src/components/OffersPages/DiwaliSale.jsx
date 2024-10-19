import React from 'react'

export default function DiwaliSale() {
    return (
        <>

            <div className='bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center  h-screen w-full text-center  bg-diwali-1 text-white'>
           <div>
            <h2 className=' text-xl md:text-3xl mt-10 pt-20'>Congratulations! You have unlocked the deal</h2>
            </div>
                <div>
                    <h1 className='mt-4 tracking-wide font-BerkshireSwash  text-white  text-2xl md:text-5xl pt-10'>Come learn A1 to B1 of any language with us, </h1>
                    <div className='flex flex-col items-center justify-center pt-4 pb-4'>
                    <h3><u className='mt-4 tracking-wide font-BerkshireSwash  text-white  text-4xl md:text-6xl'>And get A1 for free!</u></h3>
                    </div>

                </div>

                <div className='flex flex-col items-center justify-center pt-4 pb-4'>
                 {  /* <a href="/getstarted"><button className='mt-3 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 '>Call us to avail this offer</button></a>*/}
                    <a href="/terms-and-conditions"><p className='text-[12px] font-extralight '>Terms and Conditions Applied*</p></a>
                </div>
                
                <div className='px-5 pb-5    '>
                    <img src="/images/DiwaliDiya@300x1.svg" alt="" />
                </div>
               
            </div>


        </>
    )
}
