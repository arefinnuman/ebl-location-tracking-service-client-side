import Image from "next/image";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center ">
      <div className=" text-center">
        <Image
          src="https://i.ibb.co/4RgmNFB/IMG-5668.jpg"
          alt="Eastern Bank Logo"
          width={500}
          height={500}
        />
        <h1 className="text-2xl font-semibold mt-8 mb-4">
          404 | Page Not Found
        </h1>
        <p className="text-lg mb-8">
          Oops! The page you are looking for does not exist.
        </p>
        <Link href="/">
          <button className="btn btn-primary rounded-lg  font-semibold transition duration-300 ease-in-out transform hover:bg-secondary hover:shadow-lg hover:text-black">
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

