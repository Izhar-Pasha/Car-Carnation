import React from 'react'
import "./Background.css"
import Video from "../../Assets/Video.mp4";
import Image1  from "../../Assets/Image1.jpg";
import Image2  from "../../Assets/Image2.jpg";
import Image3  from "../../Assets/Image3.jpg";

export const Background = ({playStatus,heroCount}) => {
    if  (playStatus){
      return(
        <video className='background fade-in' autoPlay loop muted>
          <source src={Video} type='Video/mp4' />
        </video>
      )
    }
    else if(heroCount===0)
    {
      return <img src={Image1} className='background fade-in' alt="" />
    }
    else if(heroCount===1)
    {
      return <img src={Image2} className='background fade-in' alt="" />
    }
    else if(heroCount===2)
    {
      return <img src={Image3} className='background fade-in' alt="" />
    }
}
