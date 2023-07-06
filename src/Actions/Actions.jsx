import EndPoint from "../Utils/Endpoint";
import sendApiReq from "../Utils/SendApi";

export function getHealtyRecipe() {
  return sendApiReq({
    url: EndPoint.byHealthyRecipe,
  });
}

export function getRecipeBySearch(){
  return sendApiReq({
    url: EndPoint.bySearch,
  })
}

export function getRecipeById(){
  return sendApiReq({
    url: EndPoint.byID
  })
}

export function getRecipeByCuisine(){
  return sendApiReq({
    url: EndPoint.byCuisine
  })
}

export function getRecipeByDiet(){
  return sendApiReq({
    url: EndPoint.byDiet
  })
}

export function getRecipeByMeal(){
  return sendApiReq({
    url: EndPoint.byMeal
  })
}

export function getRecipeByDish(){
  return sendApiReq({
    url: EndPoint.byDish
  })
}

