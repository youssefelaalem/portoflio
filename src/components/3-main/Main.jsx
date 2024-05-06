import { useState } from "react";
import "./main.css";
import { allProjects } from "./allProjects.js";
import { motion, AnimatePresence } from "framer-motion";

function Main() {
  const [array, setArray] = useState(allProjects);
  const [active, setActive] = useState("All");

  const clickHandler = (categoryItem) => {
    setActive(categoryItem);

    const newArr = allProjects.filter((item) => {
      const findCategory = item.category.find((items) => {
        return items === categoryItem;
      });
      return findCategory === categoryItem;
    });
    setArray(newArr);
  };

  return (
    <main className="flex">
      <section className="flex leftSection">
        <button
          className={active === "All" ? "active" : null}
          onClick={() => {
            setActive("All");
            setArray(allProjects);
          }}
        >
          All Projects
        </button>
        <button
          className={active === "css" ? "active" : null}
          onClick={() => {
            clickHandler("css");
          }}
        >
          HTML & CSS
        </button>
        <button
          className={active === "js" ? "active" : null}
          onClick={() => {
            clickHandler("js");
          }}
        >
          JavaScript
        </button>
        <button
          className={active === "react" ? "active" : null}
          onClick={() => {
            clickHandler("react");
          }}
        >
          React & Api
        </button>
        {/* <button
          className={active === "NodeJS" ? "active" : null}
          onClick={() => {
            clickHandler("NodeJS");
          }}
        >
          NodeJS & Express
        </button> */}
      </section>
      <section className="flex rightSection">
        <AnimatePresence>
          {array.map((item) => {
            return (
              <motion.article
                layout
                initial={{transform:"scale(.4)"}}
                animate={{transform:"scale(1)"}}
                 transition={{damping:8 , type:"spring" , stiffness:50}}
               
                key={item}
                className="card"
              >
                <img src={item.imgPath} width={266} alt="project image" />
                <div className="box" style={{ width: "266px" }}>
                  <h1 className="title">{item.name}</h1>
                  <p className="subtitle">{item.p}</p>
                  <div className="icons flex">
                    <div className="flex" style={{ gap: "5px" }}>
                      <a href={item.linkProd} target="_blank" className="icon-link"></a>
                      <a href={item.linkGithub} target="_blank" className="icon-github"></a>
                    </div>
                    <div>
                      <a className="flex">
                        more
                        <span
                          style={{ alignSelf: "end" }}
                          className="icon-arrow-right"
                        ></span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}

export default Main;
