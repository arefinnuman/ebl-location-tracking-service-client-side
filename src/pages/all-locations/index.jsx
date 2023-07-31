import RootLayout from "@/components/layout/RootLayout";
import AllLocationTable from "@/components/ui/AllLocationTable";

import { useGetAllNetworksQuery } from "@/redux/api/api";

const AllLocationPage = () => {
  const { data } = useGetAllNetworksQuery();

  const networksData = data?.data;

  return (
    <section className="min-h-screen">
      <div className="mr-6">
        <div className="flex justify-center items-center ">
          <input
            type="text"
            placeholder="Search here..."
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <button className="mx-2 btn btn-primary">Search</button>
        </div>
        <div className="overflow-x-auto my-10 shadow-xl rounded-xl">
          <table className="table">
            <thead>
              <tr>
                <th className="text-center">Sl</th>
                <th className="text-center">Name</th>
                <th className="text-center">District</th>
                <th className="text-center">Address</th>
                <th className="text-center">Map</th>
              </tr>
            </thead>
            {networksData &&
              networksData.map((network) => (
                <AllLocationTable key={network._id} network={network} />
              ))}
          </table>
        </div>
      </div>
    </section>
  );
};

export default AllLocationPage;

AllLocationPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

