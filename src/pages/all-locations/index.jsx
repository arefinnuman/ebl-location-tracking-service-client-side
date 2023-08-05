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
  console.log(combinedData);

  let type = null;
  let name, division, address, mapLink;

  if (type === "eblBranch") {
    name = eblBranch?.branchName;
    division = eblBranch?.branchDivision;
    address = eblBranch?.branchAddress;
    mapLink = eblBranch?.branchMapLink;
  } else if (type === "eblSubBranch") {
    name = eblSubBranch?.subBranchName;
    division = eblSubBranch?.subBranchDivision;
    address = eblSubBranch?.subBranchAddress;
    mapLink = eblSubBranch?.subBranchMapLink;
  } else if (type === "eblAgent") {
    name = eblAgent?.agentName;
    division = eblAgent?.agentDivision;
    address = eblAgent?.agentAddress;
    mapLink = eblAgent?.agentMapLink;
  } else if (type === "ebl365booths") {
    name = ebl365booths?.boothName;
    division = ebl365booths?.boothDivision;
    address = ebl365booths?.boothAddress;
    mapLink = ebl365booths?.boothMapLink;
  } else {
    name = "";
    division = "";
    address = "";
    mapLink = "";
  }

  return (
    <section className="min-h-screen">
      <div className="mr-6">
        <div className="overflow-x-auto my-10 shadow-xl rounded-xl">
          <table className="table">
            <thead>
              <tr>
                <th className="">Sl</th>
                <th className="">Name</th>
                <th className="">District</th>
                <th className="">Address</th>
                <th className="">Map</th>
              </tr>
            </thead>
            <tbody>
              {combinedData.map((item, index) => (
                <tr key={index}>
                  <td className="">{index + 1}</td>
                  <td className="">{item.name}</td>
                  <td className="">{item.district}</td>
                  <td className="">{item.address}</td>
                  <td className="">
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
