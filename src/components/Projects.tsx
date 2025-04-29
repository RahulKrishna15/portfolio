import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Public Patronage System",
    description:
      "A Decentralized crowdfunding platform built on zkEVM allowing creators to raise funds for projects in a transparent and secure manner",
    technologies: ["Solidity", "React", "Web3.js", "Hardhat", "Thirdweb"],
    image: "/images/crowdfunding.png",
    github: "https://github.com/RahulKrishna15/Public_Patronage_System",
  },
  {
    title: "Digital Ownership Engraver",
    description:
      "A Decentralized platform built on polygon-testnet allowing creators to convert an image of jpeg format to an NFT Token.",
    technologies: ["React", "Javascript", "CSS"],
    image: "/images/nft-marketplace.png",
    github: "https://github.com/RahulKrishna15/Digital_Ownership_Engraver",
  },
  {
    title: "Block Vest",
    description:
      "A modular crypto exchange platform with secure wallet management, and seamless payment integration. Combines real-world APIs, portfolio analytics, and 2FA for a production-ready fintech solution",
    technologies: ["Spring Boot", "MySQL", "React", "Razorpay" ,"CoinGecko API"],
    image: "/images/BlockVest.png",
    github: "https://github.com/RahulKrishna15/BlockVest",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-0 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mx-auto max-w-3xl mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            A showcase of my recent work and contributions to the blockchain
            ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:border-indigo-600 dark:hover:border-indigo-400"
            >
              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-300"
                  >
                    <FaGithub className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
