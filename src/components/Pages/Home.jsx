import Popular_Food from "./sections/Popular_Food";
import Home_Section from "./sections/Home_Section";
import Chefs from "./sections/Chefs";
import { useQuery } from "@tanstack/react-query";
import { getHealthyRecipe, getRecipeByCuisine, getRecipeByDiet, getRecipeByDish, getRecipeById, getRecipeByMeal, getRecipeBySearch } from "../../Actions/Actions";
import Carousel from "../Re_Usable_componets/Carousel";
import PlayStore from "./sections/PlayStore";

const Home = () => {

  const { isLoading, data } = useQuery({
    queryKey: ["HealthyRecipe"],
    queryFn: getHealthyRecipe,
  });
  // console.log("HealthyRecipe",data);

  // const {isLoading1,data: data1} = useQuery({
  //   queryKey: ["RecipeById"],
  //   queryFn : getRecipeById,
  // })
  // console.log("RecipeById",data1);

  // const {isLoading2,data: data2} = useQuery({
  //   queryKey: ["RecipeByCuisine"],
  //   queryFn: getRecipeByCuisine
  // })
  // console.log("RecipeByCuisine",data2)

  // const {isLoading3,data : data3} = useQuery({
  //   queryKey: ["RecipeByDiet"],
  //   queryFn: getRecipeByDiet
  // })
  // console.log("RecipeByDiet",data3);

  // const {isLoading4,data: data4} = useQuery({
  //   queryKey: ["RecipeByMeal"],
  //   queryFn: getRecipeByMeal,
  // })
  // console.log("RecipeByMeal",data4);

  // const {isLoading5,data: data5} = useQuery({
  //   queryKey: ["RecipeByDish"],
  //   queryFn: getRecipeByDish,
  // })
  // console.log("RecipeByDish",data5);
  // const {isLoading1,data1} = useQuery({
  //   queryKey: ["RecipeBySearch"],
  //   queryFn: getRecipeBySearch
  // })

  // console.log("RecipeBySearch",data1);

  return (
    <>
      {isLoading ? (
        <h1>Loading.....</h1>
      ) : (
        <>
          <Home_Section />
          <Popular_Food />
          <Chefs />
          <Carousel data={data}/>
          <PlayStore />
        </>
      )}
    </>
  );
};

export default Home;
