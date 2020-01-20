import React from 'react';
class Profile extends React.Component {
    render() {
        const { profileId } = this.props;
        return `Profile ${ profileId }`;
    }
}
export default Profile;