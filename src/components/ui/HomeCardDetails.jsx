/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const HomeCardDetails = ({ card }) => {
  const { title, description, image, link } = card;
  return (
    <>
      <article className="flex flex-col shadow-2xl mb-20 hover:shadow-4xl transition duration-300 ease-in-out rounded-2xl">
        <img alt="" className="object-cover w-full h-52 d" src={image} />

        <div className="flex flex-col flex-1 p-6">
          <h3 className="flex-1 py-2 text-lg font-semibold leadi">{title}</h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-800">
            <span>{description}</span>
            <Link
              className="flex justify-center items-center w-full"
              href={link}
            >
              <button className="mt-5 btn btn-primary btn-outline">
                See locations
              </button>
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

export default HomeCardDetails;
