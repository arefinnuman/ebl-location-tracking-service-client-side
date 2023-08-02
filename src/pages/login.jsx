import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="container flex flex-col mx-auto items-center lg:flex-row bg-white  rounded-lg">
        <div className="w-1/2 p-8">
          <Image
            width={500}
            height={500}
            src="https://i.ibb.co/4RgmNFB/IMG-5668.jpg"
            alt="Eastern Bank Logo"
          />
        </div>
        <div className="flex flex-col w-1/2 p-8">
          <h2 className="text-3xl font-semibold leading-tight mb-4">
            Welcome to Eastern Bank
            <br />
            <span>Location Tracking Service by</span>
            <span> DFS</span>
          </h2>

          <input
            type="text"
            placeholder="Employee ID"
            className="input input-bordered input-primary w-full max-w-md my-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="input input-bordered input-primary w-full max-w-md my-2"
          />

          <p className="text-gray-600 mb-4">
            If you are new, you need to{" "}
            <span>
              <Link className="text-blue-500" href="/sign-up">
                sign up
              </Link>
            </span>
          </p>
          <Link href="/all-locations">
            <button className="btn btn-secondary rounded-2xl mt-2">
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

