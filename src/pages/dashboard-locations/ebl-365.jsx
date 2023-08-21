import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardEbl365Table from "@/components/ui/Dashboard/DashBoardEbl365Table";

const DashBoardEbl365 = () => {
  return (
    <div>
      <DashboardEbl365Table />
    </div>
  );
};

DashBoardEbl365.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashBoardEbl365;

