import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardSubBranchTable from "@/components/ui/Dashboard/DashboardSubBranchTable";

const DashboardSubBranches = () => {
  // const { data: subBranchesData, isLoading } = useGetSubBranchesQuery({
  //   refetchOnMountOrArgChange: true,
  //   pollingInterval: 30000,
  // });

  // const subBranches = subBranchesData?.data;
  // const [deleteSubBranch] = useDeleteSubBranchMutation({
  //   refetchOnMountOrArgChange: true,
  //   pollingInterval: 30000,
  // });

  // const handleDeleteSubBranch = async (id) => {
  //   await deleteSubBranch(id);
  //   toast.success("Sub Branch deleted successfully");
  //   refetch();
  // };

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <span className="loading loading-lg"></span>
  //     </div>
  //   );
  // }

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

