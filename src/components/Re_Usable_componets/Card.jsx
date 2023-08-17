import React from "react";
import { Link } from "react-router-dom";

const Card = ({ recipe }) => {
  // console.log(recipe);
  return (
    <div className="relative h-[480px] my-3 flex w-[95%] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 mt-4 h-60 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img src={recipe.image} alt={recipe.label} />
      </div>
      <div className="py-2 px-4 text-center">
        <h4 className="mb-1 font-sans block text-sm md:text-lg font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-content-color capitalize text-center">
          {recipe.label.slice(0, 38)}
        </h4>
        <p className="block text-sm bg-gradient-to-tr underline underline-offset-2 text-custom-green bg-clip-text font-sans leading-relaxed capitalize antialiased">
          {recipe.mealType[0]}
        </p>
        <div className="flex justify-between items-center py-2">
          <div>
            <span className="block text-sm md:text-base text-content-color bg-clip-text font-sans leading-relaxed">
              Cuisine Type
            </span>
            <span className=" pt-3 text-sm md:text-base text-custom-green capitalize">
              {recipe.cuisineType[0]}
            </span>
          </div>
          <div>
            <span className="block text-sm md:text-base text-content-color bg-clip-text font-sans leading-relaxed  antialiased">
              Calories
            </span>
            <span className="text-custom-green text-sm md:text-base pt-2 ">
              {recipe.calories.toFixed(1)} Kcal
            </span>
          </div>
        </div>
        <div className="flex items-baseline justify-center">
          <Link to={`/recipe-details/${recipe.uri.split("_")[1]}`} className="text-rich-white bg-custom-green py-2 my-3 w-full rounded-md text-sm md:text-base">
            Checkout Recipe
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
