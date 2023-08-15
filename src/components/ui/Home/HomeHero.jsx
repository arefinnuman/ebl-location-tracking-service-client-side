import Link from "next/link";

const HomeHeroPage = () => {
  return (
    <section className="">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-10 md:px-10 lg:px-32 xl:max-w-3xl">
        <div className="flex flex-col items-center text-center md:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-800">
            Welcome to <span className="text-primary">Digital Banking</span>
          </h2>
          <span className="md:text-lg lg:text-xl text-gray-600">
            Location Tracking Service
          </span>
        </div>

        <p className="px-8 mt-8 mb-12 text-lg">
          Start exploring with us Today, Welcome to a new era of effortless
          navigation with Eastern Bank! We are thrilled to introduce our
          revolutionary location tracking service designed exclusively for our
          esteemed management members.
        </p>
        <div className="flex flex-wrap justify-center">
          <Link
            href="/explore"
            className="px-8 py-3 m-2 text-lg border rounded text-primary dark:border-primary hover:bg-primary hover:text-white"
          >
            Explore our Footprints
          </Link>
        </div>
        {/* <Link href="/" className="mt-5 link link-primary link-hover">
          View where we are not present
        </Link> */}
      </div>
    </section>
  );
};

export default HomeHeroPage;

