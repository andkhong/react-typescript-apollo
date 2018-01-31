import * as React from 'react';
// import InjectScript from 'HOCS/Inject';

import './index.scss';

declare global {
  interface Window {
    map: any;
    google: any;
  }
}

interface Props {

}

class GoogleMaps extends React.Component<Props, {}> {
  componentDidMount() {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: -33.8688, lng: 151.2195 },
      zoom: 14,
      draggable: false,
      disableDefaultUI: true,
      mapTypeId: 'roadmap'
    });
    new window.google.maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      map: map,
      center: { lat: -33.8688, lng: 151.2195 },
      radius: 100
    });
  }

  render() {
    return <div id='map' ref='map' />
  }
}

export default GoogleMaps;
