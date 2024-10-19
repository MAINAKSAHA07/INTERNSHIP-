import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import axios from "axios";
import Loader from './../../Loader'
import Search from '../../Header/Searchbar'
import Voice from './../PhraseBook/Voice'
function DictionaryDetail() {

  const [value, setvalue] = useState("")
  const [data, setdata] = useState()
  const [dictionaryItem, setDictionaryItem] = useState()
  let val = useParams();
  useEffect(() => {
    axios.post('https://us-central1-thelanguagenetwork-b8126.cloudfunctions.net/app/contentD', { w: val.title })
      .then(res => {
        setdata(res.data)

        setDictionaryItem(res.data.engSentence)
        console.log(dictionaryItem)




      })
      .catch(err => {
        console.log(err)
      })


  }, [])

  var initial_url = window.location.href
  var url = initial_url.split('/');

  var updated_url = url[url.length - 1];
  console.log(updated_url);

  const handleclick = (e) => {
    var clink = window.location.href
    var nlink = clink.concat("/", e)
    console.log(nlink)
    window.location.replace(nlink);
  }

  var link = window.location.href.concat("/")

  if (data) {
    return (

      // ml-24
      <div>


        <div className='mx-24 md:grid md:grid-cols-2 items-center mt-5 md:mt-16 hidden md:visible  '>

          <div className=' col-span-1 '>
            <div className='
             hidden md:visible md:flex  space-x-2      
  
               '>
              {/* {breadcrumbs.map(({
                  match,
                  breadcrumb
                }) => (
                  <div className='flex text-black  ' key={match.pathname}>
                    <Link to={match.pathname}>{breadcrumb}></Link>
                  </div>
                ))} */}


              <Link to={"/dictionary"}>English-French</Link><div>{'>  '}</div>
              <Link to={"/dictionary/fruits"}>{data.title}</Link><div>{'>  '}</div>
              <Link className='capitalize ' to={() => { document.body.scrollTop = 0; }}>{updated_url}</Link><div>{'  '}</div>

            </div>
          </div>

          <div className=' col-span-1'>
            <Search />
          </div>
        </div>



        <div className='md:ml-24  md:mx-24 md:grid md:grid-cols-2 mt-36 border-b-2 border-[#8037DD] pb-20  '>

          <div className=' col-span-1 ml-10 '>
            {data.engSentence.map((items, index) => {
              return (

                <>
                  <div className='flex items-center  gap-x-4'>
                    <h2 className=' capitalize text-4xl md:text-6xl font-bold  border-b-2 border-[#8037DD] border-spacing-1.5 '>{data.words[index]}</h2>
                    <Voice msg={data.trans[index]} />
                  </div>

                  <p className='text-[#808080] mt-10 text-xl'>Translation :</p>
                  <p className='text-2xl font-bold mt-3'>{data.trans[index]}</p>

                </>


              )
            })}
          </div>


          <div className=' col-span-1  px-10   '>
            <img src="/images/Apple.png" alt="" />
          </div>

        </div>


        <div className='md:ml-24 '>

          <div className='grid grid-cols-2  ml-10 '>



            <div className='col-span-1 '>
              {data.engSentence.map((items, index) => {
                return (

                  <>


                    <h3 className=' text-xl  md:text-2xl  border-[#8037DD] mt-5'>Examples of <span className=' font-bold'> '{data.words[index]} '</span> in a sentence</h3>

                    <p className='text-[#808080] mt-5 text-sm md:text-lg '>1 <span className=''>{items[0]}</span></p>
                    <p className='text-[#808080] mt-3 text-sm md:text-lg pb-4 '>2 <span>{items[1]}</span></p>
                  </>
                )
              })}
            </div>
            <div className='col-span-1 '>
              {data.frenchSentence.map((items, index) => {
                return (

                  <>

                    <h3 className=' text-xl  md:text-2xl  border-[#8037DD] mt-5'>Examples of <span className=' font-bold'> '{data.trans[index]} '</span> in a sentence</h3>

                    <p className='text-[#808080] mt-5 text-sm md:text-lg '>1 <span className=''>{items[0]}</span></p>
                    <p className='text-[#808080] mt-3 text-sm md:text-lg pb-4 '>2 <span>{items[1]}</span></p>
                  </>
                )
              })}
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















      </div >
    )
  } else {
    return (
      <div>
        <Loader colour='w' />
      </div>
    )
  }

}

export default DictionaryDetail


  // < tr className = 'tir' >
  //                 <td className='tid'>{items[0]}</td>
  //                 <td className='tid'>{items[1]}</td>
  //                 <td className='tid'>{data.words[index]}</td>
  //                 <td className='tid'>{data.trans[index]}</td>
  //                 <td className='tid'><Voice msg={data.trans[index]} /></td>
  //               <tr/ > 