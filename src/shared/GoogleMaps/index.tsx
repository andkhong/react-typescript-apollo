import * as React from 'react';

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
    return (
      <MapsWrapper>
        <div id='map' ref='map' />
      </MapsWrapper>
    );
  }
}

export default GoogleMaps;

import styled from 'styled-components';

const MapsWrapper = styled.div`
  width: 500px;

  #map {
    overflow: none;
    width: 100%;
    height: 320px;
    margin-top: 40px;
  }
`