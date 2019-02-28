export interface RouteModel {
    id?: number;
    lat: number;
    lng: number;
    location: string;
    title: string;
    length: number;
    hideFromBounding?: boolean;
}

export interface Locations {
    locations: RouteModel[]
}