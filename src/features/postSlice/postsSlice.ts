import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Post } from '../../@types/post';
import axios from 'axios';

interface PostsState {
    list: Post[];
    isLoading: boolean,
    error: string | undefined | null
}

export const initialState: PostsState = {
    list: [],
    isLoading: false, 
    error: "",
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const {data} = await axios.get(`http://localhost:3000/blog`);
    console.log(data);
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
        state.isLoading = true;
    }).addCase(fetchPosts.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
    }).addCase(fetchPosts.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoading = false; 
    })
  }
})

export const selectAllPosts = (state:any) => state.posts.list
export default postsSlice.reducer; 