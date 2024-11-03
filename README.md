# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Preview mobile](./design/preview_mobile.jpg)
![Preview desktop](./design/preview_desktop.jpg)

### Links

- Solution URL: [Github repository](https://github.com/Jenny-Eikens/faq-accordion)
- Live Site URL: [Live site](https://jenny-eikens.github.io/faq-accordion/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- Typescript
- [React](https://reactjs.org/) - JS library
- [TailwindCSS](https://tailwindcss.com/) - CSS framework

### What I learned

I learned when to use grid rather than flexbox and how to work with it. I'm not very confident with using a grid layout as I typically opt for flexbox. However, this project has shown me instances where grid is the better option. In the example below, I initially tried to use max-height: 0 for when the FAQ item is closed and max-height: 100% for when it is open. However, this prevented the transition effect because, as I learned, the browser has to calculate the height based on the answer's content every time. Using grid fractions instead solved this issue:

```jsx
<div className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out
  ${isOpen ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"}`}
  >
```

I also improved my understanding of CSS transitions as I used them for expanding and collapsing the answers.

### Continued development

This was my first time working with TailwindCSS and I plan on using it again in future projects. I wanted to use a CSS framework but didn't like the inability to customize elements that comes with Bootstrap. Although the HTML ends up looking quite cluttered, I like the simplicity and flexibility of Tailwind.

### Useful resources

- [axe DevTools - Web Accessibility Testing](https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd) - This Chrome extension helped me test the accessibility of my website to make sure it is as inclusive as possible.

## Author

- Website - [Jennifer Eikens](https://jenny-eikens.github.io/portfolio-page/)
- Frontend Mentor - [@Jenny-Eikens](https://www.frontendmentor.io/profile/Jenny-Eikens)
- GitHub - [Jenny-Eikens](https://github.com/Jenny-Eikens)
