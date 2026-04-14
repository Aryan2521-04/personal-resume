import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaCuttlefish,
  FaRegHandshake,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileAlt
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { name: "C/C++", Icon: FaCuttlefish },
    { name: "Python", Icon: FaPython },
    { name: "React", Icon: FaReact },
    { name: "Tailwind", Icon: SiTailwindcss },
    { name: "HTML", Icon: FaHtml5 },
    { name: "CSS", Icon: FaCss3Alt },
  ];

  const buttons = [
    {
      label: "Email",
      href: "mailto:aryamansh04@gmail.com",
      icon: FaEnvelope,
      style: "bg-blue-600 text-white hover:bg-blue-700",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/shah-aryaman/",
      icon: FaLinkedin,
      style:
        "border border-blue-600 text-blue-600 hover:bg-blue-50",
    },
    {
      label: "GitHub",
      href: "https://github.com/Aryan2521-04",
      icon: FaGithub,
      style:
        "border border-blue-600 text-blue-600 hover:bg-blue-50",
    },
    {
      label: "Resume",
      href: "/Aryaman_shah-6.pdf",
      icon: FaFileAlt,
      style: "bg-blue-600 text-white hover:bg-blue-700",
      download: true,
    },
  ];

  const fadeSlide = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #ffffff, #f1f5f9)" }}
    >
      {/* --- Split layout: Photo left, text right --- */}
      <motion.div
        variants={fadeSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        className="min-h-screen flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-8 gap-10"
      >
        {/* Left: Large photo */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/me.jpg"
            loading="lazy"
            alt="Aryan Shah"
            className="w-[420px] h-[420px] md:w-[500px] md:h-[500px] object-cover rounded-3xl shadow-2xl ring-4 ring-blue-500"
          />
        </div>

        {/* Right: Text + contact section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <h2 className="text-5xl font-bold">About Me</h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Hi, I'm <span className="font-semibold">Aryaman Shah</span>, but you can also call me{" "}
            <span className="font-semibold">Aryan.</span> I'm a Computer Science student at UMass Lowell 
            with hands-on experience in mobile and web development through my internship at Uplifty AI. 
            I'm always looking to take on new challenges — whether that's learning a new framework, 
            contributing to a team, or building something from scratch. Outside of tech, you'll find me 
            working out, spending time with people I care about, or going on random side quests.
          </p>

          {/* --- Contact Section --- */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-2xl bg-gradient-to-r from-blue-50 to-white shadow-md p-8 mt-8 text-center md:text-left border border-blue-100"
          >

            <h3 className="text-3xl font-bold text-blue-700 mb-2 flex items-center justify-center md:justify-start gap-2">
              <FaRegHandshake className="text-blue-600" /> Want to connect?
            </h3>

            <p className="text-gray-600 text-lg mb-6">
              I'm always open to connecting, whether it's for professional opportunities or not, feel free to reach out!
            </p>

            {/* Buttons Row with hover animations */}
            <div className="flex flex-wrap justify-center gap-6 pt-4 md:flex-nowrap md:justify-start md:gap-4 md:pr-4">
              {buttons.map((btn, i) => {
                const Icon = btn.icon;
                return (
                  <motion.a
                    key={btn.label}
                    href={btn.href}
                    download={btn.download}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15, duration: 0.01 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0px 8px 15px rgba(59, 130, 246, 0.3)",
                    }}
                    className={`flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition ${btn.style}`}
                  >
                    <Icon className="text-lg" />
                    {btn.label}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* --- Skills Section --- */}
      <motion.div
        variants={fadeSlide}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.01 }}
        className="py-24 pb-32 flex flex-col justify-center items-center px-8"
      >
        <h3 className="text-3xl font-bold mb-6">Skills</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {skills.map(({ name, Icon }) => (
            <motion.div
              key={name}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
              }}
              className="flex h-28 flex-col items-center justify-center rounded-2xl bg-white/80 shadow-md transition-transform duration-300"
            >
              <Icon className="text-4xl text-blue-600" />
              <span className="mt-2 text-sm font-semibold text-gray-700">{name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
