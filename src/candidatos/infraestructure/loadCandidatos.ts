import { collection, getDocs } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../firebase/config';
import { Candidato } from './../domain/candidato.interface';

export const loadCandidatos = async () => {
  if (!process.env.REACT_APP_CLIENTE_ID) throw new Error('El UID del cliente no existe');

  const collectionRef = collection(FirebaseDB, `${process.env.REACT_APP_CLIENTE_ID}/elecciones/candidatos`);
  const docs = await getDocs(collectionRef);

  const candidatos: Candidato[] = [];
  docs.forEach((doc) => {
    candidatos.push(
      { id: doc.id,
        codigo: doc.data().codigo,
        nombre: doc.data().nombre,
      }
    );
  });

  console.log(candidatos);
  return candidatos;
};
