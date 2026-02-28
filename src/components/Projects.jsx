import { motion } from "framer-motion";
import { FaPython, FaGithub} from "react-icons/fa";
import { SiScikitlearn } from "react-icons/si";

export default function Projects() {
  const fadeSlide = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const icons = [
    { Icon: FaPython },
    { Icon: SiScikitlearn },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen px-4 py-24"
      style={{ background: "linear-gradient(to right, #cbd5e1, #64748b)" }}
    >
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-16">Projects</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto justify-items-center">
        
        {/* Card Container */}
        <motion.div
          variants={fadeSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.01 }}
          className="relative group flex flex-col max-w-sm h-[500px] items-center rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/50"
        >

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>

          {/* Project Image */}
          <img
            src="/images/Smart_email_sorter.jpeg"
            alt="Smart Email Sorter"
            className="w-full h-1/2 object-cover rounded-t-2xl bg-gradient-to-br from-blue-100 to-blue-300 shadow-sm"
          />

          {/* Text Content */}
          <div className="flex flex-col items-center space-y-4 py-6 px-6 text-center">

            <h2 className="text-xl font-bold">Smart Email Sorter</h2>

            <p className="text-sm text-gray-600 px-2">
              A machine-learning classifier that analyzes email text and sorts
              messages into predefined categories using TF-IDF vectorization and
              a Naive Bayes model.
            </p>

            {/* Icon Row */}
            <div className="flex gap-4 text-blue-600 text-3xl">
              {icons.map(({ Icon }, i) => (
                <Icon key={i} className="drop-shadow-sm" />
              ))}
            </div>

            {/* GitHub Button */}
            <span className="flex items-center gap-2 rounded-lg px-4 py-2 font-medium border border-gray-300 text-gray-400 bg-gray-50 cursor-not-allowed select-none">
              🔒 Coming Soon
            </span>
          </div>
        </motion.div>


        {/* SOON card */}
        <motion.div
          variants={fadeSlide}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.01 }}
          className="relative group flex flex-col w-full max-w-sm h-[500px] items-center rounded-2xl bg-gradient-to-br from-white to-blue-50 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200/50"
        >

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none"></div>

        {/* Project Image */}
        <div className="w-full h-1/2 bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 animate-pulse flex items-center justify-center">
          <span className="text-4xl">🚧</span>
        </div>
          
          {/* Text Content */}
          <div className="flex flex-col items-center space-y-4 py-6 px-6 text-center">

            <h2 className="text-xl font-bold">Coming Soon</h2>

            <p className="text-sm text-gray-600 px-2">
             Another project, in the works.
            </p>

            {/* Icon Row 
            <div className="flex gap-4 text-blue-600 text-3xl">
              {icons.map(({ Icon }, i) => (
                <Icon key={i} className="drop-shadow-sm" />
              ))}
            </div>
            */}
            {/* GitHub Button 
            <motion.a
              href="https://github.com/Aryan2521-04"
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 8px 15px rgba(59, 130, 246, 0.3)",
              }}
              className="flex items-center gap-2 rounded-lg px-4 py-2 font-medium border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all"
            >
              <FaGithub className="text-lg" />
              GitHub
            </motion.a>
            */}

            <span className="flex items-center gap-2 rounded-lg px-4 py-2 font-medium border border-gray-300 text-gray-400 bg-gray-50 cursor-not-allowed select-none">
              🔒 Coming Soon
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
