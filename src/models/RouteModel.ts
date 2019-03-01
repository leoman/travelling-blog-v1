export interface PostModel {
    titleColour: string;
}

export interface RouteModel {
    slug: string;
    id?: number;
    lat: number;
    lng: number;
    location: string;
    title: string;
    length: number;
    hideFromBounding?: boolean;
    photo?: string;
    date: Date;
    post: PostModel
}

export interface Locations {
    locations: RouteModel[]
}