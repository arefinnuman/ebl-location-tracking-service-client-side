import { useGetAgentOutletsQuery } from "@/redux/api/api";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const AgentTableMap = () => {
  const BangladeshBounds = {
    north: 26.634,
    south: 20.738,
    west: 88.008,
    east: 92.673,
  };

  const { data: agentOutlets } = useGetAgentOutletsQuery();

  const [agentOutletsData, setAgentOutletsData] = useState(null);

  useEffect(() => {
    if (agentOutlets) {
      setAgentOutletsData(agentOutlets.data);
    }
  }, [agentOutlets]);

  const agentLocations = agentOutletsData?.map((agent) => ({
    lat: agent?.agentLocation?.lat,
    lng: agent?.agentLocation?.long,
  }));

  const agentNames = agentOutletsData?.map((agent) => agent?.agentName);
  const agentAddresses = agentOutletsData?.map((agent) => agent?.agentAddress);

  const center = {
    lat: (BangladeshBounds.north + BangladeshBounds.south) / 2,
    lng: (BangladeshBounds.east + BangladeshBounds.west) / 2,
  };

  const mapOptions = {
    restriction: {
      latLngBounds: BangladeshBounds,
      strictBounds: false,
    },
  };

  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);

  return (
    <div>
      <div>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "90vh" }}
          center={center}
          zoom={7}
          options={mapOptions}
        >
          {agentLocations &&
            agentLocations.map((location, index) => (
              <Marker
                key={index}
                position={{ lat: location.lat, lng: location.lng }}
                onClick={() => setSelectedMarkerIndex(index)} // Changed to onClick event
              >
                {selectedMarkerIndex === index && (
                  <InfoWindow
                    onCloseClick={() => setSelectedMarkerIndex(null)}
                    position={{ lat: location.lat, lng: location.lng }}
                  >
                    <div>
                      <p className="text-lg font-semibold">
                        {agentNames[index]}
                      </p>
                      <p>{agentAddresses[index]}</p>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            ))}
        </GoogleMap>
      </div>
    </div>
  );
};

export default AgentTableMap;

