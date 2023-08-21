import Image from "next/image";
import Link from "next/link";

const WelcomeSection = () => {
  return (
    <section className="py-6 md:py-10 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 md:space-y-0 md:space-x-0 lg:space-x-16">
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            width={500}
            height={500}
            src="https://i.ibb.co/4RgmNFB/IMG-5668.jpg"
            alt="Eastern Bank Building"
            className="w-full transition-transform duration-300 ease-in-out transform hover:scale-105"
          />
        </div>

        <div className="flex flex-col w-full md:w-1/2 space-y-4 md:space-y-6">
          <div>
            <p className="text-base md:text-lg lg:text-xl font-medium leading-relaxed">
              The Digital Banking of Eastern Bank welcomes you! Get ready to
              enjoy our location tracking service, making it easier to find the
              nearest Eastern Bank locations.
            </p>
          </div>

          <p className="text-xs md:text-sm lg:text-base font-light italic">
            Greetings from the Eastern Bank Digital Banking Team!
          </p>

          <div className="flex justify-center md:justify-start w-full">
            <Link
              href="/explore"
              className="inline-flex items-center justify-center text-sm md:text-md px-4 md:px-8 py-2 md:py-3 bg-gradient-to-r from-purple-500 to-blue-500 border-0
            rounded-full font-bold text-white hover:shadow-2xl transform
            hover:-translate-y-1 hover:scale-110 focus:outline-none
            focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 transition
            duration-300 ease-in-out"
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

