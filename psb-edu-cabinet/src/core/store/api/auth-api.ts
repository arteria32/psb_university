/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import environment from '../../../enviroment'
import { Application } from '../../../types/application'
import { AdminArea } from '../../../types/admin-area'
import { RootState } from '../store'
// Define a service using a base URL and expected endpoints
export interface UserInfo {
    email: string,
    password: string
}
export interface UserFullInfo extends UserInfo {
    name: string
}
export const authApi = createApi({
    reducerPath: 'applicationsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: environment.urlBackend,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).authSlice.token

            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }

            return headers
        },
    },),

    endpoints: (builder) => ({
        login: builder.mutation<null, UserInfo>({
            query: (userInfo: UserInfo) => (
                {
                    url: "Auth/login",
                    method: "POST",
                    body: userInfo
                }
            ),

        }),
        register: builder.mutation<{ message: string, token: string }, UserFullInfo>({
            query: (userInfo: UserInfo) => (
                {
                    url: "Auth/register",
                    method: "POST",
                    body: userInfo
                }
            ),

        }),
        getUserInfoById: builder.query<AdminArea, string>({
            query: (id:string) => (
                {
                    url: `AdminArea/${id}`,
                    method: "GET"
                }
            ),

        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation, useRegisterMutation, useLazyGetUserInfoByIdQuery } = authApi