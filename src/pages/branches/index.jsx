/* eslint-disable @next/next/no-img-element */
import RootLayout from "@/components/layout/RootLayout";
import { useGetBranchesQuery } from "@/redux/api/api";
import Link from "next/link";

const BranchesPage = () => {
  const { data, isLoading } = useGetBranchesQuery();
  const branches = data?.data;

  return (
    <section className="flex justify-center">
      <div className="w-5/6 mr-6">
        <div className="flex justify-center items-center ">
          <input
            type="text"
            placeholder="Search here..."
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <button className="mx-2 btn btn-primary">Search</button>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center min-h-screen">
            <span className="loading loading-infinity loading-lg"></span>
          </div>
        ) : (
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
                          target="_blank"
                        >
                          See on google maps
                        </Link>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="cols-span-1">
        <img src="https://i.ibb.co/m5xN8kQ/static-Map.png" alt="" />
      </div>
    </section>
  );
};

export default BranchesPage;

BranchesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

