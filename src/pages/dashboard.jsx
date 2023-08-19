import DashboardLayout from "@/components/layout/DashboardLayout";
import DashBoardUi from "@/components/ui/Dashboard/DashBoardUi";

const DashboardPage = () => {
  return (
    <div className="flex h-screen justify-center items-center">
      <DashBoardUi />
    </div>
  );
};

export default DashboardPage;

DashboardPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

