import React, {Component} from 'react';
import {LojaContext} from '../context/LojaContext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Badge from 'react-bootstrap/Badge';
import {Link} from "react-router-dom";
import { browserHistory } from 'history'

class BarraDeBusca extends Component {

  

    render() {
        return (
            <Navbar  fixed="top">
                <Navbar.Brand>Facisa Store</Navbar.Brand>
                <Nav>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <React.Fragment>
                        <Link to="/login">
                            <Button variant="light">Login</Button>
                            </Link>
                            <Form inline>
                                <FormControl style={{width: '300px'}} type="text" placeholder="Procurar" className="mr-sm-2" onChange={(event) => this.context.buscar(event.target.value)}/>
                            </Form>
                            {(this.context.state.carrinho.length <= 0) ? '' : (
                                <Button variant="primary" onClick={this.context.mostrarCarrinho}>
                                    🛒 <Badge variant="light">{this.context.state.carrinho.length}</Badge>
                                </Button>
                            )}
                        </React.Fragment>
                    </Navbar.Collapse>
                </Nav>
            </Navbar>
        );
    }
}

BarraDeBusca.contextType = LojaContext;

export default BarraDeBusca;