import React from "react";
import GetPost from "@/lib/GetPost";

const Blog = async ({ params }) => {
  const { id } = params;

  console.log(id);

  const responseData = await GetPost(id);

  console.log(responseData?.result[0]);

  // ! effect to get data from databse

  return (
    <div className="detailContainer bg-gray-50 text-gray-950  py-1 ">
      <div className="detailWrapper  w-[95%] m-auto ">
        {/* detail top section  */}
        <div className="detailTop   flex flex-col md:flex-row gap-9 md:gap-0 justify-evenly items-center mb-6 sm:mb-7 md:mb-10 xmd:mb-12 lg:mb-16 ">
          {/* detail left starts  */}
          <div className="detailLeft  w-[94%] xsm:w-[90%] sm:w-[85%] md:w-[54%]   ">
            {/* category starts  */}
            <h1 className=" mb-3 text-sky-500 font-semibold "> Category </h1>
            {/* category ends */}

            {/* left heading  */}

            <h1 className="  font-bold text-xl xsm:text-2xl sm:text-3xl xmd:text-4xl headingFont mb-5 leading-relaxed  ">
              Connect Calendly with Microsoft Dynamics 365 via Power Automate
            </h1>

            {/* left heading  */}

            {/* read time starts  */}
            <h1 className=" text-xs mb-3 ">READ TIME: 5 MINUTES</h1>
            {/* read time ends  */}

            {/* writer info starts  */}
            <div className="writerInfo  flex items-center gap-2  ">
              {/* writer image  */}
              <div className="writerImg   ">
                <img
                  class=" w-8 h-8 xsm:w-9 xsm:h-9 sm:w-10 sm:h-10 rounded-full"
                  src={`https://i.ibb.co/K2Dbx8R/Hilary-Yeganegi-Calendly-ezgif-com-webp-to-jpg-converter.jpg`}
                  alt="Rounded avatar "
                />
              </div>
              {/* writer image  */}

              {/* writer name  */}

              <div className="writerName   ">
                <p className=" text-gray-800 font-medium text-xs sm:text-sm ">
                  Hilary Yeganegi
                </p>
                <p className=" text-gray-700 font-medium text-xs  sm:text-sm ">
                  Dec 11, 2023
                </p>
              </div>

              {/* writer name  */}
            </div>
            {/* writer info ends */}

            {/*  */}
          </div>
          {/* detail left ends */}

          {/* detail right  */}
          <div className="detailRight  w-[92%] xsm:w-[85%] sm:w-[72%] md:w-[44%]  ">
            {/* right image  */}
            <div className="rightImg  h-[18rem] sm:h-[19rem]  md:h-[15rem] xmd:h-[16rem] lg:h-[18rem] rounded-md overflow-auto ">
              <img
                src={`https://i.ibb.co/fHSXD9B/Calendly-Dynamics-Hero-1-ezgif-com-webp-to-jpg-converter.jpg`}
                className=" w-full h-full   bg-cover bg-center "
                alt=""
              />
            </div>
            {/* right image  */}
          </div>
          {/* detail right  */}
        </div>
        {/* detail top section  ends */}

        {/* detail paragraph container  */}

        <div className="detailCOntainer  flex justify-between   ">
          <div className="detailParagraphContainer w-[97%] xsm:w-[94%] sm:w-[90%] xmd:w-[68%] paragraphFont text-sm xsm:text-base sm:text-lg m-auto    ">
            {/* detail paragraph  */}
            {/* <div
                  className="detailParagraph   "
                  dangerouslySetInnerHTML={{ __html: blog?.description }}
                ></div> */}
            <div
              className="detailParagraph   "
              // dangerouslySetInnerHTML={{ __html: blog?.description }}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
                tempora natus reprehenderit cumque totam excepturi perspiciatis
                deserunt reiciendis libero pariatur nostrum quam, cum, voluptas
                consectetur vero. Vel sint necessitatibus eum alias inventore
                aspernatur commodi, incidunt deleniti dolor nihil voluptatem
                debitis voluptas eveniet laudantium doloremque rerum culpa minus
                pariatur quidem temporibus omnis eos neque? Ad sit aliquam
                delectus ipsum quo! Aliquid architecto, adipisci expedita sed
                praesentium ipsa fugit enim dolore! Deserunt, atque unde esse
                quas dicta temporibus in minus animi, aspernatur iusto corrupti
                fugit. Dolor magnam amet eveniet neque maiores voluptates, nulla
                dolorem asperiores nam consequatur consequuntur maxime
                cupiditate quas. Voluptates inventore ducimus officia corrupti
                aut nisi aliquam autem voluptatem et voluptate laudantium, illo
                vel, dignissimos recusandae voluptas cupiditate eligendi, eos
                sed nam. Temporibus in, maxime natus ex perferendis et iure
                doloribus quod sunt velit repellendus necessitatibus
                perspiciatis ipsa libero eius, enim, minus cum quam aperiam
                modi. Eveniet totam quasi doloremque dolor neque quaerat
                voluptatum quo exercitationem nam ullam laboriosam, at quidem
                similique consequuntur. Placeat nulla animi quisquam officiis,
                odit quibusdam amet doloremque, est rem cupiditate facilis illum
                ex. Voluptatum temporibus, in, dolore illum vel, nesciunt
                pariatur deleniti delectus repudiandae amet officia corporis!
                Commodi, autem ut nemo explicabo illum at reiciendis?
              </p>
            </div>
            {/* detail paragraph ends */}

            {/*  */}
          </div>
        </div>

        {/* detail paragraph container  */}
      </div>
    </div>
  );
};

export default Blog;
