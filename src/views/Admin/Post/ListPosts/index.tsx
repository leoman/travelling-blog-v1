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
} from '@bootstrap-styled/v4';
import { Link } from "react-router-dom";
import { Table, ControlBar } from './styles';

interface ListViewProps {
    
}

interface ListViewState {
    posts: PostModel[]
}

class ListView extends PureComponent <ListViewProps, ListViewState> {

    constructor(props: ListViewProps) {
        super(props);

        this.state = {
            posts: [],
        }
    }

    async componentDidMount()  {
        const posts = await NetworkService.getPosts();

        if(!posts) return null;
        
        this.setState({
            posts
        });
    }

    render() {

        const { posts } = this.state;

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
                                        Date
                                    </Th>
                                    <Th colSpan={2}>

                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {posts.map(({ id, title, date }, i) => (
                                    <Tr key={i.toString()}>
                                        <Td>
                                            Title: {title}
                                        </Td>
                                        <Td>
                                            Date: {moment(date).format("MMMM Do YYYY")}
                                        </Td>
                                        <Td>
                                            <Link to={`/admin/posts/edit/${id}`}>
                                                <Button outline="true" color="primary">Edit</Button>
                                            </Link>
                                        </Td>
                                        <Td>
                                            <Button outline={true} color="danger">Delete</Button>
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