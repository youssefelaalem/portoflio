/* eslint-disable react/no-unescaped-entities */
import "./hero.css";
import Lottie from "lottie-react";
import animationDevelopment from "../../animation/animationDevelopment.json";
import { useRef } from "react";
import { motion } from "framer-motion";

function Hero() {
  const lottieRef = useRef();
  let currentMode = localStorage.getItem("currentMode") || "dark";
  return (
    <section className="flex hero" id="hero">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/images/formal.png"
            alt="imagePortfolio"
          />
          {/* <div className="icon-verified"></div> */}
        </div>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="title"
        >
          Software Engineer
        </motion.h1>
        <p className="subtitle">
          I'm Youssef Muhammad Ashref Elaalem, a Software Developer and 2024
          Computer Science graduate with experience across frontend and backend
          technologies. I enjoy building scalable web applications, solving
          complex problems, and delivering clean, user-focused digital
          experiences.
        </p>
        <div className="allIcons flex">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-twitter"></div>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-instagram"></div>
          </a>
          <a
            href="https://github.com/youssefelaalem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-github"></div>
          </a>
          <a
            href="https://www.linkedin.com/in/youssef-elaalem-8a3b54251/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon icon-linkedin-square"></div>
          </a>
        </div>
        <div className="CV_Container">
          <a
            className={`${
              currentMode === "dark" ? "cv-Dark-button" : "cv-glass-button"
            }`}
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1JfYvKrjo5RHiICpJm-gnV8lF6_W4MHLX/view?usp=sharing"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie
          style={{ height: 400 }}
          onLoadedImages={() => {
            //https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={animationDevelopment}
        />
      </div>
    </section>
  );
}

export default Hero;
