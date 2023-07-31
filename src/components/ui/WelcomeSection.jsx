/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

const WelcomeSection = () => {
  return (
    <>
      <section>
        <div className="container flex flex-col mx-auto items-center lg:flex-row">
          <div className="w-full lg:w-1/2">
            <img
              src="https://i.ibb.co/4RgmNFB/IMG-5668.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 p-6 md:p-8 lg:p-12">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-8 h-8 mb-8 text-primary hidden lg:block"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              ></path>
            </svg>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight text-center md:text-left">
              Welcome to Eastern Bank
              <br />
              <span className="text-base md:text-lg lg:text-xl">
                Location Tracking Service by DFS
              </span>
            </h2>

            <p className="mt-4 mb-8 text-center lg:text-left">
              The Digital Financial Service of Eastern Bank wishes you well! We
              are delighted to have you use our location tracking service.
              Prepare to enjoy easier navigation to quickly find the Eastern
              Bank locations closest to you.
              <br />
              <br />
              Start exploring with us today, and welcome to a new era of
              effortless navigation with Eastern Bank!
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href="/all-locations">
                <button className="btn btn-secondary rounded-2xl">
                  View all Locations
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;

