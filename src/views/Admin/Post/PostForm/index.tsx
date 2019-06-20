import React, { PureComponent } from 'react';
import moment from 'moment';
import { PostModel } from '../../../../models/PostModel';
import Editor from '../../../../components/Editor';
import { MarkDownEditor } from './styles';
import {
    Form,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    Input,
    Label,
    Select,
    Option,
} from '@bootstrap-styled/v4';

interface PostFormProps {
    post: PostModel;
    onChange(post: PostModel): void;
}

interface PostFormState {
    post: PostModel;
    currentPhoto: string;
}

class PostForm extends PureComponent <PostFormProps, PostFormState> {

    constructor(props: PostFormProps) {
        super(props);

        this.state = {
            post: props.post,
            currentPhoto: '',
        }
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
        this.props.onChange(newPost);
    }

    onPhotoUpdate(value: string) {
        this.setState({ currentPhoto: value });
    }

    onAddphoto(e: any) {
        e.preventDefault();
        const { post, currentPhoto }: any = this.state;

        const newPost = {
            ...post,
            photos: [
                ...post.photos, { url: currentPhoto },
            ]
        }

        this.setState({ post: newPost, currentPhoto: '' });
    }

    renderAddPostImage() {
        const { currentPhoto }: any = this.state;
        return (
            <>
                Add an Image

                <button onClick={(e) => this.onAddphoto(e)}>Add </button>
                <Input onChange={(e: React.FormEvent<HTMLInputElement>) => this.onPhotoUpdate(e.currentTarget.value)} value={currentPhoto} type="text" className="form-control" />
            </>
        )
    }

    renderPostImages() {
        const { post : { photos } } = this.state;
        if(photos) {
            return (
                <div>
                    {photos.map((photo, i) => (
                        <li key={i}>{photo.url}</li>
                    ))}
                </div>
            )
        }
    }

    render() {

        const { post }: PostFormState = this.state;

        const { title, slug, titleColour, content, photo, status, order, location: { location, duration, lat, lng, hideFromBounding } } = post;

        return (
            <Form>
                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon>Title</InputGroupAddon>
                        <Input onChange={(e: React.FormEvent<HTMLInputElement>) => this.onChange(e.currentTarget.value, 'title')} value={title} type="text" className="form-control" />
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon>Slug</InputGroupAddon>
                        <Input disabled value={slug} type="text" className="form-control" />
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
                        <InputGroupAddon>Order (dsc by date)</InputGroupAddon>
                        <input onChange={(e: React.FormEvent<HTMLInputElement>) => this.onChange(new Date(e.currentTarget.value), 'order')} value={moment(order).format('YYYY-MM-DD')} type="date" className="date-time" />
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
                    
                        <InputGroupAddon>Status</InputGroupAddon>
                        <Select value={status} onChange={(e: React.FormEvent<HTMLSelectElement>) => this.onChange(e.currentTarget.value, 'status')} >
                            <Option value="draft">Draft</Option>
                            <Option value="live">Live</Option>
                        </Select>

                        <InputGroupAddon>Hide</InputGroupAddon>
                        <Input onChange={(e: React.FormEvent<HTMLInputElement>) => this.onChange(!hideFromBounding, 'hideFromBounding', true, 'location')} value={hideFromBounding} checked={hideFromBounding} type="checkbox" className="form-control" />{' '}
                    </InputGroup>
                </FormGroup>
                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon>Images</InputGroupAddon>
                        {this.renderAddPostImage()}
                        {this.renderPostImages()}
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
        )
    }

}

export default PostForm;