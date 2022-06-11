import React from "react";
import LogoModal from "../../icons/logo-modal-cep.svg";


import {Container, Button, FormCep, Logo, Title, Title2, UnderInputText} from "./styles";

export default function ModalCep(){
    return (
        <Container>
            <Title>Para melhor lhe atender,</Title>
            <Title2>Buscaremos a loja mais próxima de você!</Title2>
            <FormCep placeholder="Digite seu CEP" type="text" />
            <Button>Enviar</Button>
            <UnderInputText href="https://buscacepinter.correios.com.br/app/endereco/index.php">Não sabe o CEP? Busque aqui</UnderInputText>
            <Logo>
                <img src={LogoModal} alt="Logo Carrefour" />
            </Logo>
        </Container>
    );
}