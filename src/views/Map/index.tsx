import React, { SFC } from 'react';
import Map from '../../components/Map';
import LocationList from '../../components/LocationList';
import { RouteModel } from '../../models/RouteModel';
import { MapViewWrapper, MapWrapper, ListWrapper } from './styles';

interface MapViewModel {
    locations: RouteModel[]
}

export const MapView: SFC<MapViewModel> = ({ locations }) => (
    <MapViewWrapper>
        <MapWrapper>
            <Map locations={locations} />
        </MapWrapper>
        <ListWrapper>
            <LocationList locations={locations} />
        </ListWrapper>
    </MapViewWrapper>
);

export default MapView;