"use client";
import { useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import coverImage from "../../../public/images/acercade.webp";

// import DoubleSideToSide from "../home/DoubleSideToSide";

const AboutUsTwo = ({ aboutDic, homeDic }) => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <div id="acerca">
      <div className="w-full h-[600px] overflow-hidden top-0 relative flex justify-center items-center flex-col ">
        <div className="absolute bg-dark bg-opacity-60 w-full h-full z-0" />
        <Image
          src={coverImage}
          width={1920}
          height={600}
          priority
          loading="eager"
          alt="about us cover image"
          className="object-cover h-full w-full"
        />
        <div className="absolute z-10 text-white   font-primary w-[50%] maxsm:w-[80%] text-center">
          <h3 className="uppercase text-5xl maxsm:text-3xl tracking-widest mb-5">
            {aboutDic.hero.title}
          </h3>
          <p className="font-secondary">{aboutDic.hero.subtitle}</p>
        </div>
      </div>
      {/* <DoubleSideToSide homeDic={homeDic} /> */}
    </div>
  );
};

export default AboutUsTwo;
