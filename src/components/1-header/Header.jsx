import { useEffect, useState } from "react";
import "./header.css";
function Header() {
  const [appear, setAppear] = useState(false);
  const appearHandler = () => {
    setAppear(true);
    return appear;
  };
  const disappearHandler = () => {
    setAppear(false);
    return appear;
  };

  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") || "dark"
  );

  useEffect(() => {
    console.log("theme", theme);
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  return (
    <header className="flex">
      <button className="menu icon-menu flex" onClick={appearHandler} />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="#hero">About</a>
          </li>
          <li>
            <a href="#hero"> Articles</a>
          </li>
          <li>
            <a href="#Projects">Projects</a>
          </li>
          {/* <li><a href="">Speaking</a></li> */}
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        className="mode flex"
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
      >
        <span className={theme === "dark" ? "icon-moon-o" : "icon-sun"}></span>
      </button>
      {appear && (
        <div className="fixed">
          <ul className="modal">
            <li>
              <button
                className="icon-close1"
                style={{ color: theme === "dark" ? "white" : "gray" }}
                onClick={disappearHandler}
              />
            </li>
            <li>
              <a href="#hero">About</a>
            </li>
            <li>
              <a href="#hero">Articles</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            {/* <li><a href="">Speaking</a></li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
