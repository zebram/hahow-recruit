import React from 'react';
import HeroCard from './HeroCard';
import './heroList.css';

class HeroList extends React.Component{
    render() {
        const { heros, selectId } = this.props;
        return (
            <div className="hero-list">
                {
                    heros.map(
                        hero => {
                            const { id } = hero;
                            return id === selectId ? (
                                <HeroCard key={ id } selected { ...hero }/>
                            ) : (
                                <HeroCard key={ id } { ...hero }/>
                            )
                        }
                    )
                }
            </div>
        )
    }
}

export default HeroList;