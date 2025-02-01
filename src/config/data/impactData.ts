interface item {
    name: string;
    link: string;
}

export const ImpactData: item[] = [
    {
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
        name: "Social",
    },
    {
        link: import.meta.env.VITE_LINK_PORTFOLIO || "",
        name: "Sustainability",
    },
]