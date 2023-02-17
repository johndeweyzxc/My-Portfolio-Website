import WebDevelopment from "../assets/Skills/WebDevelopment.png";
import AndroidAppDevelopment from "../assets/Skills/AndroidAppDevelopment.png";
import CloudTechnologies from "../assets/Skills/CloudTechnologies.png";
import PageIndicator2 from "../assets/Skills/PageIndicator2.png";

export default function MySkillSets({mySkillSetsRef}) {
  return (
    <div
      className='px-32 flex items-center justify-between laptop:px-4'
      ref={mySkillSetsRef}
    >
      <div>
        <div
          className='font-Incosolata font-semibold text-secondaryTextColor tracking-wide
        phone:text-sm'
        >
          Tech Stack
        </div>
        <h2
          className='text-secondaryColor font-Inconsolata font-bold text-4xl tracking-wide
        tablet:text-3xl phone:text-2xl'
        >
          Skill-Set
        </h2>
        <div className='my-2 w-16 h-1 bg-secondaryColor' />

        <div className='flex mt-8 phone:flex-col'>
          <div
            className='p-8 py-12 bg-skillSetBgColor rounded-sm flex-1 w-1/5 laptop:w-full 
          laptop:p-8 phone:text-sm'
          >
            <img src={WebDevelopment} className='phone:w-[32px]' />
            <div
              className='font-Inconsolata text-primaryTextColor font-semibold tracking-wide text-md
                mt-4'
            >
              Web Development
            </div>
            <div
              className='font-Inconsolata text-secondaryTextColor mt-2 font-semibold tracking-wide
              text-md'
            >
              I mainly work with HTML, CSS, and JavaScript. Been making
              responsive simple web apps. I use React as my framework.
            </div>
          </div>

          <div
            className='p-8 py-12 mx-8 bg-skillSetBgColor rounded-sm flex-1 w-1/5 laptop:w-full
          laptop:p-8 phone:text-sm phone:my-4 phone:mx-0'
          >
            <img src={AndroidAppDevelopment} className='phone:w-[32px]' />
            <div
              className='font-Inconsolata text-primaryTextColor font-semibold tracking-wide text-md
                mt-4'
            >
              Android App Development
            </div>
            <div
              className='font-Inconsolata text-secondaryTextColor mt-2 font-semibold tracking-wide
              text-md'
            >
              I have made simple android apps like chat systems. I use Kotlin
              and Android Studio but can also work with the Flutter framework.
            </div>
          </div>

          <div
            className='p-8 py-12 bg-skillSetBgColor rounded-sm flex-1 w-1/5 laptop:w-full 
          laptop:p-8 phone:text-sm'
          >
            <img src={CloudTechnologies} className='phone:w-[32px]' />
            <div
              className='font-Inconsolata text-primaryTextColor font-semibold tracking-wide text-md
                mt-4'
            >
              Backend as a Service
            </div>
            <div
              className='font-Inconsolata text-secondaryTextColor mt-2 font-semibold tracking-wide
              text-md'
            >
              Using BaaS, I was able to code less and not worry about
              implementing my own backend solutions. I use Google Cloud Platform
              and Firebase.
            </div>
          </div>

          <img
            src={PageIndicator2}
            className='self-center ml-16 laptop:hidden'
          />
        </div>
      </div>
    </div>
  );
}
