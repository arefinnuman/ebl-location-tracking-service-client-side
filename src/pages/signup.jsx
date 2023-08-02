const SignUpPage = () => {
  return (
    <div className="container mx-auto p-8 max-w-lg">
      <h1 className="text-4xl font-semibold mb-8 text-center">Sign Up</h1>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Employee Card Number</label>
        <input
          type="text"
          placeholder="Employee Card Number"
          className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-gray-700 mb-2">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Blood Group</label>
        <input
          type="text"
          placeholder="Blood Group"
          className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-gray-700 mb-2">Contact Number</label>
          <input
            type="text"
            placeholder="Contact Number"
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Alternative</label>
          <input
            type="text"
            placeholder="Alternative contact number"
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
          />
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Birth Date</label>
        <input
          type="date"
          placeholder="Birth Date"
          className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Gender</label>
        <select className="input input-bordered input-primary w-full py-2 px-4 rounded-md">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Present Address</label>
        <input
          type="text"
          placeholder="Present Address"
          className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 mb-2">Permanent Address</label>
        <input
          type="text"
          placeholder="Permanent Address"
          className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="input input-bordered input-primary w-full py-2 px-4 rounded-md"
          />
        </div>
      </div>

      <div className="mt-8">
        <button className="btn btn-secondary rounded-lg w-full py-3 font-semibold">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;

