import React from "react";
import ProfilePic from "../assets/passport.jpeg";
import { animate, motion } from "framer-motion";
import { animateSection } from "../utils/animateSection";

function About() {
  return (
    <section
      id="about"
      className="py-[30px] sm:pt-[30px] sm:pb-[100px] max-w-[900px]  text-white/25 flex flex-col justify-center mx-auto font-sfMonoRegular overflow-x-hidden"
    >
      <div className="about-heading w-fit flex flex-row  mt-[10px] mb-[40px] ">
        <div className="text-theme-green flex items-center text-[15px] sm:text-[20px]">
          01.{" "}
        </div>
        <h1 className="text-theme-gray-light min-w-fit ml-[10px] text-[26px] sm:text-[32px]  flex justify-center items-center font-calibreSemiBold fontFix">
          About Me{" "}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row align-middle min-h-full text-[20px] font-calibreRegular text-theme-gray-deep font-medium ">
        <div className="">
          <p className="mb-4">
             I am an ardent AI and ML enthusiast with an insatiable curiosity for the realm of intelligent machines.
             Exploring the intricacies of artificial intelligence and machine learning is not just a hobby,
             but my passion that drives me ceaselessly. My journey began with a fascination for algorithms and data patterns,
             propelling me to dive deep into the world of neural networks, deep learning, and predictive modeling.
            {" "}
            , With a solid foundation in mathematics and programming, 
              I revel in crafting innovative solutions to intricate problems.
              My academic background, coupled with hands-on projects,
              has honed my skills in transforming raw data into valuable insights.
              I relish every opportunity to collaborate with like-minded individuals,
              exchanging ideas and pushing the boundaries of innovation.
          </p>
          <p className="mb-4">
            Here are a few technologies I’ve been working with recently:
          </p>
          <div className="recent-skills">
            <div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">
              TensorFlow{" "}
            </div>
            <div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">
              PyTorch
            </div>
            <div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">
              Django
            </div>
            <div className="recent-skills-skill relative mb-[10px] pl-[20px] font-sfMonoRegular text-[14px]">
              Neural Networks
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 md:mt-0 ">
          <div className="md:ml-[55px] wrap-image w-[200px] md:w-[250px] lg:w-[300px]">
            <img src={ProfilePic} alt="profile pic" className="" />
          </div>
        </div>
      </div>
    </section>
  );
}

function animatedSection() {
  return animateSection(About);
}

export default animatedSection;
