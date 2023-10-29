import { setCandidatos } from '..';
import { Dispatch } from 'redux';
import { loadCandidatos } from '../infraestructure/loadCandidatos';

export const consultarCandidatos = async (dispatch: Dispatch) => {
    try {
        const candidatos = await loadCandidatos();

        dispatch(setCandidatos(candidatos));
      } catch (error) {
        console.error(error);
      }
}
