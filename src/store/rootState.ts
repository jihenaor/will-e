import { combineReducers } from '@reduxjs/toolkit';

import { authSlice } from './auth/authSlice';
import { candidatosSlice } from '../candidatos';


const rootReducer = combineReducers({

  auth: authSlice.reducer,
  candidato: candidatosSlice.reducer,
  // otros slices que quieras agregar al store
});

export type RootState = ReturnType<typeof rootReducer>;