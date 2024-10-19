import React from 'react'
import Cast from './Cast'
export default function Lang(props) {
    const val = `/images/${props.img}.png`
    return (
        <div>
            <div>
                <div className="">
                    <div className="border-2 bg-[#F2F1F0] hover:bg-white hover:cursor-pointer rounded-lg p-2 w-full flex flex-row items-center justify-center">
                        <div className="w-5 lg:w-10 mx-2">
                            <img src={val} />
                        </div>
                        <div className="text-[#13bfab] font-semibold text-xl mx-2">
                            <h1>{props.img}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
