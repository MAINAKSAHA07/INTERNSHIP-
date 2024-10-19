import React from 'react'
import Adults from './Adults';
// import Adolescents from './Adolescents';
import Kids from './Kids';
import { useState } from 'react';



export default function Sec2() {
    const [Lvl, setLvl] = useState(1)
    const Age = () => {
        if (Lvl === 1) {
            return <Adults />
        } 
        // else if (Lvl === 2) {
        //     return <Adolescents />;
        // } 
        else if (Lvl === 3){
            return <Kids />
        }
    };

    const change = (url) => {
        const nextURL = url;
        const nextTitle = 'adol';
        const nextState = { additionalInformation: 'Updated the URL with JS' };

        // This will create a new entry in the browser's history, without reloading
        window.history.pushState(nextState, nextTitle, nextURL);

        // This will replace the current entry in the browser's history, without reloading
        window.history.replaceState(nextState, nextTitle, nextURL)

    }


    return (
        <div className='w-full'>
            <div className='w-full flex lg:flex-row flex-col lg:justify-center items-center space-y-3 lg:space-y-0'>
                <div onClick={() => {change("Adults-Curriculum");setLvl(1);}} id={Lvl === 1 ? 'btnP' : ''}  class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3">
                    Adults Curriculum
                </div>
                {/* <a onClick={() => {change("Adolescents-Curriculum");setLvl(2);}} id={Lvl === 2 ? 'btnP' : ''} class="buttons bg-white  py-2.5 px-4 rounded-lg shadow mx-3">
                    Adolescents Curriculum
                </a> */}
                <div onClick={() => {change("Kids-Curriculum");setLvl(3);}} id={Lvl === 3 ? 'btnP' : ''}  class="buttons bg-white py-2.5 px-4 rounded-lg shadow mx-3">
                    Kids Curriculum
                </div>
            </div>
            <Age />
        </div>




    )
}


