import DashboardLayout from "@/components/layout/DashboardLayout";
import { useGetAllUserQuery } from "@/redux/api/api";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

const AllUserPage = () => {
  const { data, isLoading } = useGetAllUserQuery();
  const users = data?.data;

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      ) : (
        <>
          <section>
            <h1 className="text-3xl font-semibold mb-8 text-center">
              All Users
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
                      <th className="px-4 py-3 border">Status</th>
                      <th className="px-4 py-3 border">Role</th>
                      <th className="px-4 py-3 border">Edit</th>
                      <th className="px-4 py-3 border">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users &&
                      users.map((user, index) => (
                        <tr className="hover:bg-gray-50" key={user._id}>
                          <td className="px-4 py-3 text-center border">
                            {index + 1}
                          </td>
                          <td className="px-4 py-3 border md:w-1/3">
                            {user?.fullName?.firstName}{" "}
                            {user?.fullName?.lastName}
                          </td>
                          <td className="px-4 py-3 border">{user?.email}</td>
                          <td className="px-4 py-3 border md:w-1/5">
                            {user?.designation}
                          </td>

                          {user?.approvedByAdmin === false ? (
                            <td className="px-4 py-3 border md:w-1/5">
                              <button className="text-error link link-hover">
                                Approve
                              </button>
                            </td>
                          ) : (
                            <td className="px-4 py-3 border md:w-1/5">
                              <span className="text-success">Approved</span>
                            </td>
                          )}

                          <td className="px-4 py-3 border md:w-1/5">
                            {user?.role === "admin" ? (
                              <div
                                className="tooltip"
                                data-tip="Change to user"
                              >
                                <button className="btn btn-sm btn-accent btn-outline">
                                  Admin
                                </button>
                              </div>
                            ) : (
                              <div
                                className="tooltip"
                                data-tip="Change to admin"
                              >
                                <button className="btn px-4 btn-sm btn-primary btn-outline">
                                  User
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
        </>
      )}
    </>
  );
};

export default AllUserPage;

AllUserPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

