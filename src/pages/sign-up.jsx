import LoadingUi from "@/components/ui/LoadingUi";
import { useCreateUserMutation } from "@/redux/api/api";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const SignUpPage = () => {
  const router = useRouter();
  const [createUser, { isLoading, isError }] = useCreateUserMutation();

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
      router.push("/login");
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
    <div className="container py-4 mx-auto max-w-2xl">
      <h1 className="text-3xl font-semibold text-primary">Create Yourself</h1>
      <p className="text-lg text-error mb-6">
        Please be patient, One of our admin will approve you.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
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
            name="employeeCardNumber"
            {...register("employeeCardNumber", {
              required: "Employee Card Number is required",
            })}
            placeholder="Employee Card Number"
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
          />
          {errors.employeeCardNumber && (
            <p className="text-red-500">{errors.employeeCardNumber.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: "Email is required" })}
            placeholder="Email"
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="flex -mx-2 mb-4">
          <div className="w-1/2 px-2">
            <label htmlFor="firstName" className="block text-gray-700 mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              {...register("firstName", {
                required: "First Name is required",
              })}
              placeholder="First Name"
              className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div className="w-1/2 px-2">
            <label htmlFor="lastName" className="block text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              {...register("lastName", { required: "Last Name is required" })}
              placeholder="Last Name"
              className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* DateOfBirth */}
        <div className="mb-4">
          <label htmlFor="dateOfBirth" className="block text-gray-700 mb-2">
            Date Of Birth
          </label>
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            {...register("dateOfBirth", {
              required: "Date Of Birth is required",
            })}
            placeholder="Date Of Birth"
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
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
            name="gender"
            {...register("gender", { required: "Gender is required" })}
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
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
            name="bloodGroup"
            {...register("bloodGroup", {
              required: "Blood Group is required",
            })}
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
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
              name="contactNumber"
              {...register("contactNumber", {
                required: "Contact Number is required",
              })}
              placeholder="Contact Number"
              className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
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
              Alternative
            </label>
            <input
              type="text"
              id="alternativeContactNumber"
              name="alternativeContactNumber"
              {...register("alternativeContactNumber", {
                required: "Alternative Contact Number is required",
              })}
              placeholder="Alternative"
              className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
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
            <label
              htmlFor="presentAddress"
              className="block text-gray-700 mb-2"
            >
              Present Address
            </label>
            <textarea
              id="presentAddress"
              name="presentAddress"
              {...register("presentAddress", {
                required: "Present Address is required",
              })}
              placeholder="Present Address"
              className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
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
              name="permanentAddress"
              {...register("permanentAddress", {
                required: "Permanent Address is required",
              })}
              placeholder="Permanent Address"
              className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
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
            name="designation"
            {...register("designation", {
              required: "Designation is required",
            })}
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
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
            name="department"
            {...register("department", {
              required: "Department is required",
            })}
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
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

        {/* password and confirm password */}
        <div className="flex -mx-2 mb-4">
          <div className="w-1/2 px-2">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              {...register("password", {
                required: "Password is required",
              })}
              placeholder="Password"
              className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          <div className="w-1/2 px-2">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
              })}
              placeholder="Confirm Password"
              className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
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
    </div>
  );
};

export default SignUpPage;

