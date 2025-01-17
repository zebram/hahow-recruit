import React from 'react';
import HeroList from '../components/HeroList';
import HeroProfile from '../components/HeroProfile';
import { connect } from 'react-redux';
import { fetchHeros, clearHeros, fetchHeroProfile, updateHeroProfile,clearHeroProfile } from '../actions';
import './profile.css';

class Profile extends React.Component {
    componentDidMount() {
        const { dispatch, profileId } = this.props;
        dispatch(fetchHeros());
        profileId && dispatch(fetchHeroProfile(profileId));
    }
    componentDidUpdate(prevProps) {
        const { dispatch, profileId } = this.props;
        prevProps.profileId !== profileId && dispatch(fetchHeroProfile(profileId));
    }
    componentWillUnmount() {
        const { dispatch } = this.props;
        dispatch(clearHeros());
        dispatch(clearHeroProfile());
    }
    handleProfileUpdate = id => attributes => {
        const { dispatch } = this.props;
        dispatch(updateHeroProfile(id, attributes));
    }
    render() {
        const { heros, heroProfile, profileId } = this.props;
        return (
            <div className="profile-page">
                <HeroList heros={ heros } selectId={ profileId } />
                {
                    profileId ? 
                        <HeroProfile 
                            profile={ heroProfile } 
                            onSubmit={ this.handleProfileUpdate(profileId) } 
                        /> : null
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { heros, heroProfile } = state;
    return {
        heros: heros,
        heroProfile: heroProfile,
    };
};

const mapDispatchToProps = dispatch => ({
    dispatch,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Profile);