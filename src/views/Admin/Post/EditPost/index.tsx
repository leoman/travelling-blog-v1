import React, { PureComponent } from 'react';
import { PostModel } from '../../../../models/PostModel';
import NetworkService from '../../../../service';
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
    Button,
} from '@bootstrap-styled/v4';
import { Link } from "react-router-dom";
import { ControlBar } from './styles';

interface EditPostProps {
    match: {
        params: {
            id: string
        }
    }
}

interface EditPostState {
    post?: PostModel
}

class EditPost extends PureComponent <EditPostProps, EditPostState> {

    constructor(props: EditPostProps) {
        super(props);

        this.state = {
            post: undefined,
        }
    }

    async componentDidMount() {
        const { match : { params: { id } } } = this.props;

        const post = await NetworkService.getPost(parseInt(id));

        if(!post) return null;

        this.setState({ post });
    }

    onChange = (post: PostModel) => this.setState({ post });

    onSave = async () => {
        const { match : { params: { id } } } = this.props;
        const { post } = this.state;

        if (!post) return null;

        const response = await NetworkService.editPost(parseInt(id), post);

        console.log(response);
    }

    render() {

        const { post }: EditPostState = this.state;

        if (!post) return null;

        return (
            <Container>
                <Row>
                    <Col lg="12">
                        <Jumbotron>
                            <H1 className="display-4">Admin: Edit Post</H1>
                            <Hr className="my-4" />
                        </Jumbotron>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Breadcrumb>
                            <BreadcrumbItem><Link to={'/admin/posts'}>Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Edit Post</BreadcrumbItem>
                        </Breadcrumb>

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

export default EditPost;