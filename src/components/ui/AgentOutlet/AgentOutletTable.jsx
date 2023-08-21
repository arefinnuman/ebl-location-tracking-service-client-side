import { useGetAgentOutletsQuery } from "@/redux/api/api";
import { useState } from "react";
import LoadingUi from "../LoadingUi";
import AgentModal from "../MapModal/AgentModal";

const AgentOutletTable = () => {
  const { data, isLoading } = useGetAgentOutletsQuery();
  const agentOutlets = data?.data;

  const numberOfAgents = agentOutlets?.length;

  const agentDivisions = agentOutlets?.map((agent) => agent.agentDivision);
  const uniqueAgentDivisions = [
    ...new Set(agentDivisions?.map((item) => item.trim().toLowerCase())),
  ];

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
          (selectedDivision === "" ||
            agent.agentDivision.toLowerCase() === selectedDivision)
      )
    : [];

  if (isLoading) {
    <LoadingUi />;
  }

  return (
    <section>
      <div>
        <h1 className="text-2xl font-bold text-center my-2">
          {" "}
          Available{" "}
          <span className="font-extrabold text-primary">
            Agent Outlets: {numberOfAgents}
          </span>
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
            {uniqueAgentDivisions.map((division) => (
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
                {filteredAgentOutlets.map((agent, index) => (
                  <tr className="hover:bg-gray-50" key={agent._id}>
                    <td className="px-4 py-3 text-center border">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 border">{agent.agentName}</td>
                    <td className="px-4 py-3 border">{agent.agentDivision}</td>
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
              <AgentModal selectedAgent={selectedAgent} />
              <div className="modal-action">
                <button className="btn" onClick={() => setSelectedAgent(null)}>
                  Close
                </button>
              </div>
            </form>
          </dialog>
        )}
      </div>
    </section>
  );
};

export default AgentOutletTable;

