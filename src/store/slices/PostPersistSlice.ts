import {createSlice} from '@reduxjs/toolkit'
import type { CategoryResponse } from "../../../APIs";

type PostPersistObj = {
    title: string;
    text: string;
    attachmentType: 'none' | 'survey';
    surveyOptions: string[];
    tagsArray: string[];
    selectedCategory: CategoryResponse | null;
}

const initialState: { obj: PostPersistObj | null } = {
    obj: null
}

export const postPersist = createSlice({
    name: 'postPersistData',
    initialState,
    reducers: {
        setValues(state, action) {
            state.obj = action.payload
        },
        resetValues(state) {
            state.obj = null
        }
    },
})

export const postPersistActions = postPersist.actions;

export default postPersist.reducer;