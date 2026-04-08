const sections = [
  {
    title: "Who Am I ?",
    type: "paragraph",
    content: `I’m a passionate frontend developer who enjoys creating clean, user-friendly, and interactive web interfaces. I mainly work with React and modern JavaScript to build fast and scalable applications.

Along with frontend development, I have a strong interest in data analysis. I use tools like Python and Power BI to analyze data and create visual dashboards that help in decision-making.

I’m always eager to learn new technologies and continuously improve my skills by building real-world projects.`,
  },
  {
    title: "What I Do :",
    type: "list",
    content: [
      "Build responsive and modern web applications",
      "Develop interactive UI using React",
      "Work with APIs and dynamic data",
      "Perform data analysis and create dashboards",
      "Continuously learn and implement new technologies",
    ],
  },
  {
    title: "Experience / Projects :",
    type: "paragraph",
    content: `I have worked on multiple projects that helped me strengthen my development and problem-solving skills. These include building responsive websites, developing machine learning models, and creating data visualization dashboards using real-world datasets. Through these projects, I’ve gained hands-on experience in both frontend development and data analysis.`,
  },
  {
    title: "Goals :",
    type: "paragraph",
    content: `My goal is to become a skilled full-stack developer and build scalable applications that solve real-world problems. I also aim to deepen my knowledge in data analysis and contribute to data-driven solutions.`,
  },
];

const about = () => {
  return (
    <>
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 lg:px-20 py-16 bg-gray-900 relative overflow-hidden gap-12  ">
        <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 top-10 left-10"></div>
        <div className="absolute w-72 h-72  bg-pink-500 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>

        <div className="flex-1 flex flex-col items-start p-0 justify-around  gap-6 md:min-w-[30%] mt-30 md:mt-10 text-gray-500 ">
          <div className="flex flex-col items-center justify-center gap-3">
            <div className="w-40 h-40 border-2 border-[#00D4AA] rounded-full flex justify-center items-center text-6xl  ">
              🧑‍💻
            </div>
            <div className="flex flex-col items-center justify-around">
              <h3>SUBASH . M</h3>
              <h4>Frontend Developer | Data Analyst | ML Enthusiast</h4>
            </div>
          </div>
          <div className=" border-t-2 border-b-2 md:border-b-0  flex flex-col border-[#00D4AA]  p-10 gap-4 text-gray-500 w-[90%]">
            <p>📍 Namakkal, Tamilnadu, India.</p>
            <p>🎓 B.Sc CS - 2025</p>
            <p>🏫 SSM College of Arts & Science</p>
            <p className="text-[#00D4AA]">
              💼{" "}
              <span className="bg-[#00D4AA22] border border-[#00D4AA44] px-3 py-1 rounded animate-pulse">
                Open to work
              </span>
            </p>
            <p>📊 CGPA : 7.2 / 10</p>
            <div className="flex w-full items-center justify-center gap-10 ">
              <a
                href=""
                className="border border-[#ff61e544] p-2 px-4 rounded outline-none bg-[#ff61e522] text-[#f461ff]"
              >
                GitHub
              </a>
              <a
                href=""
                className="border border-[#7B61FF44] p-2 px-4 rounded outline-none bg-[#7B61FF22] text-[#7B61FF]"
              >
                linkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="relative z-10 flex-1 flex flex-col items-center md:items-start text-center mt-30 md:mt-10 md:text-left md:min-w-[70%] border-[#00D4AA22] md:border-l-2  w-full p-10">
          <div className="space-y-6 text-justify">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-semibold mb-5 text-[#00D4AA] underline underline-offset-5 decoration-[#00D4AA22] m ">
                  {section.title}
                </h2>
                {section.type === "paragraph" ? (
                  <p className="text-gray-400 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                ) : (
                  <ul className="list-disc pl-12 space-y-2 text-gray-400">
                    {section.content.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default about;
