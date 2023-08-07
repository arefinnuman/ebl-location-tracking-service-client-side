import DashboardLayout from "@/components/layout/DashboardLayout";
import UpdateBranchForm from "@/components/ui/updateBranchForm";
import {
  useDelete365OutletsMutation,
  useDeleteAgentOutletsMutation,
  useDeleteBranchMutation,
  useDeleteSubBranchMutation,
  useGet365BoothsQuery,
  useGetAgentOutletsQuery,
  useGetBranchesQuery,
  useGetSubBranchesQuery,
} from "@/redux/api/api";
import { useState } from "react";
import { toast } from "react-hot-toast";

const DashboardLocationPage = () => {
  const { data: branchesData, refetch } = useGetBranchesQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const { data: subBranchesData } = useGetSubBranchesQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const { data: agentOutletsData } = useGetAgentOutletsQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const { data: ebl365Data } = useGet365BoothsQuery({
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const branches = branchesData?.data;
  const [selectedBranch, setSelectedBranch] = useState(null);
  const subBranches = subBranchesData?.data;
  const agentOutlets = agentOutletsData?.data;
  const ebl365Booths = ebl365Data?.data;

  const [deleteBranch] = useDeleteBranchMutation({
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const handleDeleteBranch = async (id) => {
    await deleteBranch(id);
    toast.success("Branch deleted successfully");
    refetch();
  };

  const [deleteSubBranch] = useDeleteSubBranchMutation({
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const handleDeleteSubBranch = async (id) => {
    await deleteSubBranch(id);
    toast.success("Sub Branch deleted successfully");
    refetch();
  };

  const [deleteAgentOutlet] = useDeleteAgentOutletsMutation({
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const handleDeleteAgentOutlet = async (id) => {
    await deleteAgentOutlet(id);
    toast.success("Agent Outlet deleted successfully");
    refetch();
  };

  const [delete365Booth] = useDelete365OutletsMutation({
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const handleDelete365Booth = async (id) => {
    await delete365Booth(id);
    toast.success("365 Booth deleted successfully");
    refetch();
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">
        All Branches in the Bangladesh
      </h1>

      <div className="max-w-6xl px-6 mx-auto bg-white rounded-lg">
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 border w-1/8">Sl</th>
                <th className="px-4 py-3 border md:w-1/4">Name</th>
                <th className="px-4 py-3 border md:w-1/6">District</th>
                <th className="px-4 py-3 border md:w-1/4">Address</th>
                <th className="px-4 py-3 border md:w-1/8">Latitude</th>
                <th className="px-4 py-3 border md:w-1/8">Longitude</th>
                <th className="px-4 py-3 border md:w-1/8">Edit</th>
                <th className="px-4 py-3 border md:w-1/8">Delete</th>
              </tr>
            </thead>
            <tbody>
              {branches &&
                branches?.map((branch, index) => (
                  <tr className="hover:bg-gray-50" key={branch._id}>
                    <td className="px-4 py-3 text-center border">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 border">{branch?.branchName}</td>
                    <td className="px-4 py-3 border">
                      {branch?.branchDivision}
                    </td>
                    <td className="px-4 py-3 border">
                      {branch?.branchAddress}
                    </td>
                    <td className="px-4 py-3 border">
                      {branch?.branchLocation.lat}
                    </td>
                    <td className="px-4 py-3 border ">
                      {branch?.branchLocation.long}
                    </td>
                    <td className="px-4 py-3 border ">
                      <button
                        onClick={() => setSelectedBranch(branch)}
                        className="btn btn-sm btn-warning"
                      >
                        Edit
                      </button>
                    </td>
                    <td className="px-4 py-3 border">
                      <button
                        onClick={() => handleDeleteBranch(branch._id)}
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>

          {selectedBranch && (
            <dialog
              id="my_modal_2"
              className="modal modal-bottom sm:modal-middle "
              open
            >
              <section
                method="dialog"
                className="modal-box border border-secondary"
              >
                <UpdateBranchForm selectedBranch={selectedBranch} />
                <div className="modal-action text-center flex justify-center">
                  <button
                    className="btn btn-sm btn-outline "
                    onClick={() => setSelectedBranch(null)}
                  >
                    Close The Modal
                  </button>
                </div>
              </section>
            </dialog>
          )}
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center my-4">
        All Sub Branches in the Bangladesh
      </h1>

      <div className="max-w-6xl px-6 mx-auto bg-white rounded-lg">
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 border w-1/8">Sl</th>
                <th className="px-4 py-3 border md:w-1/4">Name</th>
                <th className="px-4 py-3 border md:w-1/6">District</th>
                <th className="px-4 py-3 border md:w-1/4">Address</th>
                <th className="px-4 py-3 border w-1/8">Latitude</th>
                <th className="px-4 py-3 border w-1/8">Longitude</th>
                <th className="px-4 py-3 border md:w-1/8">Edit</th>
                <th className="px-4 py-3 border md:w-1/8">Delete</th>
              </tr>
            </thead>
            <tbody>
              {subBranches &&
                subBranches?.map((branch, index) => (
                  <tr className="hover:bg-gray-50" key={branch._id}>
                    <td className="px-4 py-3 text-center border">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 border">
                      {branch?.subBranchName}
                    </td>
                    <td className="px-4 py-3 border">
                      {branch?.subBranchDivision}
                    </td>
                    <td className="px-4 py-3 border ">
                      {branch?.subBranchAddress}
                    </td>
                    <td className="px-4 py-3 border ">
                      {branch?.subBranchLocation.lat}
                    </td>
                    <td className="px-4 py-3 border">
                      {branch?.subBranchLocation.long}
                    </td>
                    <td className="px-4 py-3 border ">
                      <button className="btn btn-sm btn-warning">Edit</button>
                    </td>
                    <td className="px-4 py-3 border">
                      <button
                        onClick={() => handleDeleteSubBranch(branch._id)}
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center my-4">
        All Agent Outlets in the Bangladesh
      </h1>

      <div className="max-w-6xl px-6 mx-auto bg-white rounded-lg">
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 border w-1/8">Sl</th>
                <th className="px-4 py-3 border md:w-1/4">Name</th>
                <th className="px-4 py-3 border md:w-1/6">District</th>
                <th className="px-4 py-3 border md:w-1/4">Address</th>
                <th className="px-4 py-3 border w-1/8">Latitude</th>
                <th className="px-4 py-3 border w-1/8">Longitude</th>
                <th className="px-4 py-3 border md:w-1/8">Edit</th>
                <th className="px-4 py-3 border md:w-1/8">Delete</th>
              </tr>
            </thead>
            <tbody>
              {agentOutlets &&
                agentOutlets?.map((branch, index) => (
                  <tr className="hover:bg-gray-50" key={branch._id}>
                    <td className="px-4 py-3 text-center border">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 border ">{branch?.agentName}</td>
                    <td className="px-4 py-3 border ">
                      {branch?.agentDivision}
                    </td>
                    <td className="px-4 py-3 border ">
                      {branch?.agentAddress}
                    </td>
                    <td className="px-4 py-3 border ">
                      {branch?.agentLocation.lat}
                    </td>
                    <td className="px-4 py-3 border ">
                      {branch?.agentLocation.long}
                    </td>
                    <td className="px-4 py-3 border">
                      <button className="btn btn-sm btn-warning">Edit</button>
                    </td>
                    <td className="px-4 py-3 border">
                      <button
                        onClick={() => handleDeleteAgentOutlet(branch._id)}
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center my-4">
        All the 365 booths in the Bangladesh
      </h1>

      <div className="max-w-6xl px-6 mx-auto bg-white rounded-lg">
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 border w-1/8">Sl</th>
                <th className="px-4 py-3 border md:w-1/6">Name</th>
                <th className="px-4 py-3 border md:w-1/6">District</th>
                <th className="px-4 py-3 border md:w-1/4">Address</th>
                <th className="px-4 py-3 border w-1/8">Latitude</th>
                <th className="px-4 py-3 border w-1/8">Longitude</th>
                <th className="px-4 py-3 border md:w-1/8">Edit</th>
                <th className="px-4 py-3 border md:w-1/8">Delete</th>
              </tr>
            </thead>
            <tbody>
              {ebl365Booths &&
                ebl365Booths?.map((branch, index) => (
                  <tr className="hover:bg-gray-50" key={branch._id}>
                    <td className="px-4 py-3 text-center border">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 border ">{branch?.ebl365Name}</td>
                    <td className="px-4 py-3 border">
                      {branch?.ebl365Division}
                    </td>
                    <td className="px-4 py-3 border">
                      {branch?.ebl365Address}
                    </td>
                    <td className="px-4 py-3 border">{branch?.lat}</td>
                    <td className="px-4 py-3 border">{branch?.long}</td>
                    <td className="px-4 py-3 border">
                      <button className="btn btn-sm btn-warning">Edit</button>
                    </td>
                    <td className="px-4 py-3 border">
                      <button
                        onClick={() => handleDelete365Booth(branch._id)}
                        className="btn btn-sm btn-error"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardLocationPage;

DashboardLocationPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
