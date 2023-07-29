import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5555/api/v1" }),

  endpoints: (builder) => ({
    getBranches: builder.query({
      query: () => "/ebl-branches",
    }),

    getSubBranches: builder.query({
      query: () => "/ebl-sub-branches/",
    }),

    getAgentOutlets: builder.query({
      query: () => "/ebl-agents/",
    }),

    get365Booths: builder.query({
      query: () => "/ebl-365/",
    }),
  }),
});

export const {
  useGetBranchesQuery,
  useGetSubBranchesQuery,
  useGetAgentOutletsQuery,
  useGet365BoothsQuery,
} = apiSlice;
