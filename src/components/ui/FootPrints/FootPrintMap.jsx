import {
  useGet365BoothsQuery,
  useGetAgentOutletsQuery,
  useGetBranchesQuery,
  useGetSubBranchesQuery,
} from "@/redux/api/api";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import { useEffect, useState } from "react";

const FootPrintMap = () => {
  const BangladeshBounds = {
    north: 26.634,
    south: 20.738,
    west: 88.008,
    east: 92.673,
  };

  const mapOptions = {
    restriction: {
      latLngBounds: BangladeshBounds,
      strictBounds: false,
    },
  };

  const [combinedData, setCombinedData] = useState([]);

  const { data: branchesData } = useGetBranchesQuery();
  const { data: subBranchesData } = useGetSubBranchesQuery();
  const { data: agentOutletsData } = useGetAgentOutletsQuery();
  const { data: ebl365Data } = useGet365BoothsQuery();

  useEffect(() => {
    const branches = branchesData?.data || [];
    const subBranches = subBranchesData?.data || [];
    const agentOutlets = agentOutletsData?.data || [];
    const ebl365Booths = ebl365Data?.data || [];

    const combined = [
      ...branches,
      ...subBranches,
      ...agentOutlets,
      ...ebl365Booths,
    ];
    setCombinedData(combined);
  }, [branchesData, subBranchesData, agentOutletsData, ebl365Data]);

  const uniqueDistricts = [];
  const districtMapping = {
    chattogram: "chittagong",
  };

  combinedData.forEach((item) => {
    const district = (
      item.branchDivision ||
      item.subBranchDivision ||
      item.agentDivision ||
      item.ebl365Division
    ).toLowerCase();
    const normalizedDistrict = districtMapping[district] || district;

    if (!uniqueDistricts.includes(normalizedDistrict)) {
      uniqueDistricts.push(normalizedDistrict);
    }
  });

  const districtLocations = [];
  combinedData.forEach((item) => {
    const district = (
      item.branchDivision ||
      item.subBranchDivision ||
      item.agentDivision ||
      item.ebl365Division
    ).toLowerCase();
    const normalizedDistrict = districtMapping[district] || district;

    if (!districtLocations[normalizedDistrict]) {
      districtLocations[normalizedDistrict] = null; // Initialize with null
    }

    if (item.branchLocation || item.subBranchLocation || item.agentLocation) {
      const location = {
        lat:
          item.branchLocation?.lat ||
          item.subBranchLocation?.lat ||
          item.agentLocation?.lat ||
          item.lat,
        long:
          item.branchLocation?.long ||
          item.subBranchLocation?.long ||
          item.agentLocation?.long ||
          item.long,
      };
      districtLocations[normalizedDistrict] = location; // Store the latest location
    }
  });

  const locations = Object.values(districtLocations).map((location) => ({
    lat: location?.lat,
    lng: location?.long,
  }));

  function calculateDistrictCounts(data) {
    const districtCounts = {};

    data.forEach((item) => {
      const district = (
        item.branchDivision ||
        item.subBranchDivision ||
        item.agentDivision ||
        item.ebl365Division
      ).toLowerCase();
      const normalizedDistrict = districtMapping[district] || district;

      if (!districtCounts[normalizedDistrict]) {
        districtCounts[normalizedDistrict] = {
          branches: 0,
          subbranches: 0,
          agentOutlets: 0,
          ebl365Booths: 0,
        };
      }

      if (item.branchDivision) {
        districtCounts[normalizedDistrict].branches++;
      }
      if (item.subBranchDivision) {
        districtCounts[normalizedDistrict].subbranches++;
      }
      if (item.agentDivision) {
        districtCounts[normalizedDistrict].agentOutlets++;
      }
      if (item.ebl365Division) {
        districtCounts[normalizedDistrict].ebl365Booths++;
      }
    });

    return districtCounts;
  }

  const districtCounts = calculateDistrictCounts(combinedData);

  const districtNames = Object.keys(districtLocations);

  const [selectedMarkerIndex, setSelectedMarkerIndex] = useState(null);

  const center = {
    lat: (BangladeshBounds.north + BangladeshBounds.south) / 2,
    lng: (BangladeshBounds.east + BangladeshBounds.west) / 2,
  };

  return (
    <div>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "90vh" }}
        center={center}
        zoom={7}
        options={mapOptions}
      >
        {locations &&
          locations.map((location, index) => (
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
                  <div className="mb-5 bg-white px-4 py-3 rounded-md shadow-md">
                    <h3 className="text-3xl font-semibold capitalize mb-2">
                      {districtNames[index].charAt(0).toUpperCase() +
                        districtNames[index].slice(1)}
                    </h3>
                    <p className="font-medium mb-2">
                      {districtCounts[districtNames[index]].branches > 0 ? (
                        <p>
                          Number of Branches:{" "}
                          {districtCounts[districtNames[index]].branches}
                        </p>
                      ) : (
                        "No available branches"
                      )}
                    </p>
                    <p className="font-medium mb-2">
                      {districtCounts[districtNames[index]].subbranches > 0 ? (
                        <p>
                          {" "}
                          Number of Subbranches:{" "}
                          {districtCounts[districtNames[index]].subbranches}
                        </p>
                      ) : (
                        "No available subbranches"
                      )}
                    </p>
                    <p className="font-medium mb-2">
                      {districtCounts[districtNames[index]].agentOutlets > 0 ? (
                        <p>
                          {" "}
                          Number of Agent Outlets:{" "}
                          {districtCounts[districtNames[index]].agentOutlets}
                        </p>
                      ) : (
                        "No available agent outlets"
                      )}
                    </p>
                    <p className="font-medium mb-2">
                      {districtCounts[districtNames[index]].ebl365Booths > 0 ? (
                        <p>
                          Number of EBL365 Booths:{" "}
                          {districtCounts[districtNames[index]].ebl365Booths}
                        </p>
                      ) : (
                        "No available EBL365 booths"
                      )}
                    </p>
                  </div>
                </InfoWindow>
              )}
            </Marker>
          ))}
      </GoogleMap>
    </div>
  );
};

export default FootPrintMap;

