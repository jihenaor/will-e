import { Typography } from '@mui/material';
import { consultarResultados } from '../application/consultarResultadosThunk';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { RootState } from '../../store';
import ResultadosList from '../components/ResultadosList';

const ResultadosPage = () => {
  const dispatch = useDispatch();
  const { resultados } = useSelector((state: RootState) => state.resultados);

  useEffect(() => {
    consultarResultados(dispatch);
  }, []);

  return (
    <div>
            <Typography variant='h4'>Resultados</Typography>


          <ResultadosList resultados={resultados}></ResultadosList>

    </div>
  );
};

export default ResultadosPage;
