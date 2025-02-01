import Feature1 from "../assets/feature1.webp"
import Feature2 from "../assets/feature2.webp"
import Feature3 from "../assets/feature3.webp"

export const FeaturesData = [
  {
    link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    name: "Vitaminwater", 
    title: "imagine an even better looking vitaminwater. crazy, right?",
    description: "we’re getting a makeover and adding two fun flavors to the family. you’re gonna love it, so be the first to award your thirst.",
    button: "Learn More about the new flavors",
    image: Feature1
  },
  {
    link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    name: "Simply Gold Peak",
    title: "A new blend that’s simply gold.",
    description: "Part tea. Part fruit. All natural. Have you tried Simply Gold Peak yet?",
    button: "Try Now",
    image: Feature2
  },
  {
    link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    name: "Sustainable packaging",
    title: "Coca‑Cola® 20oz bottles are now made from 100% recycled plastic (excluding cap and label) nationwide.",
    description: "",
    button: "Click to read more",
    image: Feature3
  },

]