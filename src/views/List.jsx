import React from 'react';
import HeroList from '../components/HeroList';
import { connect } from 'react-redux';
import { fetchHeros, clearHeros } from '../actions';


class List extends React.Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(fetchHeros());
    }
    componentWillMount() {
        const { dispatch } = this.props;
        dispatch(clearHeros());
    }
    render() {
        const { heros } = this.props;
        return (
            <HeroList heros={ heros }/>
        );
    }
}

const mapStateToProps = state => {
    const { heros } = state;
    return {
        heros: heros,
    };
};

const mapDispatchToProps = dispatch => ({
    dispatch,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(List);