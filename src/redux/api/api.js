import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5555/api/v1" }),

  endpoints: (builder) => ({
    getBranches: builder.query({
      query: () => "/ebl-branches",
    }),
  }),
});

export const { useGetBranchesQuery } = apiSlice;
