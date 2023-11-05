import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import environment from "../../../enviroment"
import { ProgramModel } from '../../../types/program-model'
// Define a service using a base URL and expected endpoints
export const programModelsApi = createApi({
    reducerPath: 'programModelsApi',
    baseQuery: fetchBaseQuery({ baseUrl: environment.urlBackend }),
    endpoints: (builder) => ({
        getAllProgramModels: builder.query<ProgramModel[], null>({
            query: () => `ProgramModels`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProgramModelsQuery } = programModelsApi