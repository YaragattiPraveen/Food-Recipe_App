import { MdOutlineFacebook } from "react-icons/md";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="max-w-11/12 relative container px-3 md:px-10 lg:px-18 mx-auto">
        <div className="grid place-content-center pb-20 grid-cols-2 lg:grid-cols-8 md:grid-cols-4 md:gap-3 lg:gap-5">
          <div className="lg:col-span-3 col-span-1">
            <h1 className="text-2xl font-bold">
              Food<span className="text-custom-green">Mood</span>
            </h1>
            <p className="text-content-color tracking-wide leading-5 font-semibold py-2 md:py-4">
              Foodmood is an application <br /> used to find a variety of famous{" "}
              <br /> food and drink recipes.
            </p>
          </div>
          <div className="md:col-span-1">
            <h1 className="text-rich-black font-bold font-Montserrat text-lg">
              About
            </h1>
            <p className="text-content-color tracking-wide leading-5 font-semibold py-2 hover:text-custom-green cursor-pointer md:py-4">
              About Us
            </p>
            <p className="text-content-color tracking-wide leading-5 font-semibold py-2 hover:text-custom-green cursor-pointer md:py-4">
              Recipe
            </p>
            <p className="text-content-color tracking-wide leading-5 font-semibold py-2 hover:text-custom-green cursor-pointer md:py-4">
              Download
            </p>
            <p className="text-content-color tracking-wide leading-5 font-semibold py-2 hover:text-custom-green cursor-pointer md:py-4">
              Contact
            </p>
          </div>
          <div className="md:col-span-1">
            <h1 className="text-rich-black font-bold font-Montserrat text-lg">
              Company
            </h1>
            <p className="text-content-color tracking-wide leading-5 font-semibold py-2 hover:text-custom-green cursor-pointer md:py-4">
              Subscribe Us
            </p>
            <p className="text-content-color tracking-wide leading-5 font-semibold py-2 hover:text-custom-green cursor-pointer md:py-4">
              Our Recipe
            </p>
            <p className="text-content-color tracking-wide leading-5 font-semibold py-2 hover:text-custom-green cursor-pointer md:py-4">
              FAQ
            </p>
          </div>
          <div className="md:col-span-1">
            <h1 className="text-rich-black font-bold font-Montserrat text-lg">
              Support
            </h1>
            <p className="text-content-color tracking-wide leading-5 font-semibold py-2 hover:text-custom-green cursor-pointer md:py-4">
              Account
            </p>
            <p className="text-content-color tracking-wide leading-5 font-semibold py-2 hover:text-custom-green cursor-pointer md:py-4">
              Support Center
            </p>
            <p className="text-content-color tracking-wide leading-5 font-semibold py-2 hover:text-custom-green cursor-pointer md:py-4">
              Feedback
            </p>
            <p className="text-content-color tracking-wide leading-5 font-semibold py-2 hover:text-custom-green cursor-pointer md:py-4">
              Accessability
            </p>
          </div>
          <div className="lg:col-span-2 col-span-1">
            <h1 className="text-rich-black font-bold font-Montserrat text-lg">
              Get in Touch
            </h1>
            <p className="text-content-color tracking-wide leading-5 font-semibold py-2 hover:text-custom-green cursor-pointer md:py-4">
              Question or Feedback? <br />
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </div>
      <div className="md:flex items-center justify-between rounded-b-lg mb-2 text-rich-white font-light md:px-20 py-2 bg-custom-green">
        <p className="text-center py-2">
          Copyright, pby2023, All right reserved.
        </p>
        <div className="flex items-center object-fill text-xl gap-6 md:gap-8 justify-center">
          <p className="hover:transition-all transition ease-in-out hover:scale-150 cursor-pointer">
            <BsInstagram />
          </p>
          <p className="hover:transition-all transition ease-in-out hover:scale-150 cursor-pointer">
            <MdOutlineFacebook />
          </p>
          <p className="hover:transition-all transition ease-in-out hover:scale-150 cursor-pointer">
            <BsTwitter />
          </p>
          <p className="hover:transition-all transition ease-in-out hover:scale-150 cursor-pointer">
            <BsYoutube />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
