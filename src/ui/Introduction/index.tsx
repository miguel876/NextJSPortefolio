"use client";

import CopyClipboard from "./copy-clipboard";
import { motion } from "framer-motion";

const Introduction = () => {
  return (
    <div className="pt-18 h-[calc(100vh-64px)] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl lg:text-8xl tracking-tighter font-bold"
        >
          Frontend Developer
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl lg:text-5xl mt-4 tracking-tighter"
        >
          From Portugal
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl mt-14 tracking-tighter"
        >
          Currently working for <b>Rabobank</b>{" "}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl lg:mt-2 tracking-tighter"
        >
          2024 - Current
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="w-full flex flex-col md:flex-row gap-2 md:gap-5 justify-center items-center text-sm absolute bottom-24 left-1/2 transform -translate-x-1/2"
      >
        <span className="font-bold">{"Let's work together"}</span>
        <CopyClipboard />
      </motion.div>
    </div>
  );
};

export default Introduction;
