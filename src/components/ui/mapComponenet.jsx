import { GoogleMap, Marker } from "@react-google-maps/api";

const MapModal = ({ selectedBranch }) => {
  const center = {
    lat: selectedBranch?.branchLocation?.lat,
    lng: selectedBranch.branchLocation?.long,
  };

  const yellowMarkerSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
      <circle cx="20" cy="20" r="12" fill="yellow" />
    </svg>
  `;

  return (
    <div>
      <h1>{selectedBranch.branchName}</h1>
      <div>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "60vh" }}
          center={center}
          zoom={16}
        >
          <Marker
            position={center}
            icon={{
              url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
                yellowMarkerSvg
              )}`,
              scaledSize: new window.google.maps.Size(40, 40),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(20, 40),
            }}
          />
        </GoogleMap>
      </div>
    </div>
  );
};

export default MapModal;

