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
  state = {
    url: ''
  }
  getLoginStatus = () => {
    const { FB } = window;
    FB.getLoginStatus((response: Response) =>{
      if (response.status === 'connected') {
        const url = '/me?fields=id,name,email,picture.width(1080).height(1080)';
        FB.api(url, function(response: any) {
          console.log(response.picture.data.url)
        });
      } else {
        FB.login((response: Response) => {
          // Handle response, whether or not successful
          console.log('this is the response', response);
        }, {scope: 'public_profile,email'});
      }
    });
  }

  render() {
    return (
      <FacebookWrapper>
        <button onClick={this.getLoginStatus}> Log into Facebook </button>

        <img src={this.state.url} />
      </FacebookWrapper>
    );
  }
};

export default Facebook;

// https://www.facebook.com/v2.12/dialog/oauth?client_id=748121998725816&redirect_uri=http://localhost:4200