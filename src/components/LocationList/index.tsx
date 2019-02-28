import React, { SFC } from 'react';
import LocationPanel from './LocationPanel'
import { LocationListModel } from '../../models/LocationList';
import { RouteModel } from '../../models/RouteModel';

export const LocationList: SFC<LocationListModel> = ({ locations }) :any => {
    return locations.map((location:RouteModel) => (
        <LocationPanel location={location} />
    ))
}

export default LocationList;