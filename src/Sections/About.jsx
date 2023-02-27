import PageIndicator1 from "../assets/About/PageIndicator1.png";

export default function About({totalVisitor, aboutRef, footerRef}) {
  return (
    <div
      className='px-32 flex items-center justify-between h-screen tablet:px-4'
      ref={aboutRef}
    >
      <div>
        <h1 className='font-Inconsolata text-5xl text-primaryTextColor font-bold tablet:text-3xl phone:text-2xl'>
          Hello, I'm
        </h1>

        <div className='flex'>
          <h1
            className='font-Inconsolata text-5xl text-primaryTextColor font-bold whitespace-nowrap
            tracking-wide tablet:text-3xl phone:text-2xl'
          >
            a Front end
          </h1>
          <div className='mr-6' />
          <h1
            className='font-Inconsolata text-5xl text-secondaryColor font-bold tracking-wide
          tablet:text-3xl phone:text-2xl'
          >
            Developer
          </h1>
        </div>

        <div
          className='font-Inconsolata font-semibold text-xl text-secondaryTextColor w-96 mt-4
          tracking-wide tablet:text-lg phone:text-md'
        >
          I design and build user-friendly websites and android apps.
        </div>

        <button
          className='font-Inconsolata text-xl text-primaryTextColor bg-secondaryColor mt-4
            px-8 py-2 rounded-sm tablet:text-lg tablet:px-4 tablet:py-2 phone:text-md'
          onClick={() => {
            footerRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "start",
            });
          }}
        >
          Connect With Me
        </button>

        <div className='mt-16 flex font-Inconsolata font-semibold text-lg text-secondaryTextColor'>
          <div className='mr-4'>Total number of visits:</div>
          <div className='text-primaryTextColor'>{totalVisitor}</div>
        </div>
      </div>
      <img src={PageIndicator1} className='laptop:hidden' />
    </div>
  );
}
