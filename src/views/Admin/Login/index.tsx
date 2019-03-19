import React, { PureComponent } from 'react';
import NetworkService from '../../../service';
import { LoginModel } from '../../../models/LoginModel';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Jumbotron,
    H1,
    Hr,
    Button,
    Form,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    Input,
    Alert,
} from '@bootstrap-styled/v4';

interface Props extends RouteComponentProps<any> {}

interface State extends LoginModel {
    message: string;
}

class Login extends PureComponent <Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            message: '',
        }
    }

    onChange = (value: string, field: string) => this.setState({ [field]: value } as Pick<LoginModel, keyof LoginModel>);

    onSubmit = async () => {
        const { history } = this.props;
        const { username, password } = this.state;

        const response = await NetworkService.login({ username, password });

        if(!response.auth) {
            this.setState({ message: 'Your login credentials were incorrect' });
        } else {
            history.push("/admin/posts");
        }
    }

    render() {

        const { username, password, message }: State = this.state;

        return (
            <Container>
                <Row>
                    <Col lg="12">
                        <Jumbotron>
                            <H1 className="display-4">Admin: Login</H1>
                            <Hr className="my-4" />
                        </Jumbotron>
                    </Col>
                </Row>

                <Row>
                    <Col>

                        {message && <Alert color="danger" isOpen={message} uncontrolled autoHideDuration="5000">{message}</Alert>}
                        
                        <Form>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon>Username: </InputGroupAddon>
                                    <Input onChange={(e: React.FormEvent<HTMLInputElement>) => this.onChange(e.currentTarget.value, 'username')} value={username} type="text" className="form-control" />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <InputGroup>
                                    <InputGroupAddon>Password:&nbsp;</InputGroupAddon>
                                    <Input onChange={(e: React.FormEvent<HTMLInputElement>) => this.onChange(e.currentTarget.value, 'password')} value={password} type="password" className="form-control" />
                                </InputGroup>
                            </FormGroup>
                        </Form>
                        
                        <Button onClick={() => this.onSubmit()} outline="true" color="primary">Login</Button>
                    </Col>
                </Row>
            </Container>
        )
    }

}

export default withRouter(Login);