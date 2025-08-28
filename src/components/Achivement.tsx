import { motion } from "motion/react";
import { Sparkles, Award, Coffee, Users, Zap } from "lucide-react";

function Achivement() {
  const achievements = [
    {
      icon: Award,
      number: "50+",
      label: "Projects Completed",
      color: "text-yellow-400",
      bgColor: "from-yellow-400/50 to-amber-400/50",
    },
    {
      icon: Coffee,
      number: "2+",
      label: "Years Experience",
      color: "text-amber-400",
      bgColor: "from-amber-400/50 to-orange-400/50",
    },
    {
      icon: Users,
      number: "30+",
      label: "Happy Clients",
      color: "text-green-400",
      bgColor: "from-green-400/50 to-emerald-400/50",
    },
    {
      icon: Zap,
      number: "100%",
      label: "Client Satisfaction",
      color: "text-blue-400",
      bgColor: "from-blue-400/50 to-cyan-400/50",
    },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-accent-600 bg-clip-text text-transparent mb-6">
          Achivements
        </h2>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          A showcase of my recent work and personal projects that demonstrate my
          skills and passion for development
        </p>
      </motion.div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-6 lg:px-16">
        {achievements.map((stat, index) => (
          <div
            key={stat.label}
            className="group relative overflow-hidden cursor-pointer"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Animated Background Layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5 rounded-2xl transform transition-transform duration-500 group-hover:scale-110" />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} rounded-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-300`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 rounded-2xl" />

            {/* Glowing Border */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color
                .replace("text-", "from-")
                .replace("-400", "-400/50")} via-transparent ${stat.color
                .replace("text-", "to-")
                .replace(
                  "-400",
                  "-400/50"
                )} p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            >
              <div className="w-full h-full bg-transparent rounded-2xl" />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden rounded-2xl">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 ${stat.color
                    .replace("text-", "bg-")
                    .replace(
                      "-400",
                      "-300"
                    )} rounded-full opacity-0 group-hover:opacity-60 transition-all duration-700`}
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${10 + i * 20}%`,
                    animation: `float 2s ease-in-out infinite ${i * 0.3}s`,
                  }}
                />
              ))}
            </div>

            {/* Content Container */}
            <div className="relative z-10 p-8 text-center transform transition-transform duration-300 group-hover:-translate-y-1">
              {/* Icon with Advanced Effects */}
              <div className="relative mb-6">
                <div
                  className={`absolute inset-0 ${stat.color
                    .replace("text-", "bg-")
                    .replace(
                      "-400",
                      "-400/20"
                    )} rounded-full blur-xl scale-150 opacity-0 group-hover:opacity-100 transition-all duration-500`}
                />
                <div
                  className={`relative w-16 h-16 mx-auto rounded-full bg-gradient-to-br ${stat.bgColor.replace(
                    "/20",
                    "/40"
                  )} flex items-center justify-center border border-white/20 shadow-2xl group-hover:shadow-${
                    stat.color.split("-")[1]
                  }-500/25 transition-all duration-300`}
                >
                  <stat.icon
                    className={`w-8 h-8 ${stat.color} group-hover:scale-125 transition-all duration-300 drop-shadow-lg`}
                  />

                  {/* Rotating Ring */}
                  <div
                    className={`absolute inset-0 border-2 border-dashed ${stat.color
                      .replace("text-", "border-")
                      .replace(
                        "-400",
                        "-400/50"
                      )} rounded-full animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    style={{ animationDuration: "3s" }}
                  />
                </div>

                {/* Sparkle Effects */}
                <div className="absolute -top-2 -right-2 w-4 h-4">
                  <Sparkles
                    className={`w-4 h-4 ${stat.color} opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300`}
                  />
                </div>
              </div>

              {/* Number with Counter Animation Effect */}
              <div className="relative mb-4">
                <div className="text-4xl font-black bg-gradient-to-br from-white via-white to-gray-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                  {stat.number}
                </div>
                <div
                  className={`absolute inset-0 text-4xl font-black ${stat.color} opacity-0 group-hover:opacity-30 blur-sm transition-all duration-300`}
                >
                  {stat.number}
                </div>
              </div>

              {/* Label with Enhanced Typography */}
              <div className="space-y-1">
                <div className="text-sm uppercase tracking-[0.2em] text-white/90 font-bold group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
                <div
                  className={`h-px w-12 mx-auto bg-gradient-to-r ${stat.color
                    .replace("text-", "from-")
                    .replace(
                      "-400",
                      "-400"
                    )} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-2 left-4 right-4">
                <div className="h-px bg-white/10 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${stat.color
                      .replace("text-", "from-")
                      .replace(
                        "-400",
                        "-400"
                      )} to-transparent transform transition-transform duration-700 group-hover:translate-x-0 -translate-x-full`}
                  />
                </div>
              </div>
            </div>

            {/* Hover Overlay Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achivement;
