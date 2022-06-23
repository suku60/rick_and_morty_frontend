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

    let maxCircles = 24;

    const boardNumbers =  [...Array(maxCircles)].map(()=>{return Math.floor(Math.random()*826)});
    const oneCharacter =  [...Array(1)].map(()=>{return Math.floor(Math.random()*826)});

    const [board, setBoard] = useState([]);
    
    const [isFormDisplay, setIsFormDisplay] = useState("none");
    // const [formState, setFormState] = useState("none");

    const [selectedChar, setSelectedChar] = useState(undefined)


    useEffect(()=>{

        getCharacters()
        
    },[])

    useEffect(()=>{
        if(board.length < maxCircles){
            refreshContent()
        }

    },[board])

    const refreshContent = () => {
        getCharacters();
    }

    const getCharacters = async (props) => {

            let numbers = boardNumbers.toString()
            
            try {
                
                let charsResponse;
    
                charsResponse = await axios.get(`${apiUrl}${numbers}`);
                
                if (charsResponse) {
                    
                    setBoard(charsResponse.data)
                    
                }
                
            } catch (error) {
                console.log(error)
            }

    }

    const addCharacter = () =>{

        console.log("ho")


    }

    const showInfo = (data) => {

        console.log(data.data)
        setIsFormDisplay(true)

    }

    // THIS DOESN'T MAKE SENSE BUT WORKS PERFECTLY FINE
    const showForm = (data) => {

        props.dispatch({ type: LOBBYLOG, payload: data });

        console.log(data)
        if (!isFormDisplay) {
          // console.log("noformstate")
          setSelectedChar(data)
          setIsFormDisplay(true);
        }else{
          setIsFormDisplay(false);
        }
      }

      console.log(isFormDisplay)

    return (
       <div className='full_container box_circle_board box_grid'>
        {
            board?.map((character, index) => {
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