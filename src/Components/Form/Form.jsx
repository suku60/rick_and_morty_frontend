import React, {useEffect, useState} from 'react';
import './Form.css';

import { connect } from "react-redux";
import { LOBBYLOG} from "../../redux/types";

const Form = (props) => {

  console.log("props", props.lobby?.lobbyData?.name)
  console.log("props", props.lobby?.lobbyData)

  let bgImage = props.lobby?.lobbyData?.image

  const [formDisplay, setFormDisplay] = useState("none");

  const [characterStatus, setCharacterStatus] = useState(null)

  const [animation, setAnimation] = useState("animFadeIn");
  useEffect(() => {

  },[]);

  useEffect(() => {
      setFormDisplay(props.displayFromParent);

      if(props.lobby.lobbyData.status === "Dead"){
        setCharacterStatus("red")
      }else{
        setCharacterStatus(null)
      }

  },[props?.displayFromParent]);

  return (
    <div className='box_form centered_content' 
    style={{display: formDisplay, backgroundImage:`url(${bgImage})`}}
    onMouseLeave={()=>{setFormDisplay("none")}}
    >
      <div className="character_info">
        <p className="character_text character_name">
        name: {props?.lobby?.lobbyData?.name}
        </p>
        {/* <br/> */}
        <p className="character_text character_status"
        style={{backgroundColor:characterStatus}}>
        status: {props?.lobby?.lobbyData?.status}
        </p>
        {/* <br/> */}
        <p className="character_text character_species">
        species: {props?.lobby?.lobbyData?.species}
        </p>
        {/* <br/> */}
        <p className="character_text character_location">
        location: {props?.lobby?.lobbyData?.location?.name}
        </p>


      </div>

    </div>
  )
 
}

export default connect((state) => ({
  lobby: state.lobby
}))(Form);