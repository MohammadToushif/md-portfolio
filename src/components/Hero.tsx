import React from "react";
import { motion } from "framer-motion";
import { Code, Github, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-16 mt-5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          {/* Profile Image with rotating glow ring */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 220 }}
            className="relative mx-auto w-36 h-36 sm:w-44 sm:h-44 mb-10 rounded-full p-[4px] bg-gradient-to-tr from-blue-400 via-purple-500 to-cyan-400"
          >
            <div className="absolute inset-0 rounded-full blur-xl bg-gradient-to-tr from-blue-400 via-purple-500 to-cyan-400 opacity-40" />
            <img
              src="vision.jpg"
              alt="Md Toushif"
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-2xl relative"
              loading="lazy"
              draggable={false}
            />
            <motion.div
              className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white flex items-center justify-center"
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Code className="w-6 h-6 text-white" />
            </motion.div>
          </motion.div>

          {/* Name + Title */}
          <div className="space-y-5">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-7xl font-bold text-white tracking-tight select-text"
              style={{ textShadow: "0 0 25px rgba(59,130,246,0.7)" }}
            >
              Md. Toushif
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl sm:text-3xl font-semibold"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg">
                Full-Stack Developer
              </span>
              <br />
              <span className="text-gray-200">
                Creating digital experiences that matter
              </span>
            </motion.div>
          </div>

          {/* CTA Buttons with glowing border */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 25px rgba(59,130,246,0.8)",
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-8 py-3 sm:px-10 sm:py-4 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 shadow-xl relative overflow-hidden"
            >
              <Mail size={22} className="mr-2" /> Get In Touch
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0 0 20px rgba(59,130,246,0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 sm:px-10 sm:py-4 rounded-full font-semibold border border-blue-400 text-blue-300 hover:text-white hover:bg-blue-500/30 backdrop-blur-md shadow-xl"
            >
              View My Work
            </motion.button>
          </motion.div>

          {/* Social Links with parallax hover */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex justify-center space-x-8"
          >
            {[{ icon: Github }, { icon: Linkedin }, { icon: Mail }].map(
              ({ icon: Icon }, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{
                    scale: 1.3,
                    rotate: 5,
                    y: -6,
                    boxShadow: "0 8px 25px rgba(59,130,246,0.6)",
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:text-blue-400 backdrop-blur-lg"
                >
                  <Icon size={26} />
                </motion.a>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
