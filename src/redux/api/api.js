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
      invalidatesTags: ["eblbranches"],
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

    deleteBranch: builder.mutation({
      query: (id) => ({
        url: `/ebl-branches/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["eblbranches"],
    }),

    deleteSubBranch: builder.mutation({
      query: (id) => ({
        url: `/ebl-sub-branches/${id}`,
        method: "DELETE",
      }),
    }),

    deleteAgentOutlets: builder.mutation({
      query: (id) => ({
        url: `/ebl-agents/${id}`,
        method: "DELETE",
      }),
    }),

    delete365Outlets: builder.mutation({
      query: (id) => ({
        url: `/ebl-365/${id}`,
        method: "DELETE",
      }),
    }),

    updateBranch: builder.mutation({
      query: (branchData) => ({
        url: `/ebl-branches/${branchData.id}`,
        method: "PATCH",
        body: branchData,
      }),
      invalidatesTags: ["eblbranches"],
    }),

    updateSubBranch: builder.mutation({
      query: (subBranchData) => ({
        url: `/ebl-sub-branches/${subBranchData.id}`,
        method: "PATCH",
        body: subBranchData,
      }),
      invalidatesTags: ["eblsubbranches"],
    }),

    updateAgentOutlets: builder.mutation({
      query: (agentData) => ({
        url: `/ebl-agents/${agentData.id}`,
        method: "PATCH",
        body: agentData,
      }),
      invalidatesTags: ["eblagents"],
    }),

    update365Outlets: builder.mutation({
      query: (outletData) => ({
        url: `/ebl-365/${outletData.id}`,
        method: "PATCH",
        body: outletData,
      }),
      invalidatesTags: ["ebl365"],
    }),

    createUser: builder.mutation({
      query: (userData) => ({
        url: `/users/`,
        method: "POST",
        body: userData,
      }),
      invalidatesTags: ["users"],
    }),

    updateToAdmin: builder.mutation({
      query: (id) => ({
        url: `/users/update-to-admin/${id}`,
        method: "PATCH",
      }),
    }),

    updateToViewer: builder.mutation({
      query: (id) => ({
        url: `/users/update-to-viewer/${id}`,
        method: "PATCH",
      }),
    }),

    approvedByAdmin: builder.mutation({
      query: (id) => ({
        url: `/users/approved-by-admin${id}`,
        method: "PATCH",
      }),
    }),

    rejectedByAdmin: builder.mutation({
      query: (id) => ({
        url: `/users/rejected-by-admin/${id}`,
        method: "PATCH",
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
  useDeleteBranchMutation,
  useDeleteSubBranchMutation,
  useDeleteAgentOutletsMutation,
  useDelete365OutletsMutation,
  useUpdateBranchMutation,
  useUpdateSubBranchMutation,
  useUpdateAgentOutletsMutation,
  useUpdate365OutletsMutation,
  useCreateUserMutation,
  useUpdateToAdminMutation,
  useUpdateToViewerMutation,
  useApprovedByAdminMutation,
  useRejectedByAdminMutation,
} = apiSlice;

