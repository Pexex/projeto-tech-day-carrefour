import React from "react";
import { Container, OrderButton, Summary, Title } from "./styles";

export default function SectionHead (){
    return (
        <Container>
            <Title>Produtos</Title>
            <OrderButton>
                <Summary>Ordenar por</Summary>
                <ul>
                    <li>Maior Preço</li>
                    <li>Menor Preço</li>
                    <li>Categoria</li>
                </ul>
            </OrderButton>
        </Container>
    );
}