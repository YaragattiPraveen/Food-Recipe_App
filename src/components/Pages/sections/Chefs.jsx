import chefsImg from "../../../assets/chef.png";
import Button from "../../Re_Usable_componets/Button";
import fireImage from "../../../assets/fire.png";
import Healthy from "../../../assets/Healthy.png";

const Chefs = () => {
  return (
    <div className="container py-10 md:py-0 md:h-[80vh] lg:flex items-center justify-between">
      <div className="relative w-[80%] py-6 lg:py-0 mx-auto md:w-[50%] pb-6 lg:pb-0">
        <div className="lg:w-[410px] lg:h-[410px] rounded-full flex items-center justify-center bg-custom-green">
          <img loading="lazy"
            className="w-[100%] h-[100%] rounded-r-full"
            src={chefsImg}
            alt="home-bg"
          />
        </div>
        <div className="absolute hidden md:block -right-10 lg:-bottom-10 lg:right-10">
          <div className="h-auto w-auto animate-bounce bg-section-bg-color shadow-2xl">
            <div className="px-4 py-2">
              <div className="flex items-center gap-2">
                <div className="h-[70px] bg-bg-shadow-color p-1 w-[70px] rounded-full">
                  <img loading="lazy" className="h-[100%] w-[100%]" src={Healthy} alt="food" />
                </div>
                <div className="flex flex-col">
                  <h6 className="font-bold text-rich-black tracking-wide font-Montserrat pb-1.5">
                    Fruit Sandwich
                  </h6>
                  <div className="flex items-center gap-2">
                    <img loading="lazy" src={fireImage} alt="firelogo" />
                    <img loading="lazy" src={fireImage} alt="firelogo" />
                    <img loading="lazy" src={fireImage} alt="firelogo" />
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
      </div>
      <div className="w-full lg:w-[50%] md:py-32 lg:py-0 flex-col justify-center items-center mx-auto ">
        <div className="text-3xl md:text-4xl lg:text-start text-center capitalize lg:text-5xl font-semibold tracking-wide font-Playfair">
          <small className="text-custom-green font-medium rounded-md my-5 text-sm font-Montserrat bg-bg-shadow-color px-3 py-1">
            Variety of food
          </small>
          <h1 className="pb-2.5 pt-2 md:pb-3">Variety of food and</h1>
          <h1 className="pb-2.5 md:pb-3">beverage recipes</h1>
        </div>
        <p className="text-content-color text-center lg:text-start font-medium font-Montserrat md:py-2 text-sm lg:text-base lg:leading-8 lg:py-3">
          We have prepared a variety of food and beverage? <br />
          recipes from famous chefs, with cooking steps
          <br />
          and with good taste.
        </p>
        <div className="flex items-center justify-center lg:justify-start gap-x-2 py-5">
          <Button title={"View Menu"} toggle={true} />
        </div>
      </div>
    </div>
  );
};

export default Chefs;
