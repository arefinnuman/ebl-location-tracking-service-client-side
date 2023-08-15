import { GoogleMap, MarkerF } from "@react-google-maps/api";

const SubBranchModal = ({ selectedBranch }) => {
  const center = {
    lat: selectedBranch?.subBranchLocation?.lat,
    lng: selectedBranch.subBranchLocation?.long,
  };

  return (
    <div>
      <h1 className="text-xl">{selectedBranch.subBranchName}</h1>
      <p>{selectedBranch.subBranchAddress}</p>
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

export default SubBranchModal;

