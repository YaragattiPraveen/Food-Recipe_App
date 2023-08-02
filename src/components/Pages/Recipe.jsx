import { useQuery } from "@tanstack/react-query"
import { getRecipeByDish } from "../../Actions/Actions"

const Recipe = () => {
  const {isLoading,data} = useQuery({
    queryKey: ["RecipeByDish"],
    queryFn: getRecipeByDish
  })

  console.log(data?.hits?.map((item) => console.log(item?.recipe.source)));
 
  return (
    <div>Recipe</div>
  )
}

export default Recipe