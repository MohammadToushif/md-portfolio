import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Rocket, Code2, Trophy } from "lucide-react";

const Experience: React.FC = () => {
 const experiences = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Freelancer",
    period: "Aug 2025 - Present",
    type: "Freelance",
    description:
      "Working with clients on diverse projects as a full-stack developer. Building scalable web applications, handling both frontend and backend, and delivering end-to-end solutions with modern technologies.",
    achievements: [
      "Delivered multiple client projects with 100% satisfaction",
      "Implemented optimized architectures for better scalability",
      "Managed projects independently, from planning to deployment",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Laravel",
      "Tailwind CSS",
      "MySQL",
      "PostgreSQL",
      "Docker",
      "AWS",
    ],
    icon: Briefcase,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Fullstack Developer",
    company: "ePointer Consultancy Services Pvt. Ltd.",
    period: "Feb 2025 - July 2025",
    type: "Full-time",
    description:
      "Built and maintained full-stack applications using Laravel (PHP), JavaScript, MySQL, and Alpine.js. Designed and consumed RESTful APIs, developed interactive UI components, and optimized database performance.",
    achievements: [
      "Delivered responsive and dynamic full-stack applications",
      "Designed and consumed RESTful APIs in Laravel",
      "Optimized MySQL database with complex queries and indexing",
    ],
    technologies: [
      "Laravel",
      "PHP",
      "JavaScript",
      "Alpine.js",
      "Tailwind CSS",
      "MySQL",
    ],
    icon: Rocket,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Deosoft IT Services Pvt. Ltd.",
    period: "July 2023 - Jan 2025",
    type: "Full-time",
    description:
      "Developed and maintained 10+ responsive web applications using React.js, JavaScript, Bootstrap, and Tailwind CSS. Integrated RESTful APIs, optimized performance, and improved SEO and accessibility.",
    achievements: [
      "Increased user engagement by 30% through improved UI/UX",
      "Reduced API response time by 20% with efficient integration",
      "Boosted mobile compatibility by 40% with responsive design",
      "Improved SEO and performance with a 15% faster load time",
    ],
    technologies: [
      "React.js",
      "JavaScript",
      "Bootstrap",
      "Tailwind CSS",
      "HTML",
      "CSS",
      "RESTful APIs",
    ],
    icon: Code2,
    color: "from-purple-500 to-violet-500",
  },
];


  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 relative">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-accent-600 bg-clip-text text-transparent mb-6">
           Work Experience
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            A journey of code, creativity, and continuous growth.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="relative space-y-12 sm:space-y-16 before:content-[''] before:absolute before:top-0 before:left-4 sm:before:left-1/2 before:-ml-[1px] before:w-[2px] before:h-full before:bg-gradient-to-b before:from-transparent before:via-purple-500 before:via-[50%] before:to-transparent"
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              variants={{ cardVariants }}
              className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 sm:gap-6 ${
                i % 2 === 0 ? "md:flex-row-reverse md:text-right" : ""
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 sm:left-1/2 -ml-2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 shadow-lg border border-white dark:border-gray-800" />

              {/* Card */}
              <div className="w-full md:w-1/2 group">
                <div
                  className="relative bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg 
                  border border-gray-100 dark:border-dark-700 group-hover:shadow-purple-500/40 transition-all duration-500"
                >
                  {/* Icon */}
                  <div
                    className={`absolute -top-5 sm:-top-6 left-5 sm:left-6 p-3 sm:p-4 rounded-xl bg-gradient-to-r ${exp.color} shadow-lg`}
                  >
                    <exp.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>

                  {/* Content */}
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                    {exp.title}
                  </h4>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm sm:text-base">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">
                    {/* {exp.location} •  */}
                    {exp.period} • {exp.type}
                  </p>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4 sm:mb-5">
                    <h5 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2 text-sm sm:text-base">
                      <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 font-bold" />
                      Key Achievements
                    </h5>
                    <ul className="mt-2 space-y-1 sm:space-y-2">
                      {exp.achievements.map((a, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-gray-600 dark:text-gray-300 text-sm sm:text-base"
                        >
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full mt-2 mr-2 sm:mr-3 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-0.5 sm:py-1 bg-gray-100 dark:bg-dark-700/80 text-gray-800 dark:text-gray-200 rounded-full text-xs sm:text-sm font-medium 
                        hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
