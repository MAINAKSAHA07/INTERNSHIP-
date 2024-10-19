import React from 'react'
import './Footer.css';
import { FaMedium } from 'react-icons/fa';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FiMail } from 'react-icons/fi'
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaPinterestP, FaYoutube } from 'react-icons/fa'
import {BiLeftArrow} from 'react-icons/bi'
import {useState} from 'react';
import AOS from 'aos'

export default function Footer() {
    const [open, setOpen] = useState(false)
    const[phone,setphone]=useState(false)

    function openClose() {
      if (open === false) {
        document.getElementById('menuButton').style.right = '15px';
        const element = document.getElementById('openButton')
        element.classList.add('rotate-180');
        setOpen(true)
        
      }
      else{
        document.getElementById('menuButton').style.right = '-55px';
        const element = document.getElementById('openButton')
        element.classList.remove('rotate-180');
        setOpen(false)
       
      }
    }

    return (
        
      
        <div className="bg-[#ffff]" style={{ bottom: '0px', left: '0px' }}>
            <div class="hidden lg:block menu-button ease-in duration-300" id='menuButton'>
               <div onClick={() => openClose()} className=' absolute left-[-22px] top-[-6px] z-50'><BiLeftArrow id='openButton' className='ease-in duration-300 '/></div>
                <div class="social-menu">
                    <ul>
                        <li><a href="https://www.facebook.com/teamlanguagenetwork" target="blank"><i class="fab flex items-center h-full"> <FaFacebookF className='w-full' /></i></a></li>
                        <li><a href="https://www.instagram.com/thelanguagenetwork/" target="blank"><i class="fab flex items-center h-full"> <FaInstagram className='w-full' /></i></a></li>
                        <li><a href="https://www.linkedin.com/company/the-languagenetwork/" target="blank"><i class="fab flex items-center justify-center h-full"> <FaLinkedinIn className='w-8/12' /></i></a></li>
                        <li><a href="mailto:info@thelanguagenetwork.co"><i class="fab flex items-center h-full"> <FiMail className='w-full' /></i></a></li>
                        <li><a href="https://in.pinterest.com/teamlanguagenetwork/"><i class="fab flex items-center h-full"> <FaPinterestP className='w-full' /></i></a></li>
                        <li><a href="https://www.youtube.com/channel/UC2pMpIkwz5AzM-SRMX9rjLQ"><i class="fab flex items-center h-full"> <FaYoutube className='w-full' /></i></a></li>
                    </ul>
                </div>
            </div>

            
            
            <div className='call'  href="https://api.whatsapp.com/send/?phone=%2B919137239887&text=Hi+The+Language+Network+Please+assist+me+with+my+inquiry.&app_absent=0" >
                
    <a className='call' href="https://api.whatsapp.com/send/?phone=%2B919137239887&text=Hi+The+Language+Network+Please+assist+me+with+my+inquiry.&app_absent=0"> 
                <img className='rin'  src='/images/tlnwhatsapp.png' alt=''>    
               </img>
               </a>
            </div> 
            
     

            <div id='help'  className="mt-2 px-10 bg-#dfdfdf space-y-1 flex flex-col items-center pb-8">
                <span className='mt-5 flex flex-col text-2xl lg:text-5xl font-medium'>We're here to help</span>
                <br></br>
                <span className='text-md lg:text-lg mb-10'>Get in touch with our student support team for any queries or specific needs.</span>
                <br></br>
                <a href="mailto:info@thelanguagenetwork.co">
                    <button type="button" class="btn btn-info text-white mb-10 mb-3 flex" style={{ backgroundColor: '#13bfab', borderRadius: '10px', paddingTop: '10px', paddingRight: '30px', paddingBottom: '10px', paddingLeft: '30px', fontSize: '0.82352941176471rem' }}>Contact Us</button>
                </a>
            </div>
            <div className='hidden lg:flex flex-wrap px-3 bg-[rgb(46,49,49)] w-full  flex-row justify-evenly px-10 h-20 lg:h-12 space-x-3.5 lg:space-x-0.5'>
                <img src='/images/payments/amazon-pay-icon.svg' class='w-14 lg:w-14 ' alt="a" />
                <img src='/images/payments/bhim-pay-icon.svg' class='w-14 lg:w-14 ' alt="a" />
                <img src='/images/payments/finserv-icon.svg' class='w-14 lg:w-14 ' alt="a" />
                <img src='/images/payments/google-pay.svg' class='w-16 lg:w-20 ' alt="a" />
                <img src='/images/payments/paytm-icon.svg' class='w-14 lg:w-14 ' alt="a" />
                <img src='/images/payments/Razorpay.svg' class='w-16 lg:w-20 ' alt="a" />
                <img src='/images/payments/rupay-icon.svg' class='w-14 lg:w-14' alt="a" />
                <img src='/images/payments/upi-pay-icon.svg' class='w-14 lg:w-14' alt="a" />
            </div>
            <div className='flex lg:hidden flex-wrap lg:px-3 bg-[rgb(46,49,49)] w-full  flex-row justify-evenly  h-20 lg:h-12 space-x-3.5 lg:space-x-0.5'>
                <div className='flex lg:hidden felx-row w-full justify-evenly'>
                <img src='/images/payments/amazon-pay-icon.svg' class='w-14 lg:w-14 ' alt="a" />
                <img src='/images/payments/bhim-pay-icon.svg' class='w-14 lg:w-14 ' alt="a" />
                <img src='/images/payments/finserv-icon.svg' class='w-14 lg:w-14 ' alt="a" />
                <img src='/images/payments/google-pay.svg' class='w-16 lg:w-20 ' alt="a" />
                </div>
                <div className='flex lg:hidden felx-row w-full justify-evenly'>
                <img src='/images/payments/paytm-icon.svg' class='w-14 lg:w-14 ' alt="a" />
                <img src='/images/payments/Razorpay.svg' class='w-16 lg:w-20 ' alt="a" />
                <img src='/images/payments/rupay-icon.svg' class='w-14 lg:w-14' alt="a" />
                <img src='/images/payments/upi-pay-icon.svg' class='w-14 lg:w-14' alt="a" />
                </div>
            </div>
            <footer className="footer-section">
                <div className="container w-full">



                    <div className="footer-content pt-5 pb-5 px-4">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                        <a href="/"><img src="/images/Logo-website.png" className="img-fluid" alt="logo" /></a>
                                    </div>
                                    <div className="footer-text">
                                        <p>The Language Network is a place to learn and immerse yourself in the world of languages. We are a dynamic institution promoting languages and celebrating cultures.</p>
                                    </div>
                                    <div className="footer-social-icon">
                                        <img src="/images/ISO9001-stamp.png" alt="img" />
                                        <img src="/images/Logo2.jpg" alt="img" style={{ paddingLeft: "10px" }} />
                                    </div>
                                    <div className='footer-text pt-2'>
                                        <p>Address :  Signature Business Park, 1306, 13th Floor, Postal Colony Rd, Chembur, Mumbai, Maharashtra 400071</p>
                                        <p>Contact no : 8369123184</p>
                                        <p>Powered by TLN EDTECH PRIVATE LIMITED</p>
                                    </div>
                                </div>
                            </div>

                            <div className='block lg:hidden mt-10 space-y-3 w-full'>
                                <Accordion className='' style={{ boxShadow: "none" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography style={{ color: '#13bfab', fontWeight: 500 }}>Company</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ color: '#000', fontWeight: 500, padding: 0 }}>
                                            <ul className='space-y-4 text-sm'>
                                                <li><a href="/">Home</a></li>
                                                <li><a href="/aboutUs">About us</a></li>
                                                <li><a href="/careers">Careers</a></li>
                                                <li><a href="/blog">Blog</a></li>
                                                <li><a href="/press">Press</a></li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className='' style={{ boxShadow: "none" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography style={{ color: '#13bfab', fontWeight: 500 }}>Languages for Adults</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ color: '#000', fontWeight: 500, padding: 0 }}>
                                            <ul className='space-y-4 text-sm'>
                                                <li><a href="/introductory-course">Introductory Courses</a></li>
                                                <li><a href="/english-course-adults">English Courses</a></li>
                                                <li><a href="/french-course-adults">French Courses</a></li>
                                                <li><a href="/spanish-course-adults">Spanish Courses</a></li>
                                                <li><a href="/german-course-adults">German Courses</a></li>
                                                <li><a href="/mandarin-course-adults">Mandarin Courses</a></li>
                                                <li><a href="/japanese-course-adults">Japanese Courses</a></li>
                                                <li><a href="/korean-course-adults">Korean Courses</a></li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className='' style={{ boxShadow: "none" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography style={{ color: '#13bfab', fontWeight: 500 }}>Languages for Kids</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ color: '#000', fontWeight: 500, padding: 0 }}>
                                            <ul className='space-y-4 text-sm'>
                                                <li><a href="/english-course-kids">Kids English Courses</a></li>
                                                <li><a href="/french-course-kids">Kids French Courses</a></li>
                                                <li><a href="/spanish-course-kids">Kids Spanish Courses</a></li>
                                                <li><a href="/german-course-kids">Kids German Courses</a></li>
                                                <li><a href="/mandarin-course-kids">Kids Mandarin Courses</a></li>
                                                <li><a href="/japanese-course-kids">Kids Japanese Courses</a></li>
                                                <li><a href="/korean-course-kids">Kids Korean Courses</a></li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className='' style={{ boxShadow: "none" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography style={{ color: '#13bfab', fontWeight: 500 }}>Support</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ color: '#000', fontWeight: 500, padding: 0 }}>
                                            <ul className='space-y-4 text-sm'>
                                                <li><a href="/faqs">FAQs</a></li>
                                                <li><a href="https://api.whatsapp.com/send/?phone=%2B918369123184&text&app_absent=0">Contact</a></li>
                                             { /*  <li><a href="/Aff_prog">Affiliate Program</a></li>*/ }
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion className='' style={{ boxShadow: "none" }}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography style={{ color: '#13bfab', fontWeight: 500 }}>More</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography style={{ color: '#000', fontWeight: 500, padding: 0 }}>
                                            <ul className='space-y-4 text-sm'>
                                                <li><a href="/phrasebook">Phrasebook</a></li>
                                                {/* <li><a href="Events">Events</a></li> */}
                                                <li><a href="/dictionary">Dictionary</a></li>
                                            </ul>
                                        </Typography>
                                    </AccordionDetails>
                                </Accordion>

                            </div>


                            <div className="col-xl-1 col-lg-2 col-md-6 mb-30 lg:mx-12 hidden lg:block">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Company</h3>
                                    </div>
                                    <ul>
                                        <li><a href="/">Home</a></li>
                                        <li><a href="/aboutus">About us</a></li>
                                        <li><a href="/careers">Careers</a></li>
                                       <li><a href="/blog">Blog</a></li>
                                        <li><a href="/press">Press</a></li>
                                    </ul>
                                </div>

                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 mb-50 hidden lg:block">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Languages for Adults</h3>
                                    </div>
                                    <ul>
                                        <li><a href="/introductory-course">Introductory Courses</a></li>
                                        <li><a href="/english-course-adults">English Courses</a></li>
                                        <li><a href="/french-course-adults">French Courses</a></li>
                                        <li><a href="/spanish-course-adults">Spanish Courses</a></li>
                                        <li><a href="/german-course-adults">German Courses</a></li>
                                        <li><a href="/mandarin-course-adults">Mandarin Courses</a></li>
                                        <li><a href="/japanese-course-adults">Japanese Courses</a></li>
                                        <li><a href="/korean-course-adults">Korean Courses</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 mb-50 hidden lg:block">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Languages for Kids</h3>
                                    </div>
                                    <ul>
                                        <li><a href="/english-course-kids">Kids English Courses</a></li>
                                        <li><a href="/french-course-kids">Kids French Courses</a></li>
                                        <li><a href="/spanish-course-kids">Kids Spanish Courses</a></li>
                                        <li><a href="/german-course-kids">Kids German Courses</a></li>
                                        <li><a href="/mandarin-course-kids">Kids Mandarin Courses</a></li>
                                        <li><a href="/japanese-course-kids">Kids Japanese Courses</a></li>
                                        <li><a href="/korean-course-kids">Kids Korean Courses</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 mb-50 hidden lg:block">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Support</h3>
                                    </div>
                                    <ul>
                                        <li><a href="/faqs">FAQs</a></li>
                                        <li><a href="https://api.whatsapp.com/send/?phone=%2B918369123184&text&app_absent=0">Contact</a></li>
                                      {/*  <li><a href="/Aff_prog">Affiliate Program</a></li>*/}
                                    </ul>
                                </div>
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>More</h3>
                                    </div>
                                    <ul>
                                        <li><a href="/phrasebook">Phrasebook</a></li>
                                        {/* <li><a href="Events">Events</a></li> */}
                                        <li><a href="/dictionary">Dictionary</a></li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="copyright-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 text-center text-lg-left">
                                <div className="copyright-text">
                                    <p>Copyright &copy; 2022 The Language Network - All Right Reserved </p>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 d-none d-lg-block ">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
                                        <li><a href="/privacy-policy">Privacy Policy</a></li>
                                        <li><a href="/">Sitemap</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 d-none d-lg-block ">
                                <div className="footer-menu">
                                    <ul>
                                        <li><a href="https://www.facebook.com/teamlanguagenetwork"><img  src='/images/facebook.svg' alt='img' /></a></li>
                                        <li><a href="https://www.instagram.com/thelanguagenetwork/"><img src='/images/instagram.svg' alt='img' /></a></li>
                                        <li><a href="https://www.linkedin.com/company/the-languagenetwork/"><img src='/images/linkedin.svg' alt='img' /></a></li>
                                        <li><a href="mailto:info@thelanguagenetwork.co"><img src='/images/envelope-fill.svg' alt='img' /></a></li>
                                        <li><a href="https://in.pinterest.com/teamlanguagenetwork/"><img src='/images/pinterest.svg' alt='img' /></a></li>
                                        <li><a href="https://www.youtube.com/channel/UC2pMpIkwz5AzM-SRMX9rjLQ"><img src='/images/youtube.svg' alt='img' /></a></li>
                                        <li><a href="https://thelanguagenetwork.medium.com/"><FaMedium style={{ color: '#000', fontSize: '17px' }} /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        
    )
}
