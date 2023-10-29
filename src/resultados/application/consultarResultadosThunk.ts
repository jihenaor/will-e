import { setResultados } from '..';
import { Dispatch } from 'redux';
import { loadResultados } from '../infraestructure/loadResultados';


export const consultarResultados = async (dispatch: Dispatch, zona: string, puesto: string, mesa: string) => {
    try {
        const resultados = await loadResultados(zona, puesto, mesa);

        dispatch(setResultados(resultados));
      } catch (error) {
        console.error(error);
      }
}
