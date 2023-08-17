import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../Actions/Actions";

const RecipeDetailPage = () => {
  const { id } = useParams();
  const {data,isLoading} = useQuery({
    queryKey: ["RecipeById"],
    queryFn : getRecipeById({id}),
  })
  console.log("RecipeById",data);
  // console.log(data);
  return (
    <>
      <div>
        <h2>Parameter Value: {id}</h2>
        <h1>Recipe Details Page</h1>
        {
          isLoading && <h1>Loading.....</h1>
        }
      </div>
    </>
  );
};

export default RecipeDetailPage;
