/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const HomeCardDetails = ({ card }) => {
  const { title, description, image, link } = card;
  return (
    <>
      <article className="flex flex-col shadow-2xl rounded-2xl overflow-hidden transition duration-300 ease-in-out transform hover:scale-105 mb-10 gap-5">
        <img
          alt=""
          className="object-cover w-full h-52 md:h-60 lg:h-64"
          src={image}
        />

        <div className="flex flex-col flex-1 p-4 md:p-6">
          <h3 className="flex-1 py-2 text-xl md:text-lg font-semibold leading-tight">
            {title}
          </h3>
          <div className="space-y-2 text-sm">
            <p className="mb-4">{description}</p>
            <Link
              className="block mt-5 px-6 py-3 text-sm font-medium text-white bg-primary rounded-lg w-full md:w-max hover:bg-secondary-focus transition duration-300"
              href={link}
            >
              See locations
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default HomeCardDetails;

