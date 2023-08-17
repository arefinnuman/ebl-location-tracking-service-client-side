import Image from "next/image";
import Link from "next/link";

const WelcomeSection = () => {
  return (
    <section className="pb-8">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
        <div className="w-full lg:w-1/2">
          <Image
            width={500}
            height={500}
            src="https://i.ibb.co/4RgmNFB/IMG-5668.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/2 space-y-4">
          <div className="max-w-lg lg:pr-8">
            <p className="text-sm lg:text-base ">
              The Digital Financial Service of Eastern Bank welcomes you! Get
              ready to enjoy our location tracking service, making it easier to
              find the nearest Eastern Bank locations.
            </p>
          </div>
          <p className="text-sm lg:text-base">
            Greetings from the Eastern Bank Digital Financial Service Team!
          </p>
          <div className="mt-10">
            <Link
              href="/explore"
              className="inline-block text-md px-4 py-2 border border-primary font-semibold rounded hover:bg-secondary transition duration-300 ease-in-out transform hover:scale-105 mt-4"
            >
              Explore EBL Footprints
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;

