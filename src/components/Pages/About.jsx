import bg_image from "../../assets/About_Us.jpg";
const About = () => {
  return (
    <>
      <div
        className="h-screen my-8 bg-cover w-full flex items-center rounded-tl-lg justify-center bg-gradient-to-tr from-green-600 via-black bg-image"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div className="flex flex-col items-center justify-between max-w-[720px] px-6 text-center">
          <h1 className="text-custom-green text-3xl md:text-5xl font-bold pb-3">
            The Journey of Food Recipe
          </h1>
          <p className="text-rich-black text-lg font-medium">
            Our mission is to elevate the quality of life for the urban consumer
            with unparalleled convenience. Convenience is what makes us tick.
            It's what makes us get out of bed and say, "Let's do this."
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center font-Playfair justify-between my-24 px-6 text-center mx-auto">
        <h4 className="text-center text-2xl py-3 md:text-3xl font-bold text-custom-green">We are Recipe Founder | The Inside Scoop</h4>
        <p className="max-w-[1020px] text-center text-base text-content-color font-medium font-Montserrat">
          Want to know what's buzzing at the Recipe side of the planet? there here is what you need to follow. We are  Food Recipe Channels on Social Media will give you an inside-out  view of the everyday serious and fun stuff within our world. All you need to do so is to click your preferred channel and make sure you follow us.
        </p>
      </div>
    </>
  );
};

export default About;
