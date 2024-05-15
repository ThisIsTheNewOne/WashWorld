import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { UserQueries } from '../api/userQueries';


interface UserState {
    user: User | null;
    token: string | null;
    loading: boolean;
    error: string | null;
}

interface User {
    id: number;
    username: string;
    role: Role
}

export enum Role {
    User = 'user',
    PremiumUser = 'premium',
    Admin = 'admin',
}


const initialState: UserState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

export const signup = createAsyncThunk(
    'user/signup',
    async (userData: { username: string; password: string, licensePlate: string }, thunkAPI) => {
        // try {
            const response = UserQueries.signup(userData.username, userData.password, userData.licensePlate)
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
    },
    extraReducers: (builder) => {
        builder
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
        })
    }
})

export const { setToken, } = userSlice.actions
// export const selectUser = (state: RootState) => state.user.user;
// export const selectToken = (state: RootState) => state.user.token;
// export const selectLoading = (state: RootState) => state.user.loading;
// export const selectError = (state: RootState) => state.user.error;

export default userSlice.reducer;

