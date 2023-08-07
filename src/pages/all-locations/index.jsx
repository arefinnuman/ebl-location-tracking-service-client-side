import RootLayout from "@/components/layout/RootLayout";
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

    return concatenatedSearchString.includes(searchQuery.toLowerCase());
  });

  return (
    <section className="min-h-screen bg-gray-100">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="my-4">
          <input
            type="text"
            placeholder="Search here"
            className="px-3 py-2 font-bold border border-secondary-focus text-center rounded w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="overflow-x-auto my-10 shadow-xl rounded-xl ">
          <table className="table-auto w-full bg-white rounded-xl border">
            <thead className="">
              <tr>
                <th className="py-2 px-4 text-left border">Sl</th>
                <th className="py-2 px-4 text-left border">Type</th>
                <th className="py-2 px-4 text-left border">Name</th>
                <th className="py-2 px-4 text-left border">District</th>
                <th className="py-2 px-4 text-left border">Address</th>
                <th className="py-2 px-4 text-left border">Map</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"} ${
                    item.branchName
                      ? "bg-blue-100"
                      : item.subBranchName
                      ? "bg-green-100"
                      : item.agentName
                      ? "bg-yellow-100"
                      : item.ebl365Name
                      ? "bg-red-100"
                      : ""
                  }`}
                >
                  <td className="py-2 px-4 border">{index + 1}</td>
                  <td className="py-2 px-4 border">
                    {item.branchName && "Branch"}
                    {item.subBranchName && "Sub-branch"}
                    {item.agentName && "Agent Outlet"}
                    {item.ebl365Name && "EBL365"}
                  </td>
                  <td className="py-2 px-4 border">
                    {item.branchName ||
                      item.subBranchName ||
                      item.agentName ||
                      item.ebl365Name}
                  </td>
                  <td className="py-2 px-4 border">
                    {item.branchDivision ||
                      item.subBranchDivision ||
                      item.agentDivision ||
                      item.ebl365Division}
                  </td>
                  <td className="py-2 px-4 border">
                    {item.branchAddress ||
                      item.subBranchAddress ||
                      item.agentAddress ||
                      item.ebl365Address}
                  </td>
                  <td className="py-2 px-4 border">
                    <a
                      href={
                        item.branchMapLink ||
                        item.subBranchMapLink ||
                        item.agentMapLink ||
                        item.ebl365MapLink
                      }
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="btn btn-primary">Map</button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

AllLocationPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default AllLocationPage;
