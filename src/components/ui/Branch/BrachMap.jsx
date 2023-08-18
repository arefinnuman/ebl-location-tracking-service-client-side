import { useGetBranchesQuery } from "@/redux/api/api";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const BranchMapComponent = () => {
  const BangladeshBounds = {
    north: 26.634,
    south: 20.738,
    west: 88.008,
    east: 92.673,
  };

  const [branchesData, setBranchesData] = useState(null);

  const { data: branches } = useGetBranchesQuery();

  useEffect(() => {
    setBranchesData(branches?.data);
  }, [branches]);

  const branchLocations = branchesData?.map((branch) => ({
    lat: branch?.branchLocation?.lat,
    lng: branch?.branchLocation?.long,
  }));

  const branchNames = branchesData?.map((branch) => branch?.branchName);
  const branchAddresses = branchesData?.map((branch) => branch?.branchAddress);

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
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "90vh" }}
        center={center}
        zoom={7}
        options={mapOptions}
      >
        {branchLocations &&
          branchLocations.map((location, index) => (
            <Marker
              key={index}
              position={{ lat: location.lat, lng: location.lng }}
              onClick={() => setSelectedMarkerIndex(index)}
            >
              {selectedMarkerIndex === index && (
                <InfoWindow
                  onCloseClick={() => setSelectedMarkerIndex(null)}
                  position={{ lat: location.lat, lng: location.lng }}
                >
                  <div>
                    <p className="text-lg font-semibold">
                      {branchNames[index]}
                    </p>
                    <p>{branchAddresses[index]}</p>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
      </GoogleMap>
    </div>
  );
};

export default BranchMapComponent;

