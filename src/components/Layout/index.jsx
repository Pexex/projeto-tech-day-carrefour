import React from "react";
import Header from "../Header"
import Carroussel from "../Carroussel";
import {Container, Divider} from "./styles";

export default function Layout (){
    return (
        <Container>
            <Header/>
            <Carroussel/>
            <Divider/>
        </Container>
    );
};