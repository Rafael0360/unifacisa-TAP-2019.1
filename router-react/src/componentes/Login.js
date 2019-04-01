import React, {Component} from 'react';
import {Button, Form} from "react-bootstrap";
import {withRouter} from "react-router-dom";

class Login extends Component {




    irParaProdutos() {
    
        this.props.history.push('/');
        
    }

    render() {
        return (
            <Form >
                <h5 >Authentication</h5>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" block onClick={() => this.irParaProdutos()}>
                    Login
                </Button>
            </Form>
        );
    }
}

export default withRouter(Login);