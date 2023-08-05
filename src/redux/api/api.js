import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5555/api/v1",
  }),
  tagTypes: ["eblbranches", "eblsubbranches", "eblagents", "ebl365"],

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

    getAllUser: builder.query({
      query: () => "/users/",
    }),

    postBranch: builder.mutation({
      query: (data) => ({
        url: "/ebl-branches/",
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["eblbranches"],
    }),

    postSubBranch: builder.mutation({
      query: (data) => ({
        url: "/ebl-sub-branches/",
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["eblsubbranches"],
    }),

    postAgentOutlets: builder.mutation({
      query: (data) => ({
        url: "/ebl-agents/",
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["eblagents"],
    }),

    post365Outlets: builder.mutation({
      query: (data) => ({
        url: "/ebl-365/",
        method: "POST",
        body: { ...data },
      }),
      invalidatesTags: ["ebl365"],
    }),

    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: { ...data },
      }),
    }),
  }),
});

export const {
  useGetBranchesQuery,
  useGetSubBranchesQuery,
  useGetAgentOutletsQuery,
  useGet365BoothsQuery,
  useGetAllNetworksQuery,
  usePostBranchMutation,
  usePostSubBranchMutation,
  usePostAgentOutletsMutation,
  usePost365OutletsMutation,
  useLoginMutation,
  useGetAllUserQuery,
} = apiSlice;
