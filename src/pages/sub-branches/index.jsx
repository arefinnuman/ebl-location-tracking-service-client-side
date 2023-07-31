import RootLayout from "@/components/layout/RootLayout";
import { useGetSubBranchesQuery } from "@/redux/api/api";
import Link from "next/link";

const SubBranchesPage = () => {
  const { data } = useGetSubBranchesQuery();
  const subBranches = data?.data;

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
            {subBranches &&
              subBranches.map((subBranch) => (
                <tr className="hover" key={subBranch._id}>
                  <td>{subBranch.serialNo}</td>
                  <td>{subBranch.subBranchName}</td>
                  <td>{subBranch.subBranchDivision}</td>
                  <td>{subBranch.subBranchAddress}</td>
                  <td>
                    <Link
                      className="link link-primary link-hover"
                      href={subBranch.subBranchMapLink}
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

export default SubBranchesPage;

SubBranchesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

