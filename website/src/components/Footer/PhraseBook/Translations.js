import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Button } from '@material-ui/core'
import { useParams } from 'react-router-dom'
import Voice from "./Voice"
import Loader from '../../Loader'
import { useNavigate } from 'react-router-dom'
import useBreadcrumbs from 'use-react-router-breadcrumbs';

import { Link } from 'react-router-dom'
import Search from '../../Header/Searchbar'
const userNamesById = { '1': 'John' }

const DynamicUserBreadcrumb = ({ match }) => (
  <span>{userNamesById[match.params.userId]}</span>
);



// define custom breadcrumbs for certain routes.
// breadcumbs can be components or strings.
const routes = [
  { path: '/phrasebook/:val', breadcrumb: DynamicUserBreadcrumb },
  { path: '/phrasebook/:', breadcrumb: DynamicUserBreadcrumb },
  { path: '/phrasebook/language', breadcrumb: DynamicUserBreadcrumb },

];

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

//
export default function Translations() {
  let navigate = useNavigate();
  let { trans1 } = useParams();
  let { val } = useParams();
  const [value, setvalue] = useState()
  const [funfact, setFunFact] = useState()
  const [trans, setTrans] = useState()
  const [question, setQuestion] = useState()
  const [lang, setLang] = useState()
  const [data, setdata] = useState("/images/image3.svg")
  const tem = "c’est mon plaisir"

  const breadcrumbs = useBreadcrumbs(routes);

  const PressData = [
    {
      pic: "/images/Bytetrails-Logo.png ",

    },]


  useEffect(() => {
    const gar = trans1.split("-")
    console.log(gar.at(-1))
    axios.post('https://us-central1-thelanguagenetwork-b8126.cloudfunctions.net/app/find', { w: val, l: gar.at(-1) })
      .then(res => {
        console.log(val)
        setvalue(res.data.value.replace("-", " "))
        setFunFact(res.data.funfact)
        setTrans(res.data.translation)
        setQuestion(res.data.question)
        setLang(res.data.lang)
        if(res.data.img1){
          
        setdata(res.data.img1)
        console.log(data)
        }
      })
      .catch(err => {
        console.log(err)
      })
    console.log(val)
  })
  const handleclick = (e) => {
    var clink = window.location.href
    var nlink = clink.concat("", e)
    console.log(nlink)
    window.location.replace(nlink);
  }
  const candleclick = (e1, e2) => {
    var clink = window.location.href
    var arrnext = clink.split("/")
    arrnext.pop()
    arrnext.pop()
    arrnext.push(e1)
    arrnext.push(e2)
    clink = arrnext.join("/")
    window.location.replace(clink)
  }

  // useEffect(() => {
  //   axios.post('http://localhost:8080').then((res) => {
  //     setData2(res.data)
  //     // console.log(data2)
  //   }
  //   ).catch((err) => console.log(err))
  // }, [])
  if (value) {
    // val = val.replace("-", " ")


    return (
      <>
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


              <Link to={"/phrasebook"}>PhraseBook</Link><div>{'>  '}</div>
              <Link to={"/phrasebook"}>{lang}</Link><div>{'>  '}</div>
              <Link to={() => { document.body.scrollTop = 0; }}>{question} </Link><div>{'  '}</div>

            </div>

            <div className='text-2xl lg:text-5xl font-bold mt-12  leading-loose px-2 lg:px-0 md:ml-24  md:mt-12 '>How do you say
                <span className='bg-[#58D69D] text-white leading-loose mx-2'>  {" " + val + " "}</span><br />
                in {lang}?
            </div>

<div className='w-full flex items-center md:ml-24  md:mt-12'>
  <div className='md:w-1/2 flex flex-col space-y-4  '>

<div className='font-bold underline text-3xl '>Here’s the answer:</div>
<button className='bg-[#58D69D] text-3xl text-center  text-white rounded-md w-72 md:w-1/2 py-2 font-bold  '>{trans}</button>

<div className='flex  items-center space-x-2 underline font-semibold text-lg '>
<div>Here's how it sounds:</div>
<Voice msg={trans} />
</div>

  </div>

  <div className='md:w-1/2 mr-64    '>
<img className='p-4' src="/images/image3.svg"  />
  </div>

</div>


<div className='text-center font-thin lg:font-medium  text-sm  lg:text-xl mx-4 lg:mx-0 mt-16  mb-24 ' ><span className='font-bold'>Fun fact: </span> 
                <span className=''> {funfact}</span>   
                
                
                </div>
              


       

        <div className='flex  w-full bg-[#EFEFEF] '>
            <div className='left w-1/2 flex flex-col justify-center left-0 md:pl-20  md:ml-24   '>

              <div className='font-bold text-xs   lg:text-3xl  tracking-wide leading-loose text-left'>Learn more than just <br /> “Thank you very much” <br /> and other useful phrases <br /> that French speakers <br /> really use!
              </div>

              <div className='left-0 mt-4 '>
                <div className=' inset-0 '>
                <button type="button" class="text-white bg-[#37CBA4] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center "> Start Learning</button>
                  
                
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
      </>
    )
  }
  else {
    return (
      <Loader colour='w' />
    )
  }

}
