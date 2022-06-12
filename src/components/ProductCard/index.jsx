import React from "react";

import { Card, Price, ProductDetails, ProductImg, ProductName, ProductUnit } from "./styles";

export default function ProductCard (){
    return(
        <Card>
            <ProductImg/>
            <ProductDetails>
                <Price>R$ 4,80</Price>
                <ProductName>Batata Monaliza</ProductName>
                <ProductUnit>1Kg</ProductUnit>
            </ProductDetails>
        </Card>
        
    );
};