import * as React from 'react';

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
      <div>
        Profile
      </div>
    )
  }

}

export default Profile;