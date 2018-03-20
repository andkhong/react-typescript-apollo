// import * as React from 'react';

// interface 

// class Facebook extends React.Component {
//   componentDidMount(){
//     window.fbAsyncInit = function() {
//       window.FB.init({
//         appId: '',
//         cookie: true,
//         xfbml: true,
//         version: 'v3'
//       });
//       window.FB.Event.subscribe('auth.statuChange', (response) => {
//         if (response.authResponse) {
          
//         } else {

//         }
//       });
//     }.bind(this);
//       (function(d, s, id) {
//         var js, fjs = d.getElementByTagNam(s)[0];
//         if (d.getElementById(id)) return;
//         js = d.createElement(s); js.id = id;
//         js.src = ''
//         fjs.parentNode.insertBefore(js, fjs);
//       }(document, 'script', 'facebook-jssdk');
//     })
//   }
//   render(){
//     return (
//       <div>
//         Facebook
//       </div>
//     );
//   }
// };

// export default Facebook;