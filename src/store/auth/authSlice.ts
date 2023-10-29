import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  status: 'checking' | 'not-authenticated' | 'authenticated';
  uid: string | null;
  email: string | null;
  displayName: string | null;
  errorMessage: string | null;
  accessToken: string | null;
}

interface LoginPayload {
  access_token: string;
  uid: string;
  displayName: string;
}

interface LogoutPayload {
  errorMessage?: string;
}

const initialState: AuthState = {
  status: 'checking',
  uid: null,
  email: null,
  displayName: null,
  errorMessage: null,
  accessToken: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<LoginPayload>) => {
      state.status = 'authenticated';
      state.accessToken = payload.access_token;
      state.uid = payload.uid;
      state.displayName = payload.displayName;
      state.errorMessage = null;
    },
    logout: (state, { payload }: PayloadAction<LogoutPayload>) => {
      state.status = 'not-authenticated';
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.errorMessage = payload?.errorMessage || null;
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
