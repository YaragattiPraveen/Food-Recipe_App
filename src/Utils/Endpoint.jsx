export const root = {
  baseUrl: "https://api.edamam.com/api/recipes/v2",
  searchUrl: "https://api.edamam.com/search?",
};

const EndPoint = {
  bySearch: `q="Apple"&app_id=22250def&app_key=705b7570206e1b9de4b37f81ccb91003&to=1`,
  byID: `/74d20bdef615ff87feaaeb1b8931c046?type=public&app_id=22250def&app_key=705b7570206e1b9de4b37f81ccb91003`,
  byDiet: `?type=public&app_id=22250def&app_key=705b7570206e1b9de4b37f81ccb91003&diet=high-fiber`,
  byHealthyRecipe: `?type=public&app_id=22250def&app_key=705b7570206e1b9de4b37f81ccb91003&health=vegetarian`,
  byCuisine: `?type=public&app_id=22250def&app_key=705b7570206e1b9de4b37f81ccb91003&cuisineType=Mexican`,
  byMeal: `?type=public&app_id=22250def&app_key=705b7570206e1b9de4b37f81ccb91003&mealType=Dinner`,
  byDish: `?type=public&app_id=22250def&app_key=705b7570206e1b9de4b37f81ccb91003&dishType=Soup`,
};

export default EndPoint;
