"use client";

import TitleDashboard from "@/shared/TitleDashboard/TitleDashboard";
import useAuth from "@/components/hooks/useAuth";
import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import uploadImg from "@/util/uploadImg";
import toast from "react-hot-toast";

// TODO: verify link and name
// TODO: form should be two columns
// TODO: loading button should be added
// TODO: price input should be disable if isPremium false

const SetUpEvent = () => {
  const { user } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const axiosSecure = useAxiosSecure();

  const handleCreateEvent = async (data) => {
    const imgUrl = await uploadImg(data.imageFile[0]);

    const [date, time] = data.time.split("T");

    const event = {
      title: data.title,
      hostName: data.hostName,
      hostEmail: user.email,
      image: imgUrl,
      duration: data.duration,
      capacity: data.capacity,
      date: new Date(date),
      time,
      description: data.description,
      link: data.link,
      isPremium: data.isPremium,
      fee: data.price,
      isPublic: data.isPublic,
    };

    const res = await axiosSecure.post("/api/v1/events/createEvent", event);


    if (res.data.success) {
      toast.success("Event Created Successfully");
      reset();
    }
  };

  return (
    <div className="my-5">
      <TitleDashboard title={"Set Your Events"} />

      <form
        onSubmit={handleSubmit(handleCreateEvent)}
        className="max-w-xl mt-10 mx-auto bg-base-100 px-4 py-5 card shadow-xl space-y-3">
        <div>
          {/* host name */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-medium text-info">
                Your name?
              </span>
            </div>
            <input
              type="text"
              default={user?.displayName || ""}
              placeholder={user?.displayName || "Your Name"}
              className="input input-bordered w-full  bg-neutral text-info-content"
              {...register("hostName")}
            />
          </label>
        </div>

        <div>
          {/* Event Title */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-medium text-info">
                Event Title
              </span>
            </div>
            <input
              type="text"
              placeholder="Event Title"
              className="input input-bordered w-full  bg-neutral text-info-content"
              {...register("title", { required: "Event title is required" })}
            />
            {errors.title && errors.title.type === "required" && (
              <span className="text-error text-xs">{errors.title.message}</span>
            )}
          </label>
        </div>

        <div>
          {/* Event Link */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-medium text-info">
                Event Link
              </span>
            </div>
            <input
              type="text"
              placeholder="Event Link"
              className="input input-bordered w-full  bg-neutral text-info-content"
              {...register("link", { required: "Event link is required" })}
            />
            {errors.link && errors.link.type === "required" && (
              <span className="text-error text-xs">{errors.link.message}</span>
            )}
          </label>
        </div>

        <div>
          {/* image */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-medium text-info ">
                Pick a file
              </span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered bg-neutral text-info-content file-input-primary w-full "
              {...register("imageFile", {
                required: "Event Thumbnail is required",
              })}
            />
            {errors.imageFile && errors.imageFile.type === "required" && (
              <span className="text-error text-xs">
                {errors.imageFile.message}
              </span>
            )}
          </label>
        </div>

        <div>
          {/* Event Duration */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-medium text-info">
                Event Duration
              </span>
            </div>
            <select
              className="select select-bordered bg-neutral text-info-content select-primary"
              {...register("duration")}>
              <option
                disabled
                value=""
                defaultValue
                selected
                className="bg-neutral text-info-content max-w-md">
                Pick your preferred one
              </option>
              <option value="1 Hour">1 Hour</option>
              <option value="2 Hour">2 Hour</option>
              <option value="3 Hour">3 Hour</option>
            </select>
            {errors.duration && errors.duration.type === "required" && (
              <span className="text-error text-xs">
                {errors.duration.message}
              </span>
            )}
          </label>
        </div>

        <div>
          {/* Event Capacity */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-medium text-info">
                Event Capacity
              </span>
            </div>
            <input
              type="number"
              placeholder="Event Capacity"
              className="input input-bordered w-full  bg-neutral text-info-content"
              {...register("capacity", {
                required: "Event capacity is required",
                min: { value: 3, message: "Minimum 3 is required" },
                max: { value: 100, message: "Maximum 100" },
              })}
            />
            {errors.capacity && (
              <span className="text-error text-xs">
                {errors.capacity.type === "required" ||
                errors.capacity.type === "min" ||
                errors.capacity.type === "max"
                  ? errors.capacity.message
                  : ""}
              </span>
            )}
          </label>
        </div>

        <div>
          {/* Event Time */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-medium text-info">
                Event Date
              </span>
            </div>
            <input
              type="datetime-local"
              placeholder="Event Time"
              className="input input-bordered w-full  bg-neutral text-info-content"
              {...register("time", { required: "Event time is required" })}
            />
            {errors.time && errors.time.type === "required" && (
              <span className="text-error text-xs">{errors.time.message}</span>
            )}
          </label>
        </div>

        <div>
          {/* Event Description */}
          <label className="form-control">
            <div className="label">
              <span className="label-text font-medium text-info">
                Event Description
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24 bg-neutral text-info-content"
              placeholder="Event Description"
              {...register("description", {
                required: "event description is required",
              })}
            />
            {errors.description && errors.description.type === "required" && (
              <span className="text-error text-xs">
                {errors.description.message}
              </span>
            )}
          </label>
        </div>
        <div>
          {/* is public */}
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text font-medium text-info">
                Is Public
              </span>
              <input
                type="checkbox"
                defaultChecked
                className="checkbox"
                {...register("isPublic")}
              />
            </label>
          </div>
        </div>

        <div>
          {/* is premium */}
          <div className="form-control">
            <label className="label cursor-pointer">
              <span className="label-text font-medium text-info">
                Is Premium
              </span>
              <input
                type="checkbox"
                defaultChecked={false}
                className="checkbox"
                {...register("isPremium")}
              />
            </label>
          </div>
        </div>

        <div>
          {/* Event Price */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-medium text-info">
                Event Price
              </span>
            </div>
            <input
              type="number"
              placeholder="Event Price"
              default={0}
              className="input input-bordered w-full  bg-neutral text-info-content"
              {...register("price")}
            />
          </label>
        </div>

        <div>
          <button
            type="submit"
            className="btn-primary btn btn-block">
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetUpEvent;
