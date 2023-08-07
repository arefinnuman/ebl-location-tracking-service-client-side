import RootLayout from "@/components/layout/RootLayout";
import {
  useGet365BoothsQuery,
  useGetAgentOutletsQuery,
  useGetBranchesQuery,
  useGetSubBranchesQuery,
} from "@/redux/api/api";

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

  return (
    <section className="min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto my-10 shadow-xl rounded-xl">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 text-left">Sl</th>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">District</th>
                <th className="py-2 px-4 text-left">Address</th>
                <th className="py-2 px-4 text-left">Map</th>
              </tr>
            </thead>
            <tbody>
              {combinedData.map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">
                    {item.branchName ||
                      item.subBranchName ||
                      item.agentName ||
                      item.ebl365Name}
                  </td>
                  <td className="py-2 px-4">
                    {item.branchDivision ||
                      item.subBranchDivision ||
                      item.agentDivision ||
                      item.ebl365Division}
                  </td>
                  <td className="py-2 px-4">
                    {item.branchAddress ||
                      item.subBranchAddress ||
                      item.agentAddress ||
                      item.ebl365Address}
                  </td>
                  <td className="py-2 px-4">
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

