import { useDispatch, useSelector } from 'react-redux';

import { Typography } from '@mui/material';
import FilterInterface from '../interfaces/filterInterface';
import { consultarCandidatos } from '../../candidatos/application/consultarCandidatosThunk';
import { RootState } from '../../store';

import FilterForm from '../components/FilterForm';
import CandidatosEditable from '../components/CandidatosEditable';
import { useEffect, useState } from 'react';

import { Candidato } from '../../candidatos/domain/candidato.interface';
import { consultarResultados } from '../../resultados/application/consultarResultadosThunk';
import { Resultado } from '../../resultados/domain/resultado.interface';
import { updateResultado } from '../../resultados/domain/updateResultadoThuks';

const VotoPreferentePage = () => {
  const dispatch = useDispatch();
  const [zona, setZona] = useState<string>('');
  const [puesto, setPuesto] = useState<string>('');
  const [mesa, setMesa] = useState<string>('');
  const [candidatosSelected, setCandidatosSelected] = useState<Candidato[]>([]);

  const { candidatos } = useSelector((state: RootState) => state.candidatos);

  const { resultados } = useSelector((state: RootState) => state.resultados);

  function inicializarResultadosEnCandidatos(resultados: Resultado[]) {
    let candis: Candidato[] = []

    candidatos.forEach((candidato) => {
      const resultadoEncontrado = resultados.find((resultado) => resultado.candidato === candidato.id);

      if (resultadoEncontrado) {
        candis.push({
          id: candidato.id,
          codigo: resultadoEncontrado.candidato,
          nombre: candidato.nombre,
          votospdf: resultadoEncontrado.votospdf,
          votosreporte: resultadoEncontrado.votosreporte,
          resultado: resultadoEncontrado
        })
      } else {
        candis.push({
          id: candidato.id,
          codigo: candidato.id,
          nombre: candidato.nombre,
        })
      }
    });

    setCandidatosSelected(candis)
  }

  const handleCancel = () => {
    setCandidatosSelected([]);
    setZona('')
  }

  const handleSaveData = (candis: Candidato[]) => {

    candis.forEach(candi => {
        let resultado : Resultado;

        if (candi.resultado) {
          resultado = {
            ...candi.resultado,
            candidato: candi.id || '',
            votospdf: candi.votospdf || 0,
            votosreporte: candi.votosreporte || 0
          }
        } else {
          resultado = {
            zona,
            puesto,
            mesa,
            candidato: candi.id || '',
            votospdf: candi.votospdf || 0,
            votosreporte: candi.votosreporte || 0  
          }
        }

        updateResultado(resultado);
        setZona('')
    });
    setCandidatosSelected([]);
  };

  const handleFormSubmit = (values: FilterInterface) => {
    setZona(values.zona)
    setPuesto(values.puesto);
    setMesa(values.mesa)

    if (!values.zona || values.zona.length == 0) {
      alert('No ha seleccionado una zona')
      return;
    }
    setCandidatosSelected([])
    consultarResultados(dispatch, values.zona, values.puesto, values.mesa);

    console.log('Form submitted with values:', values);
  };

  useEffect(() => {
    consultarCandidatos(dispatch);
  }, []);

  useEffect(() => {
    console.log('r', resultados)
    inicializarResultadosEnCandidatos(resultados);
  }, [resultados]);

  return (
    <div>
      <Typography variant='h4'>Voto preferente</Typography>
      {
        (zona && zona.length > 0 ) ?
        <></>
        :
        <FilterForm onSubmit={handleFormSubmit} initialZona={ zona } />
      }

      {zona}
      - { candidatosSelected.length }
      - r: { resultados.length }
      {
        (zona && zona.length > 0 && candidatosSelected.length > 0) ?
        <CandidatosEditable candidatos={candidatosSelected} onSave={handleSaveData} onCancel={ handleCancel }/>
        :
        <></>
      }
    </div>
  );
};

export default VotoPreferentePage;
