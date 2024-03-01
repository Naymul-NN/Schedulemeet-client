import Image from "next/image";
import benefitsImage from "../../assets/benefits.png";

const Benefits = () => {
    // TODO: add more features

    const benefits = [
        "Easy to Navigate",
        "Appoint Swiftly",
        "Create Event seamless",
        "Organize Seminar or workshop",
        "Email Remainders",
    ];

    return (
        <section className="max-w-6xl min-h-52 mx-auto text-white px-4 py-6 my-5 rounded-xl shadow-sm">
            <h2 className=" text-4xl text-white font-bold text-center my-5">
                Why Should Use ScheduleMeet
            </h2>
            <div className="flex flex-col lg:flex-row items-center justify-around">
                {/* text section */}
                <div className="flex flex-col items-center justify-center">
                    <ul>
                        {benefits.map((benefit) => (
                            <li
                                key={benefit}
                                className="list-disc list-inside text-lg text-white font-semibold my-1 text-black">
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
                        className="rounded-xl shadow-sm"
                    />
                </div>
            </div>
        </section>
    );
};

export default Benefits;
