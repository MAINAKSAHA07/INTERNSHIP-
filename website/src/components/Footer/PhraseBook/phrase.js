import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import FrontBlocks from './FrontBlocks'
import { BsSearch } from 'react-icons/bs'
import Lang from './Lang'
import Cast from './Cast'
import Loader from '../../Loader'
import Search from '../../Header/Searchbar'

const tilesData = [
  {
    id: 1,
    text: "Merci Beaucoup",
    translation: " thank you very much",
    link: "/phrasebook/thank-you-very-much/how-do-you-say-thank-you-very-much-in-french"
  },
  {
    id: 2,
    text: "Bonjour",
    translation: "hello",
    link: "/phrasebook/hello/how-do-you-say-hello-in-french"
  },
  {
    id: 3,
    text: "Pardon",
    translation: "excuse me",
    link: "/phrasebook/pardon/how-do-you-say-pardon-in-french"
  },
  {
    id: 4,
    text: "De Rien",
    translation: "you’re welcome",
    link: "/phrasebook/you’re-welcome/how-do-you-say-you’re-welcome-in-french"
  },
  {
    id: 5,
    text: "Au plaisir",
    translation: "nice to meet you",
    link: "/phrasebook/nice-to-meet-you/how-do-you-say-nice-to-meet-you-in-french"
  },
  {
    id: 6,
    text: "Ça va",
    translation: " I am ok",
    link: "/phrasebook/i-am-ok/how-do-you-say-i-am-ok-in-french"
  },

]

function Phrase() {
  const [data1, setData1] = useState()
  const [val, setVal] = useState("French")

  const Values = () => {
    switch (val) {
      case 'French':
        return (<Cast imp="French" />)
        break;
      case 'Spanish':
        return (<Cast imp="Spanish" />)
        break;
      case 'German':
        return (<Cast imp="German" />)
        break;
      // case 'Mandarin':
      //     return (<Cast imp="French"/>)
      //     break;
      // case 'Japanese':
      //     return (<Cast imp="French"/>)
      //     break;
      // case 'Korean':
      //     return (<Cast imp="French"/>)
      //     break;
      default:
        return ""
        break;
    }
  }
  useEffect(() => {
    // https://us-central1-thelanguagenetwork-b8126.cloudfunctions.net/app
    axios.get('https://us-central1-thelanguagenetwork-b8126.cloudfunctions.net/app').then((res) => {
      setData1(res.data)
      // console.log(data1)
    }
    ).catch((err) => console.log(err))
  }, [])

  if (data1) {
    return (
      <div>
        <div className=" lg:block">
          {/* --------------- */}
          <div className="">
            <div className="bg-[#eaf1f8]">
              <div className="lg:flex flex-row items-center justify-center pt-10" >
                <div className="bg-[#eaf1f8] w-full lg:w-1/2 lg:flex flex-col lg:pl-48 px-10 space-y-3">
                  <div className="font-bold text-4xl">RESOURCES FOR EVERYBODY</div>
                  <div className="pt-3">
                    <span>The best way to learn a language is total immersion.</span>
                    <br />
                    <span>Learn new languages intuitivel, with translations.</span>
                  </div>
                </div>
                <div className="bg-[#eaf1f8] w-full lg:w-1/2 lg:px-10 pt-14 lg:pt-0">
                  <img className="px-10 lg:px-0 w-full lg:w-3/4" src="/images/phrasebook.png" alt="" />
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#eaf1f8" fill-opacity="1" d="M0,192L60,170.7C120,149,240,107,360,96C480,85,600,107,720,122.7C840,139,960,149,1080,144C1200,139,1320,117,1380,106.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
          </div>
          {/* --------------------- */}


          <div className='  flex justify-center '>

            <div class="relative mb-6 w-96  ">
              {/* <div class="flex absolute inset-y-0 right-0 items-center pl-3 pointer-events-none">
                <BsSearch className='w-5 h-5 mr-3 text-gray-500 ' />

              </div> */}


              {/* <input class="placeholder-black placeholder-opacity-100 ...  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  border-black bg-[#EAF1F8]" placeholder="What would you like to search?"></input> */}

              <Search />

            </div>

          </div>

          <div className="px-32 lg:px-0 container flex flex-col lg:flex-row space-y-7 lg:space-y-0 lg:space-x-7 justify-center py-14 ">
            <button className="focus:outline-none shadow-md" onClick={() => setVal("French")}><Lang img="French" /></button>
            <button className="focus:outline-none shadow-md" onClick={() => setVal("Spanish")}><Lang img="Spanish" /></button>
            <button className="focus:outline-none shadow-md" onClick={() => setVal("German")}><Lang img="German" /></button>
          
          </div>
          <div>
            <Values />
          </div>



         

          <div className='flex  w-full bg-[#EFEFEF] '>
            <div className='left w-1/2 flex flex-col justify-center left-0 md:pl-20  md:ml-24   '>

              <div className='font-bold text-xs   lg:text-3xl  tracking-wide leading-loose text-left'>Learn more than just <br /> “Thank you very much” <br /> and other useful phrases <br /> that French speakers <br /> really use!
              </div>

              <div className='left-0 mt-4 '>
                <div className=' inset-0 '>
                  <button type="button" class="text-white bg-[#37CBA4] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center "> Start Learning</button>

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




          <div className='w-full'>
            <div className='max-w-screen-lg  mx-auto flex flex-col justify-center w-full h-full text-center p-10  '>

              <div className='text-xl lg:text-3xl font-medium'>
                Explore Our PhraseBook
              </div>

              <div className='grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6    lg:h-64 mt-3 lg:mt-6  '>
                {tilesData.map(({ id, text, translation, link }) => (
                  <a href={link}>
                    <button
                      className='border-solid border-2 border-gray-300   rounded-md w-40     lg:w-64   '
                      key={id}>

                      <div className='flex items-center  md:ml-3 '>
                        <img className='' src="images/Group13.svg" alt="" />
                        <div className='underline underline-offset-4 font-bold text-sm lg:text-xl p-2 lg:p-6 '> {text}</div>
                      </div>

                      <div className=' flex ml-2 md:ml-10 '>
                        <div className='hidden '>abcd</div>
                        <div className='mt-0 md:mt-2 m-3 text-xs  lg:text-sm left  '>{translation}</div>
                      </div>




                    </button>
                  </a>

                ))}




              </div>

            </div>
          </div>

          <div>
            <div className="">

            </div>

          </div>
        </div>
        <div className="bg-[#eaf1f8]">
        </div>
      </div>

    )
  }
  else {
    return (
      <Loader colour='w' />
    )
  }

}
export default Phrase