import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "src/controllers/api";

export const login = createAsyncThunk(
  "/login",
  async (data: { email: string; password: string }) => {
    const response = await api.post("/login", data);
    return response.data;
  }
);
export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await api.post("/logout");
  return response.data;
});

export interface AuthState {
  user: any;
  status: "idle" | "loading" | "failed";
  access_token: string;
  isAuth: boolean;
}

const initialState: AuthState = {
  user: {},
  status: "idle",
  access_token: "",
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.status = "idle";
        state.access_token = action.payload.data.access_token;
        localStorage.setItem("access_token", action.payload.data.access_token);
        state.user = action.payload.data.user;
        state.isAuth = true;
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.rejected, (state) => {
        state.status = "failed";
      });
      builder
      .addCase(logout.fulfilled, (state) => {
        
        state.user = {};
        state.status = "idle";
        state.access_token = "";
        state.isAuth = false;
        setTimeout(() => {
          localStorage.clear();
        }, 1);
      })
      .addCase(logout.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logout.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// Action creators are generated for each case reducer function
// export const { login } = authSlice.actions;

export default authSlice.reducer;
