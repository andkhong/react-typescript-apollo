import * as React from 'react';

import FacebookWrapper from './Facebook.wrapper';

declare global { 
  interface Window {
    FB: any;
  } 
}

interface Response {
  authResponse: {
    accessToken: string;
    expiresIn: number;
    signedRequest: string;
    userID: string;
  }
  status: string;
}

class Facebook extends React.Component {
  getLoginStatus = () => {
    const { FB } = window;
    FB.getLoginStatus((response: Response) =>{
      if (response.status === 'connected') {
        console.log('Logged in.');
      } else {
        FB.login((response: Response) => {
          // Handle response, whether or not successful
          location.reload()
          console.log('this is the response', response);
        }, {scope: 'public_profile,email'});
      }
    });
  }

  render() {
    return (
      <FacebookWrapper>
        <button onClick={this.getLoginStatus}> Log into Facebook </button>
      </FacebookWrapper>
    );
  }
};

export default Facebook;


// https://www.facebook.com/v2.12/dialog/oauth?client_id=748121998725816&redirect_uri=http://localhost:4200