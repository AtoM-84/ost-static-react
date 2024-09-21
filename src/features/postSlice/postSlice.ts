import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { PostType } from '../../@types/post';
import { RootState } from '../../store/store.ts'
import axios from 'axios';

export const initialState: PostType = {
        id: 0,
        title: "Title",
        sub_title: "subtitle",
        updated_at: 0,
        author_name: [""],
        // author_email: "",
        content: "",
        status: "idle",
        error: ""
}

export const fetchOnePost = createAsyncThunk("post/fetchOnePost", async (id: number) => {
        console.log(`${import.meta.env.VITE_API_URL}/blog/post/${id}`)
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/blog/post/${id}`);
        return data
})

const postSlice = createSlice({
        name: 'post',
        initialState,
        reducers: {
                resetOnePost(state) {
                        state.status = "idle"
                },
        },
        extraReducers(builder) {
                builder
                        .addCase(fetchOnePost.pending, (state) => {
                                state.status = "pending";
                        }).addCase(fetchOnePost.rejected, (state, action) => {
                                state.error = action.error.message;
                                state.status = "rejected";
                        }).addCase(fetchOnePost.fulfilled, (state, action) => {
                                console.log(action.payload)
                                state.id = action.payload.id
                                state.title = action.payload.title
                                state.sub_title = action.payload.sub_title
                                state.content = action.payload.content
                                state.updated_at = action.payload.updated_at
                                // state.author_email = action.payload.author_email
                                state.author_name = action.payload.author_name
                                state.status = "fulfilled";
                        })
        }
})
export const {resetOnePost} = postSlice.actions
export const selectOnePost = (state: RootState) => state.post;
export const selectPostStatus = (state: RootState) => state.post.status;
export const selectPostError = (state: RootState) => state.post.error;

export default postSlice.reducer; 