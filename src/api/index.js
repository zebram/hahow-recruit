import axios from 'axios';

export default {
    fetchHeros: () => {
        axios.get(
            'https://hahow-recruit.herokuapp.com/heroes'
        ).then(
            response => console.log(response)
        )
    },
    fetchHeroProfile: (id) => {
        axios.get(
            `https://hahow-recruit.herokuapp.com/heroes/${ id }/profile`
        ).then(
            response => console.log(response)
        )
    },
};