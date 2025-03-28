import React from "react";
import FAQ from "./FAQ";
import { useState } from "react";

export default function Accordion() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  function handleClick(id: number) {
    if (openFAQ === id) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(id);
    }
  }

  return (
    <>
      <main className="bg-white flex flex-col items-center justify-evenly rounded-[12px] shadow-md w-[85vw] md:w-[55vw] xl:w-[45vw] min-h-[55vh]">
        <header className="flex w-full justify-start items-center ml-1 mb-1 px-4 pt-5 md:m-1.5 md:mb-4 md:px-6 md:pt-10">
          <span className="flex justify-center">
            <svg
              className="w-[75%] md:w-[85%]"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="41"
              fill="none"
              viewBox="0 0 40 41"
            >
              <path
                fill="#AD28EB"
                d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
              />
            </svg>
          </span>
          <h1 className="ml-3 md:ml-5 text-5xl md:text-6xl font-[700] text-darkpurple relative">
            FAQs
          </h1>
        </header>
        <div className="p-1 pt-0 md:p-4 md:pt-0">
          {questions.map((question) => (
            <FAQ
              key={question.id}
              question={question}
              onClick={() => handleClick(question.id)}
              isOpen={openFAQ === question.id}
            />
          ))}
        </div>
      </main>
    </>
  );
}

/* array of questions */
const questions = [
  {
    id: 0,
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 1,
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    id: 2,
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    id: 3,
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      " The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];
