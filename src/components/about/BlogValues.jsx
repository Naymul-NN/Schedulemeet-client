import React from "react";
import ValueCard from "./ValueCard";

const companyValueData = [
  {
    id: 0,
    titleOnly: "Company Values",
  },
  {
    id: 1,
    title: "We’re in it together",
    description:
      "We celebrate our achievements and take every opportunity to learn from our mistakes together. We’re empowered as individuals and as teams to take on any task, both big and small. We work hard, and humbly, as one.",
  },
  {
    id: 2,
    title: "We are customer-obsessed",
    description:
      "We listen — a lot. We’re fueled by customer feedback and data. We take a customer-first approach so that our customers can take a candidate-first approach. We support each other and our customers when, how, and wherever we can. Making our customers successful is everyone’s job.",
  },
  {
    id: 3,
    title: "We are drama-free",
    description:
      "We’re open, honest, and straightforward with our teammates and our customers. We’re collaborative and not afraid of change. We’re human — we recognize challenges may come our way, and we approach them with empathy and professionalism.",
  },
  {
    id: 4,
    title:
      "We never stop improving — we’re committed to building a transformational platform for recruiting teams and their talent. We strive to wow and delight our customers with the value created by our product at every opportunity. We share a passion for automation and AI, but never lose sight of what makes our product exceptional — the human element.",
    description: "",
  },
  {
    id: 5,
    title: "We're true to ourselves",
    description:
      "We encourage sharing diverse points of view and imaginative ideas. We treasure authenticity and the quirks that make us who we are. We make time to create, connect, and laugh with each other.",
  },
];

const BlogValues = () => {
  return (
    <div className="blogValueCOntainer  py-10 px-3 ">
      <div className="valueWrapper   m-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-9 ">
        {/* card component  */}

        {companyValueData &&
          companyValueData.map((data) => (
            <ValueCard key={data?.id} data={data} />
          ))}

        {/* card component ends   */}
      </div>
    </div>
  );
};

export default BlogValues;
