import React, {useEffect, useState} from 'react';
import './Card.css';

import { connect } from "react-redux";

const Card = (props) => {

  let bgImage = props?.character?.characterData?.image

  const [formDisplay, setFormDisplay] = useState("none");

  const [characterStatus, setCharacterStatus] = useState(null)

  useEffect(() => {

  },[]);

  useEffect(() => {
    setFormDisplay(props?.displayFromParent);
    
    if(props?.character?.characterData?.status === "Dead"){
      setCharacterStatus("red")
    }else{
      setCharacterStatus(null)
    }

  },[props?.displayFromParent]);

  return (
    <div className='box_card centered_content' 
    style={{display: formDisplay, backgroundImage:`url(${bgImage})`}}
    onMouseLeave={()=>{setFormDisplay("none")}}
    >
      <div className="character_info">
        <p className="character_text character_name">
        name: {props?.character?.characterData?.name}
        </p>
        <p className="character_text character_status"
        style={{backgroundColor:characterStatus}}>
        status: {props?.character?.characterData?.status}
        </p>
        <p className="character_text character_species">
        species: {props?.character?.characterData?.species}
        </p>
        <p className="character_text character_location">
        location: {props?.character?.characterData?.location?.name}
        </p>
      </div>
    </div>
  )
 
}

export default connect((state) => ({
  character: state.character
}))(Card);