import { useUpdateAgentOutletsMutation } from "@/redux/api/api";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function UpdateAgentForm({ selectedUpdateAgent }) {
  const id = selectedUpdateAgent._id;
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const [updateAgent] = useUpdateAgentOutletsMutation({});

  const onSubmit = async (data) => {
    const agentData = {
      id,
      agentName: data.name,
      agentDivision: data.division,
      agentAddress: data.address,
      agentMapLink: data.mapLink,
      agentCode: data.code,
      agentLocation: {
        lat: data.latitude,
        long: data.longitude,
      },
    };

    const response = await updateAgent(agentData);

    if (response?.data?.statusCode === 200) {
      toast.success("Agent updated successfully");
      window.location.reload();
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-xl font-bold mb-3 text-center">
          Update {selectedUpdateAgent.agentName} agent details
        </h1>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            defaultValue={selectedUpdateAgent.agentName}
            className="input input-bordered input-primary w-full"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">Address</span>
          </label>
          <input
            type="text"
            {...register("address", { required: "Address is required" })}
            defaultValue={selectedUpdateAgent.agentAddress}
            className="input input-bordered input-primary w-full"
          />
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
        </div>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">District</span>
          </label>
          <input
            type="text"
            {...register("division", { required: "District is required" })}
            defaultValue={selectedUpdateAgent.agentDivision}
            className="input input-bordered input-primary w-full"
          />
          {errors.division && (
            <p className="text-red-500">{errors.division.message}</p>
          )}
        </div>

        <div className="form-control mb-3">
          <div className="grid grid-cols-2 gap-2">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Latitude</span>
              </label>
              <input
                type="text"
                {...register("latitude", {
                  required: "Latitude is required",
                  pattern: {
                    value: /^[-]?[0-9]*\.?[0-9]+$/,
                    message: "Invalid latitude format",
                  },
                })}
                defaultValue={selectedUpdateAgent.agentLocation?.lat}
                className="input input-bordered input-primary"
              />
              {errors.latitude && (
                <p className="text-red-500">{errors.latitude.message}</p>
              )}
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Longitude</span>
              </label>
              <input
                type="text"
                {...register("longitude", {
                  required: "Longitude is required",
                  pattern: {
                    value: /^[-]?[0-9]*\.?[0-9]+$/,
                    message: "Invalid longitude format",
                  },
                })}
                defaultValue={selectedUpdateAgent.agentLocation?.long}
                className="input input-bordered input-primary"
              />
              {errors.longitude && (
                <p className="text-red-500">{errors.longitude.message}</p>
              )}
            </div>
          </div>
        </div>

        <button className="btn w-full mt-5 btn-primary" type="submit">
          {isSubmitting ? "Updating..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

