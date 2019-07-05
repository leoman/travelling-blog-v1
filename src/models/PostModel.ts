import moment from 'moment';

export interface LocationModel {
    duration: number;
    lat: number;
    lng: number;
    location: string;
    hideFromBounding?: boolean;
}

export enum Status {
    draft = "draft",
    live = "live",
}

export interface PhotoModel {
    url: string;
}

export interface PostModel {
    id?: number;
    title: string;
    slug?: string;
    titleColour: string;
    photo?: string;
    date: Date;
    content?: string;
    status: Status;
    order: Date;
    location: LocationModel
    photos: PhotoModel[]
}

export const initialState: PostModel = {
    title: '',
    titleColour: '',
    content: '',
    photo: '',
    date: new Date(),
    order: new Date(moment().format('YYYY-MM-DD')),
    status: Status.draft,
    location: { 
        location: '',
        duration: 0,
        lat: 0, 
        lng: 0,
    },
    photos: [],
}

// export interface Locations {
//     locations: RouteModel[]
// }