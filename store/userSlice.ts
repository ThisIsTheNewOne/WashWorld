import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { UserQueries } from "../api/userQueries";
import * as SecureStore from 'expo-secure-store';
import { RootState } from './store';

interface UserState {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

interface User {
  id: number;
  username: string;
  role: Role;
}

export enum Role {
  User = "user",
  PremiumUser = "premium",
  Admin = "admin",
}

const initialState: UserState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk(
  "user/login",
  async (credentials: { username: string; password: string }, thunkAPI) => {
    try {
      const response = await UserQueries.login(
        credentials.username,
        credentials.password
      );
      console.log("hahfdhafkd", response);
      return response;
    } catch (error: any) {
        console.log("hahfdhafkd", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signup = createAsyncThunk(
  "user/signup",
  async (
    userData: { username: string; password: string; licensePlate: string },
    thunkAPI
  ) => {
    // try {
    const response = UserQueries.signup(
      userData.username,
      userData.password,
      userData.licensePlate
    );
    // console.log("userSlice", response);
    return response;
    // } catch (error) {
    //     return thunkAPI.rejectWithValue(error.message);
    // }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      state.token = '';
      console.log("test");
      
      SecureStore.deleteItemAsync('token')
  },
  },
  extraReducers: (builder) => {
    builder
        .addCase(login.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.token = action.payload.access_token;
            state.user = action.payload.user
            SecureStore.setItemAsync('token', action.payload.access_token);
        })
        .addCase(login.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        })
      .addCase(signup.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload as string;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      });
  },
});

export const { setToken, logout } = userSlice.actions;
export const selectUser = (state: RootState) => state.users.user;
// export const selectToken = (state: RootState) => state.user.token;
// export const selectLoading = (state: RootState) => state.user.loading;
// export const selectError = (state: RootState) => state.user.error;

export default userSlice.reducer;
