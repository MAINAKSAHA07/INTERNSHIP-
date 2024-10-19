import React, { useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap';
import "./Popupm.css"
import styled from 'styled-components';
function MVerticallyCenteredModal(props) {


    return (
        <Modal className=""
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered

        >
           
            <div className="close">
                <button onClick={props.onHide} className="btn-val border-0 focus:outline-none  pt-2 float-right w-1/8 font-bold text-black bg-[#fffff]  hover:text-black border-white"><span className="text-2xl" aria-hidden="true">×</span>
                </button>
            </div>
           

            <Modal.Body>
                <img src='/images/contact laptop.svg' id='laptop'></img>
                <div id='e1'>
                    <svg width="183" height="197" viewBox="0 0 183 197" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="28.4984" cy="42.4985" r="107.73" transform="rotate(13.7655 28.4984 42.4985)" stroke="url(#paint0_linear_4_7)" stroke-width="93" />
                        <defs>
                            <linearGradient id="paint0_linear_4_7" x1="28.4984" y1="-111.731" x2="28.4984" y2="196.728" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#13BFAB" stop-opacity="0.24" />
                                <stop offset="1" stop-color="#45EDD9" stop-opacity="0.55" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div>
                <div id='e2'>
                    <svg width="51" height="78" viewBox="0 0 51 78" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="38.9423" cy="38.9423" r="29.5" transform="rotate(6.29101 38.9423 38.9423)" stroke="url(#paint0_linear_4_6)" stroke-opacity="0.5" stroke-width="18.8253" />
                        <defs>
                            <linearGradient id="paint0_linear_4_6" x1="38.9423" y1="0.0296631" x2="38.9423" y2="77.855" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#13BFAB" stop-opacity="0.24" />
                                <stop offset="1" stop-color="#45EDD9" stop-opacity="0.55" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
                <div id='title'>
                <span className="text-xl lg:text-xl font-medium text-left w-full  place-content-center">Interested in learning a foreign language?</span>
                </div>

                <div className='snow'>
                    <div className=' mt-40 self-center'>
                        <span className="text-base lg:text-base text-left w-full font-color:#6A6A6A place-content-center">Sign up for our demo class today</span>
                        <svg id='linec' width="186" height="1" viewBox="0 0 186 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="186" height="1" fill="#2FD7AD" />
                        </svg>

                    </div>
                    <div className='mt-8 flex flex-col gap-3'>
                        <div className='self-center'>
                            <a href="https://tripetto.app/run/QMJH3CAU7W">
                                <button className='gs'>Sign up</button>
                            </a>
                        </div>
                        <div className='self-center'>
                            <a href="https://api.whatsapp.com/send/?phone=%2B919137239887&text=Hi+The+Language+Network+Please+assist+me+with+my+inquiry.&app_absent=0">
                                <button className='gs'>Get in touch with us</button>

                            </a>


                        </div>


                    </div>

                </div>

            </Modal.Body>
        </Modal >

    );
}

function Popupm() {
    const [modalShow, setModalShow] = React.useState(true);
    const [cc, setcc] = React.useState(false);
    useEffect(() => {
        var sec = window.location.href
        if (sec.endsWith('/getstarted')) {
            setcc(true)
        }

    }, [])
    if (cc) {
        return (
            <div></div>
        )
    }
    else {
        return (
            <>
                <MVerticallyCenteredModal
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </>
        );
    }
}

export default Popupm;


