import React, { useState } from "react";
import ReactDOM from "react-dom";
import LogoModal from "../../icons/logo-modal-cep.svg";
import { getSeller } from "../api";

import {Container, Button, FormCep, Logo, Title, Title2, UnderInputText} from "./styles";

const portalRoot = document.getElementById('portal-root');

export default function ModalCep(isOpen, onClickClose){

    const [postalCode, setPostalCode] = useState(null);
    const [seller, setSeller] = useState('');

    if (!isOpen){
        return null;
    }

    return ReactDOM.createPortal(
        <Container>
            <Title>Para melhor lhe atender,</Title>
            <Title2>Buscaremos a loja mais próxima de você!</Title2>
            <FormCep placeholder="Digite seu CEP" type="text" onChange={(e) => setPostalCode(e.target.value)}/>
            <Button onClick={() =>{
                if (postalCode != null){
                    setSeller(getSeller(postalCode));
                    onClickClose;
                }
            }}>
                Enviar
            </Button>
            <UnderInputText href="https://buscacepinter.correios.com.br/app/endereco/index.php">Não sabe o CEP? Busque aqui</UnderInputText>
            <Logo>
                <img src={LogoModal} alt="Logo Carrefour" />
            </Logo>
        </Container>,
        portalRoot,
    );
}

export seller;