import React, { PureComponent } from 'react';
import NetworkService from '../../service';
import ScrollProgress from '../../components/ScrollProgress';
import { PostViewWrapper, Header, ContentWrapper, TitleWrapper, HoverWrapper, TextWrapper, Days, Title, Location } from './styles';
import PostHeader from '../../components/PostHeader';
import PostContent from '../../components/PostContent';

export class PostView extends PureComponent  {

    state = {
        post: null,
    }

    async componentDidMount() {
        const { match : { params : { slug } } } : any = this.props;
        const post = await NetworkService.getPostBySlug(slug);
        this.setState({ post });
    }

    render() {
        const { post }: any = this.state;
    
        if(post === null) return null;

        const { photo, content, location: { location }, date, title, titleColour } = post;

        return (
            <PostViewWrapper>

                <ScrollProgress />

                <PostHeader
                    post={post}
                />

                <ContentWrapper>
                    {/* <Link to={'/'}>Back to homepage</Link> */}

                    <PostContent content={content} />
                </ContentWrapper>
            </PostViewWrapper>
        );
    }
}

export default PostView;