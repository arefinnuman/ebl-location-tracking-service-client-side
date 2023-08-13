import { useGet365BoothsQuery } from "@/redux/api/api";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { useState } from "react";

const Ebl365Map = () => {
  const BangladeshBounds = {
    north: 26.634,
    south: 20.738,
    west: 88.008,
    east: 92.673,
  };

  const { data: ebl365Booths } = useGet365BoothsQuery();
  const ebl365BoothsData = ebl365Booths?.data;

  const ebl365Locations = ebl365BoothsData?.map((ebl365) => ({
    lat: ebl365?.lat,
    lng: ebl365?.long,
  }));

  const ebl365Names = ebl365BoothsData?.map((ebl365) => ebl365?.ebl365Name);
  const ebl365Addresses = ebl365BoothsData?.map(
    (ebl365) => ebl365?.ebl365Address
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
          mapContainerStyle={{ width: "70vh", height: "90vh" }}
          center={center}
          zoom={7}
          options={mapOptions}
        >
          {ebl365Locations &&
            ebl365Locations.map((location, index) => (
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
                        {ebl365Names[index]}
                      </p>
                      <p>{ebl365Addresses[index]}</p>
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

export default Ebl365Map;

