"use client";

import { motion } from "framer-motion";
import { HiCode, HiSparkles } from "react-icons/hi";
import { FaCode, FaRocket } from "react-icons/fa";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0.8 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0,
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 dark:bg-primary-900 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-primary-300 dark:bg-primary-800 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-primary-400 dark:bg-primary-700 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-30 dark:opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="visible"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-dark-900 dark:text-dark-50">
              {t.hero.greeting}{" "}
            </span>
            <span className="text-gradient">{t.hero.name}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-dark-600 dark:text-dark-300 mb-4"
          >
            {t.hero.title}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-dark-500 dark:text-dark-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <motion.a
              href="#projects"
              className="btn-primary flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t.hero.viewProjects}</span>
              <FaRocket className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              href="#contact"
              className="btn-secondary flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{t.hero.contactMe}</span>
              <HiCode />
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-8 text-4xl text-dark-300 dark:text-dark-600"
          >
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
