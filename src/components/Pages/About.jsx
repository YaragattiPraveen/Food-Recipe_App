import bg_image from "../../assets/About_Us.jpg";
const About = () => {
  return (
    <>
      <div
        className="h-screen my-8 bg-cover w-full flex items-center justify-center bg-gradient-to-tr from-green-600 via-black bg-image"
        style={{ backgroundImage: `url(${bg_image})` }}
      >
        <div className="flex flex-col items-center justify-between max-w-[720px] px-6 text-center">
          <h1 className="text-custom-green text-3xl md:text-5xl font-bold pb-3">
            The Journey of Food Recipe
          </h1>
          <p className="text-content-color text-lg font-medium">
            Our mission is to elevate the quality of life for the urban consumer
            with unparalleled convenience. Convenience is what makes us tick.
            It's what makes us get out of bed and say, "Let's do this."
          </p>
        </div>
      </div>
      <div className="max-w[720px] h-auto w-full bg-section-bg-color py-10">
        <h4 className="text-center text-2xl md:text-3xl font-bold text-custom-green">We are Recipe Founder | The Inside Scoop</h4>
        <p className="text-center text-content-color text-base py-3">
          Want to know what's buzzing at the Recipe side of the planet? there here is what you need to follow. We are  Food Recipe Channels on Social Media will give you an inside-out  view of the everyday serious and fun stuff within our world. All you need to do so is to click your preferred channel and make sure you follow us.
        </p>
      </div>
    </>
  );
};

export default About;
