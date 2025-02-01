export interface DiscoverItem {
    title: string;
    link: string;
}

export const discoverData: DiscoverItem[] = [
    {
        title: "+one app",
        link: import.meta.env.VITE_LINK_PORTFOLIO || ""
    },
    {
        title: "World of Coca-Cola Attraction",
        link: import.meta.env.VITE_LINK_PORTFOLIO || ""
    },
    {
        title: "Offerings",
        link: import.meta.env.VITE_LINK_PORTFOLIO || ""
    }
];

export default discoverData;
