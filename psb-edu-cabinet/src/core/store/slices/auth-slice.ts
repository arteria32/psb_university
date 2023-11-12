import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type AuthSlice = {
    isAuthorizarated: boolean,
    name: string,
    token: string
}
const INITIAL_STATE_AUTH: AuthSlice = {
    isAuthorizarated: false,
    name: "NoINfo",
    token: "NoInfo"
}
export const authSlice = createSlice({
    name: 'authSlice',
    initialState: INITIAL_STATE_AUTH,
    reducers: {
        initAuthInfo: (state, action: PayloadAction<{ name: string, token: string }>) => {
            state.isAuthorizarated = true;
            state.token = action.payload.token;
            state.name = action.payload.name
        }
    },
})


export const { initAuthInfo } = authSlice.actions