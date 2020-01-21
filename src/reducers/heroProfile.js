import {
    FETCH_HERO_PROFILE,
    CLEAR_HERO_PROFILE,
} from '../actions/types';

const initialState = {
    heroProfile: {},
};

const data = (state = initialState, action) => {
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