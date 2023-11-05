/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import environment from '../../../enviroment'
// Define a service using a base URL and expected endpoints
export const programModelsApi = createApi({
    reducerPath: 'programModelsApi',
    baseQuery: fetchBaseQuery({ baseUrl: environment.urlBackend }),
    endpoints: (builder) => ({}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { } = programModelsApi