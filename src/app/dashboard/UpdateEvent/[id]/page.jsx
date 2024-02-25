import UpdateEvent from "@/components/activity/Event/UpdateEvent/UpdateEvent";

const page = ({ params }) => {
  const { id } = params;

  return (
    <div>
      <UpdateEvent id={id} />
    </div>
  );
};

export default page;
