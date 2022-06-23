import {LOBBYLOG} from '../types';

const initialState = {
    lobbyData: {}
};

const lobbyDataReducer = (state = initialState, action) => {
    switch(action.type){
        case LOBBYLOG :
            return {...state, lobbyData: action.payload};

        default :
            return state
    }
}

export default lobbyDataReducer;