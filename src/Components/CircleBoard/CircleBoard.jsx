import React, {useEffect, useState} from 'react';
import { TransitionGroup, CSSTransition,  } from 'react-transition-group';

import { connect } from "react-redux";
import { LOBBYLOG} from "../../redux/types";

import Circle from '../Circle/Circle';
import axios from 'axios';
import './CircleBoard.css';
import Form from '../Form/Form';

const CircleBoard = (props) => {

    let apiUrl = "https://rickandmortyapi.com/api/character/";
    let maxBadges = 24;

    const badgesNumbers =  [...Array(maxBadges)].map(()=>{return Math.floor(Math.random()*826)});
    // const oneCharacter =  [...Array(1)].map(()=>{return Math.floor(Math.random()*826)});

    const [badges, setBadges] = useState([]);
    const [selectedChar, setSelectedChar] = useState(undefined)
    
    const [isFormDisplay, setIsFormDisplay] = useState("none");
    // const [formState, setFormState] = useState("none");

    useEffect(()=>{

        getCharacters()
        
    },[])

    useEffect(()=>{
        if(badges.length < maxBadges){
            refreshContent()
        }

    },[badges])

    const refreshContent = () => {
        getCharacters();
    }

    const getCharacters = async (props) => {

            let numbers = badgesNumbers.toString()
            
            try {
                
                let charsResponse;
    
                charsResponse = await axios.get(`${apiUrl}${numbers}`);
                
                if (charsResponse) {
                    
                    setBadges(charsResponse.data)
                    
                }
                
            } catch (error) {
                console.log(error)
            }

    }

    const showInfo = (data) => {

        console.log(data.data)
        setIsFormDisplay(true)

    }

    // THIS DOESN'T MAKE SENSE BUT WORKS PERFECTLY FINE
    const showForm = (data) => {

        props.dispatch({ type: LOBBYLOG, payload: data });

        if (!isFormDisplay) {
          setSelectedChar(data)
          setIsFormDisplay(true);
        }else{
          setIsFormDisplay(false);
        }
      }

    return (
       <div className='full_container box_circle_badges box_grid'>
         {
             badges?.map((character, index) => {
                 let data = character;
                 return <div className="box_circle" onClick={()=>{showForm(data)}} key={index}>
                   <Circle
                   key={index}
                   id={index}
                   data={character}
                   />
                 </div>
             })
         }
         <button className="button_container centered_content box_circle" onClick={()=>refreshContent()}>REROLL</button>
         <Form displayFromParent={isFormDisplay}/>
       </div>
       )
}

export default connect((state) => ({
    lobby: state.lobby
  }))(CircleBoard);