import * as React from 'react';

interface Props {
  src: string;
}

class LazyImage extends React.Component<Props, {}> {

  componentDidMount(){

  }

  componentWillMount(){
    
  }

  render(){
    return (
      <div>
        Lazy Image
      </div>
    );
  }
};

export default LazyImage;