import DashboardLayout from "@/components/layout/DashboardLayout";
import { usePostSubBranchMutation } from "@/redux/api/api";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function CreateSubBranchPage() {
  const [name, setName] = useState("");
  const [division, setDivision] = useState("");
  const [address, setAddress] = useState("");
  const [mapLink, setMapLink] = useState("");
  const [code, setCode] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  const [createBranch] = usePostSubBranchMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const branchData = {
      subBranchName: name,
      subBranchDivision: division,
      subBranchAddress: address,
      subBranchMapLink: mapLink,
      subBranchCode: code,
      subBranchLocation: {
        lat: lat,
        long: long,
      },
    };

    const response = await createBranch(branchData);
    if (response?.data?.statusCode == 201) {
      toast.success("Sub Branch created successfully");
      setName("");
      setDivision("");
      setAddress("");
      setMapLink("");
      setCode("");
      setLat("");
      setLong("");
    } else if (response?.error?.data?.success === false) {
      toast.error("Please try again. and check your data");
    }
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
    <div className="container mx-auto p-8 max-w-lg">
      <form className="w-full max-w-md" action="" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold mb-3 text-center">
          Add a new Sub Branch
        </h1>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            onChange={handleNameInput}
            value={name}
            placeholder="Type here"
            className="input input-bordered input-primary w-full       "
            required={true}
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
            placeholder="Type here"
            className="input input-bordered input-primary w-full       "
            required={true}
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
            placeholder="Type here"
            className="input input-bordered input-primary w-full       "
            required={true}
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
                placeholder="Type here"
                className="input input-bordered input-primary"
                required={true}
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
                className="input input-bordered input-primary"
                required={true}
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
  return <DashboardLayout>{page}</DashboardLayout>;
};

