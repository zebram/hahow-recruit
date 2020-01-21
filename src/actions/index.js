import {
    FETCH_HEROS,
    FETCH_HERO_PROFILE,
    CLEAR_HEROS,
    CLEAR_HERO_PROFILE,
} from './types';

import api from '../api';

export function fetchHeros(){
    return function(dispatch) {
        return api.fetchHeros().then(
            response => dispatch({
                type: FETCH_HEROS,
                data: response,
            })
        )
    }
}

export function clearHeros(){
    return {
        type: CLEAR_HEROS,
        data: {}
    }
}

export function fetchHeroProfile(id){
    return {
        type: FETCH_HERO_PROFILE,
        data: api.fetchHeroProfile(id)
    }
}

export function clearHeroProfile(){
    return {
        type: CLEAR_HERO_PROFILE,
        data: {}
    }
}