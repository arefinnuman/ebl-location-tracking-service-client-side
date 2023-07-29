import RootLayout from "@/components/layout/RootLayout";
import { useGetAgentOutletsQuery } from "@/redux/api/api";
import Link from "next/link";

const AgentOutletsPage = () => {
  const { data } = useGetAgentOutletsQuery();
  const agentOutlets = data?.data;

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>District</th>
              <th>Address</th>
              <th>Map</th>
            </tr>
          </thead>
          <tbody>
            {agentOutlets &&
              agentOutlets.map((agent) => (
                <tr className="hover" key={agent._id}>
                  <td>{agent.serialNo}</td>
                  <td>{agent.agentName}</td>
                  <td>{agent.agentDivision}</td>
                  <td>{agent.agentAddress}</td>
                  <td>
                    <Link
                      className="link link-primary link-hover"
                      href={agent.agentMapLink}
                    >
                      See on google maps
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AgentOutletsPage;

AgentOutletsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
