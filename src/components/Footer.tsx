import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <footer className="py-12 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container px-4 mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <motion.div variants={itemVariants} className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold tracking-tight">
              <span className="text-indigo-600 dark:text-indigo-400">
                Rahul
              </span>{" "}
              Krishna
            </a>
            <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-md">
              Crafting modern web experiences with clean code and thoughtful
              user experiences.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex space-x-4">
            <a
              href="https://github.com/RahulKrishna15"
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:border-indigo-600 dark:hover:border-indigo-400"
              aria-label="GitHub"
            >
              <Github
                size={18}
                className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rahul-krishna-pooboni-0b103b256/"
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:border-indigo-600 dark:hover:border-indigo-400"
              aria-label="LinkedIn"
            >
              <Linkedin
                size={18}
                className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
              />
            </a>
            <a
              href="https://x.com/RahulKr1276"
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:border-indigo-600 dark:hover:border-indigo-400"
              aria-label="Twitter"
            >
              <Twitter
                size={18}
                className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
              />
            </a>
            <a
              href="mailto:ailto:rahulkrishnapooboni057@gmail.com"
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:border-indigo-600 dark:hover:border-indigo-400"
              aria-label="Email"
            >
              <Mail
                size={18}
                className="text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
