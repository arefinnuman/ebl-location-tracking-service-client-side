import RootLayout from "@/components/layout/RootLayout";
import {
  useGet365BoothsQuery,
  useGetAgentOutletsQuery,
  useGetBranchesQuery,
  useGetSubBranchesQuery,
} from "@/redux/api/api";
import Link from "next/link";

const AllLocationTable = ({ network }) => {
  const type = network?.type;
  let name, division, address, mapLink;



const AllLocationPage = () => {
  const { data: branchesData } = useGetBranchesQuery();
  const { data: subBranchesData } = useGetSubBranchesQuery();
  const { data: agentOutletsData } = useGetAgentOutletsQuery();
  const { data: ebl365Data } = useGet365BoothsQuery();

  const branches = branchesData?.data || [];
  const subBranches = subBranchesData?.data || [];
  const agentOutlets = agentOutletsData?.data || [];
  const ebl365Booths = ebl365Data?.data || [];

  const combinedData = [...branches, ...subBranches, ...agentOutlets, ...ebl365Booths];

  return (
    <section className="min-h-screen">
      <div className="mr-6">
        {/* ... Your search input and button code ... */}
        <div className="overflow-x-auto my-10 shadow-xl rounded-xl">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">Sl</th>
                <th className="text-center">Name</th>
                <th className="text-center">District</th>
                <th className="text-center">Address</th>
                <th className="text-center">Map</th>
              </tr>
            </thead>
            <tbody>
              {combinedData.map((item, index) => (
                <tr key={index}>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{item.name}</td>
                  <td className="text-center">{item.district}</td>
                  <td className="text-center">{item.address}</td>
                  <td className="text-center">
                    <a href={item.mapLink} target="_blank" rel="noreferrer">
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

export default AllLocationPage;

AllLocationPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

  return (
    <>
      <tbody>
        <tr className="hover" key={network._id}>
          <td>{network.serialNo}</td>
          <td>{name}</td>
          <td>{division}</td>
          <td>{address}</td>
          <td>
            <Link
              className="link link-primary link-hover"
              href={mapLink}
              target="_blank"
            >
              See on google maps
            </Link>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default AllLocationTable;

