import React, { SFC } from 'react';
import { PanelWrapper, ImagePane, HoverPanel, Title } from './styles';
import { PostModel } from '../../../models/PostModel';

export interface LocationPanelModel {
    post: PostModel;
    listItemHovered(hoveredLocationKey: null | number): void;
    i: number;
}

export const LocationPanel: SFC<LocationPanelModel> = ({ post: { title, photo, slug }, listItemHovered, i }) => (
    <PanelWrapper to={`/posts/${slug}`} onMouseEnter={() => listItemHovered(i)} onMouseLeave={() => listItemHovered(null)} >
        <ImagePane src={`/images/${photo}`} />
        <HoverPanel>
            <Title>{title}</Title>
        </HoverPanel>
    </PanelWrapper>
);

export default LocationPanel;