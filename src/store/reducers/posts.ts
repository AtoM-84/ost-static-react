import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { Post } from '../../@types/post';
import axios from 'axios';

interface PostsState {
    list: Post[];
    loading: boolean,
    error: string | undefined | null
}
export const initialState: PostsState = {
    list: [],
    loading: true, 
    error: null,
};

export const loadPosts = createAsyncThunk("posts/loadPosts", async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/blog`);
    return data; 
}) 

const postsReducer = createReducer(initialState, (builder) => {
    builder.addCase(loadPosts.pending, (state) => {
        state.loading = true;
    })
})

export default postsReducer; 