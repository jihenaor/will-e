import { setResultados } from '..';
import { Dispatch } from 'redux';
import { loadResultadosZona } from '../infraestructure/loadResultadosZona';


export const consultarResultadosZona = async (dispatch: Dispatch, zona: string, puesto: string, mesa: string) => {
    try {
        const resultados = await loadResultadosZona(zona, puesto, mesa);

        dispatch(setResultados(resultados));
      } catch (error) {
        console.error(error);
      }
}
