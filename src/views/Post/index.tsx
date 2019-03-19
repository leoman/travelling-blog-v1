import React, { PureComponent } from 'react';
import moment from 'moment';
import NetworkService from '../../service';
import { Link } from "react-router-dom";
import { PostViewWrapper, ContentWrapper, TitleWrapper, HoverWrapper, TextWrapper, Days, Title, Location } from './styles';
import { postData } from '../../data/postData';


export class PostView extends PureComponent  {

    state = {
        post: null,
    }

    async componentDidMount() {
        const { match : { params : { slug } } } : any = this.props;
        const post = await NetworkService.getPostBySlug(slug);
        console.log(post);
        this.setState({ post });
    }

    render() {
        console.log(this.state);
        const { post }: any = this.state;
    
        if(post === null) return null;

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
}

export default PostView;