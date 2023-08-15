import Image from "next/image";

const DashBoardUi = () => {
  return (
    <div>
      <section className="">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Welcome to <span className="text-primary">Dashboard</span> page
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Here you can see all the information about this website
              <br className="hidden md:inline lg:hidden" /> and you can also
              manage everything from here.
            </p>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <Image
              width={500}
              height={500}
              src="https://i.ibb.co/4RgmNFB/IMG-5668.jpg"
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DashBoardUi;

