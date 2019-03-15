import React from 'react';
import moment from 'moment';
import { Link } from "react-router-dom";
import { PostViewWrapper, ContentWrapper, TitleWrapper, HoverWrapper, TextWrapper, Days, Title, Location } from './styles';
import { postData } from '../../data/postData';



export const PostView = ({ match : { params : { slug } } }: any) => {

    const post = postData.find(post => post.slug === slug);

    if(post === undefined) return null;

    const { photo, location: { location }, date, title, titleColour } = post;

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