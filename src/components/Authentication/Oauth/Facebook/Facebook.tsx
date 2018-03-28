import * as React from 'react';

import FacebookWrapper from './Facebook.wrapper';

declare global { 
  interface Window {
    fbAsyncInit: () => void;
    FB: any;
  } 
}

interface LoginResponse {
  authResponse: {
    accessToken: string;
    expiresIn: number;
    signedRequest: string;
    userID: string;
  }
  status: string;
}

interface APIResponse {
  picture: {
    data: {
      url: string;
    }
  }
}

class Facebook extends React.Component {
  // https://www.facebook.com/v2.12/dialog/oauth?client_id=748121998725816&redirect_uri=http://localhost:4200
  componentDidMount() {
    injectFacebookSDK(); // Facebook SDK is only loaded once
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
    const { api, getLoginStatus, login } = FB;
    getLoginStatus((logRes: LoginResponse) =>{
      if (logRes.status === 'connected') {
        const url = '/me?fields=id,name,email,picture.width(1080).height(1080)';
        api(url, (apiRes: APIResponse) => {
          console.log(apiRes.picture.data.url)
        });
      } else {
        login((logRes: LoginResponse) => {
          console.log('this is the response', logRes);
        }, {scope: 'public_profile,email'});
      }
    });
  }
};

export default Facebook;

function injectFacebookSDK(): void {
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
};
