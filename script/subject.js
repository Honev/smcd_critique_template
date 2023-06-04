import { studentInfo } from "./studentInfo.js";

const propName = `지도교수${index}`;

document.title = `${studentInfo.성명} ${studentInfo.평가회차}차 ${studentInfo[propName]}교수 지도과목`;

const title = document.querySelector("#title");
title.innerHTML = `커뮤니케이션디자인전공</br>${studentInfo.평가연도}년도 졸업작품 ${studentInfo.평가회차}차 평가</br>${studentInfo.성명} ${studentInfo.학번}</br>${studentInfo[propName]}교수 지도과목`;

const innerLinks = document.querySelectorAll(".innerLink");
const innerLinksMap = new Map();
innerLinks.forEach((eachInnerLink) => {
  const href = eachInnerLink.getAttribute("href");
  innerLinksMap.set(eachInnerLink, document.querySelector(href));
  eachInnerLink.removeAttribute("href");
  eachInnerLink.style.cursor = "pointer";
  eachInnerLink.addEventListener("click", (e) => {
    const scrollTarget = innerLinksMap.get(e.currentTarget);
    scrollTarget.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});