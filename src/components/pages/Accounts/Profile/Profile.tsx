import * as React from 'react';
import ProfileWrapper from './Profile.wrapper';

class Profile extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    gender: '',
    birthDate: '',
    email: '',
    phoneNumber: '',
    homeTown: ''
  }

  render() {
    return (
      <ProfileWrapper>
        Profile
      </ProfileWrapper>
    )
  }

}

export default Profile;