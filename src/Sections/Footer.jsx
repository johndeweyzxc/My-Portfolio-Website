import InstagramIcon from "../assets/Footer/instagram.png";
import FacebookIcon from "../assets/Footer/facebook.png";
import TwitterIcon from "../assets/Footer/twitter.png";
import GithubIcon from "../assets/Footer/github.png";

export default function Footer({
  footerRef,
  aboutRef,
  mySkillSetsRef,
  contactMeRef,
}) {
  return (
    <div
      className='p-32 flex items-center justify-evenly h-1/2 bg-skillSetBgColor laptop:flex-col laptop:p-4'
      ref={footerRef}
    >
      <div className='self-start font-Inconsolata font-semibold tracking-wide'>
        <h2 className='text-2xl text-primaryTextColor mb-4 phone:text-xl'>
          Connect with me
        </h2>
        <div className='flex mb-4'>
          <img src={InstagramIcon} />
          <div className='text-xl ml-4 text-secondaryTextColor cursor-pointer hover:underline phone:text-sm'>
            johnnndewey
          </div>
        </div>
        <div className='flex mb-4'>
          <img src={FacebookIcon} />
          <div className='text-xl ml-4 text-secondaryTextColor cursor-pointer hover:underline phone:text-sm'>
            johndewey.altura1
          </div>
        </div>
        <div className='flex mb-4'>
          <img src={TwitterIcon} />
          <div className='text-xl ml-4 text-secondaryTextColor cursor-pointer hover:underline phone:text-sm'>
            @johnnmyyyy
          </div>
        </div>
        <div className='flex mb-4'>
          <img src={GithubIcon} />
          <div className='text-xl ml-4 text-secondaryTextColor cursor-pointer hover:underline phone:text-sm'>
            johndeweyzxc
          </div>
        </div>
      </div>

      <div className='self-start font-Inconsolata font-semibold tracking-wide phone:my-4'>
        <h2 className='text-2xl text-primaryTextColor mb-4 phone:text-xl'>
          Website Information
        </h2>
        <div className='text-xl mb-4 text-secondaryTextColor cursor-pointer hover:underline phone:text-sm'>
          Privacy Policy
        </div>
        <div className='text-xl mb-4 text-secondaryTextColor cursor-pointer hover:underline phone:text-sm'>
          Terms of Use
        </div>
        <div className='text-xl mb-4 text-secondaryTextColor cursor-pointer hover:underline phone:text-sm'>
          Source Code
        </div>
      </div>

      <div className='self-start font-Inconsolata font-semibold text-2xl text-primaryTextColor tracking-wide'>
        <h2 className='mb-4 phone:text-xl'>Navigation</h2>
        <div
          className='text-xl mb-4 text-secondaryTextColor cursor-pointer hover:underline phone:text-sm'
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
          className='text-xl mb-4 text-secondaryTextColor cursor-pointer hover:underline phone:text-sm'
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
          className='text-xl mb-4 text-secondaryTextColor cursor-pointer hover:underline phone:text-sm'
          onClick={() => {
            contactMeRef.current.scrollIntoView({
              behavior: "smooth",
              block: "center",
              inline: "start",
            });
          }}
        >
          Contact me
        </div>
      </div>
    </div>
  );
}
