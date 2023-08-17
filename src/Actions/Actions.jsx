import {EndPoint} from "../Utils/Endpoint";
import sendApiReq from "../Utils/SendApi";

export function getHealthyRecipe({healthy}) {
  console.log(healthy);
  return sendApiReq({
    url: EndPoint.commonUrl + `&health=${healthy}` ,
  });
}

export function getRecipeBySearch(){
  return sendApiReq({
    url: EndPoint.bySearch,
  })
}
 
export function getRecipeById({id}){
  // const recipe_Id = "4bb99424e1bbc40d3cd1d891883d6745"
  console.log(id);
  return sendApiReq({
    url: `/${id}` + EndPoint.commonUrl
  })
}

export function getRecipeByCuisine(cuisine){
  return sendApiReq({
    url: EndPoint.commonUrl + `&cuisineType=${cuisine}`
  })
}

export function getRecipeByDiet(diet){
  return sendApiReq({
    url: EndPoint.commonUrl + `&diet=${diet}`
  })
}

export function getRecipeByMeal(meal){
  
  return sendApiReq({
    url: EndPoint.commonUrl + `&mealType=${meal}`
  })
}

export function getRecipeByDish(dish){
  
  return sendApiReq({
    url: EndPoint.commonUrl + `&dishType=${dish}`
  })
}

