interface item {
    name: string;
    link: string;
}

export const Discover: item[] = [
    {
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
        name: "+one app",
    },
    {
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
        name: "World Of Coca-Cola Attraction",
    },
    {
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
        name: "Offerings",
    },
]

