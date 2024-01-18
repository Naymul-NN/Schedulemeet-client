import Image from "next/image";
import benefitsImage from "../../assets/benefits.png";

const Benefits = () => {
    // TODO: add more features
  const benefits = [
    "Easy to Navigate",
    "Appoint Swiftly",
    "Create Event seamless",
    "Organaize Seinar or workshop",
    "Email Remainders"
  ];

  return (
    <section className="max-6xl min-h-52 mx-auto bg-teal-100 px-4 py-3 my-5">
      <h2 className="text-gray-800 text-3xl font-bold text-center my-5">
        Why Should use ScheduleMeet
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-around">
        {/* text section */}
        <div className="flex flex-col items-center justify-center">
          <ul>
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="list-disc list-inside text-lg font-semibold my-1 text-black"
              >
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        {/* image section */}
        <div className="">
          <Image
            src={benefitsImage}
            alt="benefits"
            height={500}
            width={350}
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
