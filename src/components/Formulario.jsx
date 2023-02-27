import React from 'react';
import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 1rem; //16px
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
  border-radius: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #66a2fe;
    cursor: pointer;
  }
`;

export default function Formulario() {
  const [SelectMonedas] = useSelectMonedas('Elige tu Moneda');
  const [SelectCripto] = useSelectMonedas('Elige tu Criptomoneda');

  return (
    <form>
      <SelectMonedas />
      <SelectCripto />
      <InputSubmit type="submit" value="cotizar" />
    </form>
  );
}
