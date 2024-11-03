import React from "react";
import "./index.css";
import Accordion from "./components/Accordion";

function App() {
  return (
    <>
      <Accordion />
      <footer className="attribution text-sm text-center absolute bottom-[0.5rem] left-0 right-0">
        <div>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="https://github.com/Jenny-Eikens" target="_blank">
            Jennifer Eikens
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
