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
    slug?: string;
    titleColour: string;
    photo?: string;
    date: Date;
    content?: string;
    location: LocationModel
}

export const initialState: PostModel = {
    title: '',
    titleColour: '',
    content: '',
    photo: '',
    date: new Date(),
    location: { 
        location: '',
        duration: 0,
        lat: 0, 
        lng: 0,
    }
}

// export interface Locations {
//     locations: RouteModel[]
// }