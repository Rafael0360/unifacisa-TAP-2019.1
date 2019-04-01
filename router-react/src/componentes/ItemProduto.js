import React, {Component} from 'react';
import {LojaContext} from '../context/LojaContext';
import FormataMoeda from './FormataMoeda';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

class ItemProduto extends Component {
    render() {
        return (
            <Col xs={3}>
                <Card className="text-center">
                    <Link to={'/detalhesProduto/' + this.props.produto.nome}>
                        <Card.Header as="h5">{this.props.produto.nome}</Card.Header>
                        <Card.Img variant="top" src={this.props.produto.imagem}/>
                    </Link>
                    <Card.Body>
                        <Card.Title><FormataMoeda valor={this.props.produto.preco}/></Card.Title>
                        <Button variant="outline-primary" block
                                onClick={() => this.context.comprar(this.props.produto)}>
                            Comprar
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
        );
    }
}

ItemProduto.contextType = LojaContext;

export default ItemProduto;