
import {combineReducers} from 'redux';

import character from './characterData-reducer';

const rootReducer = combineReducers({
    character,
});

export default rootReducer;