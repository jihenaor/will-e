import { updateResultadoDB } from '../infraestructure/updateResultadoDB';
import { Resultado } from './resultado.interface';

export const updateResultado = async (resultado: Resultado) => {
    await updateResultadoDB(resultado);
}
