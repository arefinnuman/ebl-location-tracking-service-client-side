import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      id: id,
      password: password,
    };
    console.log(userData);

    (async () => {
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

        localStorage.setItem("token", content?.data?.accessToken);
      } catch (err) {
        console.log(err);
      }
    })();

    // setId("");
    // setPassword("");
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
          <h2 className="text-3xl font-semibold leading-tight mb-4">
            Welcome to Eastern Bank
            <br />
            <span>Location Tracking Service by</span>
            <span> DFS</span>
          </h2>

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

