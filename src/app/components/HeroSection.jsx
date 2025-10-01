"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss } from "react-icons/si";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Yusak",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "Fullstack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Saya adalah pengembang web yang berfokus pada pembuatan aplikasi modern berbasis Next.js dan React. 
          Saya menyukai arsitektur yang bersih, performa tinggi, serta UI/UX yang intuitif. 
          </p>
          <div className="flex items-center gap-4 text-3xl text-[#ADB7BE] mb-8">
            <SiHtml5 className="cursor-pointer transition-colors hover:text-[#E44D26]" title="HTML5" aria-label="HTML5" />
            <SiCss3 className="cursor-pointer transition-colors hover:text-[#1572B6]" title="CSS3" aria-label="CSS3" />
            <SiJavascript className="cursor-pointer transition-colors hover:text-[#F7DF1E]" title="JavaScript" aria-label="JavaScript" />
            <SiReact className="cursor-pointer transition-colors hover:text-[#61DAFB]" title="React" aria-label="React" />
            <SiNextdotjs className="cursor-pointer transition-colors hover:text-white" title="Next.js" aria-label="Next.js" />
            <SiTailwindcss className="cursor-pointer transition-colors hover:text-[#06B6D4]" title="Tailwind CSS" aria-label="Tailwind CSS" />
          </div>
          
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full overflow-hidden bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/photo_profile.png"
              alt="photo profile"
              fill
              sizes="(max-width: 1024px) 250px, 400px"
              className="object-cover object-center"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
