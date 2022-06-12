import React, { useState } from "react";
import Header from "../Header"
import Carroussel from "../Carroussel";
import {Container, Divider} from "./styles";
import SectionHead from "../SectionHead";
import ProductsList from "../ProductsList";
import ModalCep from "../ModalCep";


export const [modalState, setModalState] = useState(null);

export default function Layout (){
    return (
        <Container>
            <Header/>
            <Carroussel/>
            <Divider/>
            <SectionHead/>
            <ProductsList/>
            <ModalCep isopen={Boolean(modalState == null)} onClickclose={() => setModalState(1)}/>
        </Container>
    );
};