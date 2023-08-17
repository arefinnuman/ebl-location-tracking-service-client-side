import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardEbl365Table from "@/components/ui/Dashboard/DashBoardEbl365Table";

const DashBoardEbl365 = () => {
  // const {
  //   data: ebl365Data,
  //   isLoading,
  //   refetch: refetchEbl365,
  // } = useGet365BoothsQuery({
  //   refetchOnMountOrArgChange: true,
  //   pollingInterval: 1000,
  // });

  // const [delete365Booth] = useDelete365OutletsMutation({
  //   refetchOnMountOrArgChange: true,
  //   pollingInterval: 1000,
  // });

  // const [pendingDeleteId, setPendingDeleteId] = useState(null);

  // const handleDelete365Booth = (id) => {
  //   setPendingDeleteId(id);
  // };

  // const handleConfirmDelete = async () => {
  //   if (pendingDeleteId !== null) {
  //     try {
  //       await delete365Booth(pendingDeleteId);
  //       toast.success("365 Booth deleted successfully");

  //       setPendingDeleteId(null);
  //       refetchEbl365();
  //     } catch (error) {
  //       toast.error("An error occurred while deleting the 365 Booth");
  //     }
  //   }
  // };

  // const handleCancelDelete = () => {
  //   setPendingDeleteId(null);
  // };

  // const ebl365Booths = ebl365Data?.data || [];

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <span className="loading loading-lg"></span>
  //     </div>
  //   );
  // }

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

