import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import "./Popup.css"
function MyVerticallyCenteredModal(props) {

    return (
        <Modal className=" flex items-center justify-center"
            {...props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            {/* <button onClick={props.onHide} type="button" class="close btn-val" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
            </button> */}
            <div className="flow-root px-8 items-end">
                <button onClick={props.onHide} className="btn-val border-0 focus:outline-none  pt-2 float-right w-1/8 font-bold text-black bg-[#fffff]  hover:bg-white hover:text-black border-white"><span className="text-2xl" aria-hidden="true">×</span>
                </button>
            </div>
            <Modal.Header className="flex mx-0 " closeButton>
                <Modal.Title id="contained-modal-title-vcenter  w-full ">
                    <span className="text-lg lg:text-2xl text-left w-full px-10 py-10">Select you age group</span>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className='jojo'>
                <div className="items-center">
                    <div className="flex flex-row divide-x sm:py-4 pb-5">

                        <div className="flex justify-center w-full justify-center items-center">
                            <div className="flex flex-col content-center justify-center items-center  ">
                                <a className="flex justify-center" href={props.a1}><img className="w-full flex justify-center" src="/images/adults.png" alt="Img" /></a>
                                <span className="flex justify-center py-2 font-semibold text-lg ">Adults</span>
                                <p className="flex justify-center">Age Group: 14+ years</p>
                            </div>
                        </div>

                        <div className="flex justify-center w-full justify-center items-center">
                            <div className="flex flex-col items-center content-center ">
                                <a className="flex justify-center" href={props.a2}><img className="w-full" src="/images/kids.png" alt="Img" /></a>
                                <span className="flex justify-center py-2 font-semibold text-lg">Kids and Teens</span>
                                <p className="flex justify-center">Age Group: 6-13 years</p>

                            </div>
                        </div>

                    </div>
                </div>
            </Modal.Body>
        </Modal >

    );
}

function Popup(pop) {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <div className="space-y-2">
                <span onClick={() => setModalShow(true)} class="border-transparent border-0 btn-val hover:cursor-pointer" >
                    <div className="flex justify-center">
                        <div className='p-1 md:w-1/2 lg:w-1/2 flex flex-col justify-center items-center'>
                            <img src={pop.im} alt="img" className='w-[8.5rem] lg:w-[8.5rem] ' />
                            <h3 className='font-medium text-xl mt-3 text-black text-center'>{pop.sub}</h3>
                        </div>
                    </div>
                </span>
            </div>
            <MyVerticallyCenteredModal a1={pop.a1} a2={pop.a2}
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
}

export default Popup;


