import styled from "styled-components";
import {BiChevronDown} from "react-icons/bi"


export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 24px;
    position: absolute;
    left: 10px;
    top: 238px;
`;

export const Title = styled.h2`
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.5rem;
    display: flex;
    align-items: center;
    text-align: center;
    color: #151522;

    position: absolute;
    width: 90px;
    height: 24px;
`;

export const OrderButton = styled.details`
    position: absolute;
    width: 100px;
    height: 20px;
    left: 240px;


    background: #D9D9D9;
    border-radius: 3px;

    & ul {
        list-style: none;
        color: #6B6B6B;
        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        background: #D9D9D9;
    }

    & ul:last-child {
        border-radius: 0 0 3px 3px;
    }
`;

export const Summary = styled.summary`
    position: absolute;
    /* width: 64px;
    height: 14px; */
    left: 3px;
    top: 3px; 
    
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #6B6B6B;

    &::-webkit-details-marker {
        display: none;
    }

    &::after {
        content: '⬇';
        color: #6B6B6B;
        text-align: right;
    }
`;


