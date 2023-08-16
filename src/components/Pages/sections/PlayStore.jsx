import mobileImg from "../../../assets/mobile.png";
import AppleImg from "../../../assets/apple_logo.png";
import playStoreImg from "../../../assets/playstore.png";
import bgImg from "../../../assets/background_image1.jpg";
import Button from "../../Re_Usable_componets/Button";
import { HiOutlineMail } from "react-icons/hi";

const PlayStore = () => {
  return (
    <>
      <div className="container bg-section-bg-color md:pt-[500px] lg:pt-0 py-10 mx-auto md:h-auto lg:flex items-center justify-center lg:justify-between">
        <div className=" w-full lg:w-[50%] lg:px-5 py-6 md:py-0 mx-auto md:w-[50%] pb-6 lg:pb-0">
          <div className="lg:w-[410px] lg:h-[410px] rounded-full flex items-center justify-center bg-custom-green">
            <img
              loading="lazy"
              className="w-[100%] h-[100%] rounded-r-full"
              src={mobileImg}
              alt="home-bg"
            />
          </div>
        </div>
        <div className="w-[100%] lg:w-[50%] py-3 lg:py-32  flex-col justify-center items-center mx-auto ">
          <div className="text-3xl md:text-4xl lg:text-start text-center capitalize lg:text-5xl font-semibold tracking-wide font-Playfair">
            <small className="text-custom-green font-medium rounded-md my-5 text-sm font-Montserrat bg-bg-shadow-color px-3 py-1">
              Download App
            </small>
            <h1 className="pb-2.5 pt-2 md:pb-2">Get the app</h1>
          </div>
          <p className="text-content-color text-center lg:text-start font-medium font-Montserrat md:py-2 text-sm lg:text-base lg:leading-8 lg:py-3">
            Our app is available on the App Store and <br />
            Play Store, you can download for free for a
            <br />
            more comfortable experience.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-x-2 py-3">
            <button className="bg-custom-green flex items-center justify-center text-rich-white font-medium px-2 border-2 border-custom-green font-Montserrat py-1 rounded-lg">
              <div className="h-[50px] w-[50px]">
                <img
                  loading="lazy"
                  className="w-[100%] object-fill h-[100%]"
                  src={AppleImg}
                  alt="app_store"
                />
              </div>
              <div className="md:px-2">
                <small>Download on the</small>
                <p>App Store</p>
              </div>
            </button>
            <button className="bg-custom-green flex items-center justify-center text-rich-white font-medium px-2 border-2 border-custom-green font-Montserrat py-1 rounded-lg">
              <div className="h-[50px] w-[50px]">
                <img
                  loading="lazy"
                  className="w-[100%] object-fill h-[100%]"
                  src={playStoreImg}
                  alt="app_store"
                />
              </div>
              <div className="md:px-2">
                <small>GET It On</small>
                <p>Google Play</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      <div
        className="h-[350px] my-10 w-full container flex items-center mx-auto flex-col justify-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "60px",
        }}
      >
        <h2 className="text-rich-white text-center font-Montserrat tracking-wider leading-6 font-semibold text-2xl  md:text-3xl py-3 ">
          Subscribe to get weekly <br /> recipe updates
        </h2>
        <div className="flex max-w-[500px] items-center bg-rich-white p-2 mx-3 my-3 rounded-xl">
          <div className="flex items-center justify-center px-1 md:px-5 text-content-color">
            <HiOutlineMail style={{ fontSize: "20px" }} />
          </div>
          <input
            type="email"
            placeholder="Enter email here"
            className="w-[120px] outline-none md:w-full"
          />
          <Button title={"Subscribe"} toggle={true} />
        </div>
      </div>
    </>
  );
};

export default PlayStore;
