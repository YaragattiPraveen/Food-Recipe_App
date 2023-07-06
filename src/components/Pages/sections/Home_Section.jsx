import Button from "../../Re_Usable_componets/Button"
import bgImage from "../../../assets/bg.png";
import Healthy from "../../../assets/Healthy.png";
import fireImage from "../../../assets/fire.png";
import saladImage from "../../../assets/Salad1.png";


const Home_Section = () => {
  return (
    <div className="container relative py-10 md:py-0 md:h-[70vh] flex flex-col-reverse lg:h-screen md:flex-row items-center justify-between">
      <div className="w-full md:w-[50%]">
        <div className="text-center text-4xl md:text-start md:text-4xl lg:text-6xl tracking-normal font-Playfair font-extrabold">
          <h1 className="pb-2.5 md:pb-3 lg:pb-4">Let's Start</h1>
          <h1 className="pb-2.5 md:pb-3 lg:pb-4">Cooking With</h1>
          <h1 className="pb-2.5 md:pb-3 lg:pb-4">Popular Recipes</h1>
        </div>
        <p className="text-content-color text-center md:text-start font-medium font-Montserrat md:py-2 text-sm lg:text-base lg:leading-8 lg:py-4">
          Want to learn cook but confused how to start? <br />
          No need to worry again!
        </p>
        <div className="flex items-center justify-center md:justify-start gap-x-2 py-5">
          <Button title={"Get Started"} toggle={true} />
          <Button title={"Explore Menu"} />
        </div>
      </div>
      <div className="relative w-[80%] md:w-[50%] pb-6 lg:pb-0">
        <img loading="lazy" className="w-[100%] h-[100%]" src={bgImage} alt="home-bg" />
        <div className="absolute md:w-[75%] lg:w-[75%] h-screen -z-10 right-0 md:-top-72 lg:-top-52 bg-section-bg-color"></div>
        <div className="hidden md:block">
          <div className="absolute top-48  lg:-left-24">
            <div className="h-auto w-auto animate-bounce bg-section-bg-color shadow-2xl">
              <div className="px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="h-[70px] bg-bg-shadow-color p-1 w-[70px] rounded-full">
                    <img loading="lazy"
                      className="h-[100%] w-[100%]"
                      src={Healthy}
                      alt="food"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h6 className="font-bold text-rich-black tracking-wide font-Montserrat pb-1.5">
                      Fruit Sandwich
                    </h6>
                    <div className="flex items-center gap-2">
                      <img loading="lazy" src={fireImage} alt="firelogo" />
                      <small className=" text-sm font-semibold font-Montserrat">
                        5.93
                      </small>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-content-color tracking-wide leading-5 font-Montserrat text-sm">
                    Bread, Strawberry, Jam, <br /> Blueberry, Orange, <br />{" "}
                    Raspberry.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-72 right-0">
            <div className="h-auto w-auto animate-bounce bg-section-bg-color shadow-2xl">
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <div className="h-[70px] flex items-center justify-center bg-bg-shadow-color p-1 w-[70px] rounded-full">
                    <img loading="lazy"
                      className="h-[100%] w-[100%]"
                      src={saladImage}
                      alt="food"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h6 className="font-bold text-rich-black tracking-wide font-Montserrat pb-1.5">
                      Fruit Salad
                    </h6>
                    <div className="flex items-center gap-2">
                      <img loading="lazy" src={fireImage} alt="firelogo" />
                      <small className=" text-sm font-semibold font-Montserrat">
                        3.37
                      </small>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-content-color tracking-wide leading-5 font-Montserrat text-sm">
                    Blueberry, Orange, Cherry <br />
                    Raspberry, Kiwi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Section;
