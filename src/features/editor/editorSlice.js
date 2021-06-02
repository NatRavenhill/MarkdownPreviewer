import { createSlice } from '@reduxjs/toolkit';

export const editorSlice = createSlice({
    name: 'editor',
    initialState: {
        value: '',
        preview: '',
    },
    reducers: {
        replaceText: (state, action) => {
            state.value = action.payload;
            state.preview = action.payload;
        }
    }
})

export const { replaceText } = editorSlice.actions;

export default editorSlice.reducer;