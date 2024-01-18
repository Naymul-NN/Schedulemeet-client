"use client";

const ContactUs = () => {
  return (
    <section className="bg-gray-300 max-w-6xl mx-auto rounded-xl my-6 shadow-xl mt-5 ">
      <div className=" py-3 lg:py-10 px-4 mx-auto max-w-screen-md">
        <h2 className="my-2 text-4xl tracking-tight font-extrabold text-center text-gray-900">
          Contact Us
        </h2>
        <p className="mb-2  font-light text-center text-gray-700 sm:text-xl">
          Got something to say or ask? Drop us a message using the form. We{"'"}
          re here to help!
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="space-y-8"
        >
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="your email address"
              required=""
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let us know how we can help you"
              required=""
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows={6}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Leave a comment..."
              defaultValue={""}
            />
          </div>
          <button
            type="submit"
            className="py-3 px-2 rounded-md shadow-xl bg-green-700 hover:opacity-60 active:scale-95"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
