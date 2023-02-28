import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas';

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
  margin-top: 20px;
  &:hover {
    background-color: #66a2fe;
    cursor: pointer;
  }
`;

export default function Formulario({ setMonedas }) {
  const [criptos, setCriptos] = useState([]);
  const [error, setError] = useState(false);

  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas);
  const [criptomoneda, SelectCripto] = useSelectMonedas(
    'Elige tu Criptomoneda',
    criptos
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([moneda, criptomoneda].includes('')) {
      setError(true);
      return;
    }
    setError(false);
    setMonedas({ moneda, criptomoneda });
  };

  useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      // guardarCriptomonedas(resultado.Data);

      const arrayCriptomonedas = resultado.Data.map((cripto) => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,
        };
        return objeto;
      });
      setCriptos(arrayCriptomonedas);
    };
    return () => {
      consultarAPI();
    };
  }, []);

  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCripto />

        <InputSubmit type="submit" value="cotizar" />
      </form>
    </>
  );
}
