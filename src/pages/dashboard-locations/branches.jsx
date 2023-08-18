import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardBranchTable from "@/components/ui/Dashboard/DashboardBranchTable";

const DashboardBranches = () => {
  return (
    <div>
      <DashboardBranchTable />
    </div>
  );
};

export default DashboardBranches;

DashboardBranches.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

