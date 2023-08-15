import { useGetSubBranchesQuery } from "@/redux/api/api";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { useState } from "react";

const SubBranchMap = () => {
  const BangladeshBounds = {
    north: 26.634,
    south: 20.738,
    west: 88.008,
    east: 92.673,
  };

  const { data: subBranches } = useGetSubBranchesQuery();
  const subBranchesData = subBranches?.data;

  const subBranchLocations = subBranchesData?.map((subBranch) => ({
    lat: subBranch?.subBranchLocation?.lat,
    lng: subBranch?.subBranchLocation?.long,
  }));

  const subBranchNames = subBranchesData?.map(
    (subBranch) => subBranch?.subBranchName
  );
  const subBranchAddresses = subBranchesData?.map(
    (subBranch) => subBranch?.subBranchAddress
  );

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
          {subBranchLocations &&
            subBranchLocations.map((location, index) => (
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
                        {subBranchNames[index]}
                      </p>
                      <p>{subBranchAddresses[index]}</p>
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

export default SubBranchMap;

