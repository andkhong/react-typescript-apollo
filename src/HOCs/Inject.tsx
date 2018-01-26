// // import * as React from 'react';

// // class InjectScript extends React.Component {
// //     componentWillMount(){
// //         this.scriptCache = cache(scripts);
// //     }

// //     ComponentDidMount(){
// //         this.scriptCache.onLoad(cb, reject)
// //     }

// //     render() {
// //         return (
// //             <Component
// //                 {...this.props}
// //                 onLoad={this.onLoad}
// //             />
// //         );
// //     }
// // }

// // export default InjectScript;

// class ScriptCache {
//     loaded: any;
//     failed: any;
//     pending: any;
//     load: any;
     

//     constructor(scripts: any) {
//         this.loaded = [];
//         this.failed = [];
//         this.pending = [];
//         this.load(scripts)
//       }
//     loadSrc(src: any) {
//         if (this.loaded.indexOf(src) >= 0) {
//           return Promise.resolve(src);
//         }
    
//         this.pending.push(src);
//         return this.scriptTag(src)
//           .then(() => {
//             // handle success
//           })
//           .catch(() => {
//             // handle cleanup
//           })
//     }
//     scriptTag(src, cb) {
//         return new Promise((resolve, reject) => {
//           let resolved = false,
//               errored = false,
//               body = document.getElementsByTagName('body')[0],
//               tag = document.createElement('script');
    
//           tag.type = 'text/javascript';
//           tag.async = false; // Load in order
    
//           const handleCallback = tag.onreadystatechange = function() {
//             if (resolved) return handleLoad();
//             if (errored) return handleReject();
//             const state = tag.readyState;
//             if (state === 'complete') {
//               handleLoad()
//             } else if (state === 'error') {
//               handleReject()
//             }
//           }
    
//           const handleLoad = (evt) => {resolved = true;resolve(src);}
//           const handleReject = (evt) => {errored = true; reject(src) }
    
//           tag.addEventListener('load', handleLoad)
//           tag.addEventListener('error', handleReject);
//           if (src.match(/callback=CALLBACK_NAME/)) {
//             src = src.replace(/(callback=)[^\&]+/, `$1${cbName}`)
//             cb = window[cbName] = handleLoad;
//           } else {
//             tag.addEventListener('load', handleLoad)
//              }
//           tag.onreadystatechange = handleCallback;
//           tag.addEventListener('error', handleReject);
//           tag.src = src;
//           body.appendChild(tag);
//           return tag;
//         });
//       }
// }