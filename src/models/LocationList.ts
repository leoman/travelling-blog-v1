import { RouteModel } from './RouteModel';

export interface LocationListModel {
    locations: RouteModel[];
    listItemHovered(hoveredLocationKey: number): void;
}