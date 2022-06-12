import styled from "styled-components";

export const Card = styled.div`
    display:flex;
    flex-direction: column;
    
    /* card 1 */

    position: relative;
    max-width: 6.25rem;
    width: 6.25rem;
    height: 9.563rem;
    /* left: 20px;
    top: 282px; */
    /* border: 1px solid blue; */
    border-radius: 4px;
    font-family: "Lato", sans-serif;
`;

export const ProductImg = styled.div`
    width: 100px;
    height: 100px;
    overflow: hidden;
    background: url('https://conteudo.imguol.com.br/c/entretenimento/0e/2017/10/15/batata-crua-1508077604971_v2_450x450.jpg') no-repeat center;
    border-radius: 10px;
`;

export const ProductDetails = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: left;
    text-align: left;
`;

export const Price = styled.h2`
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    color: #151522;
`;

export const ProductName = styled.h1`
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;
    color: #292942;
`;

export const ProductUnit = styled.p`
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #3D3D62;
`;

