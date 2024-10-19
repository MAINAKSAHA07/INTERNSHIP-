import React from 'react';
import Loader from './../../Loader'
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import Voice from './../PhraseBook/Voice'
import './Dicat.css'
import Search from '../../Header/Searchbar'
import { BsArrowRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'


function Dicat(props) {

  const [value, setvalue] = useState("")
  const [data, setdata] = useState()
  let val = useParams();
  useEffect(() => {
    axios.post('https://us-central1-thelanguagenetwork-b8126.cloudfunctions.net/app/contentD', { w: val.title })
      .then(res => {
        setdata(res.data)
        console.log(data)




      })
      .catch(err => {
        console.log(err)
      })


  }, [])

  const handleclick = (e) => {
    var clink = window.location.href
    var nlink = clink.concat("/", e)
    console.log(nlink)
    window.location.replace(nlink);
  }


  if (data) {
    return (

      // old code starts here 
      // <div className='flex flex-col  place-items-center'>
      //   <div>
      //     <p className=' pt-5 text-center text-lg lg:text-lg font-medium ' >Learn the most common words for {data.title} in french</p>
      //   </div>
      //   <div className=' '>

      //     {/* <table className=' border-separate border-spacing-6 table-fixed'>
      //       <thead>
      //         <tr>
      //           <th>Word</th>
      //           <th>translation</th>
      //           <th>pronunciation</th>
      //         </tr>
      //       </thead>
      //       <tbody>

      //         {data.words.map((items, index) => {
      //           return (
      //             <tr>
      //               <td>{items}</td>
      //               <td>{data.trans[index]}</td>
      //               <td><Voice msg={data.trans[index]} /></td>
      //             </tr>

      //           )
      //         })}

      //       </tbody>
      //     </table> */}

      //   </div>

      //   <div class="tbl-header">
      //     <table cellpadding="0" cellspacing="0" border="0" className='tableid'>
      //       <thead>
      //         <tr>
      //           <th className='tih'>Word</th>
      //           <th className='tih'>translation</th>
      //           <th className='tih'>pronunciation</th>
      //         </tr>
      //       </thead>
      //     </table>
      //   </div>
      //   <div class="tbl-content">
      //     <table cellpadding="0" cellspacing="0" border="0" className='tableid'>
      //       <tbody>
      //         {data.words.map((items, index) => {
      //           return (
      //             <tr className='tir'>
      //               <td className='tid'>{items}</td>
      //               <td className='tid'>{data.trans[index]}</td>
      //               <td className='tid'><Voice msg={data.trans[index]} /></td>



      //             </tr>



      //           )
      //         })}


      //         {/* <h1>testing</h1>
      //         {data.engSentence.map((items, index) => {
      //           return (
      //             <tr className='tir'>
      //               <td className='tid'>{items[0]}</td>
      //               <td className='tid'>{items[1]}</td>


      //               <td className='tid'>{data.trans[index]}</td>
      //               <td className='tid'><Voice msg={data.trans[index]} /></td>



      //             </tr>)

      //         })} */}

      //       </tbody>
      //     </table>
      //   </div>

      // </div>

      //old code ends here


      // new changes 

      <>
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


        <div>
          
          <div className='
           hidden md:visible md:flex md:ml-28 md:mt-20 space-x-2      

             '>
              {/* {breadcrumbs.map(({
                match,
                breadcrumb
              }) => (
                <div className='flex text-black  ' key={match.pathname}>
                  <Link to={match.pathname}>{breadcrumb}></Link>
                </div>
              ))} */}


              <Link to={"/dictionary"}>English-Freanch</Link><div>{'>  '}</div>
              <Link to={"/dictionary/fruits"}>{data.title}</Link><div>{'>  '}</div>
              {/* <Link to={() => { document.body.scrollTop = 0; }}>hi</Link><div>{'  '}</div> */}

            </div>
        </div>

        <div>
          <img src="" alt="" />
          <h2 className='text-center leading-relaxed   text-4xl font-bold'>Words for Fruits in French </h2>


        </div>

        <div className='grid grid-cols-3 md:grid-cols-4 px-10  md:px-44 text-center capitalize '>
          {data.words.map((items, index) => {
            return (
              <>
                <div className='mt-3' onClick={() => handleclick(items)}>{items}</div>
            


              </>


            )
          })}
        </div>

        <div className='md:px-10 flex flex-col space-x-4 space-y-9 md:space-x-0 md:space-y-0  md:grid md:grid-cols-2 mt-10 px-0'>
          <div className='bg-[#EAEAEA] rounded-lg
                    w-[504px] h-[210px] leading-7  col-span-1 text-left md:ml-16     ' >

            <h5 className='text-[#838383] ml-5  mt-3  '>WORD OF THE DAY </h5>
            <h2 className='text-[#701ED8] ml-5 mt-2  text-2xl'>Je Déjeune</h2>
            <h6 className='text-[#838383] ml-5 mt-1'>verb</h6>
            <h5 className='text-black ml-5 mt-2 '> I am having lunch</h5>


            <div className='text-[#701ED8] flex items-center mt-9 space-x-2 ml-5 '>
              <a className='text-[#701ED8] ' href="/dictionary"> Read More</a>

              <BsArrowRight />
            </div>
          </div>


          <div className='col-span-1 items-end w-[351px] h-[310px]     '>

         
            <div className='bg-[#EAEAEA] rounded-lg p-10
                    leading-7  ' >

              <h5 className='text-[#838383]  text-center    '>SEE RELATED TOPICS </h5>
              <div className='grid grid-cols-1 text-center capitalize '>
                {data.words.map((items, index) => {
                  return (
                    <>
                      <div className='mt-3' onClick={() => handleclick(items)}>{items}</div>



                    </>


                  )
                })}
              </div>


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
    );
  }
  else {
    return (
      <div>
        <Loader colour='w' />
      </div>
    )
  }
}

export default Dicat;