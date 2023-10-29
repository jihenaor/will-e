import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './auth';
import { candidatosSlice } from '../candidatos';
import { puestosSlice } from '../puestos';
import { resultadosSlice } from '../resultados';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    candidatos: candidatosSlice.reducer,
    puestos: puestosSlice.reducer,
    resultados: resultadosSlice.reducer, 
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch