import DashboardLayout from "@/components/layout/DashboardLayout";
import ApprovedUserTable from "@/components/ui/Users/ApprovedUserTable";
import RequestedUserTable from "@/components/ui/Users/RequestedUserTable";
import { useGetAllUserQuery } from "@/redux/api/api";

const AllUserPage = () => {
  const { isLoading } = useGetAllUserQuery();

  if (isLoading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  return (
    <>
      <ApprovedUserTable />
      <RequestedUserTable />
    </>
  );
};

export default AllUserPage;

AllUserPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

