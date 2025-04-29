import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-col items-center"
      >
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <motion.p
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-blue-600 font-medium"
        >
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Loader;
