import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

function ScrollToTop() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.3 }}
      className="fixed bottom-10 right-10 z-50"
    >
      <motion.button
        onClick={scrollToTop}
        animate={{
          y: [0, 12, 0],
          boxShadow: [
            "0 0 10px #3b82f6",
            "0 0 20px #3b82f6",
            "0 0 10px #3b82f6",
          ],
        }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="p-3 rounded-full bg-white/10 border border-white/20 text-gray-300 hover:text-blue-400 backdrop-blur-lg"
      >
        <ArrowUp size={28} />
      </motion.button>
    </motion.div>
  );
}

export default ScrollToTop;
