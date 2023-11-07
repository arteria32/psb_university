import { configureStore } from '@reduxjs/toolkit'
import { applicationsApi } from './api/applications-api'
import { programModelsApi } from './api/program-models-api'
export const store = configureStore({
    reducer: {
        [applicationsApi.reducerPath]: applicationsApi.reducer,
        [programModelsApi.reducerPath]: programModelsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(applicationsApi.middleware).concat(programModelsApi.middleware)

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch