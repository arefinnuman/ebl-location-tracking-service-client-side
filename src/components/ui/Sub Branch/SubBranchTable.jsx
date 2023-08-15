import RootLayout from "@/components/layout/RootLayout";
import { useGetSubBranchesQuery } from "@/redux/api/api";
import { useState } from "react";
import SubBranchModal from "../MapModal/SubBranchModal";

const SubBranchTable = () => {
  const { data, isLoading } = useGetSubBranchesQuery();
  const subBranches = data?.data;

  const branchDivisions = subBranches?.map(
    (branch) => branch.subBranchDivision
  );
  const uniqueBranchDivisions = [...new Set(branchDivisions)];

  const [searchInput, setSearchInput] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedBranch, setSelectedBranch] = useState(null);

  const filteredSubBranches = subBranches
    ? subBranches.filter(
        (subBranch) =>
          (subBranch.subBranchName
            .toLowerCase()
            .includes(searchInput.toLowerCase()) ||
            subBranch.subBranchDivision
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            subBranch.subBranchAddress
              .toLowerCase()
              .includes(searchInput.toLowerCase())) &&
          (selectedDivision === "" ||
            subBranch.subBranchDivision === selectedDivision)
      )
    : [];

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen mr-20">
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center mb-6">
              <input
                type="text"
                placeholder="Search here..."
                className="input input-bordered input-primary w-full max-w-xs mb-4 md:mb-0 md:mr-4"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <select
                className="input input-bordered input-primary w-full max-w-xs mb-4 md:mb-0 md:mr-4"
                value={selectedDivision}
                onChange={(e) => setSelectedDivision(e.target.value)}
              >
                <option value="">All Districts</option>
                {uniqueBranchDivisions.map((division) => (
                  <option key={division} value={division}>
                    {division}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full max-w-3xl px-6 mx-auto bg-white rounded-lg mb-6">
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
                    {filteredSubBranches.map((subBranch, index) => (
                      <tr className="hover:bg-gray-50" key={subBranch._id}>
                        <td className="px-4 py-3 text-center border">
                          {index + 1}
                        </td>
                        <td className="px-4 py-3 border">
                          {subBranch.subBranchName}
                        </td>
                        <td className="px-4 py-3 border">
                          {subBranch.subBranchDivision}
                        </td>
                        <td className="px-4 py-3 border md:w-1/2">
                          {subBranch.subBranchAddress}
                        </td>
                        <td className="px-4 py-3 border">
                          <button
                            className="btn btn-primary btn-sm btn-outline btn-ghost"
                            onClick={() => setSelectedBranch(subBranch)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {selectedBranch && (
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
              open
            >
              <form method="dialog" className="modal-box">
                <SubBranchModal selectedBranch={selectedBranch} />
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
        </>
      )}
    </>
  );
};

SubBranchTable.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default SubBranchTable;

