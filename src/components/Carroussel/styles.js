import styled from 'styled-components';
import hortifruti from '../../img/hortifruti.png';
import mercearia from '../../img/mercearia.png';
import bebidas from '../../img/bebidas.png';
import higiene from '../../img/higiene.png';



export const Container = styled.div`
    display: block;
    position: relative;
    width: 100vw;
    height: 7.5rem;
    /* flex: 1; */
    height: 7.25rem;
    z-index: 1;
    padding: 5rem 0 0 0;
    /* justify-content: space-between; */
    /* align-items: center; */
`;

export const CategorieContainer = styled.div`
    width: 5.813rem;
    height: 7.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding-left: 2rem;
`;

export const CategorieText = styled.h5`
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 1.125rem;
    line-height: 1.375rem;
    text-align: center;
    position: relative;
`;

export const CategorieImg = styled.div`
    width: 5.813rem;
    height: 5.813rem;
    border-radius: 50%;
    position: relative;
`;

export const HortiFrutiImg = styled(CategorieImg)`
    background: url(${hortifruti});
`;

export const MerceariaImg = styled(CategorieImg)`
    background: url(${mercearia});
`;

export const BebidasImg = styled(CategorieImg)`
    background: url(${bebidas});
`;

export const HigieneImg = styled(CategorieImg)`
    background: url(${higiene});
`;