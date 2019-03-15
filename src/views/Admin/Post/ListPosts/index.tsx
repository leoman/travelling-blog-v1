import React, { PureComponent } from 'react';
import { postData } from '../../../../data/postData';
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
} from '@bootstrap-styled/v4';
import { Link } from "react-router-dom";
import { Table } from './styles';

class ListView extends PureComponent {

    componentDidMount() {
        // call API for 
    }

    render() {
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
                                {postData.map(({ id, title, date }, i) => (
                                    <Tr key={i.toString()}>
                                        <Td>
                                            Title: {title}
                                        </Td>
                                        <Td>
                                            Date: {moment(date).format("MMMM Do YYYY")}
                                        </Td>
                                        <Td>
                                            <Link to={`/admin/posts/${id}`}>
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