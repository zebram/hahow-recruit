import React from 'react';
import HeroCard from './HeroCard';
import './heroList.css';

class HeroList extends React.Component{
    render() {
        const { heros } = this.props;
        return (
            <div className="hero-list">
                {
                    heros.data.map(
                        hero => {
                            const { id } = hero;
                            return <HeroCard key={ id } { ...hero }/>
                        }
                    )
                }
            </div>
        )
    }
}

export default HeroList;