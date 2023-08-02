import {EndPoint} from "../Utils/Endpoint";
import sendApiReq from "../Utils/SendApi";

export function getHealthyRecipe() {
  const healthy = "vegetarian"
  return sendApiReq({
    url: EndPoint.commonUrl + `&health=${healthy}` ,
  });
}

export function getRecipeBySearch(){
  return sendApiReq({
    url: EndPoint.bySearch,
  })
}

export function getRecipeById(){
  const recipe_Id = "4bb99424e1bbc40d3cd1d891883d6745"
  return sendApiReq({
    url: `/${recipe_Id}` + EndPoint.commonUrl
  })
}

export function getRecipeByCuisine(){
  const cuisine = "Mexican"
  return sendApiReq({
    url: EndPoint.commonUrl + `&cuisineType=${cuisine}`
  })
}

export function getRecipeByDiet(){
  const diet = "high-fiber"
  return sendApiReq({
    url: EndPoint.commonUrl + `&diet=${diet}`
  })
}

export function getRecipeByMeal(){
  const meal = "Dinner"
  return sendApiReq({
    url: EndPoint.commonUrl + `&mealType=${meal}`
  })
}

export function getRecipeByDish(){
  const dish = "Soup"
  return sendApiReq({
    url: EndPoint.commonUrl + `&dishType=${dish}`
  })
}

