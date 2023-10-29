import { Resultado } from './../domain/resultado.interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ResultadoState {
    isLoading: false,
    message: string,
    resultados: Resultado[];
}

const initialState: ResultadoState = {
    isLoading: false,
    message: '',
    resultados: [],
  };
  

export const resultadosSlice = createSlice({
    name: 'resultados',
    initialState,
    reducers: {
        setResultados: (state, action: PayloadAction<Resultado[]>) => {
            state.resultados = action.payload;
            state.message = 'Seleccionados: ' + action.payload.length 
          },
        setSaving: (state) => {

        },
        updateResultados: (state, action ) => {

        },
    }
});
    
export const { setResultados, setSaving, updateResultados } = resultadosSlice.actions;