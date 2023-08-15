import { GoogleMap, MarkerF } from "@react-google-maps/api";

const Ebl365Modal = ({ selectedBooth }) => {
  const center = {
    lat: selectedBooth?.lat,
    lng: selectedBooth?.long,
  };

  return (
    <div>
      <h1 className="text-xl">{selectedBooth.ebl365Name}</h1>
      <p>{selectedBooth.ebl365Address}</p>
      <div>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "60vh" }}
          center={center}
          zoom={15}
        >
          <MarkerF position={center} />
        </GoogleMap>
      </div>
    </div>
  );
};

export default Ebl365Modal;

