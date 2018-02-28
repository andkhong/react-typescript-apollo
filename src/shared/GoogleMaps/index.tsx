import * as React from 'react';
import './index.scss';

declare global { interface Window extends Maps {} }

interface Maps {
  google: any;
}

interface Props {
  lat: string;
  lng: string;
}

class GoogleMaps extends React.Component<Props, {}> {

  shouldComponentUpdate(){
    return false;
  }

  componentDidMount() {
    const { lat, lng } = this.props;
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat, lng },
      zoom: 14,
      mapTypeId: 'roadmap',
      handled: null
    });
    new window.google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#yellow',
      fillOpacity: 0.35,
      map: map,
      center: { lat, lng },
      radius: 800,
      handled: null
    });
  }

  render() {
    return !!window.google && <div id='map' ref='map' />;
  }
}

export default GoogleMaps;
