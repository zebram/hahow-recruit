import {
    FETCH_HEROS,
    CLEAR_HEROS,
} from '../actions/types';

const initialState = {
    data: [],
};

const data = (state = initialState, action) => {
    switch (action.type) {
    case FETCH_HEROS:
        return action.data;
    case CLEAR_HEROS:
        return initialState;
    default:
        return state;
    }
};

export default data;