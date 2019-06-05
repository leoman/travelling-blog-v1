import React, { SFC } from 'react';
import LocationPanel from './LocationPanel'
import { LocationListModel } from '../../models/LocationList';
import { PostModel } from '../../models/PostModel';

export const LocationList: SFC<LocationListModel> = ({ posts, listItemHovered }) :any => {
    return posts.filter(post => !post.location.hideFromBounding).map((post:PostModel, i:number) => (
        <LocationPanel key={i.toString()} i={i} post={post} listItemHovered={listItemHovered} />
    ))
}

export default LocationList;