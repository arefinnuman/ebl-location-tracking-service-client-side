import RootLayout from "@/components/layout/RootLayout";
import { useGetAgentOutletsQuery } from "@/redux/api/api";
import { useState } from "react";

const BranchesPage = () => {
  const { data, isLoading } = useGetAgentOutletsQuery();
  const agentOutlets = data?.data;
  console.log(agentOutlets);

  const agentDivisions = agentOutlets?.map((agent) => agent.agentDivision);
  const uniqueAgentDivisions = [...new Set(agentDivisions)];

  const [searchInput, setSearchInput] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedAgent, setSelectedAgent] = useState(null);

  const filteredAgentOutlets = agentOutlets
    ? agentOutlets.filter(
        (agent) =>
          (agent.agentName.toLowerCase().includes(searchInput.toLowerCase()) ||
            agent.agentDivision
              .toLowerCase()
              .includes(searchInput.toLowerCase()) ||
            agent.agentAddress
              .toLowerCase()
              .includes(searchInput.toLowerCase())) &&
          (selectedDivision === "" || agent.agentDivision === selectedDivision)
      )
    : [];

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      ) : (
        <>
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
              {uniqueAgentDivisions.map((division) => (
                <option key={division} value={division}>
                  {division}
                </option>
              ))}
            </select>
          </div>

          <div className="w-full max-w-6xl px-6 mx-auto bg-white rounded-lg mb-6">
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
                  {filteredAgentOutlets.map((agent, index) => (
                    <tr className="hover:bg-gray-50" key={agent._id}>
                      <td className="px-4 py-3 text-center border">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 border">{agent.agentName}</td>
                      <td className="px-4 py-3 border">
                        {agent.agentDivision}
                      </td>
                      <td className="px-4 py-3 border md:w-1/2">
                        {agent.agentAddress}
                      </td>
                      <td className="px-4 py-3 border">
                        <button
                          className="btn btn-primary btn-sm btn-outline btn-ghost"
                          onClick={() => setSelectedAgent(agent)}
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

          {selectedAgent && (
            <dialog
              id="my_modal_5"
              className="modal modal-bottom sm:modal-middle"
              open
            >
              <form method="dialog" className="modal-box">
                <h1>{selectedAgent.agentLocation.lat}</h1>
                <div className="modal-action">
                  <button
                    className="btn"
                    onClick={() => setSelectedAgent(null)}
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

BranchesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export default BranchesPage;
