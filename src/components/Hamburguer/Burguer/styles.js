import styled from 'styled-components';

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1.25rem;
  height: 1.125rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  gap: .3rem;
  
  &:focus {
    outline: none;
  }
  
  div {
  width: 1.25rem;
  background: #151522;
  border: 1px solid #151522;
  }
`;