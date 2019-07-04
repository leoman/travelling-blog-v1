import React from 'react';
import moment from 'moment';
import { Header, TitleWrapper, HoverWrapper, TextWrapper, Days, Title, Location } from './styles';

export const PostHeader = ({ post : { photo, location: { location }, date, title, titleColour } }: any ) => (
    <TitleWrapper
        style={{backgroundImage: `url(${photo})`}}
    >
        <Header>
            <HoverWrapper>
                <TextWrapper>
                    <Days titleColour={titleColour}>{moment(date).format("MMMM Do YYYY")}</Days>
                    <Title titleColour={titleColour}>{title}</Title>
                    <Location titleColour={titleColour}>{location}</Location>
                </TextWrapper>
            </HoverWrapper>
        </Header>
    </TitleWrapper>
);

export default PostHeader;