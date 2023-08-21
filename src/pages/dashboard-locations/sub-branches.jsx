import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardSubBranchTable from "@/components/ui/Dashboard/DashboardSubBranchTable";

const DashboardSubBranches = () => {
  return (
    <div>
      <DashboardSubBranchTable />
    </div>
  );
};

export default DashboardSubBranches;

DashboardSubBranches.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

