import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardAgentOutletTable from "@/components/ui/Dashboard/DashboardAgentOutlets";

const DashboardAgentOutlets = () => {
  // const { data: agentOutletsData, isLoading } = useGetAgentOutletsQuery({
  //   refetchOnMountOrArgChange: true,
  //   pollingInterval: 30000,
  // });

  // const agentOutlets = agentOutletsData?.data;

  // const [deleteAgentOutlet] = useDeleteAgentOutletsMutation({
  //   refetchOnMountOrArgChange: true,
  //   pollingInterval: 30000,
  // });

  // const handleDeleteAgentOutlet = async (id) => {
  //   await deleteAgentOutlet(id);
  //   toast.success("Agent Outlet deleted successfully");
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
      <DashboardAgentOutletTable />
    </div>
  );
};

export default DashboardAgentOutlets;

DashboardAgentOutlets.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

