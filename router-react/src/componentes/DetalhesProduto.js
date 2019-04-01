import React, {Component} from 'react';
import {LojaContext} from '../context/LojaContext';
import {Button, Card} from "react-bootstrap";
import BancoDeDados from "../bd/BancoDeDados";
import FormataMoeda from "./FormataMoeda";


class DetalhesProduto extends Component {

   

    render() {
        let {id} = this.props.match.params;
        let produto = BancoDeDados.getProduto(id);
        return (
            <Card className="text-center">
                <Card.Header as="h5">
                    {produto.nome}
                </Card.Header>
                <Card.Img style={{width: '25%', margin: 'auto'}} variant="top" src={produto.imagem}/>
                <Card.Body style={{width: '60%', margin: 'auto'}}>
                    <Card.Title><FormataMoeda valor={produto.preco}/></Card.Title>
                    <Button variant="outline-primary" block
                            onClick={() => this.context.comprar(produto)}>
                        Comprar
                    </Button>
                
                </Card.Body>
            </Card>
        );
    }
}

DetalhesProduto.contextType = LojaContext;

export default DetalhesProduto;