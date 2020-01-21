import axios from 'axios';

export default {
    fetchHeros: () => {
        return axios.get(
            'https://hahow-recruit.herokuapp.com/heroes'
        )
    },
    fetchHeroProfile: (id) => {
        return axios.get(
            `https://hahow-recruit.herokuapp.com/heroes/${ id }/profile`
        )
    },
};