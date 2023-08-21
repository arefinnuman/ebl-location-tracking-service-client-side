import {
  useGetAllUserQuery,
  useUpdateToAdminMutation,
  useUpdateToViewerMutation,
} from "@/redux/api/api";
import { toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { FaUser, FaUserCog } from "react-icons/fa";

const ApprovedUserTable = () => {
  const { data, refetch } = useGetAllUserQuery(undefined, {
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

  return (
    <div>
      <section>
        <h1 className="text-xl font-semibold mb-8 text-center">
          List of our users
        </h1>
        <div className="max-w-5xl px-6 mx-auto bg-white rounded-lg">
          <div className="overflow-x-auto">
            <table className="table w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-3 border">Sl</th>
                  <th className="px-4 py-3 border">Full Name</th>
                  <th className="px-4 py-3 border">Email</th>
                  <th className="px-4 py-3 border">Designation</th>
                  <th className="px-4 py-3 border">Department</th>
                  <th className="px-4 py-3 border">Role</th>
                  <th className="px-4 py-3 border">Edit</th>
                  <th className="px-4 py-3 border">Delete</th>
                </tr>
              </thead>
              <tbody>
                {approvedUser &&
                  approvedUser.map((user, index) => (
                    <tr className="hover:bg-gray-50" key={user._id}>
                      <td className="px-4 py-3 text-center border">
                        {index + 1}
                      </td>
                      <td className="px-4 py-3 border md:w-1/3">
                        {user?.fullName?.firstName} {user?.fullName?.lastName}
                      </td>
                      <td className="px-4 py-3 border">{user?.email}</td>
                      <td className="px-4 py-3 border md:w-1/5">
                        {user?.designation}
                      </td>
                      <td className="px-4 py-3 border md:w-1/5">
                        {user?.department}
                      </td>

                      <td className=" px-4 py-3 border md:w-1/5">
                        {user?.role === "admin" ? (
                          <div className="tooltip" data-tip="Update to User">
                            <button
                              onClick={() => {
                                handleUpdateToViewer(user.employeeId);
                              }}
                              className="justify-center w-32 py-2 px-4 border border-gray-300 bg-gray-200 hover:bg-gray-200 rounded-md flex items-center space-x-2 transition duration-300"
                            >
                              <FaUser className="text-gray-600 text-lg" />
                              <span className="text-sm font-semibold text-gray-800">
                                Admin
                              </span>
                            </button>
                          </div>
                        ) : (
                          <div className="tooltip" data-tip="Update to Admin">
                            <button
                              onClick={() => {
                                handleUpdateToAdmin(user.employeeId);
                              }}
                              className="justify-center w-32 py-2 px-4 border border-gray-300 bg-gray-100 rounded-md flex items-center space-x-2 transition duration-300 hover:bg-base-300"
                            >
                              <FaUserCog className="text-gray-600 text-lg" />
                              <span className="text-sm font-semibold text-gray-800">
                                User
                              </span>
                            </button>
                          </div>
                        )}
                      </td>

                      <td className="px-4 py-3 border">
                        <button className="btn btn-sm btn-secondary-focus btn-outline">
                          <BiEdit />
                        </button>
                      </td>

                      <td className="px-4 py-3 border">
                        <button className="btn btn-sm btn-error btn-outline">
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
    </div>
  );
};

export default ApprovedUserTable;

