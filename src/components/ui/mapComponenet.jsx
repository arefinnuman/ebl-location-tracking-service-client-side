import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const MapModal = ({ selectedBranch }) => {
  const center = {
    lat: selectedBranch.branchLocation.lat,
    lng: selectedBranch.branchLocation.long,
  };
  console.log(center);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "11122131313413414",
  });

  const setPosition = () => {
    setLatitude(center.lat);
    setLongitude(center.lng);
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{selectedBranch.branchName}</h1>
      <>
        <div className="d-flex justify-content-center">
          <div>
           
            <div>
              <div style={{ width: "800px", height: "350px" }} id="source-map">
                <GoogleMap
                  center={center}
                  zoom={12}
                  mapContainerStyle={{ width: "100%", height: "100%" }}
                >
                  <Marker
                    position={center}
                    draggable={true}
                    onDragEnd={(e) => {
                      setPosition(e.latLng.lat(), e.latLng.lng());
                    }}
                  />
                </GoogleMap>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default MapModal;
