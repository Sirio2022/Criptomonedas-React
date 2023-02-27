import React from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
  color: #fff;
`;

export default function useSelectMonedas(label) {
  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>
    </>
  );
  return [SelectMonedas];
}
