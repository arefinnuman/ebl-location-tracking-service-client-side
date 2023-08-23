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
          <div className="flex justify-center space-x-8">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search here"
                className="transition duration-300 ease-in-out px-6 py-3 font-semibold bg-gradient-to-r from-gray-50 to-white border border-gray-300 rounded-full w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center placeholder-gray-400"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition duration-300 ease-in-out"
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
                className="transition duration-300 ease-in-out px-6 py-3 font-semibold bg-gradient-to-r from-gray-50 to-white border border-gray-300 rounded-full w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
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
              <tr className="bg-blue-500">
                <th className="py-3 px-4 text-left text-white ">Sl</th>
                <th className="py-3 px-4 text-left text-white ">Type</th>
                <th className="py-3 px-4 text-left text-white ">Name</th>
                <th className="py-3 px-4 text-left text-white ">District</th>
                <th className="py-3 px-4 text-left text-white ">Address</th>
                <th className="py-3 px-4 text-left text-white ">Map</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  className="hover:bg-blue-100 transition duration-300"
                  key={index}
                >
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
                      className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-400 to-blue-700 border-0 rounded-full shadow-lg hover:shadow-xl hover:from-blue-600 hover:to-blue-800 transition-all duration-300 text-white"
                      onClick={() => {
                        setSelectedItem(item);

                        let type = null;
                        if (item.branchName) type = "branch";
                        else if (item.subBranchName) type = "subBranch";
                        else if (item.agentName) type = "agentOutlet";
                        else if (item.ebl365Name) type = "ebl365Booth";

                        setSelectedItemType(type);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                        className="h-5 w-5 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4.318 4.318a2 2 0 012.829 0L12 10.172l4.854-4.854a2 2 0 112.829 2.829L15 12l2.829 2.828a2 2 0 11-2.829 2.829L12 15l-2.828 2.828a2 2 0 01-2.829-2.829L9 12 4.172 7.147a2 2 0 010-2.829z"
                        />
                      </svg>
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

