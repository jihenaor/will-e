import { setResultados } from '..';
import { Dispatch } from 'redux';
import { loadResultados } from '../infraestructure/loadResultados';


export const consultarResultados = async (dispatch: Dispatch) => {
    try {
        const resultados = await loadResultados();

        dispatch(setResultados(resultados));
      } catch (error) {
        console.error(error);
      }
}
