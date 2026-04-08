import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const roles = ["Frontend Developer", "Data Analyst", "ML Enthusiast"];

export default function Home() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === currentRole.length) {
          setIsDeleting(true);
        }
      } else {
        setText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 lg:px-32 py-16 bg-gray-900 relative overflow-hidden gap-12">
      

      <div className="absolute w-72 h-72 bg-pink-500 rounded-full blur-3xl opacity-20 top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20 bottom-10 right-10"></div>


      <div className="relative z-10 flex-1 flex flex-col items-center md:items-start text-center md:text-left md:min-w-[70%]">
        
        <p className="text-gray-500 text-lg md:text-xl">Hi there, I'm</p>

        <h1 className="text-4xl md:text-5xl font-bold text-white">
          SUBASH . M
        </h1>

        <h4 className="mt-4 text-xl md:text-2xl text-purple-400 font-semibold h-10">
          {text}
          <span className="animate-pulse text-purple-300">|</span>
        </h4>

        <p className="mt-6 max-w-xl text-gray-400 text-sm md:text-base leading-relaxed">
          A passionate frontend developer who loves building clean and
          responsive web apps using <span className="text-[#00D4AA]">HTML</span>
          , <span className="text-[#00D4AA]">CSS</span>,{" "}
          <span className="text-[#00D4AA]">JavaScript</span> &{" "}
          <span className="text-[#00D4AA]">React</span>. <br /> <br /> Also a
          data enthusiast skilled in{" "}
          <span className="text-[#00D4AA]">Data Analysis</span> and{" "}
          <span className="text-[#00D4AA]">Machine Learning</span>, turning data
          into meaningful insights. Looking for my first opportunity!
        </p>


        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
          <Link
            to="/"
            className="px-5 py-3 bg-purple-600 text-white rounded-xl 
            hover:bg-purple-700 transition 
            shadow-[inset_0_0_6px_rgba(255,255,255,0.2)]"
          >
            View Projects
          </Link>

          <a
            href="/resume.pdf"
            className="px-5 py-3 border border-purple-400 text-purple-400 rounded-xl 
            hover:bg-purple-600 hover:text-white transition"
          >
            Download Resume
          </a>
        </div>

        <div className="flex gap-6 text-gray-500 mt-8">
          <Link
            to="https://github.com/subashms001"
            className="hover:text-[#00D4AA]"
          >
            GitHub
          </Link>
          <Link className="hover:text-[#00D4AA]">LinkedIn</Link>
        </div>
      </div>


      <div className="flex-1 flex flex-col items-center justify-center  gap-6 md:min-w-[30%] mt-30 md:mt-0">
        

        <div className="w-40 h-40 border-2 border-[#00D4AA] rounded-full flex justify-center items-center text-6xl  ">
          🧑‍💻
        </div>

        <div className="bg-[#141414] border border-[#222] rounded-xl p-4">
          <div className="font-mono text-xm leading-relaxed w-50">
            
            <div>
              <span className="text-[#7B61FF]">const</span>{" "}
              <span className="text-[#00D4AA]">me</span>{" "}
              <span className="text-[#555]">=</span>{" "}
              <span className="text-[#555]">&#123;</span>
            </div>

            <div className="pl-4">
              <span className="text-[#f0f0f0]">status</span>
              <span className="text-[#555]">:</span>{" "}
              <span className="text-[#00D4AA]">"Fresher"</span>
              <span className="text-[#555]">,</span>
            </div>

            <div className="pl-4">
              <span className="text-[#f0f0f0]">available</span>
              <span className="text-[#555]">:</span>{" "}
              <span className="text-[#7B61FF]">true</span>
              <span className="text-[#555]">,</span>
            </div>

            <div className="pl-4">
              <span className="text-[#f0f0f0]">learning</span>
              <span className="text-[#555]">:</span>{" "}
              <span className="text-[#00D4AA]">"React"</span>
            </div>

            <div>
              <span className="text-[#555]">&#125;</span>
            </div>

          </div>
          <div>
            <div></div>
            <div></div>
            <div></div>
            </div>
        </div>
        

      </div>
      
    </section>
    
  );
}