/* eslint-disable react/no-unescaped-entities */
import "./hero.css";
import Lottie from "lottie-react";
import animationDevelopment from "../../animation/animationDevelopment.json";
import { useRef } from "react";
import { motion } from "framer-motion";

function Hero() {
  const lottieRef = useRef();
  return (
    <section className="flex hero">
      <div className="left-section">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="/images/formal.png"
            alt="imagePortfolio"
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="title"
        >
          Software designer,founder, and amateur astronaut.
        </motion.h1>
        <p className="subtitle">
          I'm Youssef Elaalem, I will Graduate from the Computer Science
          Department this year 2024 ,. I'm student at Menoufia University,I have
          a passion for web development backend by nodejs and frontend by
          reactjs
        </p>
        <div className="allIcons flex">
          <div className="icon icon-twitter"></div>
          <div className="icon icon-instagram"></div>
          <div className="icon icon-github"></div>
          <div className="icon icon-linkedin-square"></div>
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
