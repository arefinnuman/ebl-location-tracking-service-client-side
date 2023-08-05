import DashboardLayout from "@/components/layout/DashboardLayout";
import {
  useGet365BoothsQuery,
  useGetAgentOutletsQuery,
  useGetBranchesQuery,
  useGetSubBranchesQuery,
} from "@/redux/api/api";

const DashboardLocationPage = () => {
  const { data: branchesData } = useGetBranchesQuery();
  const { data: subBranchesData } = useGetSubBranchesQuery();
  const { data: agentOutletsData } = useGetAgentOutletsQuery();
  const { data: ebl365Data } = useGet365BoothsQuery();

  const branches = branchesData?.data;
  const subBranches = subBranchesData?.data;
  const agentOutlets = agentOutletsData?.data;
  const ebl365Booths = ebl365Data?.data;

  return (
    <div>
      <h1 className="text-2xl font-bold text-center my-4">
        All Branches in the Bangladesh
      </h1>

      <div className="max-w-5xl px-6 mx-auto bg-white rounded-lg">
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 border">Sl</th>
                <th className="px-4 py-3 border">Name</th>
                <th className="px-4 py-3 border">Division</th>
                <th className="px-4 py-3 border">Address</th>
                <th className="px-4 py-3 border">Map Link</th>
                <th className="px-4 py-3 border">Edit</th>
                <th className="px-4 py-3 border">Delete</th>
              </tr>
            </thead>
            <tbody>
              {branches &&
                branches?.map((branch, index) => (
                  <tr className="hover:bg-gray-50" key={branch._id}>
                    <td className="px-4 py-3 text-center border">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 border md:w-1/4">
                      {branch?.branchName}
                    </td>
                    <td className="px-4 py-3 border">
                      {branch?.branchDivision}
                    </td>
                    <td className="px-4 py-3 border md:w-1/2">
                      {branch?.branchAddress}
                    </td>
                    <td className="px-4 py-3 border md:w-1/5">
                      <a
                        className="link link-primary link-hover"
                        href={branch.branchMapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click Here
                      </a>
                    </td>
                    <td className="px-4 py-3 border md:w-1/5">
                      <button className="btn btn-sm btn-warning">Edit</button>
                    </td>
                    <td className="px-4 py-3 border md:w-1/5">
                      <button className="btn btn-sm btn-error">Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center my-4">
        All Sub Branches in the Bangladesh
      </h1>

      <div className="max-w-5xl px-6 mx-auto bg-white rounded-lg">
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 border">Sl</th>
                <th className="px-4 py-3 border">Name</th>
                <th className="px-4 py-3 border">Division</th>
                <th className="px-4 py-3 border">Address</th>
                <th className="px-4 py-3 border">Map Link</th>
                <th className="px-4 py-3 border">Edit</th>
                <th className="px-4 py-3 border">Delete</th>
              </tr>
            </thead>
            <tbody>
              {subBranches &&
                subBranches?.map((branch, index) => (
                  <tr className="hover:bg-gray-50" key={branch._id}>
                    <td className="px-4 py-3 text-center border">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 border md:w-1/4">
                      {branch?.subBranchName}
                    </td>
                    <td className="px-4 py-3 border">
                      {branch?.subBranchDivision}
                    </td>
                    <td className="px-4 py-3 border md:w-1/2">
                      {branch?.subBranchAddress}
                    </td>
                    <td className="px-4 py-3 border w-1/5">
                      <a
                        className="link link-primary link-hover"
                        href={branch.subBranchBranchMapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click Here
                      </a>
                    </td>
                    <td className="px-4 py-3 border md:w-1/5">
                      <button className="btn btn-sm btn-warning">Edit</button>
                    </td>
                    <td className="px-4 py-3 border md:w-1/5">
                      <button className="btn btn-sm btn-error">Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center my-4">
        All Agent Outlets in the Bangladesh
      </h1>

      <div className="max-w-5xl px-6 mx-auto bg-white rounded-lg">
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 border">Sl</th>
                <th className="px-4 py-3 border">Name</th>
                <th className="px-4 py-3 border">Division</th>
                <th className="px-4 py-3 border">Address</th>
                <th className="px-4 py-3 border">Map Link</th>
                <th className="px-4 py-3 border">Edit</th>
                <th className="px-4 py-3 border">Delete</th>
              </tr>
            </thead>
            <tbody>
              {agentOutlets &&
                agentOutlets?.map((branch, index) => (
                  <tr className="hover:bg-gray-50" key={branch._id}>
                    <td className="px-4 py-3 text-center border">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 border md:w-1/3">
                      {branch?.agentName}
                    </td>
                    <td className="px-4 py-3 border">
                      {branch?.agentDivision}
                    </td>
                    <td className="px-4 py-3 border md:w-1/5">
                      {branch?.agentAddress}
                    </td>
                    <td className="px-4 py-3 border w-1/5">
                      <a
                        className="link link-primary link-hover"
                        href={branch.subBranchBranchMapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click Here
                      </a>
                    </td>
                    <td className="px-4 py-3 border md:w-1/5">
                      <button className="btn btn-sm btn-warning">Edit</button>
                    </td>
                    <td className="px-4 py-3 border md:w-1/5">
                      <button className="btn btn-sm btn-error">Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      <h1 className="text-2xl font-bold text-center my-4">
        All the 365 booths in the Bangladesh
      </h1>

      <div className="max-w-5xl px-6 mx-auto bg-white rounded-lg">
        <div className="overflow-x-auto">
          <table className="table w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-3 border">Sl</th>
                <th className="px-4 py-3 border">Name</th>
                <th className="px-4 py-3 border">Division</th>
                <th className="px-4 py-3 border">Address</th>
                <th className="px-4 py-3 border">Map Link</th>
                <th className="px-4 py-3 border">Edit</th>
                <th className="px-4 py-3 border">Delete</th>
              </tr>
            </thead>
            <tbody>
              {ebl365Booths &&
                ebl365Booths?.map((branch, index) => (
                  <tr className="hover:bg-gray-50" key={branch._id}>
                    <td className="px-4 py-3 text-center border">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 border md:w-1/3">
                      {branch?.ebl365Name}
                    </td>
                    <td className="px-4 py-3 border">
                      {branch?.ebl365Address}
                    </td>
                    <td className="px-4 py-3 border md:w-1/5">
                      {branch?.ebl365Division}
                    </td>
                    <td className="px-4 py-3 border w-1/5">
                      <a
                        className="link link-primary link-hover "
                        href={branch.ebl365MapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Click Here
                      </a>
                    </td>
                    <td className="px-4 py-3 border md:w-1/5">
                      <button className="btn btn-sm btn-warning">Edit</button>
                    </td>
                    <td className="px-4 py-3 border md:w-1/5">
                      <button className="btn btn-sm btn-error">Delete</button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardLocationPage;

DashboardLocationPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
