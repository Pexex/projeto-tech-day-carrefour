import React, {useEffect, useState} from "react";
import {getProducts} from "../api";
import ProductCard from "../ProductCard";
import { Container, ProductsArea } from "./styles";
import { seller } from "../ModalCep";


export default function ProductsList (){


    const [products, setProducts] = useState ([]);
    setProducts = getProducts(seller);

    return (
        <Container>
            <ProductsArea>
               {products.map(product => <ProductCard/>)}
        </ProductsArea>
        </Container>
    );
}
