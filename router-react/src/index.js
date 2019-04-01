import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Loja from './componentes/Loja';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {LojaProvider} from "./context/LojaContext";

ReactDOM.render(
    <LojaProvider>
        <Loja nome="Facisa Store"/>
    </LojaProvider>,
    document.getElementById('root')
);

// Se for user serviceworker, troca por .register
serviceWorker.unregister();