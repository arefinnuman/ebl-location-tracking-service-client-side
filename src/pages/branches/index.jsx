import RootLayout from "@/components/layout/RootLayout";
import { useGetBranchesQuery } from "@/redux/api/api";
import Link from "next/link";

const BranchesPage = () => {
  const { data } = useGetBranchesQuery();
  const branches = data?.data;

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Branch Name</th>
              <th>District</th>
              <th>Address</th>
              <th>Map</th>
            </tr>
          </thead>
          <tbody>
            {branches &&
              branches.map((branch) => (
                <tr className="hover" key={branch._id}>
                  <td>{branch.serialNo}</td>
                  <td>{branch.branchName}</td>
                  <td>{branch.branchDivision}</td>
                  <td>{branch.branchAddress}</td>
                  <td>
                    <Link
                      className="link link-hover"
                      href={branch.branchMapLink}
                    >
                      See on google maps
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BranchesPage;

BranchesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
