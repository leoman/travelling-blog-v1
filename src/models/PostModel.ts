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

export interface PostModel {
    id?: number;
    title: string;
    slug?: string;
    titleColour: string;
    photo?: string;
    date: Date;
    content?: string;
    status: Status;
    location: LocationModel
}

export const initialState: PostModel = {
    title: '',
    titleColour: '',
    content: '',
    photo: '',
    date: new Date(),
    status: Status.draft,
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