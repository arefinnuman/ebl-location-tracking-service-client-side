import { useGet365BoothsQuery } from "@/redux/api/api";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import LoadingUi from "../LoadingUi";
import Ebl365Modal from "../MapModal/Ebl365Modal";

const Ebl365Table = () => {
  const { data, isLoading } = useGet365BoothsQuery();
  const ebl365booths = data?.data;

  const numberOfBooths = ebl365booths?.length;

  const boothDivisions = ebl365booths?.map((booth) => booth.ebl365Division);
  const uniqueBranchDivisions = [...new Set(boothDivisions)];

  console.log(uniqueBranchDivisions);

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

  if (isLoading) {
    return <LoadingUi />;
  }

  return (
    <>
      <div>
        <h1 className="text-2xl font-bold text-center my-2">
          {" "}
          Available{" "}
          <span className="font-extrabold text-primary">
            365 Booths: {numberOfBooths}{" "}
          </span>
        </h1>

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
                {division?.charAt(0).toUpperCase() + division?.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full max-w-4xl px-6 mx-auto bg-white rounded-lg mb-6">
          <div className="overflow-x-auto rounded-lg">
            <table className="table w-full border-collapse">
              <thead>
                <tr className="bg-blue-500 text-white">
                  <th className="px-4 py-3">Sl</th>
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">District</th>
                  <th className="px-4 py-3">Address</th>
                  <th className="px-4 py-3">Device</th>
                  <th className="px-4 py-3">Location</th>
                </tr>
              </thead>
              <tbody>
                {filteredEbl365booths.map((ebl365, index) => (
                  <tr
                    className="hover:bg-blue-100 transition duration-300"
                    key={ebl365._id}
                  >
                    <td className="px-4 py-3 text-center border">
                      {index + 1}
                    </td>
                    <td className="px-4 py-3 border">{ebl365.ebl365Name}</td>
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
                        className="flex items-center px-3 py-1.5 border text-black border-primary rounded-full shadow hover:bg-primary hover:border-primary transition duration-300 hover:text-white"
                        onClick={() => setSelectedBooth(ebl365)}
                      >
                        <FaEye className="mr-2" />
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
                <button className="btn" onClick={() => setSelectedBooth(null)}>
                  Close
                </button>
              </div>
            </form>
          </dialog>
        )}
      </div>
    </>
  );
};

export default Ebl365Table;

