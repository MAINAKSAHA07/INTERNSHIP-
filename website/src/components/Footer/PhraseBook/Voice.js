import React from 'react'
import { useState } from "react"


export default function Voice(props) {

    const [ourText, setOurText] = useState("")
    const msg = new SpeechSynthesisUtterance()

    const speechHandler = (msg) => {
        msg.text = props.msg
        window.speechSynthesis.speak(msg)
    }
    return (
        <div>
            {/* {setOurText(props.msg)} */}
            <button className="w-12 h-12 rounded-full bg-[#13bfab] focus:outline-none hover:bg-[#0F9888] hover:drop-shadow-xl" onClick={() => speechHandler(msg)}><i class="fa fa-play fa-x text-white"></i></button>
        </div>
    )
}
