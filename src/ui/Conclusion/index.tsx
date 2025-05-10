"use client";

import { motion } from "framer-motion";
import CopyClipboard from "../Introduction/copy-clipboard";
import Link from "next/link";
import GithubIcon from "../../../public/images/github.svg";

const Conclusion = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mt-48"
    >
      <motion.div className="text-5xl tracking-tighter font-bold text-center mb-10 nor">
        Got a cool ideia or project?
        <br />
        Just send me an email!
      </motion.div>
      <div className="flex justify-center mb-48">
        <CopyClipboard />
      </div>
      <Link
        className="text-center normal-case flex justify-center mb-6 underline gap-2 items-center"
        href="#"
      >
        <GithubIcon className="text-foreground size-5" />
        Check this project Github page
      </Link>
    </motion.div>
  );
};

export default Conclusion;
