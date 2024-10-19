import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DOMPurify from 'dompurify';
import Loader from './../../../Loader'

import axios from 'axios';

function BlogContent(props) {
  const [value, setvalue] = useState("lol")
  const [data, setdata] = useState()
  let val = useParams();
  useEffect(() => {
    axios.post('https://us-central1-thelanguagenetwork-b8126.cloudfunctions.net/app/blogs', { w: val.title })
      .then(res => {
        setdata(res.data)




      })
      .catch(err => {
        console.log(err)
      })


  }, [])


  if (data) {
    return (
      <>
      <div className='flex flex-row'>
      <div className='hidden lg:block'>
        adds
      </div>

      <div className='bg-slate-200 '>
      
        <div className=' sm:ml-2 lg:ml-10 md:ml-10 flex justify-center mt-0 pt-4 mb-6 back '>
          <div className='flex flex-col lg:flex-row md:flex-row gap-4'>
            <img src={data.limg} className='w-full md:w-2/5 lg:w-2/5 flex rounded-lg drop-shadow-lg ' />
  
            <div className=' sm:ml-2 lg:ml-10 md:ml-10  pt-4 flex flex-col gap-2 '>
            <p className=' font-bold lg:font-medium text-left text-2xl lg:text-5xl lg:mt-4 md:mt-4 sm:mt-0'>{data.title}</p>
            <a  href="https://thelanguagenetwork.co/ " target='_blank' className='   text-[#13bfab] mt-4'>by {data.author}</a>
            <p className='mt-0'>Published On {data.date}</p>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className=' flex flex-col  w-full lg:w-3/4'>


            <div className=' text-left lg:text-center text-inherit text-sm lg:text-xl ml-2 lg:ml-0 mb-4   flex flex-col gap-4 mt-2' id='body' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.body) }}></div>
          </div>
        </div>
      </div>
      <div className='hidden lg:block'>
        adds
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

export default BlogContent;