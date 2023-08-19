import { useUpdate365OutletsMutation } from "@/redux/api/api";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

export default function Update365BoothForm({ selectedUpdateBooth }) {
  const id = selectedUpdateBooth._id;
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const [updateBooth] = useUpdate365OutletsMutation({});

  const onSubmit = async (data) => {
    const boothData = {
      id,
      ebl365Name: data.name,
      ebl365Division: data.division,
      ebl365Address: data.address,
      deviceAvailability: data.deviceAvailability,
      lat: data.latitude,
      long: data.longitude,
    };

    const response = await updateBooth(boothData);

    if (response?.data?.statusCode === 200) {
      toast.success("ebl365 updated successfully");
      window.location.reload();
    } else {
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <form className="w-full max-w-md" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-xl font-bold mb-3 text-center">
          Update {selectedUpdateBooth.ebl365Name} ebl365 details
          {selectedUpdateBooth.deviceAvailability}
        </h1>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            defaultValue={selectedUpdateBooth.ebl365Name}
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
            defaultValue={selectedUpdateBooth.ebl365Address}
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
            defaultValue={selectedUpdateBooth.ebl365Division}
            className="input input-bordered input-primary w-full"
          />
          {errors.division && (
            <p className="text-red-500">{errors.division.message}</p>
          )}
        </div>

        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">Device Available</span>
          </label>
          <input
            type="text"
            {...register("deviceAvailability", {
              required: "Device Available is required",
            })}
            defaultValue={selectedUpdateBooth.deviceAvailability}
            className="input input-bordered input-primary w-full"
          />
          {errors.deviceAvailability && (
            <p className="text-red-500">{errors.deviceAvailability.message}</p>
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
                defaultValue={selectedUpdateBooth?.lat}
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
                defaultValue={selectedUpdateBooth?.long}
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

