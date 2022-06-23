
import {combineReducers} from 'redux';

import lobby from './lobbyData-reducer';

const rootReducer = combineReducers({
    lobby,
});

export default rootReducer;