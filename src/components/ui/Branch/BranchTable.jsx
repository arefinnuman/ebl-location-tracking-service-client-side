import RootLayout from "@/components/layout/RootLayout";
import { useGetBranchesQuery } from "@/redux/api/api";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import BranchModal from "../MapModal/BranchModal";

const BranchTable = () => {
  const { data, isLoading } = useGetBranchesQuery();
  const branches = data?.data;

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
          <div className="w-full max-w-3xl mx-auto bg-white rounded-lg mb-6">
            <div className="overflow-x-auto">
              <table className="table w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 border">Sl</th>
                    <th className="px-4 py-3 border">Name</th>
                    <th className="px-4 py-3 border">District</th>
                    <th className="px-4 py-3 border">Address</th>
                    <th className="px-4 py-3 border">Location</th>
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
                          className="flex items-center px-3 py-1.5 border text-black border-primary rounded-full shadow hover:bg-primary hover:border-primary transition duration-300 hover:text-white"
                          onClick={() => setSelectedBranch(branch)}
                        >
                          <FaEye className="mr-2" />
                          View
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
        </div>
      )}
    </>
  );
};

BranchTable.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default BranchTable;

