import { GoogleMap, MarkerF } from "@react-google-maps/api";

const BranchModal = ({ selectedBranch }) => {
  const center = {
    lat: selectedBranch?.branchLocation?.lat,
    lng: selectedBranch?.branchLocation?.long,
  };

  return (
    <div>
      <h1 className="text-xl">{selectedBranch?.branchName}</h1>
      <p>{selectedBranch?.branchAddress}</p>
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

export default BranchModal;

