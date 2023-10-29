import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Candidato } from '../domain/candidato.interface';


interface CandidatoState {
    isLoading: false,
    messageSaved: string,
    candidatos: Candidato[];
}

const initialState: CandidatoState = {
    isLoading: false,
    messageSaved: '',
    candidatos: [],
  };
  

export const candidatosSlice = createSlice({
    name: 'candidatos',
    initialState,
    reducers: {
        setCandidatos: (state, action: PayloadAction<Candidato[]>) => {
            state.candidatos = action.payload;
          },
      
    }
});
    
export const { setCandidatos } = candidatosSlice.actions;