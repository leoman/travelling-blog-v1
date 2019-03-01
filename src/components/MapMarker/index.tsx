import React, { PureComponent, SFC } from 'react';
import { MapMarkerModel } from '../../models/MapMarker';
import { MapMarkerWrapper, MarkerImage } from './styles';

export const MapMarker: SFC<MapMarkerModel> = ({ location : { photo, slug }, hovered }) => (
    <MapMarkerWrapper hovered={hovered}>
        <MarkerImage to={`/posts/${slug}`} hovered={hovered} style={{backgroundImage: `url(/images/${photo})`}} />
    </MapMarkerWrapper>
);
export default MapMarker;