import { Resultado } from './../../resultados/domain/resultado.interface';
export interface Candidato {
  id: string;
  codigo?: string;
  nombre?: string;
  votospdf?: number;
  votosreporte?: number;
  resultado?: Resultado
}
