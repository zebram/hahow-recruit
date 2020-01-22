import axios from 'axios';

export default {
    fetchHeros: () => {
        return axios.get(
            'https://hahow-recruit.herokuapp.com/heroes'
        ).then(
            response => response.data
        )
    },
    fetchHeroProfile: (id) => {
        return axios.get(
            `https://hahow-recruit.herokuapp.com/heroes/${ id }/profile`
        ).then(
            response => response.data
        )
    },
};