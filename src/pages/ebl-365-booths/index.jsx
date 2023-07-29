import RootLayout from "@/components/layout/RootLayout";
import { useGet365BoothsQuery } from "@/redux/api/api";
import Link from "next/link";

const Ebl365Booths = () => {
  const { data } = useGet365BoothsQuery();
  const ebl365Booths = data?.data;

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>District</th>
              <th>Address</th>
              <th>Map</th>
            </tr>
          </thead>
          <tbody>
            {ebl365Booths &&
              ebl365Booths.map((ebl365) => (
                <tr className="hover" key={ebl365._id}>
                  <td>{ebl365.serialNo}</td>
                  <td>{ebl365.ebl365Name}</td>
                  <td>{ebl365.ebl365Division}</td>
                  <td>{ebl365.ebl365Address}</td>
                  <td>
                    <Link
                      className="link link-primary link-hover"
                      href={ebl365.ebl365MapLink}
                    >
                      See on google maps
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Ebl365Booths;

Ebl365Booths.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
