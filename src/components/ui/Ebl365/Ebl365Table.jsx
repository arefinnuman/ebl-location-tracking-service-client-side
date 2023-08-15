import { useGet365BoothsQuery } from "@/redux/api/api";
import { useState } from "react";
import Ebl365Modal from "../MapModal/Ebl365Modal";

const Ebl365Table = () => {
  const { data, isLoading } = useGet365BoothsQuery();
  const ebl365booths = data?.data;

  const boothDivisions = ebl365booths?.map((booth) => booth.ebl365Division);
  const uniqueBranchDivisions = [...new Set(boothDivisions)];

  const [searchInput, setSearchInput] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedBooth, setSelectedBooth] = useState(null);

  const filteredEbl365booths = ebl365booths
    ? ebl365booths.filter((ebl365) => {
        const nameIncludesSearchInput =
          ebl365.ebl365Name &&
          ebl365.ebl365Name.toLowerCase().includes(searchInput.toLowerCase());

        const divisionIncludesSearchInput =
          ebl365.ebl365Division &&
          ebl365.ebl365Division
            .toLowerCase()
            .includes(searchInput.toLowerCase());

        const addressIncludesSearchInput =
          ebl365.ebl365Address &&
          ebl365.ebl365Address
            .toLowerCase()
            .includes(searchInput.toLowerCase());

        const isDivisionMatch =
          selectedDivision === "" ||
          (ebl365 && ebl365.ebl365Division === selectedDivision);

        return (
          (nameIncludesSearchInput ||
            divisionIncludesSearchInput ||
            addressIncludesSearchInput) &&
          isDivisionMatch
        );
      })
    : [];

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center min-h-screen mr-20">
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center mb-6">
              <input
                type="text"
                placeholder="Search here..."
                className="input input-bordered input-primary w-full max-w-xs mb-4 md:mb-0 md:mr-4"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <select
                className="input input-bordered input-primary w-full max-w-xs mb-4 md:mb-0 md:mr-4"
                value={selectedDivision}
                onChange={(e) => setSelectedDivision(e.target.value)}
              >
                <option value="">All Districts</option>
                {uniqueBranchDivisions.map((division) => (
                  <option key={division} value={division}>
                    {division}
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full max-w-4xl px-6 mx-auto bg-white rounded-lg mb-6">
              <div className="overflow-x-auto">
                <table className="table w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-4 py-3 border">Sl</th>
                      <th className="px-4 py-3 border">Name</th>
                      <th className="px-4 py-3 border">District</th>
                      <th className="px-4 py-3 border">Address</th>
                      <th className="px-4 py-3 border">Device Availability</th>
                      <th className="px-4 py-3 border">Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEbl365booths.map((ebl365, index) => (
                      <tr className="hover:bg-gray-50" key={ebl365._id}>
                        <td className="px-4 py-3 text-center border">
                          {index + 1}
                        </td>
                        <td className="px-4 py-3 border">
                          {ebl365.ebl365Name}
                        </td>
                        <td className="px-4 py-3 border">
                          {ebl365.ebl365Division}
                        </td>
                        <td className="px-4 py-3 border md:w-1/2">
                          {ebl365.ebl365Address}
                        </td>
                        <td className="px-4 py-3 border md:w-1/6">
                          {ebl365.deviceAvailability}
                        </td>
                        <td className="px-4 py-3 border">
                          <button
                            className="btn btn-primary btn-sm btn-outline btn-ghost"
                            onClick={() => setSelectedBooth(ebl365)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {selectedBooth && (
              <dialog
                id="my_modal_5"
                className="modal modal-left sm:modal-middle"
                open
              >
                <form method="dialog" className="modal-box">
                  <Ebl365Modal selectedBooth={selectedBooth} />
                  <div className="modal-action">
                    <button
                      className="btn"
                      onClick={() => setSelectedBooth(null)}
                    >
                      Close
                    </button>
                  </div>
                </form>
              </dialog>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Ebl365Table;

