import { GoogleMap, MarkerF } from "@react-google-maps/api";

const SubBranchModal = ({ selectedSubBranch }) => {
  const center = {
    lat: selectedSubBranch?.subBranchLocation?.lat,
    lng: selectedSubBranch?.subBranchLocation?.long,
  };

  return (
    <div>
      <h1 className="text-xl">{selectedSubBranch?.subBranchName}</h1>
      <p>{selectedSubBranch?.subBranchAddress}</p>
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

