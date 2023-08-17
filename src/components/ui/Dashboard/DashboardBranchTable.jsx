import RootLayout from "@/components/layout/RootLayout";
import { useDeleteBranchMutation, useGetBranchesQuery } from "@/redux/api/api";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import DeleteConfirmationModal from "../DeleteConFirmationModal";
import BranchModal from "../MapModal/BranchModal";

const DashboardBranchTable = () => {
  const [branches, setBranches] = useState();

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [branchToDelete, setBranchToDelete] = useState(null);

  const { data, isLoading, refetch } = useGetBranchesQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 9000,
  });

  useEffect(() => {
    if (data) {
      setBranches(data.data);
    }
  }, [data]);

  const numberOfBranches = branches?.length;

  const branchDivisions = branches?.map((branch) => branch.branchDivision);
  const uniqueBranchDivisions = [
    ...new Set(branchDivisions?.map((item) => item.trim().toLowerCase())),
  ];

  const [searchInput, setSearchInput] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedBranch, setSelectedBranch] = useState(null);

  const filteredBranches = branches
    ? branches.filter(
        (branch) =>
          (branch.branchName
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
            branch.branchDivision
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            branch.branchAddress
              .toLowerCase()
              .includes(searchInput.toLowerCase())) &&
          (selectedDivision === "" ||
            branch.branchDivision.toLowerCase() === selectedDivision)
      )
    : [];

  const [deleteBranch] = useDeleteBranchMutation(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const handleDeleteBranch = async () => {
    try {
      await deleteBranch(branchToDelete);
      toast.success("Branch deleted successfully");
      refetch();
      setShowDeleteConfirmation(false); // Hide the confirmation modal
    } catch (error) {
      console.log("Error", error);
    }
  };

  const handleDeleteButtonClick = (branchId) => {
    // Set the branch id to delete
    setBranchToDelete(branchId);
    // Show the delete confirmation modal
    setShowDeleteConfirmation(true);
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <div className="flex space-x-2">
            <span className="loading loading-ring loading-xs"></span>
            <span className="loading loading-ring loading-sm"></span>
            <span className="loading loading-ring loading-md"></span>
            <span className="loading loading-ring loading-lg"></span>
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold text-center my-2">
            Available{" "}
            <span className="font-extrabold text-primary">
              Branches: {numberOfBranches}{" "}
            </span>
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center mb-6">
            <input
              type="text"
              placeholder="Search here"
              className="input input-bordered input-primary w-full max-w-xs mb-4 md:mb-0 md:mr-4"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <select
              className="input input-bordered input-primary w-full max-w-xs mb-4 md:mb-0 md:mr-4"
              value={selectedDivision}
              onChange={(e) => setSelectedDivision(e.target.value)}
            >
              <option value="">Select District</option>
              {uniqueBranchDivisions.map((division) => (
                <option key={division} value={division}>
                  {division?.charAt(0).toUpperCase() + division.slice(1)}
                </option>
              ))}
            </select>
          </div>
          <div className="w-full max-w-5xl mx-auto bg-white rounded-lg mb-6">
            <div className="overflow-x-auto">
              <table className="table w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 border">Sl</th>
                    <th className="px-4 py-3 border">Name</th>
                    <th className="px-4 py-3 border">District</th>
                    <th className="px-4 py-3 border">Address</th>
                    <th className="px-4 py-3 border">Location</th>
                    <th className="px-4 py-3 border">Edit</th>
                    <th className="px-4 py-3 border">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBranches.map((branch, index) => (
                    <tr className="hover:bg-gray-50" key={branch._id}>
                      <td className="px-4 py-3 text-center border">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 border">
                        {branch.branchName} Branch
                      </td>
                      <td className="px-4 py-3 border">
                        {branch.branchDivision}
                      </td>
                      <td className="px-4 py-3 border md:w-1/2">
                        {branch.branchAddress}
                      </td>
                      <td className="px-4 py-3 border">
                        <button
                          className="flex items-center px-3 py-1.5 text-black border-primary rounded-full shadow hover:bg-primary hover:border-primary transition duration-300 hover:text-white text-sm"
                          onClick={() => setSelectedBranch(branch)}
                        >
                          <FaEye className="mr-2" />
                          View
                        </button>
                      </td>
                      <td className="px-4 py-3 border">
                        <button
                          className="flex items-center  px-3 py-1.5 text-black rounded-full shadow hover:bg-primary-focus hover:border-base transition duration-300 hover:text-white text-sm"
                          onClick={() => setSelectedBranch(branch)}
                        >
                          Edit
                          <FiEdit2 className="ml-2" />
                        </button>
                      </td>
                      <td className="px-4 py-3 border">
                        <button
                          className="flex items-center  px-3 py-1.5 text-black rounded-full shadow hover:bg-error hover:border-base transition duration-300 hover:text-white text-sm"
                          onClick={() => handleDeleteButtonClick(branch._id)}
                        >
                          Del
                          <AiFillDelete className="ml-1" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {selectedBranch && (
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
              open
            >
              <form method="dialog" className="modal-box">
                <BranchModal selectedBranch={selectedBranch} />
                <div className="modal-action">
                  <button
                    className="btn"
                    onClick={() => setSelectedBranch(null)}
                  >
                    Close
                  </button>
                </div>
              </form>
            </dialog>
          )}
          {showDeleteConfirmation && (
            <DeleteConfirmationModal
              onConfirm={() => {
                handleDeleteBranch(branchToDelete);
                setShowDeleteConfirmation(false);
              }}
              onCancel={() => setShowDeleteConfirmation(false)}
            />
          )}
        </div>
      )}
    </>
  );
};

DashboardBranchTable.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default DashboardBranchTable;

