/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import environment from '../../../enviroment'
import { Application } from '../../../types/application'
// Define a service using a base URL and expected endpoints
export type UserInfo = {
    email: string,
    password: string
}
export const authApi = createApi({
    reducerPath: 'applicationsApi',
    baseQuery: fetchBaseQuery({ baseUrl: environment.urlBackend }),
    endpoints: (builder) => ({
        login: builder.mutation<Application[], UserInfo>({
            query: (userInfo: UserInfo) => (
                {
                    url: "Auth/login",
                    method: "POST",
                    body: userInfo
                }
            ),

        }),

    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLoginMutation } = authApi