import DashboardLayout from "@/components/layout/DashboardLayout";
import LoadingUi from "@/components/ui/LoadingUi";
import ApprovedUserTable from "@/components/ui/Users/ApprovedUserTable";
import { useGetAllUserQuery } from "@/redux/api/api";

const AllUserPage = () => {
  const { isLoading } = useGetAllUserQuery();

  if (isLoading) {
    <LoadingUi />;
  }
  return (
    <>
      <ApprovedUserTable />
    </>
  );
};

export default AllUserPage;

AllUserPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

