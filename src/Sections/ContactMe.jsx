import PageIndicator3 from "../assets/ContactMe/PageIndicator3.png";

export default function ContactMe({contactMeRef}) {
  return (
    <div
      className='px-32 h-screen flex items-center justify-between laptop:px-4'
      ref={contactMeRef}
    >
      <div className='flex-1'>
        <h2
          className='font-Inconsolata text-4xl text-secondaryColor font-bold tracking-wide
        laptop:text-3xl phone:text-2xl'
        >
          Contact Me
        </h2>
        <textarea
          placeholder='Message'
          className='w-3/4 h-48 p-4 mt-4 resize-none bg-formsBgColor text-primaryTextColor 
            placeholder:text-secondaryTextColor rounded-sm outline-none font-Inconsolata 
            text-lg tracking-wide phone:text-md phone:p-2 phone:w-full'
        />
        <br />
        <textarea
          placeholder='Email'
          className='w-3/4 h-16 p-4 mt-4 resize-none bg-formsBgColor
          text-primaryTextColor placeholder:text-secondaryTextColor rounded-sm outline-none font-Inconsolata
            text-lg tracking-wide phone:w-full phone:h-12 phone:p-2 phone:mt-2 phone:text-md'
        />
        <br />
        <div className='w-3/4 flex justify-end phone:w-full'>
          <button
            className='font-Inconsolata text-xl text-primaryTextColor bg-secondaryColor mt-4
              px-8 py-2 rounded-sm phone:text-md phone:px-4 phone:py-1'
          >
            Send
          </button>
        </div>
      </div>

      <div className='flex-1 flex justify-end laptop:hidden'>
        <img src={PageIndicator3} />
      </div>
    </div>
  );
}
