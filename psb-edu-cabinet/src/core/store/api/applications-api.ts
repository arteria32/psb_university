/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import environment from '../../../enviroment'
import { Application } from '../../../types/application'
import { RootState } from '../store'
// Define a service using a base URL and expected endpoints
export const applicationsApi = createApi({
    reducerPath: 'applicationsApi',
    baseQuery: fetchBaseQuery({ baseUrl: environment.urlBackend,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).authSlice.token
        
            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
              headers.set('authorization', `Bearer ${token}`)
            }
        
            return headers
          },
        }),
    endpoints: (builder) => ({
        getAllApplications: builder.query<Application[], null>({
            query: () => `Applications`,
        }),
        getApplicationsByUserId: builder.query<Application[], number>({
            query: (userId) => ({
                url: 'Applications/byUserId',
                params: { userId },
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllApplicationsQuery } = applicationsApi