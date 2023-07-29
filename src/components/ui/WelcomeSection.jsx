/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const WelcomeSection = () => {
  return (
    <>
      <section className="">
        <div className="container flex flex-col mx-auto items-center lg:flex-row">
          <div className="w-1/2">
            <img
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
          </div>
          <div className="flex flex-col w-1/2 p-6  md:p-8 lg:p-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 mb-8 text-primary"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h2 className="text-3xl font-semibold leadi">
              Welcome to Eastern Bank Location Tracking Service!
            </h2>
            <p className="mt-4 mb-8">
              Discover the ease of finding your way with us as your trusted
              guide. Whether you are searching for the nearest Eastern Bank
              branch, an ATM, or any financial assistance, we are here to assist
              you on your journey.
              <br />
              <br />
              Start exploring with us today, and welcome to a new era of
              effortless navigation with Eastern Bank!
            </p>
            <Link href="/books">
              <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-secondary text-black">
                Get started
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;
