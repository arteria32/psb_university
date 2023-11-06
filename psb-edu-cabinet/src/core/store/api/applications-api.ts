/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import environment from '../../../enviroment'
import { Application } from '../../../types/application'
// Define a service using a base URL and expected endpoints
export const applicationsApi = createApi({
    reducerPath: 'applicationsApi',
    baseQuery: fetchBaseQuery({ baseUrl: environment.urlBackend }),
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