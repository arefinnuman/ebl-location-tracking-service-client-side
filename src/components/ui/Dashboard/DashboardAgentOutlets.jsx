import {
  useDeleteAgentOutletsMutation,
  useGetAgentOutletsQuery,
} from "@/redux/api/api";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import DeleteConfirmationModal from "../DeleteConFirmationModal";
import LoadingUi from "../LoadingUi";
import AgentModal from "../MapModal/AgentModal";
import UpdateAgentForm from "../UpdateForms/UpdateAgentForm";

const DashboardAgentOutletTable = () => {
  const [agentOutlets, setAgentOutlets] = useState();
  const { data, isLoading, refetch } = useGetAgentOutletsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 9000,
  });

  useEffect(() => {
    if (data) {
      setAgentOutlets(data.data);
    }
  }, [data]);

  const agentDivisions = agentOutlets?.map((agent) => agent.agentDivision);
  const uniqueAgentDivisions = [
    ...new Set(agentDivisions?.map((item) => item.trim().toLowerCase())),
  ];

  const [searchInput, setSearchInput] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");

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

  const [selectedAgent, setSelectedAgent] = useState(null);

  const [selectedUpdateAgent, setSelectedUpdateAgent] = useState(null);

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [branchToDelete, setBranchToDelete] = useState(null);
  const [deleteOutlet] = useDeleteAgentOutletsMutation(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const handleDeleteAgent = async () => {
    try {
      await deleteOutlet(branchToDelete);
      toast.success("Agent deleted successfully");
      refetch();
      setShowDeleteConfirmation(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDeleteButtonClick = (branchId) => {
    setBranchToDelete(branchId);
    setShowDeleteConfirmation(true);
  };

  const numberOfAgents = agentOutlets?.length;

  if (isLoading) {
    return <LoadingUi />;
  }
  return (
    <>
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

        <div className="w-full max-w-6xl px-6 mx-auto bg-white rounded-lg mb-6">
          <div className="overflow-x-auto rounded-lg">
            <table className="table w-full border-collapse">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="px-4 py-3">Sl</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">District</th>
                  <th className="px-4 py-3">Address</th>
                  <th className="px-4 py-3">Location</th>
                  <th className="px-4 py-3">Edit</th>
                  <th className="px-4 py-3">Delete</th>
                </tr>
              </thead>
              <tbody>
                {filteredAgentOutlets.map((agent, index) => (
                  <tr
                    className="hover:bg-blue-100 transition duration-300"
                    key={agent._id}
                  >
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
                    <td className="px-4 py-3 border">
                      <button
                        className="flex items-center  px-3 py-1.5 text-black rounded-full shadow hover:bg-primary-focus hover:border-base transition duration-300 hover:text-white text-sm"
                        onClick={() => setSelectedUpdateAgent(agent)}
                      >
                        Edit
                        <FiEdit2 className="ml-2" />
                      </button>
                    </td>
                    <td className="px-4 py-3 border">
                      <button
                        className="flex items-center  px-3 py-1.5 text-black rounded-full shadow hover:bg-error hover:border-base transition duration-300 hover:text-white text-sm"
                        onClick={() => handleDeleteButtonClick(agent._id)}
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

        {selectedUpdateAgent && (
          <dialog
            id="my_modal_2"
            className="modal modal-bottom sm:modal-middle "
            open
          >
            <section
              method="dialog"
              className="modal-box border border-primary shadow-2xl"
            >
              <UpdateAgentForm selectedUpdateAgent={selectedUpdateAgent} />
              <div className="modal-action text-center flex justify-center">
                <button
                  className="btn btn-sm btn-outline "
                  onClick={() => setSelectedUpdateAgent(null)}
                >
                  Close
                </button>
              </div>
            </section>
          </dialog>
        )}

        {showDeleteConfirmation && (
          <DeleteConfirmationModal
            onConfirm={() => {
              handleDeleteAgent(branchToDelete);
              setShowDeleteConfirmation(false);
            }}
            onCancel={() => setShowDeleteConfirmation(false)}
          />
        )}
      </div>
    </>
  );
};

export default DashboardAgentOutletTable;

