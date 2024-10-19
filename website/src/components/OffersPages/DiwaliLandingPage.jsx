import React from 'react'

const languages = [
    {
        id: 1,
        lang: "French",
        src: "/images/French.png",
        myStyle: {
            marginRight:"10000px"
        }
    },
    {
        id: 2,
        lang: "Spanish",
        src: "/images/Spanish.png",
        myStyle: {
            marginRight:"10000px"
        }
    },
    {
        id: 3,
        lang: "German",
        src: "/images/German.png",
        myStyle: {
            marginRight:"10000px"
        }
    },
    {
        id: 4,
        lang: "English",
        src: "/images/eng.svg",
        myStyle: {
            // marginRight:"10000px"
            // margin:"20px"
        }
    },
    {
        id: 5,
        lang: "Mandarin",
        src: "/images/Mandarin.png",
        myStyle: {
           marginRight:"2000px"

        }
    },
    {
        id: 6,
        lang: "Japanese",
        src: "/images/Japanese.png",
        myStyle: {
            // margin: "8px",
            marginRight:"10000px"
        }
    },
    {
        id: 7,
        lang: "Korean",
        src: "/images/Korean.png",
        myStyle: {
            // margin: "8px",
            marginRight:"10000px"
        }

    },
]

export default function DiwaliLandingPage() {

    return (
        <>
            <div className='bg-no-repeat bg-cover bg-center flex flex-col justify-center items-center  h-screen w-full text-center  bg-diwali-1 text-white'>
                <div>
                    <h1 className='font-BerkshireSwash text-5xl md:text-7xl  text-white'>Diwali Sale</h1>
                    <p classNmae="mt-4 tracking-wide text-sm  md:text-xl font-thin  " >Take your celebration to the next level with our special Diwali offer.</p>
                    <a href="https://tripetto.app/run/1526BMVPC8"><button className='mt-3 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 '>Unlock the deal</button></a>
                    <a href="/terms-and-conditions"><p className='text-[12px] font-extralight '>Terms and Conditions Applied*</p></a>

                </div>
                <div className='   '>
                    <img src="/images/DiwaliDiya@300x1.svg" alt="" />
                </div>
            </div>

            {/* <div className='bg-gradient-to-b from-[#843EAF] to-[#4B0D61] '>

                <div className='bg-diwali-2  bg-no-repeat bg-cover bg-center w-full h-60  '></div>
            </div> */}


            <div className='bg-gradient-to-b from-[#843EAF] to-[#4B0D61] w-full flex flex-col '>

                <div className='md:ml-24 md:mr-24'>
                    {/* <div className='flex flex-col '>
                        <div className='md:px-24  px-2  '>
                            <div className='text-center text-white px-2 md:px-20 rounded-md border-dashed border-2 border-[#FEB80080] bg-[#843EAF] flex flex-col '>
                                <h3 className='font-BerkshireSwash pt-5 text-xl md:text-4xl  '>It’s the brightest, most exciting time of the year! <br />
                                    Just like our language classes!
                                </h3>
                                <p className='pt-5 text-xs md:text-xl md:font-thin'>We are here to help your Diwali holidays become even <br />
                                    more exciting and productive!
                                    But first, here is what we offer:
                                </p>
                                <div className='pt-4 pb-4 flex justify-center'>
                                    <img src="/images/features_ 1.svg" alt="" />
                                </div>
                            </div></div> */}
                <div className='flex flex-col '>
                    <div className='md:px-24  px-2'>
                        <div className='text-center text-white px-2 md:px-20 pl-20 rounded-md border-dashed border-2 border-[#FEB80080] bg-[#843EAF] flex flex-col '>
                            <h3 className='font-BerkshireSwash pt-5 text-xl md:text-4xl  '>It’s the brightest, most exciting time of the year! <br />
                                Just like our language classes!
                            </h3>
                            <p className='pt-5 text-xs md:text-xl md:font-thin'>We are here to help your Diwali holidays become even <br />
                                more exciting and productive!
                                But first, here is what we offer:
                            </p>
                            <div className='pt-4 pb-4 flex justify-center'>
                                <img src="/images/features_ 1.svg" alt="" />
                            </div>
                        </div></div>

                        <div className='flex flex-col items-center justify-center pt-4'>
                            <a href="https://tripetto.app/run/1526BMVPC8"><button className='mt-3 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 '>Unlock the deal</button></a>
                            <a href="/terms-and-conditions"><p className='text-white  text-[9px] md:text-[12px] font-extralight '>Terms and Conditions Applied*</p></a>
                        </div>
                    </div>
                </div>


                <div className='flex flex-col text-white text-center pt-5 '>
                    <div className='text-sm md:text-2xl font-semibold'>Choose from the following languages and boost your cognitive </div>
                    <div className='text-sm md:text-2xl font-semibold'>   qualities over your Diwali vacations!</div>
                    <div className='text-center md:ml-24 pt-4  '>
                        <div className='grid grid-col-2 md:grid-cols-4 gap-4 place-content-evenly '>
                            {
                                languages.map(({ id, lang, src, myStyle }) => (
                                    <a href="https://tripetto.app/run/1526BMVPC8">
                                        <button key={id} className=' w-[200px]  flex items-center justify-end   text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 '>
                                            <div  className='w-[49px] left-[171px]  '> 
                                            <img style={myStyle}  src={src} alt="" />
                                            </div>

                                            <p className='w-[69px] font-bold ml-2  '>{lang}</p>
                                        </button>
                                    </a>
                                )

                                )
                            }



                        </div>
                    </div>


                </div>


                <div className=' md:px-28 mt-5 '>
                    <div className='  text-white px-2 md:px-20 rounded-md border-dashed border-2 border-[#FEB80080] bg-[#843EAF] flex flex-col  '>
                        <div className='md:ml-10 '>
                            <h3 className='md:ml-32  ml-2  mt-5 font-semibold text-xl'>Choose us over others! Here’s why</h3>
                            <ul className='list-disc ml-3 md:ml-32  mb-5 mt-2 text-xs md:text-base'>
                                <li>We add fun to learning!</li>
                                <li>We go that extra mile with our training; all our classes are personalised.
                                </li>
                                <li>‘Implicit Learning’ is our motto!
                                </li>
                                <li>Our classes are highly interactive. With us, it’s “Those who talk, learn more!”
                                </li>
                                <li>We offer an Instant Review right after your course’s completion.
                                </li>
                                <li>Course Completion Certificate & Marksheet
                                </li>
                                <li>Our Mock Tests/Exercises will boost your learning!
                                </li>
                                <li>International Exams Preparation
                                </li>
                                <li>Free Study Abroad Consultation post the course.
                                </li>
                                <li>We offer Placement Oriented Courses
                                </li>
                                <li className='font-semibold'>NO-COST EMI Available
                                </li>



                            </ul>
                        </div>
                    </div>

                    <div>
                        <div className='flex flex-col items-center justify-center pt-4 pb-4'>
                            <a href="https://tripetto.app/run/1526BMVPC8"><button className='mt-3 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 '>Unlock the deal</button></a>
                            <a href="/terms-and-conditions"><p className='text-white  text-[9px] md:text-[12px] font-extralight '>Terms and Conditions Applied*</p></a>
                        </div>
                    </div>
                </div>

            </div>



        </>
    )
}
