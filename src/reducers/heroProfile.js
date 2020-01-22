import {
    FETCH_HERO_PROFILE,
    CLEAR_HERO_PROFILE,
} from '../actions/types';

const initialState = null;

const data = (state = initialState, action) => {
    let total = 0;
    for(let attribute in action.data){
        total += action.data[attribute];
    };
    switch (action.type) {
    case FETCH_HERO_PROFILE:
        return action.data;
    case CLEAR_HERO_PROFILE:
        return initialState;
    default:
        return state;
    }
};

export default data;