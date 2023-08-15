import { GoogleMap, MarkerF } from "@react-google-maps/api";

const AgentModal = ({ selectedAgent }) => {
  const center = {
    lat: selectedAgent?.agentLocation?.lat,
    lng: selectedAgent.agentLocation?.long,
  };

  return (
    <div>
      <h1 className="text-xl">{selectedAgent.agentName}</h1>
      <p>{selectedAgent.agentAddress}</p>
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

export default AgentModal;

