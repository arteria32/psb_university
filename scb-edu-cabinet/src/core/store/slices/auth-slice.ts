import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

type AuthSlice = {
    isAuthorizarated: boolean,
    name: string,
    token?: string,
    id?: string,
    role?: string
}
const INITIAL_STATE_AUTH: AuthSlice = {
    isAuthorizarated: false,
    name: "NoINfo",
}
export const authSlice = createSlice({
    name: 'authSlice',
    initialState: INITIAL_STATE_AUTH,
    reducers: {
        initAuthInfo: (state, action: PayloadAction<{ name: string, token: string }>) => {
            state.isAuthorizarated = true;
            state.token = action.payload.token;
            state.name = action.payload.name
            const jwtDecodeBody = jwtDecode<{ Id: string, "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string }>(action.payload.token)
            state.id = jwtDecodeBody.Id;
            state.role = jwtDecodeBody["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
        }
    },
})


export const { initAuthInfo } = authSlice.actions