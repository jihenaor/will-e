import { createSlice } from '@reduxjs/toolkit';

export const puestosSlice = createSlice({
    name: 'puestos',
    initialState: {
        isLoading: false,
        messageSaved: '',
        puestos: [],
        
    },
    reducers: {
        load: (state, /* action */ ) => {

        },
    }
});
    
export const { load } = puestosSlice.actions;