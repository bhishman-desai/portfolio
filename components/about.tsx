"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My fascination with computer science started in high school when I
        volunteered for a <span className="font-medium">fundraising event</span>{" "}
        where a team member, a computer science student, spearheaded our online
        efforts. Witnessing how technology connected us with people worldwide
        and facilitated global fundraising left an indelible impression on me.
      </p>
      <p>
        I did my Bachelor's in Information Technology, worked as a{" "}
        <span className="font-medium">Software Developer</span>, and now I'm
        pursuing my Master's in Applied Computer Science at Dalhousie
        University.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is <span className="font-medium">React, Angular, and Next.js</span>. I
        am also familiar with TypeScript and Unity 3D. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not cracking the code</span>, you'll
        catch me gaming 🎮 I love it. But you know what I love even more?{" "}
        <span className="font-medium">Coding those video games!</span> I'm also
        a big fan of Formula 1 (#tifosi for life) 🏎️ and love spending time in
        the kitchen, trying out new recipes. Let's connect, create, and make
        something awesome together!
      </p>
    </motion.section>
  );
}
