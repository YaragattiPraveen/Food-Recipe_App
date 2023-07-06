import SendApi from "../Utils/SendApi";
import EndPoint from "../Utils/Endpoint";

export function getHealtyRecipe() {
  return SendApi({
    url: EndPoint.byHealthyRecipe,
  });
}
