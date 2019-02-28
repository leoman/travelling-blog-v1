import React, { SFC } from 'react';
import { PanelWrapper } from './styles';
import { RouteModel } from '../../../models/RouteModel';

export interface LocationPanelModel {
    location: RouteModel;
}

export const LocationPanel: SFC<LocationPanelModel> = ({ location: { title } }) => (
    <PanelWrapper>
        <p>{title}</p>
    </PanelWrapper>
);

export default LocationPanel;