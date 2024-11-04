import React from "react";

interface FAQProps {
  question: any;
  isOpen: any;
  onClick: () => void;
}

export default function FAQ({ isOpen, onClick, question }: FAQProps) {
  return (
    <>
      <div className="py-4 px-2 md:py-5 mx-3 border-b border-graypurple border-opacity-[0.1] border-solid last-of-type:border-b-0">
        <button className="w-full flex justify-between" onClick={onClick}>
          <span className="text-base md:text-lg my-auto text-left w-[80%] md:w-[90%] leading-tight text-darkpurple font-[600] hover:text-svgpink transition ease-in-out duration-150">
            {question.question}
          </span>
          <span>
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                fill="none"
                viewBox="0 0 30 31"
              >
                <path
                  fill="#301534"
                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="31"
                fill="none"
                viewBox="0 0 30 31"
              >
                <path
                  fill="#AD28EB"
                  d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"
                />
              </svg>
            )}
          </span>
        </button>
        <div
          className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out
            ${isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"}`}
        >
          <p className="font-[400] text-sm md:text-base w-full leading-normal text-graypurple overflow-hidden">
            {question.answer}
          </p>
        </div>
      </div>
    </>
  );
}
