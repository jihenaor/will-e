import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { Resultado } from '../domain/resultado.interface';

export const loadResultados = async () => {
  if (!process.env.REACT_APP_CLIENTE_ID) throw new Error('El UID del cliente no existe');

  const collectionRef = collection(FirebaseDB, `${process.env.REACT_APP_CLIENTE_ID}/elecciones/resultados`);
  const docs = await getDocs(collectionRef);

  const resultados: Resultado[] = [];
  docs.forEach((doc) => {
    resultados.push({
      id: doc.id,
      zona: doc.data().zona,
      puesto: doc.data().puesto,
      mesa: doc.data().mesa,
      candidato: doc.data().candidato,
      votospdf: doc.data().votospdf,
      votosreporte: doc.data().votosreporte,
    });
  });

  return resultados;
};
