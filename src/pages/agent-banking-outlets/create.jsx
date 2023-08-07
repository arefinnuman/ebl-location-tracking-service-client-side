import DashboardLayout from "@/components/layout/DashboardLayout";
import { usePostAgentOutletsMutation } from "@/redux/api/api";
import { useState } from "react";
import { toast } from "react-hot-toast";

export default function CreateAgentPage() {
  const [name, setName] = useState("");
  const [division, setDivision] = useState("");
  const [address, setAddress] = useState("");
  const [mapLink, setMapLink] = useState("");
  const [code, setCode] = useState("");
  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");

  const [createAgent, { isSuccess }] = usePostAgentOutletsMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const agentData = {
      agentName: name,
      agentDivision: division,
      agentAddress: address,
      agentMapLink: mapLink,
      agentCode: code,
      agentLocation: {
        lat: lat,
        long: long,
      },
    };

    await createAgent(agentData);
    toast.success("Agent Banking Outlet Created Successfully!");
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
    <div className="container mx-auto p-8 max-w-lg">
      <form className="w-full max-w-md" action="" onSubmit={handleSubmit}>
        <h1 className="text-xl font-bold mb-3 text-center">
          Add a New Agent Banking Outlet
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
            <span className="label-text">Division</span>
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

CreateAgentPage.getLayout = function getLayout(page) {
  return <DashboardLayout>{page}</DashboardLayout>;
};
