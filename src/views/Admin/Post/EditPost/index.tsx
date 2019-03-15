import React, { PureComponent } from 'react';
import { postData } from '../../../../data/postData';
import { PostModel } from '../../../../models/PostModel';
import Editor from '../../../../components/Editor';
import { MarkDownEditor } from './styles';
import {
    Container,
    Row,
    Col,
    Form,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    Input,
    Jumbotron,
    H1,
    Hr
} from '@bootstrap-styled/v4';

interface EditPostProps {
    match: {
        params: {
            id: string
        }
    }
}

interface EditPostState {
    post: PostModel | undefined
}

class EditPost extends PureComponent <EditPostProps, EditPostState> {

    constructor(props: EditPostProps) {
        super(props);

        this.state = {
            post: undefined,
        }
    }

    componentDidMount() {
        const { match : { params: { id } } } = this.props;
        const post = postData.find(post => parseInt(id) === post.id);
        this.setState({ post });
    }

    onChange = (value: any, key: string, parent: boolean = false, parentkey: string = '') => {
        const { post }: any = this.state;
        let newPost: any = {};
        if (parent) {

            newPost = {
                ...post,
                [parentkey]: {
                    ...post[parentkey],
                    [key]: value
                }
            };

        } else {
            newPost = {
                ...post,
                [key]: value
            };
        }
        
        this.setState({ post: newPost });
    }

    render() {

        const { post }: EditPostState = this.state;

        if (!post) return null;

        console.log(post);

        const { title, titleColour, content, photo, location: { location, duration, lat, lng } } = post;

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
                        <Form>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon>Title</InputGroupAddon>
                                    <Input onChange={(e: React.FormEvent<HTMLInputElement>) => this.onChange(e.currentTarget.value, 'title')} value={title} type="text" className="form-control" />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon>Title Colour</InputGroupAddon>
                                    <Input onChange={(e: React.FormEvent<HTMLInputElement>) => this.onChange(e.currentTarget.value, 'titleColour')} value={titleColour} type="text" className="form-control" />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon>Main Photo</InputGroupAddon>
                                    <Input onChange={(e: React.FormEvent<HTMLInputElement>) => this.onChange(e.currentTarget.value, 'photo')} value={photo} type="text" className="form-control" />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon>Location</InputGroupAddon>
                                    <Input onChange={(e: React.FormEvent<HTMLInputElement>) => this.onChange(e.currentTarget.value, 'location', true, 'location')} value={location} type="text" className="form-control" />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon>Duration</InputGroupAddon>
                                    <Input onChange={(e: React.FormEvent<HTMLInputElement>) => this.onChange(e.currentTarget.value, 'duration', true, 'location')} value={duration} type="text" className="form-control" />
                                
                                    <InputGroupAddon>Lat</InputGroupAddon>
                                    <Input onChange={(e: React.FormEvent<HTMLInputElement>) => this.onChange(e.currentTarget.value, 'lat', true, 'location')} value={lat} type="text" className="form-control" />
                               
                                    <InputGroupAddon>Lng</InputGroupAddon>
                                    <Input onChange={(e: React.FormEvent<HTMLInputElement>) => this.onChange(e.currentTarget.value, 'lng', true, 'location')} value={lng} type="text" className="form-control" />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon>Content</InputGroupAddon>
                                    <MarkDownEditor>
                                        <Editor onChange={(e: any) => this.onChange(e, 'content')} value={content} />
                                    </MarkDownEditor>
                                </InputGroup>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default EditPost;