const SignUpPage = () => {
  return (
    <div className="container mx-auto p-8 max-w-lg">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        Register yourself as a new user
      </h1>

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
          placeholder="Employee Card Number"
          className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
        />
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="block text-gray-700 mb-2">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="First Name"
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-gray-700 mb-2">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="Last Name"
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="bloodGroup" className="block text-gray-700 mb-2">
          Blood Group
        </label>
        <input
          type="text"
          id="bloodGroup"
          placeholder="Blood Group"
          className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
        />
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="contactNumber" className="block text-gray-700 mb-2">
            Contact Number
          </label>
          <input
            type="text"
            id="contactNumber"
            placeholder="Contact Number"
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
          />
        </div>

        <div>
          <label
            htmlFor="alternativeContact"
            className="block text-gray-700 mb-2"
          >
            Alternative
          </label>
          <input
            type="text"
            id="alternativeContact"
            placeholder="Alternative"
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="birthDate" className="block text-gray-700 mb-2">
          Birth Date
        </label>
        <input
          type="date"
          id="birthDate"
          placeholder="Birth Date"
          className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="gender" className="block text-gray-700 mb-2">
          Gender
        </label>
        <select
          id="gender"
          className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="presentAddress" className="block text-gray-700 mb-2">
          Present Address
        </label>
        <input
          type="text"
          id="presentAddress"
          placeholder="Present Address"
          className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="permanentAddress" className="block text-gray-700 mb-2">
          Permanent Address
        </label>
        <input
          type="text"
          id="permanentAddress"
          placeholder="Permanent Address"
          className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
        />
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="password" className="block text-gray-700 mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm Password"
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
          />
        </div>
      </div>

      <div>
        <h1>
          <span className="text-red-500">
            Please note that you will approved by a admin
          </span>
        </h1>
      </div>

      <div className="mt-4">
        <button className="btn btn-secondary rounded-lg w-full py-3 font-semibold">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
