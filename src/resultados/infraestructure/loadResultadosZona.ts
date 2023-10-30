import { collection, getDocs, query, where } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { Resultado } from '../domain/resultado.interface';

export const loadResultadosZona = async (zona: string, puesto: string, mesa: string) => {
  if (!process.env.REACT_APP_CLIENTE_ID) throw new Error('El UID del cliente no existe');

  const collectionRef = collection(FirebaseDB, `${process.env.REACT_APP_CLIENTE_ID}/elecciones/resultados`);
  const q = query(collectionRef, where('zona', '==', zona), where('puesto', '==', puesto), where('mesa', '==', mesa));
  const querySnapshot = await getDocs(q);

  const resultados: Resultado[] = [];
  querySnapshot.forEach((doc) => {
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

  console.log('Resul:', resultados, zona, puesto, mesa)
  return resultados;
};
