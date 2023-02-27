import React, { useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem; //24px
  font-weight: 700;
  margin-top: 15px 0 0 0;
  margin-bottom: 15px;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 1rem; //16px
  border-radius: 10px;
  margin-bottom: 20px;
`;

export default function useSelectMonedas(label, opciones) {
  const [state, setState] = useState('');

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">- Seleccione -</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );
  return [state, SelectMonedas];
}
