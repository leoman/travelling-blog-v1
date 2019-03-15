import { PostModel } from './PostModel';

export interface LocationListModel {
    posts: PostModel[];
    listItemHovered(hoveredLocationKey: number): void;
}