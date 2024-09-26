/* eslint-disable react/no-unescaped-entities */
import "./hero.css";
import Lottie from "lottie-react";
import animationDevelopment from "../../animation/animationDevelopment.json";
import { useRef } from "react";
import { motion } from "framer-motion";

function Hero() {
  const lottieRef = useRef();
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
          Software designer.
        </motion.h1>
        <p className="subtitle">
          I'm Youssef Muhammad Ashref Elaalem, I graduated from the Computer
          Science Department this year 2024 ,. a web developer specializing in
          the MERN stack with a focus on frontend development using React. I’m
          passionate about building responsive and dynamic web applications. I
          thrive on solving complex problems and am committed to delivering
          user-friendly, scalable solutions.
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
