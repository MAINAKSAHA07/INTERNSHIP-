import React from 'react'
import { AiFillStar } from 'react-icons/ai'
export default function ForeignLangTrainers() {
  return (
    <div>
      {/* <div className="bg-[url('/public/images/25388715424_65480dbf18_k.jpg')] bg-no-repeat bg-cover bg-center h-[60vh]" >
        <div className="bg-[rgba(0,0,0,0.7)] h-full ">
          <div className='h-full flex flex-col justify-center align-center text-center w-full px-10 lg:px-32'>
            <h1 className='text-3xl lg:text-7xl leading-snug text-white font-thin'>Careers</h1>
            <hr className='border-zinc-50 border-2 w-24 self-center mt-8' />
            <h1 className='text-xl my-10 text-white font-semibold'>Join us in revolutionising language learning</h1>
          </div>
        </div>
      </div> */}


      <div className="flex flex-col justify-center items-left px-10 py-10 lg:py-20  lg:px-44 lg:pt-28 space-y-9">
        <h1 className="text-3xl lg:text-5xl font-small">Foreign Language Trainers</h1>
        <span><strong>Languages: </strong>French, German, Spanish, Mandarin, English, Italian, Portuguese, Russian, Arabic and Japanese</span>
        <span><strong>Type: </strong> Work from Office</span>
        <span><strong>Location: </strong>Mumbai</span>
        <span><strong>Working hours:</strong> Part-time</span>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5gos89jC1wQhIjPG5xZx-ZN9CW3giKaErbL_Gf_a9ZbxNUQ/viewform"><button type="button" class="btn btn-info text-white mb-10 mb-3 flex w-36" style={{ backgroundColor: '#13bfab', borderRadius: '5px', paddingTop: '10px', paddingRight: '30px', paddingBottom: '10px', paddingLeft: '30px', fontSize: '0.82352941176471rem' }}>APPLY NOW</button></a>

      </div>

      <div className="px-8 lg:px-28">
        <h1 className="text-2xl font-semibold">Responsibilities:</h1>
        <ul class="list-disc px-10 space-y-2 text-slate-700 pt-6">
          <li>Prepare lectures to deliver to our students.</li>
          <li>Develop course material for students including study material, presentations, handouts and homework assignments.</li>
          <li>Evaluate students’ performances and conduct regular assessments.</li>
          <li>Participate in student recruitment and registration</li>
          <li>Plan, evaluate, and revise curriculum, course content, course materials and methods of instruction.</li>
          <li>Participate in activities organised by the organisation, such as workshops and special events.</li>
          <li>Collaborate with other teachers to develop an overall better learning environment.</li>
        </ul>
      </div>
      <div className="px-8 lg:px-28 pt-10">
        <h1 className="text-2xl font-semibold">Our desired skills and qualifications:</h1>
        <ul class="list-disc px-10 space-y-2 text-slate-700 pt-6">
          <li>2+ years of experience in teaching.</li>
          <li>Relevant certification.</li>
          <li>Ability to lead an online classroom.</li>
        </ul>
      </div>
      <div className="px-8 lg:px-28 pt-10">
        <h1 className="text-2xl font-semibold">Who can apply?</h1>
        <ul class="list-disc px-10 space-y-2 text-slate-700 pt-6">
          <li>Have relevant certification of the language they applied for.</li>
          <li>Candidates holding a bachelor’s degree in a foreign language.</li>
        </ul>
      </div>
      <div className="px-8 lg:px-28 pt-10">
        <h1 className="text-2xl font-semibold pb-8">Perks:</h1>
        <div className="flex flex-col space-y-5 px-4">
          <div className="flex flex-row items-center space-x-2">
            <AiFillStar className="text-xl text-[#13BFAB] justify-center mr-2" /> Hourly pay structure/contract
          </div>
          <div className="flex flex-row items-center">
            <AiFillStar className="text-xl text-[#13BFAB] justify-center mr-2" /> Flexible work hours
          </div>
          <div className="flex flex-row items-center">
            <AiFillStar className="text-xl text-[#13BFAB] justify-center mr-2" /> Letter of recommendation
          </div>
          <div className="flex flex-row items-center">
            <AiFillStar className="text-xl text-[#13BFAB] justify-center mr-2" /> Experience letter
          </div>
        </div>
      </div>
      <div className="flex justify-center py-10">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSc5gos89jC1wQhIjPG5xZx-ZN9CW3giKaErbL_Gf_a9ZbxNUQ/viewform"><button type="button" class="btn btn-info text-white mb-10 mb-3 flex w-36" style={{ backgroundColor: '#13bfab', borderRadius: '5px', paddingTop: '10px', paddingRight: '30px', paddingBottom: '10px', paddingLeft: '30px', fontSize: '0.82352941176471rem' }}>APPLY NOW</button></a>

      </div>
    </div>
  )
}
