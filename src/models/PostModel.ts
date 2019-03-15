export interface LocationModel {
    duration: number;
    lat: number;
    lng: number;
    location: string;
    hideFromBounding?: boolean;
}

export interface PostModel {
    id?: number;
    title: string;
    slug: string;
    titleColour: string;
    photo?: string;
    date: Date;
    content?: string;
    location: LocationModel
}

// export interface Locations {
//     locations: RouteModel[]
// }