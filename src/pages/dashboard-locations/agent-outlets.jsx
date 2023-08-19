import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardAgentOutletTable from "@/components/ui/Dashboard/DashboardAgentOutlets";

const DashboardAgentOutlets = () => {
  return (
    <div>
      <DashboardAgentOutletTable />
    </div>
  );
};

export default DashboardAgentOutlets;

DashboardAgentOutlets.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

