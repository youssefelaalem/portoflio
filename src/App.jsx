import { useEffect, useState } from "react";
import Header from "./components/1-header/Header";
import Hero from "./components/2-hero/Hero";
import Main from "./components/3-main/Main";
import Contact from "./components/4-contact/Contact";
import Footer from "./components/5-footer/Footer";
import "./index.css";
function App() {
  const [showArrow_up, setShowArrow_up] = useState(false)
  useEffect(() => {
   window.addEventListener("scroll", ()=>{  
    if(window.scrollY>300){
      setShowArrow_up(true);
    }else{
      setShowArrow_up(false);
    }
   });
  }, [])
  return (
    <div  id="header" className="container">
      <Header />
      <div className="divider" />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />

      <Contact />
      <div className="divider" />

      <Footer />
      <a href="#header" style={{opacity: showArrow_up ? 1 : 0}}>
        <button className="icon-keyboard_arrow_up upper" />
      </a>
    </div>
  );
}

export default App;
