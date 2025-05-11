"use client";

import data from "@/utils/data.json";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-18"
    >
      <motion.h2
        id="work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-6xl lg:text-8xl tracking-tighter font-bold"
      >
        Work
      </motion.h2>
      <div className="flex flex-col items-end mt-16">
        {data.work.map((work) => (
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="w-full xl:w-3/4 mb-10 border-b border-b-foreground/20"
            key={`${work.company}-work`}
          >
            <div className="text-3xl lg:text-5xl tracking-tighter font-bold">
              {work.company}
            </div>
            <div className="flex flex-col lg:flex-row justify-between mt-4 text-md lg:text-xl text-foreground/70">
              <span>{work.title}</span>
              <span>{work.date}</span>
            </div>
            <p className="text-xl lg:text-2xl mb-10 mt-4 normal-case">
              {work.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Work;
