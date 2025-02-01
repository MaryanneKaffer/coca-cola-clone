import SmartWater from "../../assets/smartWater.webp";
import MinuteMaid from "../../assets/minuteMaid.webp";
import CokeDiet from "../../assets/cokeDiet.webp";
import CocaCola from "../../assets/cocaCola.webp";
import Sprite from "../../assets/sprite.webp";
import Fanta from "../../assets/fanta.webp";

export const Brand = [
  {
    link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    image: CocaCola,
    name: "Coca-Cola",
  },
  {
    link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    image: CokeDiet,
    name: "Coke Diet",
  },
  {
    link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    image: Sprite,
    name: "Sprite",
  },
  {
    link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    image: Fanta,
    name: "Fanta",
  },
  {
    link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    image: SmartWater,
    name: "Smart Water",
  },
  {
    link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    image: MinuteMaid,
    name: "Minute Maid",
  },
];