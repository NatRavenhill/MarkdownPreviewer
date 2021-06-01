import { createSlice } from '@reduxjs/toolkit';

export const editorSlice = createSlice({
    name: 'editor',
    initialState: {
        value: ''
    },
    reducers: {
        replaceText: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { replaceText } = editorSlice.actions;

export default editorSlice.reducer;