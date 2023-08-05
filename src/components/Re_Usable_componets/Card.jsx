import React from "react";

const Card = ({ recipe }) => {
  console.log(recipe);
  return (
    <div className="relative h-[400px] flex w-[95%] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img src={recipe.image} alt={recipe.label} />
      </div>
      <div className="py-6 px-4 text-center">
        <h4 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-content-color capitalize text-center">
          {recipe.label}
        </h4>
        <p className="block bg-gradient-to-tr from-custom-green to-custom-green bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
          {recipe.mealType[0]}
        </p>
      </div>
      <div className="flex justify-center gap-7 p-6 pt-2">
        <a
          href="#facebook"
          className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
        >
          <i className="fab fa-facebook" aria-hidden="true" />
        </a>
        <a
          href="#twitter"
          className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
        >
          <i className="fab fa-twitter" aria-hidden="true" />
        </a>
        <a
          href="#instagram"
          className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
        >
          <i className="fab fa-instagram" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
};

export default Card;
