import React from 'react'

export default function TermsAndConditions() {
    return (
        <div>
            <div className="bg-[#F4F8FB] bg-no-repeat bg-cover bg-center h-[30vh]" >
                <div className='h-full flex flex-col justify-center align-center text-center w-full px-10 lg:px-32'>
                    <h1 className='text-3xl lg:text-6xl leading-snug text-[#13bfab] font-thin'>Terms and Conditions</h1>
                    <hr className='border-[#f2b919] border-2 w-96 self-center mt-2' />
                </div>
            </div>
            <div className='lg:px-56 text-left'>
                <h1 className='font-medium text-2xl text-[#13bfab] mt-5'>
                    Introductory Courses
                </h1>

                <h1 className='font-medium text-2xl text-[#13bfab] mt-5'>
                1. Registration and Fees:
                </h1>
                <ul className='font-bold text-lg list-disc ml-14 my-3 space-y-1'>
                    <li className='font-thin'>Please enquire for your interests and we will try our best to accommodate.</li>
                    <li>Registration will be confirmed only after the payment is processed. The course fees can be paid online via UPI/bank transfer/Paytm/Razorpay.</li>
                    <li className='font-thin'>Anyone aged 9 years or above can register for our courses. The age group 9-15 will be placed in the Junior Batch. Anyone aged 16 years or above will be placed in the Adult Batch.</li>
                    <li>The Language Network reserves the right to postpone or cancel a batch in case the minimum number of students required for a batch have not registered.</li>
                    <li className='font-thin'>The course fee includes all the study material required.</li>
                </ul>
                
                <h1 className='font-medium text-2xl text-[#13bfab] mt-5'>
                2. Attendance:
                </h1>
                <ul className='font-bold text-lg list-disc ml-14 my-3 space-y-1'>
                    <li className='font-thin'>Student is expected to attend all the classes regularly. Student is required to maintain a minimum of 75% attendance during the course. If the student fails to maintain minimum attendance, course completion certificate will not be provided.</li>
                    <li>We keep a track of each student’s attendance. In case you are unable to attend class, please try to inform us well in advance. Please NOTE that the teachers will not repeat the portion missed out by a student irrespective of the circumstances. There will be a separate revision class at the end of the course</li>
                    <li className='font-thin'>There will be a separate revision class at the end of the course.</li>
                    <li className='font-thin'>It is advised to join the class 5 minutes before the scheduled time.</li>
                    <li className='font-thin'>The study material and class link shall be provided to the students 48 hours prior to the start date.</li>
                </ul>

                <h1 className='font-medium text-2xl text-[#13bfab] mt-5'>
                3. Certification:
                </h1>
                <ul className='font-bold text-lg list-disc ml-14 my-3 space-y-1'>
                    <li>A certificate of completion by The Language Network will be provided once you clear the final assessment conducted by us.</li>
                    <li className='font-thin'>Certificates are issued within 2 weeks of course completion.</li>
                    <li className='font-thin'>In case of loss or misplacement of original certificates, issuing a duplicate certificate will incur an additional fee of Rs.500/-</li>
                    <li className='font-thin'>Certificate will be issued via mail.</li>
                    <li className='font-thin'>For Hardcopy Certificate a minimal amount of Rs.490 has to be paid.</li>
                </ul>

                <h1 className='font-medium text-2xl text-[#13bfab] mt-5'>
                4. Change/Withdrawal of Batch
                </h1>
                <ul className='font-bold text-lg list-disc ml-14 my-3 space-y-1'>
                    <li className='font-thin'>Transfer from one batch to another batch of the same level<span className='font-bold'> will only be allowed on payment of Rs. 3000/- on the basis of availability of seats in the preferred batch.</span></li>
                    <li className='font-thin'>Fees once paid will <span className='font-bold'>NOT be refunded</span> under any circumstances unless the course is cancelled by The Language Network.</li>
                    <li className='font-thin'>Receipts of payment shall be generated within 48 hours after registration and payment.</li>
                </ul>

                <h1 className='font-medium text-2xl text-[#13bfab] mt-5'>
                5. Online Class Etiquette:
                </h1>
                <ul className='font-bold text-lg list-disc ml-14 my-3 space-y-1'>
                    <li className='font-thin'> It is important to recognize that online classroom is in fact a classroom, and certain behaviors are expected when you communicate with both your peers and instructors.</li>
                    <li className='font-thin'>The sessions will be conducted on the <span className='font-bold'>Microsoft Teams</span> Try as much as possible to <span className='font-bold'>join the class with a stable internet connection.</span></li>
                    <li className='font-thin'>It is strongly recommended to join the class with a PC/MAC/Laptop instead of a mobile device for your own convenience and a smoother learning experience.</li>
                    <li className='font-thin'>Try to be in a space with as little background noise as possible to enhance your learning experience.</li>
                    <li className='font-thin'>Group batches will commence <span className='font-bold'>within 14 days of your enrolment date.</span> Students will be added to the closest batch date available.</li>
                </ul>
            </div>
        </div>
    )
}
