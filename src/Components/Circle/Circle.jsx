import React, {useEffect, useState} from 'react';
import './Circle.css';

const Circle = (props) => {

  return (
       <div className='box_circle full_container img_container centered_content'>
         <div className="img_container full_container" style={{backgroundImage:"url("+props.data.image+")"}}></div>
         {/* <img src={props.data.image}/> */}
         <p className='char_name'>{props.data.name}</p>
       </div>
       )
}

export default Circle;