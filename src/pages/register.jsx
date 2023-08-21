import DashboardLayout from "@/components/layout/DashboardLayout";
import LoadingUi from "@/components/ui/LoadingUi";
import { useCreateUserByAdminMutation } from "@/redux/api/api";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const RegisterUserPage = () => {
  const [createUser, { isLoading, isError }] = useCreateUserByAdminMutation();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userData = {
      email: data.email,
      password: data.password,
      employeeCardNumber: data.employeeCardNumber,
      role: data.role,
      fullName: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      bloodGroup: data.bloodGroup,
      contactNo: data.contactNumber,
      alternativeContactNo: data.alternativeContactNumber,
      presentAddress: data.presentAddress,
      permanentAddress: data.permanentAddress,
      designation: data.designation,
      department: data.department,
    };

    const response = await createUser(userData);
    console.log(response);
    if (response?.data?.statusCode === 200) {
      toast.success("User created successfully");
      window.location.reload();
    } else if (response?.data?.statusCode === 400) {
      toast.error("Something went wrong");
    } else {
      toast.error("Something went wrong");
    }
  };

  if (isLoading) {
    return <LoadingUi />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-4 border rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label
          htmlFor="employeeCardNumber"
          className="block text-gray-700 mb-2"
        >
          Employee Card Number
        </label>
        <input
          type="text"
          id="employeeCardNumber"
          {...register("employeeCardNumber", {
            required: "Employee Card Number is required",
          })}
          placeholder="Employee Card Number"
          className="input w-full"
        />
        {errors.employeeCardNumber && (
          <p className="text-red-500">{errors.employeeCardNumber.message}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          {...register("email", { required: "Email is required" })}
          placeholder="Email"
          className="input w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      {/* First Name */}
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700 mb-2">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          {...register("firstName", { required: "First Name is required" })}
          placeholder="First Name"
          className="input w-full"
        />
        {errors.firstName && (
          <p className="text-red-500">{errors.firstName.message}</p>
        )}
      </div>

      {/* Last Name */}
      <div className="mb-4">
        <label htmlFor="lastName" className="block text-gray-700 mb-2">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          {...register("lastName", { required: "Last Name is required" })}
          placeholder="Last Name"
          className="input w-full"
        />
        {errors.lastName && (
          <p className="text-red-500">{errors.lastName.message}</p>
        )}
      </div>

      {/* Date Of Birth */}
      <div className="mb-4">
        <label htmlFor="dateOfBirth" className="block text-gray-700 mb-2">
          Date Of Birth
        </label>
        <input
          type="date"
          id="dateOfBirth"
          {...register("dateOfBirth", {
            required: "Date Of Birth is required",
          })}
          placeholder="Date Of Birth"
          className="input w-full"
        />
        {errors.dateOfBirth && (
          <p className="text-red-500">{errors.dateOfBirth.message}</p>
        )}
      </div>

      {/* Gender */}
      <div className="mb-4">
        <label htmlFor="gender" className="block text-gray-700 mb-2">
          Gender
        </label>
        <select
          id="gender"
          {...register("gender", { required: "Gender is required" })}
          className="input w-full"
        >
          <option value="">Select your gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && (
          <p className="text-red-500">{errors.gender.message}</p>
        )}
      </div>

      {/* Blood Group */}
      <div className="mb-4">
        <label htmlFor="bloodGroup" className="block text-gray-700 mb-2">
          Blood Group
        </label>
        <select
          id="bloodGroup"
          {...register("bloodGroup", { required: "Blood Group is required" })}
          className="input w-full"
        >
          <option value="">Select your blood group</option>
          <option value="A+">A+</option>
          <option value="B+">B+</option>
          <option value="O+">O+</option>
          <option value="AB+">AB+</option>
          <option value="A-">A-</option>
          <option value="B-">B-</option>
          <option value="O-">O-</option>
          <option value="AB-">AB-</option>
        </select>
        {errors.bloodGroup && (
          <p className="text-red-500">{errors.bloodGroup.message}</p>
        )}
      </div>

      {/* Contact Number and Alternative Contact Number */}
      <div className="flex -mx-2 mb-4">
        <div className="w-1/2 px-2">
          <label htmlFor="contactNumber" className="block text-gray-700 mb-2">
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            {...register("contactNumber", {
              required: "Contact Number is required",
            })}
            placeholder="Contact Number"
            className="input w-full"
          />
          {errors.contactNumber && (
            <p className="text-red-500">{errors.contactNumber.message}</p>
          )}
        </div>

        <div className="w-1/2 px-2">
          <label
            htmlFor="alternativeContactNumber"
            className="block text-gray-700 mb-2"
          >
            Alternative Contact Number
          </label>
          <input
            type="text"
            id="alternativeContactNumber"
            {...register("alternativeContactNumber", {
              required: "Alternative Contact Number is required",
            })}
            placeholder="Alternative Contact Number"
            className="input w-full"
          />
          {errors.alternativeContactNumber && (
            <p className="text-red-500">
              {errors.alternativeContactNumber.message}
            </p>
          )}
        </div>
      </div>

      {/* Present Address and Permanent Address */}
      <div className="flex -mx-2 mb-4">
        <div className="w-1/2 px-2">
          <label htmlFor="presentAddress" className="block text-gray-700 mb-2">
            Present Address
          </label>
          <textarea
            id="presentAddress"
            {...register("presentAddress", {
              required: "Present Address is required",
            })}
            placeholder="Present Address"
            className="input w-full"
          />
          {errors.presentAddress && (
            <p className="text-red-500">{errors.presentAddress.message}</p>
          )}
        </div>

        <div className="w-1/2 px-2">
          <label
            htmlFor="permanentAddress"
            className="block text-gray-700 mb-2"
          >
            Permanent Address
          </label>
          <textarea
            id="permanentAddress"
            {...register("permanentAddress", {
              required: "Permanent Address is required",
            })}
            placeholder="Permanent Address"
            className="input w-full"
          />
          {errors.permanentAddress && (
            <p className="text-red-500">{errors.permanentAddress.message}</p>
          )}
        </div>
      </div>

      {/* Designation */}
      <div className="mb-4">
        <label htmlFor="designation" className="block text-gray-700 mb-2">
          Designation
        </label>
        <select
          id="designation"
          {...register("designation", { required: "Designation is required" })}
          className="input w-full"
        >
          <option value="">Select your designation</option>
          <option value="Manager">Manager</option>
          <option value="Assistant Manager">Assistant Manager</option>
          <option value="Senior Executive">Senior Executive</option>
          <option value="Executive">Executive</option>
          <option value="Trainee">Trainee</option>
        </select>
        {errors.designation && (
          <p className="text-red-500">{errors.designation.message}</p>
        )}
      </div>

      {/* Department */}
      <div className="mb-4">
        <label htmlFor="department" className="block text-gray-700 mb-2">
          Department
        </label>
        <select
          id="department"
          {...register("department", { required: "Department is required" })}
          className="input w-full"
        >
          <option value="">Select your department</option>
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Marketing">Marketing</option>
          <option value="Sales">Sales</option>
        </select>
        {errors.department && (
          <p className="text-red-500">{errors.department.message}</p>
        )}
      </div>

      {/* Role */}
      <div className="mb-4">
        <label htmlFor="role" className="block text-gray-700 mb-2">
          Role
        </label>
        <select
          id="role"
          {...register("role", { required: "Role is required" })}
          className="input w-full"
        >
          <option value="">Select user role</option>
          <option value="admin">Admin</option>
          <option value="viewer">Employee</option>
        </select>
        <p className="text-red-500">
          Please make sure that you are giving suitable role
        </p>
        {errors.role && <p className="text-red-500">{errors.role.message}</p>}
      </div>

      {/* Password */}
      <div className="flex -mx-2 mb-4">
        <div className="w-1/2 px-2">
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Password"
            className="input w-full"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="w-1/2 px-2">
          <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            {...register("confirmPassword")}
            placeholder="Confirm Password"
            className="input w-full"
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="btn btn-secondary rounded-lg w-full py-3 font-semibold"
      >
        Register
      </button>
    </form>
  );
};

export default RegisterUserPage;
RegisterUserPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

