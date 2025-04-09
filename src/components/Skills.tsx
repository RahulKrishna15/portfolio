import { motion } from "framer-motion";
import {
  SiRust,
  SiSolidity,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiDocker,
  SiFigma,
  SiSolana,
  SiMysql,
  SiNodedotjs,
  SiExpress,
} from "react-icons/si";
import { FaEthereum, FaHardHat } from "react-icons/fa";
import { TbCoin } from "react-icons/tb";
import { BsTools } from "react-icons/bs";

const skillCategories = {
  blockchain: {
    title: "Blockchain",
    description: "Building secure and scalable decentralized applications",
    skills: [
      {
        name: "Rust",
        icon: <SiRust className="text-orange-600 dark:text-orange-500" />,
      },
      {
        name: "Solidity",
        icon: <SiSolidity className="text-gray-800 dark:text-gray-300" />,
      },
      {
        name: "Web3.js",
        icon: <FaEthereum className="text-blue-600 dark:text-blue-500" />,
      },
      {
        name: "Hardhat",
        icon: <FaHardHat className="text-yellow-600 dark:text-yellow-500" />,
      },
      {
        name: "Truffle",
        icon: <BsTools className="text-red-600 dark:text-red-500" />,
      },
      {
        name: "Solana",
        icon: <SiSolana className="text-purple-600 dark:text-purple-500" />,
      },
      {
        name: "SPL-Token",
        icon: <TbCoin className="text-blue-600 dark:text-blue-500" />,
      },
      {
        name: "Solana-Web3",
        icon: <SiSolana className="text-green-600 dark:text-green-500" />,
      },
    ],
  },
  frontend: {
    title: "Frontend",
    description: "Creating beautiful and responsive user interfaces",
    skills: [
      {
        name: "HTML5",
        icon: <SiHtml5 className="text-orange-500 dark:text-orange-400" />,
      },
      {
        name: "CSS3",
        icon: <SiCss3 className="text-blue-500 dark:text-blue-400" />,
      },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-500 dark:text-yellow-400" />,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript className="text-blue-600 dark:text-blue-500" />,
      },
      {
        name: "React",
        icon: <SiReact className="text-blue-500 dark:text-blue-400" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-gray-800 dark:text-gray-300" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-cyan-500 dark:text-cyan-400" />,
      },
    ],
  },
  backend: {
    title: "Backend",
    description: "Developing robust and efficient server-side applications",
    skills: [
      {
        name: "Node.js",
        icon: <SiNodedotjs className="text-green-600 dark:text-green-500" />,
      },
      {
        name: "Express",
        icon: <SiExpress className="text-gray-800 dark:text-gray-300" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-600 dark:text-green-500" />,
      },
      {
        name: "PostgreSQL",
        icon: <SiPostgresql className="text-blue-600 dark:text-blue-500" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql className="text-blue-600 dark:text-blue-500" />,
      },
    ],
  },
  tools: {
    title: "Tools & Practices",
    description: "Essential tools and methodologies for modern development",
    skills: [
      {
        name: "Git",
        icon: <SiGit className="text-orange-600 dark:text-orange-500" />,
      },
      {
        name: "GitHub",
        icon: <SiGithub className="text-gray-800 dark:text-gray-300" />,
      },
      {
        name: "Docker",
        icon: <SiDocker className="text-blue-500 dark:text-blue-400" />,
      },
      {
        name: "Figma",
        icon: <SiFigma className="text-purple-500 dark:text-purple-400" />,
      },
    ],
  },
};

const Skills = () => {
  return (
    <section id="skills" className="py-0 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mx-auto max-w-3xl mb-12"
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-subtitle dark:text-gray-400">
            A collection of technologies and tools I work with to build modern
            web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([key, category], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-border dark:border-gray-700"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold dark:text-white">
                  {category.title}
                </h3>
                <p className="text-muted-foreground dark:text-gray-400 mt-2">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2 p-3 rounded-lg bg-secondary/50 dark:bg-gray-700/50 border border-border dark:border-gray-700 transition-all duration-300 hover:shadow-md dark:hover:shadow-lg dark:hover:shadow-primary/10"
                  >
                    <div className="text-xl">{skill.icon}</div>
                    <span className="text-sm font-medium dark:text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
