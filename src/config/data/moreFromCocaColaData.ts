import WorldOfCocaCola from '../../assets/worldOfCocaCola.webp';
import RefreshingFilms from '../../assets/refreshingFilms.webp';
import Vending from '../../assets/vending.webp';
import DrinkUp from '../../assets/drinkUp.webp';
import plusOneApp from '../../assets/+oneApp.webp';

export const MoreFromCocaCola = [
  {
    link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    image: plusOneApp,
    name: "plus One App image",
    title: "you plus +one",
    description: "Have you downlodaded it yet? The +one app brings the universe of Coca-Cola® into the palm of your hand. Start earning rewards today!",
    actionLink: "Download Now",
  },
  {
    link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    image: WorldOfCocaCola,
    name: "World Of CocaCola image",
    title: "Discover the World of Coca‑Cola",
    description: "Journey through the storied history of the iconic beverage brand, interact with a variety of exhibits, and sample beverages from around the world. Oh, and chill with the world's bubbliest polar bear.",
    actionLink: "Learn More about Coca-Cola",
  },
  {
    link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    image: RefreshingFilms,
    name: "Refreshing Films image",
    title: "Coca‑Cola Refreshing Films",
    description: "Coca‑Cola® Refreshing Films provides students the opportunity to create content for the big screen.",
    actionLink: "Check It Out",
  },
  {
    link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    image: Vending,
    name: "Vending image",
    title: "Coca‑Cola Vending",
    description: "Each time you make a purchase with your mobile wallet at select Coca‑Cola vending machines, you’ll be one step closer to earning a drink reward.",
    actionLink: "Starting Earning Today",
  },
  {
    link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    image: DrinkUp,
    name: "Drink Up image",
    title: "Drink up what we’ve dreamed up!",
    description: "Coca‑Cola Freestyle gives you the freedom to explore, pour, and enjoy your perfect drinks.",
    actionLink: "Explore and Pour",
  },
];