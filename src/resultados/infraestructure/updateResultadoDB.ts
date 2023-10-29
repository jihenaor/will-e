import { collection, doc, setDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { Resultado } from '../domain/resultado.interface';

export const updateResultadoDB = async (resultado: Resultado) => {
    try {
        let resultadoDoc;
        if (!resultado.id) {
            resultadoDoc = doc( collection( FirebaseDB, `${process.env.REACT_APP_CLIENTE_ID}/elecciones/resultados`) );
        } else {
            resultadoDoc = doc(FirebaseDB, `${process.env.REACT_APP_CLIENTE_ID}/elecciones/resultados/${resultado.id}`);
        }
        await setDoc( resultadoDoc, 
            {
                zona: resultado.zona,
                puesto: resultado.puesto,
                mesa: resultado.mesa,
                candidato: resultado.candidato,
                votospdf: Number(resultado.votospdf),
                votosreporte: Number(resultado.votosreporte)
            });
    } catch (error) {
        console.error(error);
    }
}

