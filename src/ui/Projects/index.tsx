"use client";

import data from "@/utils/data.json";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-18"
    >
      <motion.h2
        id="projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-6xl lg:text-8xl tracking-tighter font-bold"
      >
        Projects
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 min-h-36 gap-10 mt-16 auto-rows-fr"
      >
        {data.projects.map((project) => (
          <Link
            href={project.website}
            key={`${project.title}-work`}
            className="rounded-xl relative group overflow-hidden h-full"
          >
            <Image
              width={500}
              height={500}
              alt="Project Image"
              src={`/images${project.imgSrc}`}
              className="bg-white rounded-xl w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-40 transition-opacity duration-300 rounded-xl"></div>
            <div className="absolute top-7/12 md:top-5/12 lg:top-7/12 px-10 normal-case text-center">
              <div className="font-bold text-3xl mb-4">{project.title}</div>
              <div className="text-lg">{project.description}</div>
            </div>
          </Link>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
