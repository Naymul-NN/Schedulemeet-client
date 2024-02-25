import EventDetails from "@/components/activity/Event/EventDetails/EventDetails";
import Layout from "@/app/mainlayout";

const page = ({ params }) => {
  const { id } = params;

  return (
    <Layout>
      <div className="min-h-screen">
        <EventDetails id={id} />
      </div>
    </Layout>
  );
};

export default page;
