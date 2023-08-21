import {
  useApprovedByAdminMutation,
  useGetAllUserQuery,
} from "@/redux/api/api";
import { toast } from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { FaUser, FaUserCog } from "react-icons/fa";

const RequestedUserTable = () => {
  const { data, refetch } = useGetAllUserQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const users = data?.data;
  const requestedUser = users?.filter(
    (user) => user?.approvedByAdmin === false
  );
  const [approvedUser] = useApprovedByAdminMutation();
  const [rejectUser] = useApprovedByAdminMutation();

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

  return (
    <div>
      <section>
        {requestedUser?.length === 0 ? (
          <h1 className="text-xl font-semibold mb-8 text-center my-4">
            No Requested User
          </h1>
        ) : (
          <>
            <h1 className="text-xl font-semibold mb-8 text-center">
              Users for approval
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
                    {requestedUser.map((user, index) => (
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
                        <td className="px-4 py-3 border md:w-1/5">
                          <button
                            onClick={() => handleApprovedUser(user.employeeId)}
                          >
                            <FaUser /> Approve
                          </button>
                        </td>
                        <td className="px-4 py-3 border md:w-1/5">
                          <button
                            onClick={() => handleRejectUser(user.employeeId)}
                          >
                            <FaUserCog /> Reject
                          </button>
                        </td>
                        <td className="px-4 py-3 border">
                          <button>
                            <BiEdit />
                          </button>
                        </td>
                        <td className="px-4 py-3 border">
                          <button>
                            <AiOutlineDelete />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default RequestedUserTable;

