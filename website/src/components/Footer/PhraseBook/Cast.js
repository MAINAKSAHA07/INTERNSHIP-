import React from 'react'
import axios from "axios"
import FrontBlocks from './FrontBlocks'
import { useState, useEffect } from "react"
export default function Cast(props) {
  const [data, setData] = useState(null)
  const myTimeout = setTimeout(5000);

  async function getData() {
    try {
      const res = await axios.post('https://us-central1-thelanguagenetwork-b8126.cloudfunctions.net/app/display', { w: props.imp })
      clearTimeout(myTimeout);
      return res.data
    }
    catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (props.imp) {
      // https://us-central1-thelanguagenetwork-b8126.cloudfunctions.net/app/display
      getData()
        .then(res => {
          setData(res)
          console.warn(res)
        }
        ).catch(err => {
          console.log(err)
        });
    }
  }, [])
  if (data) {
    return (
      <div>
        {data.map((items, index) => {
          return (
            <div className="lg:px-36 ">
              <FrontBlocks title={items.title} data={items.Display} language={items.language} className="" />
            </div>
          )
        })}
      </div>
    )
  }
  else {
    return (
      <div></div>
    )
  }

}
