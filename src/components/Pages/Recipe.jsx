import { useQuery } from "@tanstack/react-query";
import { getRecipeByCuisine, getRecipeByDish } from "../../Actions/Actions";
import Dosa from "../../assets/Dosa.png";
import Ice_cream from "../../assets/ice_cream.png";
import PanCake from "../../assets/PanCake.png";
import Pizza from "../../assets/pizza.png";
import Roll from "../../assets/biryani.png";
import Salad from "../../assets/chicken.png";
import Salmon from "../../assets/Salmon.png";
import SeaFood from "../../assets/SeaFood.png";
import Tea from "../../assets/noodles.png";
import Food_Image from "../Re_Usable_componets/Food_Image";
import Carousel from "../Re_Usable_componets/Carousel";

const Recipe = () => {
  const imageList = [
    {
      img_url: Dosa,
      size: "135px",
    },
    {
      img_url: PanCake,
      size: "135px",
    },
    {
      img_url: Salmon,
      size: "135px",
    },
    {
      img_url: SeaFood,
      size: "135px",
    },
    {
      img_url: Salad,
      size: "135px",
    },
    {
      img_url: Pizza,
      size: "135px",
    },
    {
      img_url: Roll,
      size: "135px",
    },
    {
      img_url: Ice_cream,
      size: "135px",
    },
  ];

  const { isLoading, data } = useQuery({
    queryKey: ["RecipeByDish"],
    queryFn: getRecipeByDish,
  });
  const {isLoading1,data:data1} = useQuery({
    queryKey: [],
    queryFn: getRecipeByCuisine,
  })

  // console.log(data?.hits?.map((item) => console.log(item)));

  return (
    <div className="container relative my-20">
      <div className="flex justify-center items-center flex-col">
        <h3 className="text-content-color font-bold capitalize text-3xl text-center">
          find your best food recipe for free
        </h3>
        <p className="text-center my-3 text-green-700 capitalize  font-semibold text-lg w-auto">
          choose your cuisine
        </p>

        <div className="max-w-10/12 w-9/12 py-10 flex flex-wrap gap-12 items-center justify-center">
          {imageList.map((img, ind) => {
            return <Food_Image img={img.img_url} key={ind} size={img.size} />;
          })}
        </div>
      </div>
      <div className="py-10 bg-bg-shadow-color rounded-xl px-8">
        <h4 className="md:text-left text-center text-custom-green font-bold text-2xl">
          Top Recipes For You
        </h4>
        <Carousel rtl={false} data={data} />
        <h4 className="md:text-left text-center text-custom-green font-bold text-2xl">
          Top Trending Recipes For You
        </h4>
        <Carousel data={data1} />
      </div>
    </div>
  );
};

export default Recipe;
