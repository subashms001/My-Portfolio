import React from "react";

const contact = [
  {
    logo: "📧",
    title: "Email",
    content: "subashms857@gmail.com",
  },
  {
    logo: "📍",
    title: "Location",
    content: "Namakkal, Tamilnadu, India.",
  },
];

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "eb664610-5586-47bd-ae97-fe59f21b12fe");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Thank you for your submission!");
      event.target.reset();
    } else {
      toast.error(data.message);
    }
  };
  return (
    <>
      <section
        id="contact"
        className="flex flex-col md:flex-row items-center justify-between px-6 sm:px-10 lg:px-20 py-16 bg-gray-800 text-white gap-12"
      >
        <div className="flex-1 space-y-6 mt-20 md:mt-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-[#00D4AA]  md:mb-8 ">
              Let's Connect!
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              I'm actively looking for my first opportunity as a frontend
              developer. Whether it's a full-time role, internship or just a
              chat  I'd love to hear from you!
            </p>
          </div>
          <div className="space-y-4">
            {contact.map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="text-xl w-10 h-10 bg-[#4f515144] flex items-center justify-center rounded">
                  {item.logo}
                </div>
                <div>
                  <p className="text-sm text-gray-400">{item.title}</p>
                  <h4 className="font-medium text-gray-300 ">{item.content}</h4>
                </div>
              </div>
            ))}

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-[#00D4AA44] flex items-center justify-center rounded  text-green-400 text-lg">
                ●
              </div>
              <div>
                <p className="text-sm text-green-400">Status</p>
                <h4 className="font-medium text-green-400">
                  Open to Internship & Full-time
                </h4>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a className="bg-[#00D4AA22] border border-[#00D4AA44] text-[#00D4AA] px-4 py-2 rounded text-sm hover:scale-105 transition">
              GitHub
            </a>
            <a className="bg-[#7B61FF22] border border-[#7B61FF44] text-[#7B61FF] px-4 py-2 rounded text-sm hover:scale-105 transition">
              LinkedIn
            </a>
            <a className="bg-[#ff61e522] border border-[#ff61e544] text-[#f461ff] px-4 py-2 rounded text-sm hover:scale-105 transition">
              Resume
            </a>
          </div>
        </div>
          <div className="flex-1 w-full max-w-xl mt-20 md:mt-10 ">
            <form
              onSubmit={onSubmit}
              className="grid sm:grid-cols-2 gap-4 sm:gap-5 "
            >
              <div>
                <p className="mb-1 text-sm text-gray-300">Your name</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#00D4AA] outline-none"
                />
              </div>

              <div>
                <p className="mb-1 text-sm text-gray-300">Email</p>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#00D4AA] outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <p className="mb-1 text-sm text-gray-300">Message</p>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Enter your message"
                  required
                  className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-[#00D4AA] outline-none"
                />
              </div>

              <button
                type="submit"
                className="sm:col-span-2 w-full sm:w-max bg-[#00D4AA22] border border-[#00D4AA44] text-[#00D4AA] px-8 py-3 rounded font-medium hover:scale-105 transition"
              >
                Send Message
              </button>
            </form>
          </div>
      </section>
    </>
  );
};

export default Contact;
