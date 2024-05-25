import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UserQueries } from "../api/userQueries";
import * as SecureStore from 'expo-secure-store';
import { RootState } from './store';
import { User } from "./userSlice";
import { CreateProfilePictureDTO, GetProfilePictureDTO } from "../entities/CreateProfilePictureDTO";
import { profilePictureAPI } from "../api/profilePictureAPI";

export interface ProfilePhotoState {
    user:  User | null,
    loading: boolean,
    error: string | null,
    photo: string | null,
    savedPhoto: string | null
}

const initialState: ProfilePhotoState = {
    user: null,
    loading: false,
    error: null,
    photo: null,
    savedPhoto: null,
}
  
export const saveProfilePicture = createAsyncThunk(
    'saveProfilePicture',
    async (profilePicture: CreateProfilePictureDTO, thunkAPI) => {
      return await profilePictureAPI.saveProfilePicture(profilePicture)
    }
)

export const getProfilePicture = createAsyncThunk(
    'getProfilePicture',
    async (userId : GetProfilePictureDTO, thunkAPI) => {
    //   try {
        const response = await profilePictureAPI.getProfilePicture(userId );
        console.log(" is it workingg", response)
        return response.profilePhoto;
    //   } catch (error) {
    //     throw error;
    //   }
    }
  );

export const updateProfilePicture = createAsyncThunk (
    'updateProfilePicture',
    async (profilePicture: CreateProfilePictureDTO, thunkAPI) => {
        return await profilePictureAPI.updateProfilePicture(profilePicture)
    }
)  

export const deleteProfilePicture = createAsyncThunk (
    'deleteProfilePicture',
    async (userId : GetProfilePictureDTO, thunkAPI) => {
        return await profilePictureAPI.deleteProfilePicture(userId)
    }
)  


const profilePhotoSlice = createSlice({
  name: "profilePicture",
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveProfilePicture.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(saveProfilePicture.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(saveProfilePicture.fulfilled, (state, action) => {
        state.loading = false;
        state.photo = action.payload;
      })
      .addCase(getProfilePicture.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(getProfilePicture.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfilePicture.fulfilled, (state, action) => {
        state.loading = false;
        state.savedPhoto = action.payload;
      })
      .addCase(updateProfilePicture.fulfilled, (state, action) => {
        state.loading = false;
        state.photo = action.payload;
      })
      .addCase(deleteProfilePicture.fulfilled, (state, action) => {
        state.loading = false;
        state.photo = null;
        state.savedPhoto = null
      })
  },
});


// export const selectUser = (state: RootState) => state.users.user;


export default profilePhotoSlice.reducer;
