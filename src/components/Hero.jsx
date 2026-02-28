import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero-section"
      className="relative flex flex-col items-center justify-center 
        min-h-screen w-full text-center bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
      {/* Animated blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-2000" />
      <div className="absolute bottom-10 left-1/2 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-blob animation-delay-4000" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold sm:text-6xl"
        >
          Hi, I'm Aryaman 👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 sm:text-xl"
        >
          CS Student @ UMass Lowell | Building mobile apps, web tools, and ML projects
        </motion.p>
      </div>
    </section>
  );
}