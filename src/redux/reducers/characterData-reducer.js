import {CHARLOG} from '../types';

const initialState = {
    characterData: {}
};

const characterDataReducer = (state = initialState, action) => {
    switch(action.type){
        case CHARLOG :
            return {...state, characterData: action.payload};

        default :
            return state
    }
}

export default characterDataReducer;