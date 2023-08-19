import { useUpdateSubBranchMutation } from "@/redux/api/api";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function UpdateSubBranchForm({ selectedUpdateSubBranch }) {
  const id = selectedUpdateSubBranch._id;
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const [updateSubsubBranch] = useUpdateSubBranchMutation();

  const onSubmit = async (data) => {
    const subBranchData = {
      id,
      subBranchName: data.name,
      subBranchDivision: data.division,
      subBranchAddress: data.address,
      subBranchMapLink: data.mapLink,
      subBranchCode: data.code,
      subBranchLocation: {
        lat: data.latitude,
        long: data.longitude,
      },
    };

    const response = await updateSubsubBranch(subBranchData);

    if (response?.data?.statusCode === 200) {
      toast.success("subBranch updated successfully");
      window.location.reload();
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-xl font-bold mb-3 text-center">
          Update {selectedUpdateSubBranch.subBranchName} subBranch details
        </h1>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            defaultValue={selectedUpdateSubBranch.subBranchName}
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
            defaultValue={selectedUpdateSubBranch.subBranchAddress}
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
            defaultValue={selectedUpdateSubBranch.subBranchDivision}
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
                defaultValue={selectedUpdateSubBranch.subBranchLocation?.lat}
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
                defaultValue={selectedUpdateSubBranch.subBranchLocation?.long}
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

