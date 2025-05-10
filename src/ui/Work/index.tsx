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
      className="mt-48"
    >
      <motion.h2
        id="work"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-8xl tracking-tighter font-bold"
      >
        Work
      </motion.h2>
      <div className="mt-16">
        {data.work.map((work) => (
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileInView={{ opacity: 1 }}
            className="w-3/4 mb-10 float-right border-b border-b-foreground/20"
            key={`${work.company}-work`}
          >
            <div className="text-5xl normal-case">{work.company}</div>
            <div className="flex justify-between mt-4 text-xl text-foreground/70">
              <span>{work.title}</span>
              <span>{work.date}</span>
            </div>
            <p className="text-2xl mb-10 mt-4 normal-case">
              {work.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Work;
