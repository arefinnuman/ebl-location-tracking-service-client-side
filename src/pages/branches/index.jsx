import RootLayout from "@/components/layout/RootLayout";
import { useGetBranchesQuery } from "@/redux/api/api";
import Link from "next/link";

const BranchesPage = () => {
  const { data } = useGetBranchesQuery();
  const branches = data?.data;

  return (
    <>
      <div className="flex justify-center items-center ">
        <input
          type="text"
          placeholder="Search here..."
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <button className="mx-2 btn btn-primary">Search</button>
      </div>
      <div className="overflow-x-auto my-10">
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
            {branches &&
              branches.map((branch) => (
                <tr className="hover" key={branch._id}>
                  <td>{branch.serialNo}</td>
                  <td>{branch.branchName}</td>
                  <td>{branch.branchDivision}</td>
                  <td>{branch.branchAddress}</td>
                  <td>
                    <Link
                      className="link link-primary link-hover"
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
    </>
  );
};

export default BranchesPage;

BranchesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
