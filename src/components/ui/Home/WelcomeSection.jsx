import Image from "next/image";

const WelcomeSection = () => {
  return (
    <>
      <section>
        <div className="container flex flex-col mx-auto items-center lg:flex-row">
          <div className="w-full lg:w-1/2">
            <Image
              width={500}
              height={500}
              src="https://i.ibb.co/4RgmNFB/IMG-5668.jpg"
              alt=""
              className="w-full"
            />
          </div>
          <div className="flex flex-col w-full lg:w-1/2 p-6 md:p-8 lg:p-12">
            <p className="mt-4 mb-8 text-center lg:text-left">
              The Digital Financial Service of Eastern Bank wishes you well! We
              are delighted to have you use our location tracking service.
              Prepare to enjoy easier navigation to quickly find the Eastern
              Bank locations closest to you.
              <br />
              <br />
              Greetings from Eastern Banks Digital Financial Service Team!
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeSection;

