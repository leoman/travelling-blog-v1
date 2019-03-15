import { PostModel } from './PostModel';

export interface MapMarkerModel {
    post: PostModel;
    lat: number;
    lng: number;
    hovered: boolean;
}