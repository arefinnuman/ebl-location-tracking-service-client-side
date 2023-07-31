import Image from "next/image";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="container flex flex-col mx-auto items-center lg:flex-row">
        <div className="w-1/2">
          <Image
            width={500}
            height={500}
            src="https://i.ibb.co/4RgmNFB/IMG-5668.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col w-1/2 p-6  md:p-8 lg:p-12">
          <h2 className="text-3xl font-semibold leadi">
            Welcome to Eastern Bank
            <br />
            <span>Location Tracking Service by </span>
            <span> DFS</span>
          </h2>

          <input
            type="text"
            placeholder="Type your password here "
            className="input input-bordered input-primary w-full max-w-xs my-5"
          />

          <Link href="/all-locations">
            <button className="btn btn-secondary rounded-2xl">Submit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

