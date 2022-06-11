import styled from "styled-components";

import {FaShoppingCart, FaRegHeart, FaSearch} from "react-icons/fa";

export const Container = styled.header`
    /* header */

    position: fixed;
    width: 100vw;
    height: 3.75rem;
    top: 0px;
    flex: 1;
    padding: 0 1.2rem;

    display:flex;
    align-items: center;
    justify-content: space-between;

    /* Branco BG */

    background: #F7F7FC;
    box-shadow: 0px 4px 13px 1px rgba(0, 0, 0, 0.15);
    border-radius: 0px 0px 4px 4px;
`;

export const CartIcon = styled(FaShoppingCart)`
    width: 1.25rem;
    height: 1.125rem;
    color: #1C4FD3;
    cursor: pointer;
`;

export const HearthIcon = styled(FaRegHeart)`
    width: 1.25rem;
    height: 1.125rem;
    color: #E71E26;
    cursor: pointer;
`;

export const SearchIcon = styled(FaSearch)`
    width: 1.25rem;
    height: 1.125rem;
    color: #1C4FD3;
    cursor: pointer;
`;

export const IconsContainer = styled.div`
    display: flex;
    /* align-items: center;
    justify-content: space-between; */
    justify-self: flex-end;
    gap: .4rem;
`;

export const HeaderLogo = styled.div`
    width: 2.375rem;
    height: 1.575rem;
    align-self: center;
`;
