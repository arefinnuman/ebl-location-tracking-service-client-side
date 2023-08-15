import RootLayout from "@/components/layout/RootLayout";
import AgentModal from "@/components/ui/MapModal/AgentModal";
import BranchModal from "@/components/ui/MapModal/BranchModal";
import Ebl365Modal from "@/components/ui/MapModal/Ebl365Modal";
import SubBranchModal from "@/components/ui/MapModal/SubBranchModal";
import {
  useGet365BoothsQuery,
  useGetAgentOutletsQuery,
  useGetBranchesQuery,
  useGetSubBranchesQuery,
} from "@/redux/api/api";
import { useState } from "react";
import { FaEye } from "react-icons/fa";

const AllLocationPage = () => {
  const { data: branchesData } = useGetBranchesQuery();
  const { data: subBranchesData } = useGetSubBranchesQuery();
  const { data: agentOutletsData } = useGetAgentOutletsQuery();
  const { data: ebl365Data } = useGet365BoothsQuery();

  const branches = branchesData?.data || [];
  const subBranches = subBranchesData?.data || [];
  const agentOutlets = agentOutletsData?.data || [];
  const ebl365Booths = ebl365Data?.data || [];

  const combinedData = [
    ...branches,
    ...subBranches,
    ...agentOutlets,
    ...ebl365Booths,
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [districtFilter, setDistrictFilter] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemType, setSelectedItemType] = useState(null);

  const allDistricts = Array.from(
    new Set(
      combinedData
        .map((item) =>
          (
            item.branchDivision ||
            item.subBranchDivision ||
            item.agentDivision ||
            item.ebl365Division
          )?.toLowerCase()
        )
        .filter((district) => district !== undefined)
        .map((district) =>
          district === "chittagong" ? "chattogram" : district
        )
    )
  );

  const filteredData = combinedData.filter((item) => {
    const searchStrings = [
      item.branchName,
      item.subBranchName,
      item.agentName,
      item.ebl365Name,
      item.branchDivision,
      item.subBranchDivision,
      item.agentDivision,
      item.ebl365Division,
      item.branchAddress,
      item.subBranchAddress,
      item.agentAddress,
      item.ebl365Address,
    ];

    const concatenatedSearchString = searchStrings
      .filter((str) => str !== undefined)
      .join(" ")
      .toLowerCase();

    return (
      concatenatedSearchString.includes(searchQuery.toLowerCase()) &&
      (districtFilter === "" ||
        (item.branchDivision &&
          item.branchDivision.toLowerCase() === districtFilter) ||
        (item.subBranchDivision &&
          item.subBranchDivision.toLowerCase() === districtFilter) ||
        (item.agentDivision &&
          item.agentDivision.toLowerCase() === districtFilter) ||
        (item.ebl365Division &&
          item.ebl365Division.toLowerCase() === districtFilter))
    );
  });

  return (
    <section className="min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-4">
          <div className="my-4 flex justify-center space-x-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search here"
                className="px-6 py-3 font-semibold border border-gray-300 rounded-full w-full shadow-sm focus:outline-none focus:border-blue-500 text-center placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.5 16A7.5 7.5 0 108.5 1a7.5 7.5 0 000 15zm0 1A8.5 8.5 0 118.5 0a8.5 8.5 0 010 17z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M15.854 14.146a1 1 0 111.415 1.414l-3.5 3.5a1 1 0 01-1.415 0l-3.5-3.5a1 1 0 111.415-1.414L12 17.086l3.854-3.854z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="relative w-full max-w-md">
              <select
                className="px-6 py-3 font-semibold border border-gray-300 rounded-full w-full shadow-sm focus:outline-none focus:border-blue-500 text-center"
                value={districtFilter}
                onChange={(e) => setDistrictFilter(e.target.value)}
              >
                <option value="">Select District</option>
                {allDistricts.map((district) => (
                  <option key={district} value={district}>
                    {district.charAt(0).toUpperCase() + district.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto my-10 shadow-xl rounded-xl">
          <table className="table-auto w-full bg-white rounded-xl border">
            <thead>
              <tr className="bg-base-200">
                <th className="py-3 px-4 text-left border">Sl</th>
                <th className="py-3 px-4 text-left border">Type</th>
                <th className="py-3 px-4 text-left border">Name</th>
                <th className="py-3 px-4 text-left border">District</th>
                <th className="py-3 px-4 text-left border">Address</th>
                <th className="py-3 px-4 text-left border">Map</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index}>
                  <td className="py-3 px-4 border">{index + 1}</td>
                  <td className="py-3 px-4 border">
                    {item.branchName && "Branch"}
                    {item.subBranchName && "Sub-branch"}
                    {item.agentName && "Agent Outlet"}
                    {item.ebl365Name && "EBL365"}
                  </td>
                  <td className="py-3 px-4 border">
                    {item.branchName && `${item.branchName} Branch`}
                    {item.subBranchName && `${item.subBranchName} SubBranch`}
                    {item.agentName && `${item.agentName} Agent Outlet`}
                    {item.ebl365Name && `${item.ebl365Name} 365 Booth`}
                  </td>
                  <td className="py-3 px-4 border">
                    {item.branchDivision ||
                      item.subBranchDivision ||
                      item.agentDivision ||
                      item.ebl365Division}
                  </td>
                  <td className="py-3 px-4 border">
                    {item.branchAddress ||
                      item.subBranchAddress ||
                      item.agentAddress ||
                      item.ebl365Address}
                  </td>
                  <td className="px-4 py-3 border">
                    <button
                      className="flex items-center px-3 py-1.5 border text-black border-primary rounded-full shadow hover:bg-primary hover:border-primary transition duration-300 hover:text-white"
                      onClick={() => {
                        setSelectedItem(item);
                        setSelectedItemType(
                          item.branchName
                            ? "branch"
                            : item.subBranchName
                            ? "subBranch"
                            : item.agentName
                            ? "agentOutlet"
                            : item.ebl365Name
                            ? "ebl365Booth"
                            : null
                        );
                      }}
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
      {selectedItemType === "branch" && selectedItem && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <form method="dialog" className="modal-box">
            <BranchModal selectedBranch={selectedItem} />
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => {
                  setSelectedItem(null);
                  setSelectedItemType(null);
                }}
              >
                Close
              </button>
            </div>
          </form>
        </dialog>
      )}
      {selectedItemType === "subBranch" && selectedItem && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <form method="dialog" className="modal-box">
            <SubBranchModal selectedSubBranch={selectedItem} />
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => {
                  setSelectedItem(null);
                  setSelectedItemType(null);
                }}
              >
                Close
              </button>
            </div>
          </form>
        </dialog>
      )}

      {selectedItemType === "agentOutlet" && selectedItem && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <form method="dialog" className="modal-box">
            <AgentModal selectedAgentOutlet={selectedItem} />
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => {
                  setSelectedItem(null);
                  setSelectedItemType(null);
                }}
              >
                Close
              </button>
            </div>
          </form>
        </dialog>
      )}

      {selectedItemType === "ebl365Booth" && selectedItem && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <form method="dialog" className="modal-box">
            <Ebl365Modal selectedBooth={selectedItem} />
            <div className="modal-action">
              <button
                className="btn"
                onClick={() => {
                  setSelectedItem(null);
                  setSelectedItemType(null);
                }}
              >
                Close
              </button>
            </div>
          </form>
        </dialog>
      )}
    </section>
  );
};

AllLocationPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default AllLocationPage;

