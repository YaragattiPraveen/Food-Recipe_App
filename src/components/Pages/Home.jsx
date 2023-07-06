import Popular_Food from "./sections/Popular_Food";
import Home_Section from "./sections/Home_Section";
import Chefs from "./sections/Chefs";
import PlayStor from "./sections/PlayStor";
import { useQuery } from "@tanstack/react-query";
import { getHealtyRecipe } from "../../Actions/Actions";

const Home = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["HealtyRecipe"],
    queryFn: getHealtyRecipe,
  });
  console.log(data);

  return (
    <>
      {isLoading ? (
        <h1>Loading.....</h1>
      ) : (
        <>
          <Home_Section />
          <Popular_Food />
          <Chefs />
          <PlayStor />
        </>
      )}
    </>
  );
};

export default Home;
