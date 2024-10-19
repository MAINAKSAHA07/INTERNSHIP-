/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
export default function FrontBlocks(props) {
    // console.warn(props.data)
    if(props.data){
        return (
            <div>
            <Menu as="div" className=" inline-block text-left px-10 my-2 w-full ">
                <div className="lg:mx-28 flex border-b-2 border-gray-300">
                    {/* hover:bg-gray-50 focus:pointer-events-auto flex items-center w-[19rem] h-[5rem] inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm  py-2 bg-white text-xl font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:bg-gray-100 focus:ring-offset-2 focus:ring-offset-gray-100  */}
                    <Menu.Button className="flex items-center w-full inline-flex  border-gray-300 py-2 text-sm lg:text-xl font-medium text-gray-700  focus:outline-none  focus:ring-offset-2 focus:ring-offset-gray-100  ">
                        <div className="flex text-xl md:text-2xl justify-start w-1/2 px-2 text-[#13bfab] font-semibold">{props.title}</div>
                        <div className="flex justify-end w-1/2 px-10">
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 justify-end text-[#13bfab]" aria-hidden="true" />
                        </div>
                    </Menu.Button>
                </div>
    
                <Transition className="lg:px-28 flex justify-start"
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="right-10 mt-2 w-1/2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-2 py-1 text-sm lg:text-xl font-medium">
    
                            {props.data.map((items, idx) => {
                                if(items[0]){
                                const title = items[0].replaceAll("-", " ")
                    
                               
                                return (
                                    <div>
                                        <Menu.Item className=" text-base   ">
                                        
                          
                                            <div className="  "><a href={`/phrasebook/`+items[0] + "/" + items[1]}>{title}</a></div>
                                        
                                        </Menu.Item>
                                    </div>
                                )}
                            })}
    
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            </div>
        )
    }
    else{
        return("")
    }
    
    }
    