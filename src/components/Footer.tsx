import React from "react";
import { motion } from "framer-motion";
import { Heart, Linkedin, Github, Twitter, Mail } from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      href: "#",
      color:
        "hover:text-gray-200 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "#",
      color: "hover:text-blue-400 hover:drop-shadow-[0_0_10px_rgb(96,165,250)]",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "#",
      color: "hover:text-sky-400 hover:drop-shadow-[0_0_10px_rgb(56,189,248)]",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      href: "#",
      color:
        "hover:text-pink-400 hover:drop-shadow-[0_0_10px_rgb(244,114,182)]",
    },
  ];

  return (
    <footer className="relative overflow-hidden pt-20 pb-8 px-6 sm:px-12 lg:px-24 text-gray-300">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          {/* Logo / Title */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className="font-bold text-4xl sm:text-5xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wide drop-shadow-lg"
          >
            Md Portfolio
          </motion.h1>

          <p className="max-w-xl text-gray-400 text-lg leading-relaxed font-light">
            Building the future, one line of code at a time.
          </p>

          {/* Social icons with colorful glow */}
          <div className="flex justify-center gap-10 mt-5">
            {socialLinks.map(({ icon, href, color }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener"
                whileHover={{ scale: 1.3, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={`text-gray-400 transition duration-50 ${color}`}
                aria-label="Social link"
              >
                {icon}
              </motion.a>
            ))}
          </div>

          {/* Divider & copyright */}
          <div className="mt-5 border-t-3 border-gray-500 pt-6 text-lg">
            <div className="text-gray-400 flex flex-col md:flex-row justify-center items-center gap-2">
              © {new Date().getFullYear()} Md Portfolio. All rights reserved. |
              <p className="flex items-center gap-2">
                Made with
                <Heart className="w-5 h-5 text-red-500 animate-pulse" />
                <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-400 bg-clip-text text-transparent font-semibold animate-gradient bg-[length:200%_200%]">
                  & React
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
