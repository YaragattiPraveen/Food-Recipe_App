import React from "react";

const Button = ({ title, toggle }) => {
  return (
    <div>
      <button
        className={
          toggle
            ? "bg-custom-green text-rich-white font-medium px-3 lg:px-5 border-2 border-custom-green font-Montserrat py-1.5 lg:py-2.5 rounded-lg"
            : "bg-rich-white font-medium text-custom-green border-2 border-custom-green px-3 lg:px-5 font-Montserrat py-1.5 lg:py-2.5 rounded-lg"
        }
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
