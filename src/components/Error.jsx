import React from 'react';
import styled from '@emotion/styled';

const MensajeError = styled.div`
  background-color: #b7322c;
  color: #fff;
  padding: 1rem;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
  font-family: 'Lato', sans-serif;
`;

export default function Error({ children }) {
  return <MensajeError>{children}</MensajeError>;
}
