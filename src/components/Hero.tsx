import { useEffect, useRef } from "react";
import { ArrowDown, Code, Github, Linkedin, Mail, Twitter } from "lucide-react";

const Hero = () => {
  const textRef = useRef<HTMLDivElement>(null);

  // Simulate a typing effect
  useEffect(() => {
    const textElements =
      textRef.current?.querySelectorAll(".animate-text") || [];

    textElements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("opacity-100");
        el.classList.remove("opacity-0", "translate-y-3");
      }, index * 200);
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 z-0 opacity-10 dark:opacity-5 transition-opacity duration-300"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1) 0%, rgba(99, 102, 241, 0) 70%)",
        }}
      ></div>

      <div className="section-container flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="w-full lg:w-1/2 text-left mb-10 lg:mb-0" ref={textRef}>
          <div className="inline-block px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full mb-5 animate-text opacity-0 translate-y-3 transition-all duration-500 ease-out">
            <span className="text-xs font-semibold tracking-wider uppercase">
              Full Stack Blockchain Developer
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-5 animate-text opacity-0 translate-y-3 transition-all duration-500 ease-out delay-100 text-gray-900 dark:text-white">
            Building Decentralized
            <br />
            <span className="text-indigo-600 dark:text-indigo-400">
              Experiences
            </span>
            <br />
            for the Future
          </h1>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-8 animate-text opacity-0 translate-y-3 transition-all duration-500 ease-out delay-200">
            Aspiring Full Stack Blockchain Developer with a passion for building
            secure, scalable, and modern decentralized applications. Eager to
            leverage blockchain technology to create innovative and efficient
            solutions from concept to reality.
          </p>

          <div className="flex flex-wrap gap-4 animate-text opacity-0 translate-y-3 transition-all duration-500 ease-out delay-300">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg bg-indigo-600 text-white dark:bg-indigo-500 dark:text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 hover:shadow-indigo-500/50 dark:hover:shadow-indigo-400/20 dark:hover:border-purple-400"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-indigo-600 text-white dark:bg-indigo-500 dark:text-white font-medium transition-all hover:scale-105 hover:shadow-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 hover:shadow-indigo-500/50 dark:hover:shadow-indigo-400/20 dark:hover:border-purple-400"
            >
              View Projects
            </a>
          </div>

          <div className="flex items-center gap-5 mt-10 animate-text opacity-0 translate-y-3 transition-all duration-500 ease-out delay-400">
            <a
              href="https://github.com/RahulKrishna15"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 transition-all hover:bg-indigo-100 dark:hover:bg-indigo-900/30"
              aria-label="GitHub"
            >
              <Github size={18} className="text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-krishna-pooboni-0b103b256/"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 transition-all hover:bg-indigo-100 dark:hover:bg-indigo-900/30"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={18}
                className="text-gray-700 dark:text-gray-300"
              />
            </a>
            <a
              href="https://x.com/RahulKr1276"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 transition-all hover:bg-indigo-100 dark:hover:bg-indigo-900/30"
              aria-label="X (Twitter)"
            >
              <Twitter size={18} className="text-gray-700 dark:text-gray-300" />
            </a>
            <a
              href="mailto:rahulkrishnapooboni057@gmail.com"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 transition-all hover:bg-indigo-100 dark:hover:bg-indigo-900/30"
              aria-label="Email"
            >
              <Mail size={18} className="text-gray-700 dark:text-gray-300" />
            </a>
          </div>
        </div>

        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
          <div className="relative w-80 h-80 md:w-96 md:h-96 animate-fade-in">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600/80 to-indigo-400/30 dark:from-indigo-500/60 dark:to-indigo-400/20 blur-2xl opacity-20 animate-pulse-subtle"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Code
                size={156}
                className="text-indigo-200 dark:text-indigo-900/20"
              />
            </div>
            <div className="relative h-full w-full glass rounded-2xl overflow-hidden flex items-center justify-center border border-gray-200/50 dark:border-gray-700/30">
              <div className="w-full h-full bg-white/5 dark:bg-gray-800/10 p-6 backdrop-blur-sm">
                <div className="bg-white/90 dark:bg-gray-800/80 rounded-lg shadow-sm p-4 mb-4">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="font-mono text-xs sm:text-sm space-y-2 text-gray-800 dark:text-gray-200">
                    <div className="flex">
                      <span className="text-purple-500 dark:text-purple-400 mr-2">
                        const
                      </span>
                      <span className="text-blue-500 dark:text-blue-400 mr-2">
                        developer
                      </span>
                      <span className="mr-2">=</span>
                      <span className="text-indigo-600 dark:text-indigo-400">{`{`}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-green-500 dark:text-green-400 mr-2">
                        name:
                      </span>
                      <span className="text-orange-400 dark:text-orange-300">
                        'Rahul Krishna Pooboni'
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-green-500 dark:text-green-400 mr-2">
                        role:
                      </span>
                      <span className="text-orange-400 dark:text-orange-300">
                        'Web3 Developer'
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-green-500 dark:text-green-400 mr-2">
                        passion:
                      </span>
                      <span className="text-orange-400 dark:text-orange-300">
                        'Building web apps'
                      </span>
                      ,
                    </div>
                    <div className="pl-4">
                      <span className="text-green-500 dark:text-green-400 mr-2">
                        status:
                      </span>
                      <span className="text-orange-400 dark:text-orange-300">
                        'Ready to work!'
                      </span>
                    </div>
                    <div>
                      <span className="text-indigo-600 dark:text-indigo-400">{`}`}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="w-2/3 h-3 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                  <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                    <span className="text-xs text-indigo-600 dark:text-indigo-400">
                      &gt;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
