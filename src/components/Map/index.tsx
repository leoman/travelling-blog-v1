import React, { PureComponent } from 'react';
import { PostModel } from '../../models/PostModel';
import Markers from '../MapMarkers';
import { MapWrapper } from './styles';

type MarkersProps = {
  posts: PostModel[];
  hoveredLocationKey: number | null;
}

declare global {
  interface Window {
    google: any;
  }
}

class Map extends PureComponent <MarkersProps> {
  gmapScript: HTMLScriptElement | null;

  constructor(props: MarkersProps) {
    super(props);
    this.state = {
      map: null,
      projection: null,
    };

    this.gmapScript = null;
  }

  componentDidMount() {

    // const globalWindow: GlobalWindow = window;

    const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';

    if (window && window.google) {
      this.initMap();
    } else {
      this.gmapScript = document.createElement('script');
      this.gmapScript.type = 'text/javascript';
      this.gmapScript.src = `https://maps.googleapis.com/maps/api/js?key=${key}`;
      const x = document.getElementsByTagName('script')[0];
      if(x.parentNode) x.parentNode.insertBefore(this.gmapScript, x);

      this.gmapScript.addEventListener('load', e => {
        this.initMap();
      });
    }
  }

  getMapBounds = (map:google.maps.Map) => {
    const { posts } = this.props;
    const bounds = new google.maps.LatLngBounds();	  

     posts.forEach((post:PostModel) => {	
        bounds.extend(new google.maps.LatLng(	
            post.location.lat,	
            post.location.lng,	
        ));	
    });

    return bounds;	
};

  initMap() {
    const that = this;
    setTimeout(() => {
      const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: { lat: -6.709618, lng: -2.607743 },
      });

      const bounds = this.getMapBounds(map);
      map.fitBounds(bounds);

      // setTimeout(() => {
      //   map.setCenter({ lat: -6.709618, lng: -2.607743 });
      // }, 100);

      const Overlay = new google.maps.OverlayView();
      Overlay.setMap(map);
      Overlay.draw = function () {};

      Overlay.onAdd = function () {
        const projection = this.getProjection();
        that.setFlightPath(map, projection);
      };
    }, 200);
  }

  setFlightPath(map: any, projection: any) {
    const { posts } = this.props;

    const lineSymbol = {
      path: 'M 0,-1 0,1',
      strokeOpacity: 1,
      scale: 4,
    };

    const path = posts.map((post) => ({
      lat: post.location.lat,
      lng: post.location.lng,
    }));

    const flightPath = new google.maps.Polyline({
      path,
      geodesic: false,
      icons: [{
        icon: lineSymbol,
        offset: '0',
        repeat: '20px',
      }],
      strokeColor: '#FF0000',
      strokeOpacity: 0,
      strokeWeight: 2,
    });

    flightPath.setMap(map);

    this.setState({ map, projection });
  }

  render() {
    const { map, projection }: any = this.state;
    const { posts, hoveredLocationKey } = this.props;
    return (
      <MapWrapper>
        <div style={{ width: '100%', height: '100%', zIndex: 1 }} id="map" />
        {(map && posts && projection) && <Markers map={map} posts={posts} projection={projection} hoveredLocationKey={hoveredLocationKey} />}
      </MapWrapper>
    );
  }
}

export default Map;
