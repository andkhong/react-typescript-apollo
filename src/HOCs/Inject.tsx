import * as React from 'react';

interface Props {
  library: string;
  apiKey: string;
  component: any;
}

class InjectAsyncScript extends React.Component<Props, {}> {  
  scriptCache = new ScriptCache(`${this.props.library}${this.props.apiKey}`)
  componentWillMout() {
    // this.scriptCache = cache([
    //   this.props.library
    // ])
  }

  componentDidMount() {

  }
  
  render(){
    return (
    <div>
      <this.props.component />
    </div>
    )
  }
}

export default InjectAsyncScript;

class ScriptCache {
  loaded: string[];
  failed: string[];
  pending: string[];

  constructor(scripts: any) {
    this.loaded = [];
    this.failed = [];
    this.pending = [];
    this.loadSrc(scripts);
  }

  loadSrc(src: string) {
    if (this.loaded.indexOf(src) >= 0) {
      return Promise.resolve(src);
    }
    this.pending.push(src);
    return this.scriptTag(src)
    .then(() => {
      console.log('succcess');
      console.log(this)
    })
    .catch(() => {
      // handle cleanup
      console.log('errored')
    })
  }

  scriptTag(src: string){
    return new Promise((resolve, reject) => {
      let resolved = false,
        errored = false,
        body = document.getElementsByTagName('body')[0],
        tag = document.createElement('script') as any;

      tag.type = 'text/javascript';
      tag.async = false;

      const handleCallback = tag.onreadystatechange = function() {
        if (resolved) return handleLoad();
        if (errored) return handleReject();
        const state = tag.readyState ;
        if (state === 'complete') {
          handleLoad()
        } else if (state === 'error') {
          handleReject()
        }
      }
      handleCallback()

      const handleLoad = () => { 
        resolved = true;
        resolve(src);
      }
      const handleReject = () => {
        errored = true; 
        reject(src);
      }

      tag.addEventListener('load', handleLoad);
      tag.addEventListener('error', handleReject);
      tag.src = src;
      body.appendChild(tag);
      return tag;
    });
  }
}