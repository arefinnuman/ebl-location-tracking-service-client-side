import DashboardLayout from "@/components/layout/DashboardLayout";
import LoadingUi from "@/components/ui/LoadingUi";
import {
  useApprovedByAdminMutation,
  useGetAllUserQuery,
  useRejectedByAdminMutation,
} from "@/redux/api/api";
import { toast } from "react-hot-toast";
import { FaUser, FaUserCog } from "react-icons/fa";

const RequestedUserPage = () => {
  const { data, isLoading, refetch } = useGetAllUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const users = data?.data;

  const requestedUser = users?.filter(
    (user) => user?.approvedByAdmin === false
  );
  const [approvedUser] = useApprovedByAdminMutation();
  const [rejectUser] = useRejectedByAdminMutation();

  const handleApprovedUser = async (employeeId) => {
    try {
      const response = await approvedUser(employeeId);
      toast.success(response?.data?.message);
      refetch();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleRejectUser = async (employeeId) => {
    try {
      const response = await rejectUser(employeeId);
      toast.success(response?.data?.message);
      refetch();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const noUser = users?.length <= 0;

  if (noUser) {
    return (
      <div>
        <h1 className="text-xl font-semibold mb-8 text-center my-4">
          No User Found
        </h1>
      </div>
    );
  }

  if (isLoading) {
    <LoadingUi />;
  }

  return (
    <div>
      <section>
        {requestedUser?.length <= 0 ? (
          <h1 className="text-xl font-semibold mb-8 text-center my-4">
            No Requested User
          </h1>
        ) : (
          <section>
            <h1 className="text-2xl font-bold mb-8 text-center">
              List of our users
            </h1>
            <div className="max-w-5xl px-6 mx-auto bg-white">
              <div className="overflow-x-auto mt-4">
                <table className="table w-full border-collapse">
                  <thead>
                    <tr className="bg-blue-500 text-white">
                      <th className="px-6 py-3 border-b">Sl</th>
                      <th className="px-6 py-3 border-b">Full Name</th>
                      <th className="px-6 py-3 border-b">Email</th>
                      <th className="px-6 py-3 border-b">Designation</th>
                      <th className="px-6 py-3 border-b">Department</th>
                      <th className="px-6 py-3 border-b">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requestedUser &&
                      requestedUser.map((user, index) => (
                        <tr
                          className="hover:bg-blue-100 transition duration-300"
                          key={user._id}
                        >
                          <td className="px-6 py-4 border">{index + 1}</td>
                          <td className="px-6 py-4 border">
                            {user?.fullName?.firstName}{" "}
                            {user?.fullName?.lastName}
                          </td>
                          <td className="px-6 py-4 border">{user?.email}</td>
                          <td className="px-6 py-4 border">
                            {user?.designation}
                          </td>
                          <td className="px-6 py-4 border">
                            {user?.department}
                          </td>

                          <td className="px-6 py-4 text-center whitespace-nowrap">
                            <button
                              className="px-4 py-2 mr-2 font-sm text-white bg-green-500 rounded-full hover:bg-green-600 transition duration-300"
                              onClick={() =>
                                handleApprovedUser(user.employeeId)
                              }
                            >
                              <FaUser className="inline-block mr-1" /> Approve
                            </button>
                            <button
                              className="px-4 py-2 font-sm text-white bg-red-500 rounded-full hover:bg-red-600 transition duration-300"
                              onClick={() => handleRejectUser(user.employeeId)}
                            >
                              <FaUserCog className="inline-block mr-1" /> Reject
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}
      </section>
    </div>
  );
};

export default RequestedUserPage;

RequestedUserPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

