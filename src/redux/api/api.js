import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ebl-location-service-server.vercel.app/api/v1",
  }),

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

    getAllNetworks: builder.query({
      query: () => "/ebl-networks/",
    }),
  }),
});

export const {
  useGetBranchesQuery,
  useGetSubBranchesQuery,
  useGetAgentOutletsQuery,
  useGet365BoothsQuery,
  useGetAllNetworksQuery,
} = apiSlice;

