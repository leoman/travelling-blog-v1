import React, { PureComponent } from 'react';
import { PostModel, initialState } from '../../../../models/PostModel';
import PostForm from '../PostForm';
import NetworkService from '../../../../service';
import {
    Container,
    Row,
    Col,
    Jumbotron,
    H1,
    Hr,
    Breadcrumb,
    BreadcrumbItem,
    Button,
} from '@bootstrap-styled/v4';
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { ControlBar } from '../EditPost/styles';

interface AddPostProps extends RouteComponentProps<any> {
   
}

interface AddPostState {
    post: PostModel
}

class AddPost extends PureComponent <AddPostProps, AddPostState> {

    constructor(props: AddPostProps) {
        super(props);

        this.state = {
            post: initialState,
        }
    }

    onChange = (post: PostModel) => this.setState({ post });

    onSave = async () => {
        const { history } = this.props;
        const { post } = this.state;

        if (!post) return null;

        const response = await NetworkService.addPost(post);

        console.log(response);

        if(response && !response.error) {
            history.push('/admin/posts');
        }
    }

    render() {

        const { post }: AddPostState = this.state;

        return (
            <Container>
                <Row>
                    <Col lg="12">
                        <Jumbotron>
                            <H1 className="display-4">Admin: Add Post</H1>
                            <Hr className="my-4" />
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col>

                        <div>
                            <Breadcrumb>
                                <BreadcrumbItem><Link to={'/admin/posts'}>Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Add Post</BreadcrumbItem>
                            </Breadcrumb>
                        </div>

                        <ControlBar>
                            <Button onClick={() => this.onSave()} outline="true" color="primary">Save Post</Button>
                        </ControlBar>

                        <PostForm post={post} onChange={this.onChange} />
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default withRouter(AddPost);