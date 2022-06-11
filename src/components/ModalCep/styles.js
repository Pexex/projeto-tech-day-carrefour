import styled from "styled-components";


export const Container = styled.div`
    position: absolute;
    width: 21.25rem;
    height: 15.813rem;
    left: 0.625px;
    top: 9.813px;

    background: #1469C3;
    box-shadow: 0.25rem 0.5rem 0.25rem rgba(21, 21, 34, 0.15);
    border-radius: 0.5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.h1`
    /* Para melhor lhe atender, */

    position: absolute;
    width: 15rem;
    height: 1.5rem;
    left: 1rem;
    top: 2.125rem;

    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 1.25rem;
    line-height: 1.5rem;

    /* Branco BG */

    color: #F7F7FC;
`;

export const Title2 = styled.h2`
    /* Buscaremos a loja mais próxima de você! */

    position: absolute;
    width: 17.188rem;
    height: 1.063rem;
    left: 1rem;
    top: 3.938rem;

    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 1.063rem;
    /* identical to box height */

    /* Branco BG */

    color: #F7F7FC;
`;

export const FormCep = styled.input`
    /* formulario */

    position: absolute;
    width: 12.5rem;
    height: 1.875rem;
    left: 1.25rem;
    top: 6.875rem;

    /* Branco BG */

    background: #F7F7FC;

    /* Vermelho principal */

    border: 1px solid #E71E26;
    border-radius: 4px;

    &::placeholder{
        /* placeholder */

        position: absolute;
        width: 6.283rem;
        height: 0.938rem;
        left: 1.833rem;
        top: 7.375rem;

        font-family: 'Lato', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 0.938rem;
        padding-left: .5rem;

        /* identical to box height */

        color: #676767;

    }
`;

export const Button = styled.button`
    /* Rectangle 16 */

    position: absolute;
    width: 5.75rem;
    height: 1.875rem;
    left: 14.25rem;
    top: 6.875rem;

    background: #E71E26;
    box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    border: none;

    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.188rem;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;

    color: #E9E9E9;

    cursor: pointer;
`;

export const UnderInputText = styled.a`
    /* Não sabe o CEP? Busque aqui */

    position: absolute;
    width: 8.938rem;
    height: 0.75rem;
    left: 1.25rem;
    top: 9.063rem;

    font-family: 'Lato',sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 0.625rem;
    line-height: 0.75rem;
    text-decoration: none;

    color: #FFFFFF;
`;

export const Logo = styled.div`
    /* logo */

    position: absolute;
    width: 8.375rem;
    height: 1.575rem;
    left: 11.625rem;
    top: 12.938rem;
    color: #F7F7FC;
    
`;

