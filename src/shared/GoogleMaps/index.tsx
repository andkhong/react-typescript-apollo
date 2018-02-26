import * as React from 'react';
import './index.scss';

declare global { interface Window extends Maps {} }

interface Maps {
  google: any;
}

interface State {
  isGoogleMapsLoaded: boolean;
}

class GoogleMaps extends React.Component<any, State> {
  state = { isGoogleMapsLoaded: !!window.google };

  shouldComponentUpdate(){
    return false;
  }

  componentDidMount() {
    if (!this.state.isGoogleMapsLoaded) return;
    let lat = 37;
    let lng = -122;
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat, lng },
      zoom: 11.2,
      draggable: false,
      disableDefaultUI: true,
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
    return this.state.isGoogleMapsLoaded && <div id='map' ref='map' />;
  }
}

export default GoogleMaps;
