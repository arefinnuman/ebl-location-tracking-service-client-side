import { useUpdateBranchMutation } from "@/redux/api/api";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function UpdateBranchForm({ selectedUpdateBranch }) {
  const id = selectedUpdateBranch._id;
  const updatingBranchApi = `http://localhost:5555/api/v1/ebl-branches/${id}`;

  const [name, setName] = useState(selectedUpdateBranch.branchName || "");
  const [division, setDivision] = useState(
    selectedUpdateBranch.branchDivision || ""
  );
  const [address, setAddress] = useState(
    selectedUpdateBranch.branchAddress || ""
  );
  const [mapLink, setMapLink] = useState(
    selectedUpdateBranch.branchMapLink || ""
  );
  const [code, setCode] = useState(selectedUpdateBranch.branchCode || "");
  const [lat, setLat] = useState(
    selectedUpdateBranch.branchLocation?.lat || ""
  );
  const [long, setLong] = useState(
    selectedUpdateBranch.branchLocation?.long || ""
  );

  const [updateBranch, { isLoading }] = useUpdateBranchMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const branchData = {
      id,
      branchName: name,
      branchDivision: division,
      branchAddress: address,
      branchMapLink: mapLink,
      branchCode: code,
      branchLocation: {
        lat: lat,
        long: long,
      },
    };

    const response = await updateBranch(branchData);

    toast.success("Branch updated successfully");
    setName("");
    setDivision("");
    setAddress("");
    setMapLink("");
    setCode("");
    setLat("");
    setLong("");
  };

  const handleNameInput = (e) => {
    setName(e.target.value);
  };
  const handleDivisionInput = (e) => {
    setDivision(e.target.value);
  };
  const handleAddressInput = (e) => {
    setAddress(e.target.value);
  };
  const handleLatInput = (e) => {
    setLat(e.target.value);
  };
  const handleLongInput = (e) => {
    setLong(e.target.value);
  };

  return (
    <div>
      {" "}
      <form className="w-full max-w-md" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold mb-3 text-center">
          Update {selectedUpdateBranch.branchName} branch details
        </h1>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            onChange={handleNameInput}
            value={name}
            placeholder={selectedUpdateBranch.branchName}
            className="input input-bordered input-primary w-full       "
          />
        </div>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            onChange={handleAddressInput}
            value={address}
            placeholder={selectedUpdateBranch.branchAddress}
            className="input input-bordered input-primary w-full       "
          />
        </div>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">District</span>
          </label>
          <input
            type="text"
            onChange={handleDivisionInput}
            value={division}
            placeholder={selectedUpdateBranch.branchDivision}
            className="input input-bordered input-primary w-full       "
          />
        </div>

        <div className="form-control mb-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Latitude</span>
              </label>
              <input
                type="text"
                onChange={handleLatInput}
                value={lat}
                placeholder={selectedUpdateBranch.branchLocation.lat}
                className="input input-bordered input-primary"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Longitude</span>
              </label>
              <input
                type="text"
                onChange={handleLongInput}
                value={long}
                placeholder={selectedUpdateBranch.branchLocation.long}
                className="input input-bordered input-primary"
              />
            </div>
          </div>
        </div>

        <button className="btn w-full mt-5 btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

