import React from "react";
import {Container, CartIcon, HearthIcon,SearchIcon, IconsContainer, HeaderLogo} from "./styles";
import Logo from "../../icons/logoHeader.svg";
import Burger from "../Hamburguer/Burguer/index"

export default function Header (){
    return (
        <Container>
            <Burger/>
            <HeaderLogo>
                <img src={Logo} alt="Logo Carrefour" />
            </HeaderLogo>
            <IconsContainer>
                <SearchIcon/>
                <HearthIcon/>
                <CartIcon/>
            </IconsContainer>
        </Container>
    );
}