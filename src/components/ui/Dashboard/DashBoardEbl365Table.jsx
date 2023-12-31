import {
  useDelete365OutletsMutation,
  useGet365BoothsQuery,
} from "@/redux/api/api";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import DeleteConfirmationModal from "../DeleteConFirmationModal";
import LoadingUi from "../LoadingUi";
import Ebl365Modal from "../MapModal/Ebl365Modal";
import Update365BoothForm from "../UpdateForms/Update365BoothForm";

const DashboardEbl365Table = () => {
  const [ebl365booths, setEbl365Booths] = useState();
  const { data, isLoading, refetch } = useGet365BoothsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 9000,
  });
  useEffect(() => {
    if (data) {
      setEbl365Booths(data.data);
    }
  }, [data]);

  const boothDivisions = ebl365booths?.map((booth) => booth.ebl365Division);
  const uniqueBranchDivisions = [...new Set(boothDivisions)];

  const [searchInput, setSearchInput] = useState("");
  const [selectedDivision, setSelectedDivision] = useState("");

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

  const [selectedBooth, setSelectedBooth] = useState(null);

  const [selectedUpdateBooth, setSelectedUpdateBooth] = useState(null);

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [branchToDelete, setBranchToDelete] = useState(null);

  const [delete365Outlet] = useDelete365OutletsMutation(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 30000,
  });

  const handleDelete365Booth = async () => {
    try {
      await delete365Outlet(branchToDelete);
      toast.success("EBL 365 deleted successfully");
      refetch();
      setShowDeleteConfirmation(false);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDeleteButtonClick = (branchId) => {
    setBranchToDelete(branchId);
    setShowDeleteConfirmation(true);
  };

  const numberOfBooths = ebl365booths?.length;

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
                {division}
              </option>
            ))}
          </select>
        </div>

        <div className="w-full max-w-6xl px-6 mx-auto bg-white rounded-lg mb-6">
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
                  <th className="px-4 py-3">Edit</th>
                  <th className="px-4 py-3">Delete</th>
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
                        className="btn btn-primary btn-sm btn-outline btn-ghost"
                        onClick={() => setSelectedBooth(ebl365)}
                      >
                        View
                      </button>
                    </td>
                    <td className="px-4 py-3 border">
                      <button
                        className="flex items-center  px-3 py-1.5 text-black rounded-full shadow hover:bg-primary-focus hover:border-base transition duration-300 hover:text-white text-sm"
                        onClick={() => setSelectedUpdateBooth(ebl365)}
                      >
                        Edit
                        <FiEdit2 className="ml-2" />
                      </button>
                    </td>
                    <td className="px-4 py-3 border">
                      <button
                        className="flex items-center  px-3 py-1.5 text-black rounded-full shadow hover:bg-error hover:border-base transition duration-300 hover:text-white text-sm"
                        onClick={() => handleDeleteButtonClick(ebl365._id)}
                      >
                        Del
                        <AiFillDelete className="ml-1" />
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

        {selectedUpdateBooth && (
          <dialog
            id="my_modal_2"
            className="modal modal-bottom sm:modal-middle "
            open
          >
            <section
              method="dialog"
              className="modal-box border border-primary shadow-2xl"
            >
              <Update365BoothForm selectedUpdateBooth={selectedUpdateBooth} />
              <div className="modal-action text-center flex justify-center">
                <button
                  className="btn btn-sm btn-outline "
                  onClick={() => setSelectedUpdateBooth(null)}
                >
                  Close
                </button>
              </div>
            </section>
          </dialog>
        )}

        {showDeleteConfirmation && (
          <DeleteConfirmationModal
            onConfirm={() => {
              handleDelete365Booth(branchToDelete);
              setShowDeleteConfirmation(false);
            }}
            onCancel={() => setShowDeleteConfirmation(false)}
          />
        )}
      </div>
    </>
  );
};

export default DashboardEbl365Table;

