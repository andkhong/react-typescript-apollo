import * as React from 'react';
import FacebookLogin from 'react-facebook-login';

class Facebook extends React.Component {

  responseFacebook = (response: any) => {
    console.log('here', response)
  }

  render(){
    return (
      <FacebookLogin 
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook} 
        icon="fa-facebook"
      />
    );
  }
}


export default Facebook;