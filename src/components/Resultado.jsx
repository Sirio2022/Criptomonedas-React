import React from 'react';
import styled from '@emotion/styled';

const Contenedor = styled.div`
  color: #fff;
  font-family: 'Lato', sans-serif;
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const Imagen = styled.img`
  display: block;
  width: 120px;
`;

const Texto = styled.p`
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;
const Precio = styled.p`
  color: #009100;
  font-size: 18px;
  span {
    font-weight: 700;
  }
`;

export default function Resultado({ resultado }) {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } =
    resultado;
  return (
    <Contenedor>
      <Imagen
        src={`https://cryptocompare.com/${IMAGEURL}`}
        alt="Imagen Crypto"
      />
      <div>
        <Precio>
          PRECIO ACTUAL: <span>{PRICE}</span>
        </Precio>
        <Texto>
          Precio más alto: <span>{HIGHDAY}</span>
        </Texto>
        <Texto>
          Precio más bajo: <span>{LOWDAY}</span>
        </Texto>
        <Texto>
          Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span>
        </Texto>
        <Texto>
          Última Actualización: <span>{LASTUPDATE}</span>
        </Texto>
      </div>
    </Contenedor>
  );
}
