import React, { PureComponent } from 'react';
import { PostModel, initialState } from '../../../../models/PostModel';
import PostForm from '../PostForm';
import {
    Container,
    Row,
    Col,
    Jumbotron,
    H1,
    Hr,
    Breadcrumb,
    BreadcrumbItem,
} from '@bootstrap-styled/v4';
import { Link } from "react-router-dom";

interface AddPostProps {}

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

    onSave = () => {
        console.log(this.state.post);
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

                        <p onClick={() => this.onSave()}>Save the post</p>

                        <PostForm post={post} onChange={this.onChange} />
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default AddPost;