import React, {useEffect, useState} from 'react';
import Circle from '../Circle/Circle';
import axios from 'axios';
import './CircleBoard.css';

const CircleBoard = () => {

    let apiUrl = "https://rickandmortyapi.com/api/character/"

    const boardNumbers = [
        1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25
    ]

    const [board, setBoard] = useState([]);

    useEffect(()=>{

        getCharacters()
        console.log(board)
        
    },[])

    useEffect(()=>{

    },[])

    const getCharacters = async (props) => {

        let numbers = boardNumbers.toString()

        console.log(numbers)

        try {

            let charsResponse;
    
            charsResponse = await axios.get(`${apiUrl}${numbers}`);
            
    
            if (charsResponse) {
                console.log(charsResponse.data, typeof(charsResponse.data))

                setBoard(charsResponse.data)
            }
    
        } catch (error) {
         
          console.log(error)
        }

    }

    


return (
       <div className='full_container box_circle_board'>
        {
            board?.map((circle, index) => {
                console.log(circle)
                return <Circle
                key={index}
                id={index}
                />
            })
        }
       </div>
       )
}

export default CircleBoard;