import React from "react";
import { motion } from "framer-motion";
import { Database, Globe, Server, Palette } from "lucide-react";

const About: React.FC = () => {
  const skills = [
    {
      name: "Frontend Development",
      icon: Globe,
      level: 95,
      color: "from-blue-500 to-cyan-500",
      description: "React, Vue, Angular",
    },
    {
      name: "Backend Development",
      icon: Server,
      level: 88,
      color: "from-green-500 to-emerald-500",
      description: "Node.js, Python, Java",
    },
    {
      name: "Database Design",
      icon: Database,
      level: 85,
      color: "from-purple-500 to-violet-500",
      description: "PostgreSQL, MongoDB",
    },
    {
      name: "UI/UX Design",
      icon: Palette,
      level: 82,
      color: "from-orange-500 to-amber-500",
      description: "Figma, Adobe XD",
    },
  ];

  const technologies = [
    {
      name: "JavaScript",
      color: "bg-gradient-to-r from-yellow-400 to-yellow-600",
      textColor: "text-white",
      icon: "📜",
    },
        {
      name: "TypeScript",
      color: "bg-gradient-to-r from-blue-500 to-blue-700",
      textColor: "text-white",
      icon: "📘",
    },
    {
      name: "React.js",
      color: "bg-gradient-to-r from-blue-400 to-blue-600",
      textColor: "text-white",
      icon: "⚛️",
    },
    {
      name: "Node.js",
      color: "bg-gradient-to-r from-green-500 to-green-700",
      textColor: "text-white",
      icon: "🟢",
    },
    {
      name: "PostgreSQL",
      color: "bg-gradient-to-r from-indigo-500 to-indigo-700",
      textColor: "text-white",
      icon: "🐘",
    },
    {
      name: "MongoDB",
      color: "bg-gradient-to-r from-green-600 to-green-800",
      textColor: "text-white",
      icon: "🍃",
    },
    {
      name: "Next.js",
      color: "bg-gradient-to-r from-gray-800 to-gray-700",
      textColor: "text-white",
      icon: "▲",
    },
    {
      name: "Tailwind",
      color: "bg-gradient-to-r from-cyan-400 to-cyan-600",
      textColor: "text-white",
      icon: "🎨",
    },
    {
      name: "Three.js",
      color: "bg-gradient-to-r from-purple-500 to-purple-700",
      textColor: "text-white",
      icon: "🎭",
    },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[60%] h-[60%] bg-gradient-radial from-blue-400/20 to-transparent blur-3xl rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-accent-600 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <p className="text-lg md:text-xl mt-4 text-gray-400 max-w-2xl mx-auto">
            Passionate developer with{" "}
            <span className="font-semibold">2+ years</span> of experience
            building scalable and delightful digital products.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left - Bio and Tech */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <h3 className="text-3xl font-bold text-gray-200 mb-8">
                👋 Hi, I'm{" "}
                <span className="text-blue-400">Mohammad Toushif</span>
              </h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                I'm a full-stack developer passionate about creating impactful
                and seamless digital experiences. I thrive in building
                high-performance web apps using modern frameworks & clean
                architectures.
              </p>
              <p className="mt-4 text-lg text-gray-400 leading-relaxed">
                Outside of coding, I explore new technologies, contribute to
                open source, and enjoy nature 🌿. I strongly believe in writing
                maintainable code and crafting pixel-perfect UI/UX.
              </p>

              {/* Tech Pills */}
              <motion.div>
                <h4 className="text-xl font-semibold text-gray-200 mb-6">
                  🚀 Technologies I Love
                </h4>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.15, y: -4 }}
                      transition={{ delay: index * 0.05 }}
                      viewport={{ once: true }}
                      className={`px-5 py-2.5 bg-gradient-to-r ${tech.color} text-white rounded-full text-sm font-semibold flex items-center gap-2 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer`}
                    >
                      <span className="text-lg">{tech.icon}</span>
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <h3 className="text-3xl font-bold text-gray-300">
              💡 Skills & Expertise
            </h3>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white/80 backdrop-blur-sm text-gray-600 hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50  p-3 rounded-2xl"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${skill.color} shadow-md 
                        group-hover:scale-110 transform transition-transform duration-300`}
                      >
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-lg text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="relative w-full bg-gray-200 dark:bg-dark-700 rounded-full h-3 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{
                        delay: index * 0.1 + 0.5,
                        duration: 1.2,
                        ease: "easeOut",
                      }}
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} relative`}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-shimmer"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
