import { combineReducers } from 'redux';
import heros from './heros';
import heroProfile from './heroProfile';

export default combineReducers({
    heros,
    heroProfile,
});
