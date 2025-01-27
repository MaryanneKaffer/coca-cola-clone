interface LegalItem {
    name: string;
    link: string;
}

export const LEGAL_DATA: LegalItem[] = [
    {
        name: "Company",
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    },
    {
        name: "Careers",
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    },
    {
        name: "Privacy Policy",
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    },
    {
        name: "Cookies Policy",
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    },
    {
        name: "All Promotion Official Rules",
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    },
    {
        name: "Notice At Collection",
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    },
    {
        name: "Do Not Sell or Share My Personal Information",
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    },
    {
        name: "Terms of Service",
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    },
    {
        name: "Cookie Settings",
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    },
    {
        name: "Consumer Health Data Privacy Policy",
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
    },
];