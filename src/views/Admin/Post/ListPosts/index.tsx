import React, { PureComponent } from 'react';
import { PostModel } from '../../../../models/PostModel';
import NetworkService from '../../../../service';
import moment from 'moment';
import {
    Container,
    Row,
    Col,
    Thead,
    Tr,
    Td,
    Th,
    Tbody,
    Jumbotron,
    H1,
    P,
    Hr,
    Button,
    Breadcrumb,
    BreadcrumbItem,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from '@bootstrap-styled/v4';
import { Link } from "react-router-dom";
import { Table, ControlBar } from './styles';

interface ListViewProps {
    
}

interface ListViewState {
    posts: PostModel[];
    modal: boolean;
    id: number | null;
}

class ListView extends PureComponent <ListViewProps, ListViewState> {

    constructor(props: ListViewProps) {
        super(props);

        this.state = {
            posts: [],
            modal: false,
            id: null,
        }
    }

    async componentDidMount()  {
        const posts = await NetworkService.getPosts();

        if(!posts) return null;
        
        this.setState({
            posts
        });
    }

    showDeleteModal = (id: any) => {
        this.setState({
            id,
            modal: true,
        });
    }

    closeDeleteModal = () => {
        this.setState({
            id: null,
            modal: false,
        });
    }

    confirmDelete = () => {
        const { id } = this.state;
        if(!id) return null;

        this.onDelete(id);
        this.closeDeleteModal();
    }

    onDelete = async (id: number) => {
        const response = await NetworkService.deletePost(id);
        
        if(response.success) {

            const posts = await NetworkService.getPosts();

            if(!posts) return null;
            
            this.setState({
                posts
            });
        }
    }

    render() {

        const { posts, modal } = this.state;

        if (!posts) return null;

        return (
            <Container>
                <Row>
                    <Col lg="12">
                    <Jumbotron>
                        <H1 className="display-4">Admin: Posts</H1>
                        <P lead>Please use the list below to adminitor changes to Posts.</P>
                        <Hr className="my-4" />
                    </Jumbotron>
                    </Col>
                </Row>

                <Modal isOpen={modal} toggle={() => this.closeDeleteModal()}>
                    <ModalHeader toggle={() => this.closeDeleteModal()}>Delete Post</ModalHeader>
                    <ModalBody>
                        This action cannot be un done.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.confirmDelete()}>Confirm Delete</Button>
                        <Button color="secondary" onClick={() => this.closeDeleteModal()}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Row>
                    <Col lg="12">

                        <Breadcrumb>
                            <BreadcrumbItem active>Home</BreadcrumbItem>
                        </Breadcrumb>

                        <ControlBar>
                            <Link to={`/admin/posts/add`}>
                                <Button outline="true" color="primary">Add Post</Button>
                            </Link>
                        </ControlBar>
                    </Col>
                </Row>

                <Row>
                    <Col lg="12">
                        <Table>
                            <Thead defaultBg>
                                <Tr>
                                    <Th>
                                        Title
                                    </Th>
                                    <Th>
                                        Status
                                    </Th>
                                    <Th>
                                        Date
                                    </Th>
                                    <Th colSpan={3}>

                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {posts.map(({ id, slug, title, date, status }, i) => (
                                    <Tr key={i.toString()}>
                                        <Td>
                                            {title}
                                        </Td>
                                        <Td>
                                            {status}
                                        </Td>
                                        <Td>
                                            {moment(date).format("MMMM Do YYYY")}
                                        </Td>
                                        <Td>
                                            <Link to={`/admin/posts/preview/${slug}`}>
                                                <Button outline="true" color="primary">Preview</Button>
                                            </Link>
                                        </Td>
                                        <Td>
                                            <Link to={`/admin/posts/edit/${id}`}>
                                                <Button outline="true" color="primary">Edit</Button>
                                            </Link>
                                        </Td>
                                        <Td>
                                            <Button onClick={() => this.showDeleteModal(id)} outline={true} color="danger">Delete</Button>
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default ListView;