import { RouteModel } from './RouteModel';

export interface MapMarkerModel {
    location: RouteModel;
    lat: number;
    lng: number;
    hovered: boolean;
}