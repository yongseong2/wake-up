import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = { memberName: "", password: "", isLogined: false };

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo: (
      state,
      action: PayloadAction<{ memberName: string; password: string }>,
    ) => {
      state.memberName = action.payload.memberName;
      state.password = action.payload.password;
    },
    setIsLogined: (state, action: PayloadAction<{ isLogined: boolean }>) => {
      state.isLogined = action.payload.isLogined;
    },
    logout: state => {
      state.memberName = "";
      state.password = "";
      state.isLogined = false;
    },
  },
});

export const { setUserInfo, setIsLogined, logout } = user.actions;
export default user.reducer;
