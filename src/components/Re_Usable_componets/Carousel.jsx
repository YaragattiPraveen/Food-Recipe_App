import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import Dosa from "../../assets/Dosa.png";
import Ice_cream from "../../assets/ice_cream.png";
import PanCake from "../../assets/PanCake.png";
import Pizza from "../../assets/pizza.png";
import Roll from "../../assets/biryani.png";
import Salad from "../../assets/chicken.png";
import Salmon from "../../assets/Salmon.png";
import SeaFood from "../../assets/SeaFood.png";
import Tea from "../../assets/noodles.png";

const CustomArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex",alignItems:"center",justifyContent:"center",backgroundColor:"green", borderRadius:"100%",height:"22px",width:"22px",}}
      onClick={onClick}
    />
  );
};
const Carousel = ({ data, rtl }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    rtl: `${rtl || "false"}`,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const imageList = [
    {
      img_url: Dosa,
    },
    {
      img_url: PanCake,
    },
    {
      img_url: Salmon,
    },
    {
      img_url: SeaFood,
    },
    {
      img_url: Salad,
    },
    {
      img_url: Pizza,
    },
    {
      img_url: Roll,
    },
    {
      img_url: Tea,
    },
    {
      img_url: Ice_cream,
    },
  ];
  return (
    <div className="px-6 py-5">
      <Slider {...settings}>
        {data?.hits?.map((recipe, ind) => (
          <Card key={ind} recipe={recipe.recipe} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
