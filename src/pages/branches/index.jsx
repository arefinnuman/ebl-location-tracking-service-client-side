import RootLayout from "@/components/layout/RootLayout";
import { useGetBranchesQuery } from "@/redux/api/api";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const BranchesPage = () => {
  const { data, isLoading } = useGetBranchesQuery();
  const branches = data?.data;

  const center = {
    lat: 40.7128,
    lng: -74.006,
  };

  const containerStyle = {
    width: "500px",
    height: "300px",
  };

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen">
          <span className="loading loading-infinity loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="flex flex-col md:flex-row justify-center items-center mb-6">
            <input
              type="text"
              placeholder="Search here..."
              className="input input-bordered input-primary w-full max-w-xs mb-4 md:mb-0 md:mr-4"
            />
            <button className="px-3 py-2 btn btn-primary md:px-4 md:py-2">
              Search
            </button>
          </div>
          <section className="flex flex-col md:flex-row justify-center">
            <div className="w-full max-w-3xl px-6 mx-auto bg-white rounded-lg">
              <div className="overflow-x-auto">
                <table className="table w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-3 border">Sl</th>
                      <th className="px-4 py-3 border">Name</th>
                      <th className="px-4 py-3 border">District</th>
                      <th className="px-4 py-3 border">Address</th>
                      <th className="px-4 py-3 border">Google Map Link</th>
                    </tr>
                  </thead>
                  <tbody>
                    {branches &&
                      branches.map((branch, index) => (
                        <tr className="hover:bg-gray-50" key={branch._id}>
                          <td className="px-4 py-3 text-center border">
                            {index + 1}
                          </td>
                          <td className="px-4 py-3 border">
                            {branch.branchName}
                          </td>
                          <td className="px-4 py-3 border">
                            {branch.branchDivision}
                          </td>
                          <td className="px-4 py-3 border md:w-1/3">
                            {branch.branchAddress}
                          </td>
                          <td className="px-4 py-3 border">
                            <a
                              className="link link-primary link-hover"
                              href={branch.branchMapLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Click Here
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-6 mx-auto bg-white rounded-lg">
              <LoadScript googleMapsApiKey="YOUR_API_KEY">
                <GoogleMap
                  center={center}
                  mapContainerClassName={containerStyle}
                  zoom={10}
                ></GoogleMap>
              </LoadScript>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default BranchesPage;

BranchesPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

