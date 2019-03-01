import React from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";
import { PostViewWrapper, ContentWrapper, TitleWrapper, HoverWrapper, TextWrapper, Days, Title, Location } from './styles';
import { routeData } from '../../data/routeData';



export const PostView = ({ match : { params : { slug } } }: any) => {

    const locationData = routeData.find(location => location.slug === slug);

    if(locationData === undefined) return null;

    const { photo, location, date, title, post: { titleColour } } = locationData;

    return (
        <PostViewWrapper>
            <TitleWrapper
                style={{backgroundImage: `url(/images/${photo})`}}
            >
                <HoverWrapper>
                    <TextWrapper>
                        <Days titleColour={titleColour}>{moment(date).format("MMMM Do YYYY")}</Days>
                        <Title titleColour={titleColour}>{title}</Title>
                        <Location titleColour={titleColour}>{location}</Location>
                    </TextWrapper>
                </HoverWrapper>
            </TitleWrapper>

            <ContentWrapper>
                <Link to={'/'}>Back to homepage</Link>
            </ContentWrapper>
        </PostViewWrapper>
    );
}

export default PostView;