import React, { SFC } from 'react';
import { MapMarkerModel } from '../../models/MapMarker';
import { MapMarkerWrapper, MarkerImage } from './styles';

export const MapMarker: SFC<MapMarkerModel> = ({ post : { photo, slug }, hovered }) => (
    <MapMarkerWrapper hovered={hovered}>
        <MarkerImage to={`/posts/${slug}`} style={{backgroundImage: `url(${photo})`}} />
    </MapMarkerWrapper>
);
export default MapMarker;