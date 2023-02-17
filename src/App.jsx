import WholeName from "./assets/WholeName.png";

import Header from "./Sections/Header";
import About from "./Sections/About";
import MySkillSets from "./Sections/MySkillSets";
import ContactMe from "./Sections/ContactMe";
import Footer from "./Sections/Footer";

import {useRef} from "react";

function App() {
  const aboutRef = useRef();
  const mySkillSetsRef = useRef();
  const contactMeRef = useRef();
  const footerRef = useRef();

  return (
    <div className='w-screen'>
      <img src={WholeName} className='absolute mt-56 ml-16 laptop:hidden' />

      <Header
        aboutRef={aboutRef}
        mySkillSetsRef={mySkillSetsRef}
        contactMeRef={contactMeRef}
      />
      <About aboutRef={aboutRef} footerRef={footerRef} />
      <MySkillSets mySkillSetsRef={mySkillSetsRef} />
      <ContactMe contactMeRef={contactMeRef} />
      <Footer
        footerRef={footerRef}
        aboutRef={aboutRef}
        mySkillSetsRef={mySkillSetsRef}
        contactMeRef={contactMeRef}
      />

      <div
        className='font-Inconsolata font-semibold text-lg tracking-wide 
        bg-skillSetBgColor text-secondaryTextColor flex justify-center
        pb-8'
      >
        Designed by John Dewey
      </div>
    </div>
  );
}

export default App;
