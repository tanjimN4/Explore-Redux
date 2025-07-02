import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
    reducerPath: 'baseApi',
    tagTypes:['task'],
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => '/tasks',
            providesTags:['task']

        }),
        createTasks: builder.mutation({
            query: (taskData) => ({
                url: '/tasks',
                method: 'POST',
                body: taskData,
            }), 
            invalidatesTags:['task']

        })
    }),
})

export const {useGetTasksQuery,useCreateTasksMutation}= baseApi;