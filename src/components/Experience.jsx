import { motion } from "framer-motion";
import { FaPython, FaGithub, FaReact} from "react-icons/fa";
import { SiScikitlearn, SiAndroidstudio } from "react-icons/si";

export default function Experience() {
  const fadeSlide = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const experiences = [
    {
      title: "Intern - Android/IOS Developer",
      company: "Uplifty AI",
      location: "Remote",
      duration: "Nov 2025 - Present",
      description:
        "Worked on developing mobile applications using React Native. Used Android Studio for building and testing apps. Collaborated with a team of developers to implement new features and fix bugs.",
      icons: [FaReact, SiAndroidstudio, FaGithub]
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen px-4 py-24 bg-gradient-to-b "
      style={{ background: "linear-gradient(to bottom, #64748b, #1e293b)" }}
    >
      <h1 className="text-4xl font-bold text-center mb-16">Experience</h1>

        {/* Timeline Container */}
        <div className="max-w-6xl mx-auto relative">

            {/* Timeline Line */}

            <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-300">
            </div>

            {/* Timeline Row */}
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
            
            return (
              <div key={index} className={"relative flex w-full mb-16"}>

                {/* Left column */}
                <div className= "w-1/2 flex justify-end p-8">
                {isLeft && (
                  <motion.div
                    variants={fadeSlide}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.01 }}
                    className="max-w-md rounded-2xl bg-white/80 p-6 shadow-md border border-gray-200"
                    >
                      <h2 className="text-xl font-bold">{exp.title}</h2>
                      <p className="text-sm text-gray-600">{exp.company}</p>
                      <p className="text-sm text-gray-500">
                        {exp.location}: {exp.duration}
                      </p>

                      <p className="mt-3 text-gray-700">{exp.description}</p>

                      <div className="flex gap-3 mt-4">
                        {exp.icons.map((Icon, i) => (
                          <Icon key={i} className="text-blue-600 text-xl" />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Center Dot */}

                <div className="absolute left-1/2 transform -translate-x-1/2 top-6">
                  <div className="w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow" />
                </div>

                {/* Right column */}

                <div className="w-1/2 flex justify-start pl-8">
                  {!isLeft && (
                    <motion.div
                      variants={fadeSlide}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.01 }}
                      className="max-w-md rounded-2xl bg-white/80 p-6 shadow-md border border-gray-200"
                    >
                      <h2 className="text-xl font-bold">{exp.title}</h2>
                      <p className="text-sm text-gray-600">{exp.company}</p>
                      <p className="text-sm text-gray-500">
                        {exp.location} - {exp.duration}
                      </p>

                      <p className="mt-3 text-gray-700">{exp.description}</p>

                      <div className="flex gap-3 mt-4">
                        {exp.icons.map((Icon, i) => (
                          <Icon key={i} className="text-blue-600 text-xl" />
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
    </section>
  );
}
