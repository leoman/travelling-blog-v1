import React, { PureComponent } from 'react';
import NetworkService from '../../../../service';
import ScrollProgress from '../../../../components/ScrollProgress';
import { PostViewWrapper, ContentWrapper } from '../../../Post/styles';
import PostHeader from '../../../../components/PostHeader';
import PostContent from '../../../../components/PostContent';
import { Link } from 'react-router-dom';
import {
    Card,
    CardText,
} from '@bootstrap-styled/v4';

export class PostView extends PureComponent  {

    state = {
        post: null,
        photos: [],
    }

    async componentDidMount() {
        const { match : { params : { slug } } } : any = this.props;
        const post = await NetworkService.getPostBySlug(slug);
        this.setState({ post });
    }

    render() {
        const { post }: any = this.state;
    
        if(post === null) return null;

        console.log(post);

        const { content, photos } = post;

        return (
            <PostViewWrapper>

                <ScrollProgress />

                <Card className="text-center" block color="info" backgroundColor={"d9534f"} >
                    <CardText>This is a preview! <Link to={'/admin/posts'}>Back to Posts</Link>.</CardText>
                </Card>

                <PostHeader
                    post={post}
                />

                <ContentWrapper>
                    <PostContent content={content} photos={photos} />
                </ContentWrapper>
            </PostViewWrapper>
        );
    }
}

export default PostView;