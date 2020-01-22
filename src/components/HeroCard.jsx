import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './heroCard.css';

class HeroCard extends React.Component{
    render() {
        const { id, name, image, selected } = this.props;
        const styles = classNames(
            'hero-card',
            { selected: selected },
        )
        return (
            <Link key={ id } className={ styles } to={ `/heros/${ id }` }>
                <img className="hero-image" src={ image } />
                <div>
                    { name }
                </div>
            </Link>
        )
    }
}

export default HeroCard;