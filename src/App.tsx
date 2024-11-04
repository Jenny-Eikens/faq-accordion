import React from "react";
import "./index.css";
import Accordion from "./components/Accordion";

function App() {
  return (
    <>
      <div className="container flex flex-col min-h-[95vh]">
        <Accordion />
      </div>
      <footer className="attribution text-base text-center pb-2">
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
