import Popular_Food from "./sections/Popular_Food";
import Home_Section from "./sections/Home_Section";
import Chefs from "./sections/Chefs";
import { useQuery } from "@tanstack/react-query";
import {
  getHealthyRecipe,
  getRecipeByCuisine,
  getRecipeByDiet,
  getRecipeByDish,
  getRecipeById,
  getRecipeByMeal,
  getRecipeBySearch,
} from "../../Actions/Actions";
import Carousel from "../Re_Usable_componets/Carousel";
import PlayStore from "./sections/PlayStore";

const Home = () => {
  const healthy = "vegetarian";
  const { isLoading, data } = useQuery({
    queryKey: ["HealthyRecipe"],
    queryFn: getHealthyRecipe({healthy}),
  });
  console.log("HealthyRecipe", data);

  // const id = "51b79ae0958c33a38c0eabad15460917"
  //   const {isLoading:isLoading1,data: data1} = useQuery({
  //     queryKey: ["RecipeById"],
  //     queryFn : getRecipeById({id}),
  //   })
  //   console.log("RecipeById",data1);

  //   const cuisine = "Mexican"
  //   const {isLoading2,data: data2} = useQuery({
  //     queryKey: ["RecipeByCuisine"],
  //     queryFn: getRecipeByCuisine(cuisine)
  //   })
  //   console.log("RecipeByCuisine",data2)

  //   const diet = "high-fiber"
  //   const {isLoading3,data : data3} = useQuery({
  //     queryKey: ["RecipeByDiet"],
  //     queryFn: getRecipeByDiet(diet)
  //   })
  //   console.log("RecipeByDiet",data3);

  //   const meal = "Dinner"
  //   const {isLoading4,data: data4} = useQuery({
  //     queryKey: ["RecipeByMeal"],
  //     queryFn: getRecipeByMeal(meal),
  //   })
  //   console.log("RecipeByMeal",data4);

  //   const dish = "Soup"
  //   const {isLoading5,data: data5} = useQuery({
  //     queryKey: ["RecipeByDish"],
  //     queryFn: getRecipeByDish(dish),
  //   })
  //   console.log("RecipeByDish",data5);
  // const {isLoading1,data1} = useQuery({
  //   queryKey: ["RecipeBySearch"],
  //   queryFn: getRecipeBySearch
  // })

  // console.log("RecipeBySearch",data1);

  return (
    <>
      <Home_Section />
      <Popular_Food />
      <Chefs />
      <Carousel data={data} />
      <PlayStore />
    </>
  );
};

export default Home;
