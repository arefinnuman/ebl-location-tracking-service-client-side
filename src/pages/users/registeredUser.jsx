import DashboardLayout from "@/components/layout/DashboardLayout";
import LoadingUi from "@/components/ui/LoadingUi";
import {
  useGetAllUserQuery,
  useUpdateToAdminMutation,
  useUpdateToViewerMutation,
} from "@/redux/api/api";
import { toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { FaUser, FaUserCog } from "react-icons/fa";

const RegisteredUserPage = () => {
  const { data, isLoading, refetch } = useGetAllUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });
  const users = data?.data;

  const approvedUser = users?.filter((user) => user?.approvedByAdmin === true);

  const [updateToAdmin] = useUpdateToAdminMutation();
  const [updateToViewer] = useUpdateToViewerMutation();

  const handleUpdateToAdmin = async (employeeId) => {
    try {
      const response = await updateToAdmin(employeeId);
      toast.success(response?.data?.message);
      refetch();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const handleUpdateToViewer = async (employeeId) => {
    try {
      const response = await updateToViewer(employeeId);
      toast.success(response?.data?.message);
      refetch();
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  if (isLoading) {
    return <LoadingUi />;
  }
  return (
    <>
      <section>
        <h1 className="text-2xl font-bold mb-8 text-center">
          List of our users
        </h1>
        <div className="max-w-5xl px-6 mx-auto bg-white shadow-lg rounded-lg">
          <div className="overflow-x-auto mt-4">
            <table className="table w-full border-collapse">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="px-6 py-3 border-b">Sl</th>
                  <th className="px-6 py-3 border-b">Full Name</th>
                  <th className="px-6 py-3 border-b">Email</th>
                  <th className="px-6 py-3 border-b">Designation</th>
                  <th className="px-6 py-3 border-b">Department</th>
                  <th className="px-6 py-3 border-b">Role</th>
                  <th className="px-6 py-3 border-b">Edit</th>
                  <th className="px-6 py-3 border-b">Delete</th>
                </tr>
              </thead>
              <tbody>
                {approvedUser &&
                  approvedUser.map((user, index) => (
                    <tr
                      className="hover:bg-blue-100 transition duration-300"
                      key={user._id}
                    >
                      <td className="px-6 py-4 border">{index + 1}</td>
                      <td className="px-6 py-4 border">
                        {user?.fullName?.firstName} {user?.fullName?.lastName}
                      </td>
                      <td className="px-6 py-4 border">{user?.email}</td>
                      <td className="px-6 py-4 border">{user?.designation}</td>
                      <td className="px-6 py-4 border">{user?.department}</td>
                      <td className="px-6 py-4 border">
                        {user?.role === "admin" ? (
                          <button
                            onClick={() =>
                              handleUpdateToViewer(user.employeeId)
                            }
                            className="flex justify-center items-center space-x-2 px-4 py-2 border rounded hover:bg-blue-400 hover:text-white transition duration-300"
                          >
                            <FaUser className="text-blue-500" />
                            <span>Admin</span>
                          </button>
                        ) : (
                          <button
                            onClick={() => handleUpdateToAdmin(user.employeeId)}
                            className="flex justify-center items-center space-x-2 px-4 py-2 border rounded hover:bg-blue-400 hover:text-white transition duration-300"
                          >
                            <FaUserCog className="text-blue-500" />
                            <span>User</span>
                          </button>
                        )}
                      </td>
                      <td className="px-6 py-4 border">
                        <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300">
                          <BiEdit />
                        </button>
                      </td>
                      <td className="px-6 py-4 border">
                        <button className="p-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300">
                          <AiOutlineDelete />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisteredUserPage;

RegisteredUserPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

