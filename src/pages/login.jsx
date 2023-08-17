import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { toast } from "react-hot-toast";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      id: id,
      password: password,
    };

    try {
      const rawResponse = await fetch(
        "http://localhost:5555/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      const content = await rawResponse.json();

      if (content?.data?.accessToken) {
        localStorage.setItem("token", content?.data?.accessToken);

        toast.success("Login Successful");
        router.push("/");
      } else if (content?.success === false) {
        toast.error(content?.message);
      } else {
        toast.error("Login Failed !");
      }
    } catch (err) {
      toast.error("Login Failed !");
    }

    setId("");
    setPassword("");
  };

  const handleEmployeeIdInput = (e) => {
    setId(e.target.value);
  };
  const handlePasswordInput = (e) => {
    setPassword(e.target.value);
  };

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
          <div>
            <h2 className="text-3xl lg:text-4xl font-semibold">
              <span className="text-5xl">W</span>elcome to{" "}
              <span className="text-primary">Digital Banking</span>
            </h2>
            <p className="text-base lg:text-lg text-gray-700 mb-2">
              Location Tracking Service
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Employee ID"
              onChange={handleEmployeeIdInput}
              value={id}
              className="input input-bordered input-primary w-full max-w-md my-2"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={handlePasswordInput}
              value={password}
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

            <button
              type="submit"
              className="btn btn-secondary rounded-2xl mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

