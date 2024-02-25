"use client";

import useEvent from "@/components/hooks/useEvent";
import useAxiosSecure from "@/components/hooks/useAxiosSecure";
import useCheckIfAdvertised from "@/components/hooks/useCheckIfAdvertised";
import Title from "@/shared/Title/title";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const UpdateEvent = ({ id }) => {
  const { event, eventsLoading, refetch } = useEvent(id);
  const { register, handleSubmit } = useForm();
  const axiosSecure = useAxiosSecure();
  const router = useRouter();
  const { isAdvertised, checkLoading } = useCheckIfAdvertised(id);

  if (eventsLoading || checkLoading) {
    return <p className="text-center my-5">loading ...</p>;
  }

  const { title, description, isPublic, _id } = event;

  const handleUpdateEvent = async (data) => {
    try {
      const updateInfo = {
        title: data.title,
        description: data.description,
        isPublic: data.isPublic,
      };

      const res = await axiosSecure.put(
        `/api/v1/events/updateEvent/${_id}`,
        updateInfo
      );

      console.log(res.data);

      if (res.data.success) {
        toast.success("Event Updated Successfully");
        refetch();
        router.push(`/dashboard/eventDetail/${_id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mb-20">
      <Title title={"Update Event"} />

      <form
        onSubmit={handleSubmit(handleUpdateEvent)}
        className="max-w-xl mt-10 mx-auto bg-base-100 px-4 py-5 card shadow-xl space-y-3">
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-medium text-info">
                Event Title
              </span>
            </div>
            <input
              type="text"
              placeholder={title}
              defaultValue={title}
              className="input input-bordered w-full  bg-neutral text-info-content"
              {...register("title")}
            />
          </label>
        </div>
        <div>
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text font-medium text-info">
                Event Title
              </span>
            </div>
            <textarea
              type="text"
              placeholder={description}
              defaultValue={description}
              className="textarea textarea-bordered h-24 bg-neutral text-info-content"
              {...register("description")}
            />
          </label>
        </div>
        <div>
          <div className="form-control">
            <label className="label cursor-pointer ">
              <span className="label-text font-medium text-info">
                is Public
              </span>
              <input
                type="checkbox"
                defaultChecked={isPublic}
                disabled={isAdvertised}
                className="checkbox bg-neutral text-info-content"
                {...register("isPublic")}
              />
            </label>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="btn btn-warning btn-block">
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateEvent;
