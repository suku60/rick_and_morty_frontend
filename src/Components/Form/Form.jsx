import React, {useEffect, useState} from 'react';
import './Form.css';

import { connect } from "react-redux";
import { LOBBYLOG} from "../../redux/types";

const Form = (props) => {

  console.log("props", props)

  const [formDisplay, setFormDisplay] = useState("none");

  const [animation, setAnimation] = useState("animFadeIn");
  useEffect(() => {

  },[]);

  useEffect(() => {

    if(!props.info){

    }else{
      setFormDisplay(props.displayFromParent);
    }

  },[props?.displayFromParent, props.info]);

  return (
    <div className='box_form form_grid' 
    style={{display: formDisplay}}
    onMouseLeave={()=>{setFormDisplay("none")}}>
      {props.info.name}
    </div>
  )
 
}

export default connect((state) => ({
  lobby: state.lobby
}))(Form);