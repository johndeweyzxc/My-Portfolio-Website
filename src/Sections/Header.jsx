import HeaderName from "../assets/Header/HeaderName.png";

import {useState, useEffect} from "react";

function useIntersection(element, rootMargin) {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      {rootMargin}
    );

    element.current && observer.observe(element.current);

    return () => observer.unobserve(element.current);
  }, []);

  return isVisible;
}

export default function Header({aboutRef, mySkillSetsRef, contactMeRef}) {
  const aboutInViewPort = useIntersection(aboutRef, "-300px");
  const skillSetInViewPort = useIntersection(mySkillSetsRef, "-300px");
  const contactMeInViewPort = useIntersection(contactMeRef, "-300px");

  return (
    <div className='flex fixed w-screen justify-between px-32 py-8 bg-headerBgColor laptop:p-4 laptop:static'>
      <img src={HeaderName} className='laptop:h-[22px]' />
      <nav className='flex laptop:hidden'>
        <div
          className={`
            font-Inconsolata text-lg font-semibold hover:underline cursor-pointer tracking-wider
            ${
              aboutInViewPort ? "text-secondaryColor" : "text-primaryTextColor"
            }`}
          onClick={() => {
            aboutRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "start",
            });
          }}
        >
          About
        </div>
        <div
          className={`mx-10 font-Inconsolata text-lg font-semibold hover:underline cursor-pointer tracking-wider
            ${
              skillSetInViewPort
                ? "text-secondaryColor"
                : "text-primaryTextColor"
            }`}
          onClick={() => {
            mySkillSetsRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "start",
            });
          }}
        >
          Skills
        </div>
        <div
          className={`
            font-Inconsolata text-lg font-semibold hover:underline cursor-pointer tracking-wider
            ${
              contactMeInViewPort
                ? "text-secondaryColor"
                : "text-primaryTextColor"
            }`}
          onClick={() => {
            contactMeRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "start",
            });
          }}
        >
          Contact
        </div>
      </nav>
    </div>
  );
}
