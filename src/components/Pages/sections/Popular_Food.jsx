import Dosa from "../../../assets/Dosa.png";
import Ice_cream from "../../../assets/ice_cream.png";
import PanCake from "../../../assets/PanCake.png";
import Pizza from "../../../assets/pizza.png";
import Roll from "../../../assets/biryani.png";
import Salad from "../../../assets/chicken.png";
import Salmon from "../../../assets/Salmon.png";
import SeaFood from "../../../assets/SeaFood.png";
import Tea from "../../../assets/noodles.png";
import Food_Image from "../../Re_Usable_componets/Food_Image";

const Popular_Food = () => {
  const imageList = [
    {
      img_url: Dosa,
      size: "140px",
    },
    {
      img_url: PanCake,
      size: "100px",
    },
    {
      img_url: Salmon,
      size: "150px",
    },
    {
      img_url: SeaFood,
      size: "120px",
    },
    {
      img_url: Salad,
      size: "140px",
    },
    {
      img_url: Pizza,
      size: "120px",
    },
    {
      img_url: Roll,
      size: "150px",
    },
    {
      img_url: Tea,
      size: "130px",
    },
    {
      img_url: Ice_cream,
      size: "130px",
    },
  ];
  return (
    <div className="container w-full flex items-center flex-col justify-center h-auto py-20 bg-section-bg-color">
      <div className="flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-wide leading-loose font-Playfair">
          Popular Food
        </h1>
        <p className="text-content-color text-center font-medium font-Montserrat md:py-2 text-sm lg:text-base lg:leading-8 lg:py-4">
          We provide a variety of food and beverage recipes <br />
          with high taste from famous chefs
        </p>
      </div>
      <div className="max-w-10/12 w-9/12 py-5 flex flex-wrap gap-12 items-center justify-center">
        {imageList.map((img, ind) => {
          return <Food_Image img={img.img_url} key={ind} size={img.size} />;
        })}
      </div>
    </div>
  );
};

export default Popular_Food;
