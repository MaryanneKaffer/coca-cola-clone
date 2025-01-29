interface HelpItem {
    name: string;
    link: string;
}

export const  HELP_DATA: HelpItem[] = [
    {
        name: "FAQs",
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    },
    {
        name: "Sitemap",
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    },
    {
        name: "Contact Us",
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    },
    {
        name: "Order Status",
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    },
    {
        name: "Shipping",
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    },
];

