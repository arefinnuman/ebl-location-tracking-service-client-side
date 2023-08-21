import Image from "next/image";
import Link from "next/link";

const HomeCardDetails = ({ card }) => {
  const { title, description, image, link } = card;
  return (
    <>
      <article className="flex flex-col shadow-md hover:shadow-xl rounded-2xl overflow-hidden transition-transform duration-300 ease-in-out transform hover:scale-105 mb-10 gap-4">
        <div className="relative hover:opacity-90 transition-opacity duration-300 ease-in-out">
          <Image
            width={500}
            height={500}
            alt="Descriptive alt text for better accessibility"
            className="object-cover w-full h-48 md:h-56 lg:h-60 transition-transform duration-300 ease-in-out transform hover:scale-102"
            src={image}
          />
        </div>

        <div className="flex flex-col flex-1 p-4 md:p-5 bg-white">
          <h3 className="flex-1 mt-2 mb-3 text-lg md:text-xl font-medium leading-snug truncate">
            {title}
          </h3>
          <div className="space-y-1.5 text-xs md:text-sm">
            <p className="mb-2 text-gray-500">{description}</p>
            <Link
              className="inline-flex items-center justify-center relative bg-gradient-to-r from-blue-600 to-blue-400 text-white px-5 py-2 rounded-lg w-full md:w-max block text-xs md:text-sm font-medium transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-md hover:from-blue-500 hover:to-blue-700"
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

