import * as React from 'react';

import FacebookWrapper from './Facebook.wrapper';

declare global { 
  interface Window {
    fbAsyncInit: () => void;
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
  componentDidMount() {
    // Facebook SDK is only loaded once
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '748121998725816',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.7'
      });
      window.FB.AppEvents.logPageView();
    };
    (function(d, s, id){
       let js: any;
       const fjs = d.getElementsByTagName(s)[0] as any;
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }
  render() {
    return (
      <FacebookWrapper>
        <button onClick={this.getLoginStatus}> Log into Facebook </button>
      </FacebookWrapper>
    );
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
};

export default Facebook;

// https://www.facebook.com/v2.12/dialog/oauth?client_id=748121998725816&redirect_uri=http://localhost:4200