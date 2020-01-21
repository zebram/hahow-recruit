import React from 'react';
import { Link } from 'react-router-dom';
import './heroCard.css';

class HeroCard extends React.Component{
    render() {
        const { id, name, image } = this.props;
        return (
            <Link key={ id } className="hero-card" to={ `/heros/${ id }` }>
                <img className="hero-image" src={ image } />
                <div>
                    { name }
                </div>
            </Link>
        )
    }
}

export default HeroCard;