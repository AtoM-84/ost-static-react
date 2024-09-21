import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PostType } from '../../@types/post';
import { RootState } from '../../store/store.ts'
import axios from 'axios';

interface PostsState {
    list: PostType[];
    status: "idle" | "pending" | "rejected" | "fulfilled",
    error: string | undefined | null
}

export const initialState: PostsState = {
    list: [],
    status: "idle",
    error: "",
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/blog`);
    return data
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = "pending";
            }).addCase(fetchPosts.rejected, (state, action) => {
                state.error = action.error.message;
                state.status = "rejected";
            }).addCase(fetchPosts.fulfilled, (state, action) => {
                state.list = action.payload;
                state.status = "fulfilled";
            })
    }
})

export const selectAllPosts = (state: RootState) => state.posts.list;
export const selectPostsStatus = (state: RootState) => state.posts.status;
export const selectPostsError = (state: RootState) => state.posts.error;

export default postsSlice.reducer; 