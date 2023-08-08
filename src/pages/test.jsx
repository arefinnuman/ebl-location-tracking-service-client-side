import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const TestPage = () => {
  const center = {
    lat: -3.745,
    lng: -38.523,
  };

  return (
    <div>
      <h1>This is test page</h1>
      <div>
        <LoadScript googleMapsApiKey="AIzaSyD4GrU8D0-9G_cf_JLyf6wL1Sr1soBkCgo">
          <GoogleMap
            mapContainerStyle={{ width: "100vh", height: "100vh" }}
            center={center}
            zoom={12}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default TestPage;

