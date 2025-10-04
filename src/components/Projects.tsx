import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Eye,
  Filter,
  Star,
  Calendar,
  Users,
} from "lucide-react";

const Projects: React.FC = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
  {
    id: 1,
    title: "Jharkhand Biodiversity Board Portal",
    description:
      "A government portal for managing biodiversity-related applications, approvals, and public services in Jharkhand. Built with WordPress, it streamlines information sharing, scheme updates, and citizen engagement.",
    image: "jharkhand-biodiversity-board.png",
    technologies: ["WordPress", "PHP", "MySQL"],
    github: "#",
    demo: "https://jbb.jharkhand.gov.in/",
    category: "fullstack",
    featured: false,
    stats: { stars: 0, users: "10k+", date: "2024" },
    gradient: "from-blue-500 to-purple-600",
  },
  {
    id: 2,
    title: "Jharkhand Gau Seva Ayog Portal",
    description:
      "A welfare portal for livestock and cow protection schemes in Jharkhand. Developed on WordPress to manage scheme content, announcements, and beneficiary information with a user-friendly CMS interface.",
    image: "jharkhand-gauseva-aayog.png",
    technologies: ["WordPress", "PHP", "MySQL"],
    github: "#",
    demo: "https://jhgausevaayog.org/hi/",
    category: "fullstack",
    featured: false,
    stats: { stars: 0, users: "5k+", date: "2024" },
    gradient: "from-green-500 to-emerald-600",
  },
  {
    id: 3,
    title: "Sure Education Consultancy Portal",
    description:
      "A consultancy platform providing education and career guidance services. Built with WordPress, it manages course information, student inquiries, and content updates seamlessly for better user experience.",
    image: "sure-education.png",
    technologies: ["WordPress", "PHP", "MySQL"],
    github: "#",
    demo: "https://sureeducation.in/",
    category: "fullstack",
    featured: false,
    stats: { stars: 0, users: "2k+", date: "2024" },
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: 4,
    title: "Mukhymantri Abua Swasthya Suraksha Yojana",
    description:
      "A large-scale healthcare portal that manages beneficiary applications, KYC verification, and operator status. Built with React and Tailwind, it ensures smooth processing of health scheme benefits with transparency and speed.",
    image: "mmassy.png",
    technologies: ["React.js", "Tailwind CSS", "Material UI"],
    github: "#",
    demo: "https://bis.jharkhand.gov.in/",
    category: "frontend",
    featured: true,
    stats: { stars: 0, users: "15k+", date: "2024" },
    gradient: "from-purple-500 to-pink-600",
  },
  {
    id: 5,
    title: "Mukhya Mantri Maiya Samman Yojana",
    description:
      "A women-centric welfare application that manages scheme applications, KYC verification, and approval workflows. Built with .NET Core MVC and PostgreSQL, it simplifies benefit distribution and supports women empowerment initiatives.",
    image: "mmmsy.png",
    technologies: [".NET Core MVC", "C#", "Entity Framework", "PostgreSQL"],
    github: "#",
    demo: "https://mmmsy.jharkhand.gov.in/",
    category: "frontend",
    featured: false,
    stats: { stars: 0, users: "8k+", date: "2024" },
    gradient: "from-teal-500 to-green-600",
  },
  {
    id: 6,
    title: "State Employees Health Insurance Portal",
    description:
      "A health insurance management system for state employees to apply for coverage, track claims, and download policy documents. Built with .NET Core MVC and PostgreSQL, it enhances accessibility and digitizes the entire workflow.",
    image: "sehis.png",
    technologies: [".NET Core MVC", "C#", "Entity Framework", "PostgreSQL"],
    github: "#",
    demo: "https://sehis.jharkhand.gov.in/",
    category: "frontend",
    featured: true,
    stats: { stars: 0, users: "12k+", date: "2024" },
    gradient: "from-cyan-500 to-blue-600",
  },
];


  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    {
      id: "frontend",
      name: "Frontend",
      count: projects.filter((p) => p.category === "frontend").length,
    },
    {
      id: "backend",
      name: "Backend",
      count: projects.filter((p) => p.category === "backend").length,
    },
    {
      id: "fullstack",
      name: "Full Stack",
      count: projects.filter((p) => p.category === "fullstack").length,
    },
    // { id: 'mobile', name: 'Mobile', count: projects.filter(p => p.category === 'mobile').length },
    // { id: 'ai', name: 'AI/ML', count: projects.filter(p => p.category === 'ai').length },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-accent-600 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my recent work and personal projects that demonstrate
            my skills and passion for development
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setFilter(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`group flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category.id
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg"
                  : "bg-white/80 dark:bg-dark-800/80 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-dark-600"
              }`}
            >
              <Filter size={16} />
              <span>{category.name}</span>
              <span
                className={`px-2 py-1 rounded-full text-xs ${
                  filter === category.id
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400"
                }`}
              >
                {category.count}
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`group relative bg-white/80 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-dark-700 ${
                  project.featured ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div
                    className={`absolute top-6 left-6 z-10 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}
                  >
                    ⭐ Featured
                  </div>
                )}

                {/* Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.demo}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300 shadow-lg"
                        aria-label="View demo"
                      >
                        <Eye size={24} />
                      </motion.a>
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-300 shadow-lg"
                        aria-label="View source code"
                      >
                        <Github size={24} />
                      </motion.a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-6">
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Star size={14} className="text-yellow-500" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users size={14} />
                        <span>{project.stats.users}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={14} />
                        <span>{project.stats.date}</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="px-3 py-1 bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-4 pt-4">
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold transition-colors duration-300"
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>

                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-semibold transition-colors duration-300"
                    >
                      <Github size={18} />
                      <span>Source</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(14, 165, 233, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-accent-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative">View All Projects on GitHub</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
