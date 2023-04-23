import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import{fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from "../hoc";

const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                  className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{max: 45, scale: 1, speed: 450}}
             className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
              <img src={icon} alt={title} className="w-16 h-16 object-contain " />
              <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
             </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}> Introduction </p>
        <h2 className={styles.sectionHeadText}> Overview </h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
      Hello, I am a software engineering student with a passion for full-stack web development. 
      I started programming in 2020 with C++, Java, and Python, and have gained experience in the MERN stack.
      <br></br>As a full-stack developer, I enjoy solving complex problems and working closely with teams and clients to deliver high-quality solutions. I am always looking to learn new technologies and techniques to improve my skills and stay up-to-date with industry trends.
      <br></br> When I'm not coding, I like to attend hackathons.
      I'm also an avid reader and enjoy spending time outdoors.
      Feel free to contact me if you'd like to discuss how we can work together on your next project.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (<ServiceCard key={service.title} index={index} {...service} />))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about")


{/* <div class="flex items-center justify-center h-screen bg-black">
  <div class="flex">
    <a href="#" class="icon-facebook">
      <div class="layer">
        <span class="fab fa-facebook-f"></span>
        <span class="fab fa-facebook-f"></span>
        <span class="fab fa-facebook-f"></span>
        <span class="fab fa-facebook-f"></span>
        <span class="fab fa-facebook-f"></span>
      </div>
      <span class="text-gray-200 font-medium text-sm ml-2">Facebook</span>
    </a>
    <a href="#" class="icon-twitter">
      <div class="layer">
        <span class="fab fa-twitter"></span>
        <span class="fab fa-twitter"></span>
        <span class="fab fa-twitter"></span>
        <span class="fab fa-twitter"></span>
        <span class="fab fa-twitter"></span>
      </div>
      <span class="text-blue-400 font-medium text-sm ml-2">Twitter</span>
    </a>
    <a href="#" class="icon-instagram">
      <div class="layer">
        <span class="fab fa-instagram"></span>
        <span class="fab fa-instagram"></span>
        <span class="fab fa-instagram"></span>
        <span class="fab fa-instagram"></span>
        <span class="fab fa-instagram"></span>
      </div>
      <span class="text-pink-500 font-medium text-sm ml-2">Instagram</span>
    </a>
    <a href="#" class="icon-linkedin">
      <div class="layer">
        <span class="fab fa-linkedin-in"></span>
        <span class="fab fa-linkedin-in"></span>
        <span class="fab fa-linkedin-in"></span>
        <span class="fab fa-linkedin-in"></span>
        <span class="fab fa-linkedin-in"></span>
      </div>
      <span class="text-blue-600 font-medium text-sm ml-2">LinkedIn</span>
    </a>
    <a href="#" class="icon-youtube">
      <div class="layer">
        <span class="fab fa-youtube"></span>
        <span class="fab fa-youtube"></span>
        <span class="fab fa-youtube"></span>
        <span class="fab fa-youtube"></span>
        <span class="fab fa-youtube"></span>
      </div>
      <span class="text-red-500 font-medium text-sm ml-2">YouTube</span>
    </a>
  </div>
</div> */}
