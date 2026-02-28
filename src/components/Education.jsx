import { motion } from "framer-motion";

import { useState } from "react";

import {
    FaCogs,
    FaCode,
    FaMicrochip,
    FaProjectDiagram,
    FaBrain,
    FaCalculator,
} from "react-icons/fa";

// need to be added
import {
    FiChevronDown,
    FiChevronUp,
} from "react-icons/fi";

export default function Education() {
    
    const fadeSlide = {
        hidden: { y: 50, opacity: 0 },
        visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const expandCollapseVariant = {

    expanded: { height: "auto", opacity: 1, transition: { duration: 0.5 }},
    collapsed: { height: 0, opacity: 0, transition: { duration: 0.5}}

  }

  
    const [isExpanded, setIsExpanded] = useState(false);


    const classes = [

       { label: "COMP I", icon: FaCode},
       { label: "COMP II", icon: FaCode},
       { label: "COMP III", icon: FaCode},
       { label: "COMP IV", icon: FaCode },
       { label: "Assembly Language Programming", icon: FaMicrochip },
       { label: "Organization of Programming Languages", icon: FaProjectDiagram },
       { label: "Logic Design", icon: FaBrain},
       { label: "Computer Architecture", icon: FaCogs },
       { label: "Discrete I", icon: FaCalculator },
    ]

    const recentClasses = classes.slice(-3);

    return (
        // Education page
        <section 
            id="education" 
            className="min-h-screen px-4 py-24"
            style={{ background: "linear-gradient(to bottom, #f1f5f9, #e2e8f0)" }}

        >
            <h1 className="text-4xl font-bold text-center mb-16">Education</h1>
            {/* Education container*/}
            <motion.div 
            variants={fadeSlide}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.01 }}
            className="flex flex-col md:flex-row max-w-4xl mx-auto items-center bg-white/90 border border-gray-200 rounded-3xl shadow-xl gap-8 p-8 
            bg-gradient-to-r from-blue-50 to-white ring-4 ring-blue-500"
            
            >
            <img 
                src="/images/Lowell_logo.jpg"
                loading="lazy"
                alt="UML logo"
                className="w-36 h-36 md:w-44 md:h-44 object-contain rounded-2xl"

                />

                <div className="md:w-2/3 space-y-3 text-center md:text-left">
                    <h2 className="text-3xl font-bold">University of Massachusetts Lowell</h2>
                    <p className="text-xl text-gray-700">Bachelor of Science in Computer Science</p>
                    <p className="text-gray-600">Graduation: May 2027</p>
                </div>
            </motion.div>

        <section id="recent-coursework">
            {/* Initial courswork container */}
            <motion.div
                variants={fadeSlide}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.01 }}
                className="mt-20 flex flex-col items-center"
            >
                <h2 className="text-3xl font-bold mb-10"> Recent Coursework</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl w-full">
                    {recentClasses.map((course, i) => {
                        const Icon = course.icon;
                        return (
                            <motion.div
                            key={i}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
                            }}
                            className= "bg-white/80 p-5 text-center rounded-2xl shadow-md border border-gray-200 hover:-translate-y-1 transition-transform duration-300"
                        >
                            <Icon className="text-3xl text-blue-600 mx-auto" />
                            <p className="mt-3 font-medium">{course.label}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>

            {/* View all course container button */}
            <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{
                    scale: 1.08,
                    boxShadow: "0px 8px 15px rgba(59,130,246,0.3)"
                }}
                className="mt-10 px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition block mx-auto"
            >
                <div className="flex items-center gap-2">
                    {isExpanded ? <FiChevronUp /> : <FiChevronDown />}
                    {isExpanded ? "Hide courses" : "View all courses"}
                </div>
            </motion.button>

            
            <motion.div
                variants={expandCollapseVariant}
                animate={isExpanded ? "expanded" : "collapsed" }
                initial="collapsed"
                className="overflow-hidden w-full max-w-4xl mx-auto"
            >
                {/* all coursework container */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-base mt-10">
                    {classes.map((course, i) => {
                        const Icon = course.icon;
                        return (
                            <motion.div 
                                className="flex flex-col items-center bg-white/80 p-6 rounded-2xl shadow-md border border-gray-200
                                hover:-translate-y-1 transition-transform duration-300"
                                key={i}
                                variants={fadeSlide}
                                initial="hidden"
                                whileInView="visible"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
                                viewport={{ once: true, amount: 0.01 }}
                            >
                                <Icon className="text-3xl text-blue-600"/>
                                <p className="mt-2 text-center font-medium">{course.label}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </motion.div>
        </section>  
    </section>
    )
}