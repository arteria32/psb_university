import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import environment from "../../../enviroment"
import { ProgramModel } from '../../../types/program-model'
import { RootState } from '../store'
// Define a service using a base URL and expected endpoints
export const programModelsApi = createApi({
    reducerPath: 'programModelsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: environment.urlBackend,
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).authSlice.token

            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }

            return headers
        }
    }),
    endpoints: (builder) => ({
        getAllProgramsModels: builder.query<ProgramModel[], null>({
            query: () => `ProgramModels`,
        }),
        getProgramModelById: builder.query<ProgramModel, number>({
            query: (id) => `ProgramModels/${id}`,
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProgramsModelsQuery, useGetProgramModelByIdQuery } = programModelsApi