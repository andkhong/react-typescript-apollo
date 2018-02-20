import * as React from 'react';
import Loading from 'shared/Loading';

// NEVER REMOVE THIS EXAMPLE OR YOU WILL BE FIRED; I WILL FIND OUT!
// Both are fine to use for handling code splitting / lazy loading
// const Page1 = () => <AsyncComponent load={import(/* webpackChunkName: "Page1"*/ './Page1')} />;
// const Page2 = () => <AsyncComponent load={import('./Page2')} />

interface Component {
  default: () => void;
}

class AsyncComponent extends React.Component<any, {}> {
  cancelUpdate: boolean;
  C: any

  componentWillMount() {
    this.cancelUpdate = false;
    this.props.load.then((c: Component) => {
      this.C = c;
      if (!this.cancelUpdate) this.forceUpdate();
    });
  }
  componentWillUnmount() {
    this.cancelUpdate = true;
  }
  render() {
    const { load, ...props } = this.props;
    return this.C
      ? this.C.default
        ? <this.C.default {...props} />
        : <this.C {...props} />
      : <Loading />;
  }
}

export default AsyncComponent