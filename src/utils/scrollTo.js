import { animateScroll } from "./animateScroll";

const logError = () =>
  console.error(
    `Invalid element, are you sure you've provided element id or react ref?`
  );

const getElementPosition = (element) => element.offsetTop;

export const scrollTo = ({ id, ref = null, duration = 3000 }) => {
  // the position of the scroll bar before the user clicks the button
  //   const initialPosition = window.scrollY;
  const initialPosition = window.scrollY;
//   const initialPosition = window.scrollY;
  // decide what type of reference that is
  // if neither ref or id is provided  set element to null
  const element = ref ? ref.current : id ? document.getElementById(id) : null;
  
  if (!element) {
    // log error if the reference passed is invalid
    logError();
    return;
  }
  
  // styling active nav 
  const activeUl = document.querySelector("ul.active");
  activeUl ? activeUl.classList.remove("active") : console.log("no active uls");
  const nextActiveUl = document.querySelector(`#ul-${id}`);
  nextActiveUl.classList.add("active");

  // close mobile nav
  const btns = document.querySelector("header").querySelectorAll("button");
  const closeBtn = btns[btns.length-1];
  closeBtn.click();


  animateScroll({
    targetPosition: getElementPosition(element),
    initialPosition,
    duration,
  });
};
