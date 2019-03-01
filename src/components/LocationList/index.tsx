import React, { SFC } from 'react';
import LocationPanel from './LocationPanel'
import { LocationListModel } from '../../models/LocationList';
import { RouteModel } from '../../models/RouteModel';

export const LocationList: SFC<LocationListModel> = ({ locations, listItemHovered }) :any => {
    return locations.map((location:RouteModel, i) => (
        <LocationPanel key={i} i={i} location={location} listItemHovered={listItemHovered} />
    ))
}

export default LocationList;