import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiSolidity, SiRust, SiReact, SiNextdotjs } from "react-icons/si";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section id="about" className="py-0 bg-white dark:bg-gray-900/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mx-auto max-w-3xl mb-0"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle dark:text-gray-400">
            Passionate about building innovative solutions in the blockchain
            space
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image and Social Links */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              variants={fadeInUp}
              className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto mt-12 rounded-full overflow-hidden border-4 border-primary/20 dark:border-primary/30"
            >
              <motion.img
                src="public/static/images/profile.jpeg"
                alt="Rahul Krishna"
                className="w-full h-full object-cover"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: {
                    duration: 0.5,
                    ease: "easeInOut",
                  },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end"
                whileHover={{
                  opacity: 1,
                  transition: { duration: 0.3 },
                }}
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <h3 className="text-2xl font-semibold dark:text-white">
                Hi, I'm Rahul Krishna
              </h3>
              <p className="text-muted-foreground dark:text-gray-400">
                I'm a passionate blockchain developer with expertise in building
                decentralized applications. My journey in blockchain development
                started with a fascination for the technology's potential to
                revolutionize various industries.
              </p>
              <p className="text-muted-foreground dark:text-gray-400">
                I specialize in smart contract development using Solidity and
                Rust, and I'm experienced in building full-stack dApps with
                modern web technologies. My goal is to create secure, scalable,
                and user-friendly blockchain solutions.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              <h4 className="text-lg font-semibold dark:text-white">
                What I Do
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-border dark:border-gray-700 shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <SiSolidity className="w-6 h-6 text-blue-600 dark:text-blue-500" />
                    <span className="font-medium dark:text-white">
                      Smart Contracts
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-border dark:border-gray-700 shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <SiRust className="w-6 h-6 text-orange-600 dark:text-orange-500" />
                    <span className="font-medium dark:text-white">
                      Rust Development
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-border dark:border-gray-700 shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <SiReact className="w-6 h-6 text-blue-500 dark:text-blue-400" />
                    <span className="font-medium dark:text-white">
                      Frontend Development
                    </span>
                  </div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="p-4 rounded-lg bg-white dark:bg-gray-800 border border-border dark:border-gray-700 shadow-sm"
                >
                  <div className="flex items-center space-x-3">
                    <SiNextdotjs className="w-6 h-6 text-gray-800 dark:text-gray-300" />
                    <span className="font-medium dark:text-white">
                      Full-Stack Solutions
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
