import React, { PureComponent, SFC } from 'react';
import { MapMarkerModel } from '../../models/MapMarker';
import { MapMarkerWrapper } from './styles';

export const MapMarker: SFC<MapMarkerModel> = ({ text }) => <MapMarkerWrapper>{text}</MapMarkerWrapper>;
export default MapMarker;