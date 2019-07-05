import React, { PureComponent } from 'react';
import NetworkService from '../../service';
import ScrollProgress from '../../components/ScrollProgress';
import ScrollTop from '../../components/ScrollTop';
import { PostViewWrapper, ContentWrapper, FacebookComments } from './styles';
import PostHeader from '../../components/PostHeader';
import PostContent from '../../components/PostContent';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';
import { PostModel } from '../../models/PostModel';

interface Props {
    match : { 
        params : { 
            slug: string
        }
    } 
}

interface State {
    post: PostModel | null;
    loading: boolean;
    fade: boolean;
}

declare global {
    interface Window {
        FB: any;
    }
}

export class PostView extends PureComponent <Props, State>  {

    state = {
        post: null,
        loading: true,
        fade: false,
    }

    async componentDidMount() {
        const { match : { params : { slug } } } : Props = this.props;
        const post = await NetworkService.getPostBySlug(slug);
        this.setState({ post, fade: true }, () => {
            setTimeout(() => {
                this.setState({ fade: false, loading: false });
            }, 1000)
        });

        setTimeout(() => window.FB.XFBML.parse(), 2000);
    }

    render() {
        const { post, loading, fade }: State = this.state;

        if (loading) return <Loading fade={fade} />;
    
        if (post === null) return null;

        const { content, slug, photos } : any = post;

        return (
            <PostViewWrapper>

                <ScrollProgress />

                <ScrollTop />

                <PostHeader
                    post={post}
                />

                <ContentWrapper>
                    {/* <Link to={'/'}>Back to homepage</Link> */}

                    <PostContent content={content} photos={photos} />
                </ContentWrapper>

                <FacebookComments className="fb-comments" data-href={`http://kirstyandpete.com/posts/${slug}`} data-width="100%" data-numposts="5"></FacebookComments>
                
                <Footer />

            </PostViewWrapper>
        );
    }
}

export default PostView;