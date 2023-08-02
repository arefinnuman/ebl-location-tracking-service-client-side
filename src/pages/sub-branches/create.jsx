import RootLayout from "@/components/layout/RootLayout";
import { usePostSubBranchMutation } from "@/redux/api/api";
import { useState } from "react";

export default function CreateSubBranchPage() {
  const [name, setName] = useState("");
  const [division, setDivision] = useState("");
  const [address, setAddress] = useState("");
  const [mapLink, setMapLink] = useState("");
  const [code, setCode] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  const [createBranch] = usePostSubBranchMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const branchData = {
      subBranchName: name,
      subBranchDivision: division,
      subBranchAddress: address,
      subBranchMapLink: mapLink,
      subBranchCode: code,
      subbBranchLocation: {
        lat: lat,
        long: long,
      },
    };

    console.log(branchData);

    createBranch(branchData);
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
  const handleMapLinkInput = (e) => {
    setMapLink(e.target.value);
  };
  const handleCodeInput = (e) => {
    setCode(e.target.value);
  };
  const handleLatInput = (e) => {
    setLat(e.target.value);
  };
  const handleLongInput = (e) => {
    setLong(e.target.value);
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4 md:p-12 sm:p-0">
      <form className="w-full max-w-md" action="" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold mb-4 text-center">Add Branch</h1>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Sub Branch Name</span>
          </label>
          <input
            type="text"
            onChange={handleNameInput}
            value={name}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Sub Branch Division</span>
          </label>
          <input
            type="text"
            onChange={handleDivisionInput}
            value={division}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Sub Branch Address</span>
          </label>
          <input
            type="text"
            onChange={handleAddressInput}
            value={address}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Sub Branch Map Link</span>
          </label>
          <input
            type="text"
            onChange={handleMapLinkInput}
            value={mapLink}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Sub Branch Code</span>
          </label>
          <input
            type="text"
            onChange={handleCodeInput}
            value={code}
            placeholder="Type here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Sub Branch Location</span>
          </label>
          <div className="grid grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Latitude</span>
              </label>
              <input
                type="text"
                onChange={handleLatInput}
                value={lat}
                placeholder="Type here"
                className="input input-bordered"
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
                placeholder="Type here"
                className="input input-bordered"
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

CreateSubBranchPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
