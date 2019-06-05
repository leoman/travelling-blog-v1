import React, { PureComponent } from 'react';
import { PostModel } from '../../models/PostModel';
import MapMarker from '../MapMarker';
import { MapMarkerWrapper, MapMarkersWrapper, MapMarkersOverlay } from './styles';

type MarkersProps = {
  map: google.maps.Map;
  posts: PostModel[];
  projection: any;
  hoveredLocationKey: number | null;
}

class Markers extends PureComponent <MarkersProps> {

  state = {
    markers: [],
  }

  componentDidMount() {
    const { map } = this.props;

    const listenerList = [
      'drag',
      'idle',
      'zoom_changed',
      'projection_changed',
      'center_changed',
      'bounds_changed',
    ];

    listenerList.forEach((listener) => {
      map.addListener(listener, () => this.setMarkerPixels());
    });
    this.setMarkerPixels();
  }

  setMarkerPixels() {
    const { posts, projection } = this.props;
    const markers = posts.filter(post => !post.location.hideFromBounding).map((post: PostModel) => {
      const latLng = new google.maps.LatLng(post.location.lat, post.location.lng);
      return {
        ...post,
        ...projection.fromLatLngToContainerPixel(latLng),
      }
    });
    this.setState({ markers });
  }

  renderMarkers() {
    const { markers } = this.state;
    const { hoveredLocationKey } = this.props;

    return markers.map((post: any, i: number) => {
      return (
        <MapMarkerWrapper key={i} top={post.y} left={post.x}>
          <MapMarker
            key={i}
            lat={post.location.lat}
            lng={post.location.lng}
            hovered={i === hoveredLocationKey}
            post={post}
          />
        </MapMarkerWrapper>
      );
    });
  }

  render() {
    return (
      <MapMarkersWrapper>
        <MapMarkersOverlay>
          {this.renderMarkers()}
        </MapMarkersOverlay>
      </MapMarkersWrapper>
    );
  }
}

export default Markers;
