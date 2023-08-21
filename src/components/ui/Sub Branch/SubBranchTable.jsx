import RootLayout from "@/components/layout/RootLayout";
import { useGetSubBranchesQuery } from "@/redux/api/api";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import LoadingUi from "../LoadingUi";
import SubBranchModal from "../MapModal/SubBranchModal";

const SubBranchTable = () => {
  const { data, isLoading } = useGetSubBranchesQuery();
  const subBranches = data?.data;

  const numberOfSubBranches = subBranches?.length;

  const branchDivisions = subBranches?.map(
    (branch) => branch.subBranchDivision
  );
  const uniqueBranchDivisions = [
    ...new Set(branchDivisions?.map((item) => item.trim().toLowerCase())),
  ];

  const [searchInput, setSearchInput] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedSubBranch, setSelectedSubBranch] = useState(null);

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
            subBranch.subBranchDivision.toLowerCase() === selectedDivision)
      )
    : [];

  if (isLoading) {
    <LoadingUi />;
  }
  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center my-2">
          {" "}
          Available{" "}
          <span className="font-extrabold text-primary">
            Sub Branches: {numberOfSubBranches}
          </span>{" "}
        </h1>
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
            <option value="">Select District</option>
            {uniqueBranchDivisions.map((division) => (
              <option key={division} value={division}>
                {division?.charAt(0).toUpperCase() + division?.slice(1)}
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
                      {subBranch.subBranchName} Sub Branch
                    </td>
                    <td className="px-4 py-3 border">
                      {subBranch.subBranchDivision}
                    </td>
                    <td className="px-4 py-3 border md:w-1/2">
                      {subBranch.subBranchAddress}
                    </td>
                    <td className="px-4 py-3 border">
                      <button
                        className="flex items-center px-3 py-1.5 border text-black border-primary rounded-full shadow hover:bg-primary hover:border-primary transition duration-300 hover:text-white"
                        onClick={() => setSelectedSubBranch(subBranch)}
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
      </div>

      {selectedSubBranch && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <form method="dialog" className="modal-box">
            <SubBranchModal selectedSubBranch={selectedSubBranch} />
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => setSelectedSubBranch(null)}
              >
                Close
              </button>
            </div>
          </form>
        </dialog>
      )}
    </>
  );
};

SubBranchTable.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default SubBranchTable;

